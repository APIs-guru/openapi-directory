# openapi-client
Welcome to the File Storage API.

You can use this API to access all File Storage API endpoints.

## Base URL

The base URL for all API requests is `https://unify.apideck.com`

## Headers

Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.

| Name                  | Type    | Required | Description                                                                                                                                                    |
| --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. |
| x-apideck-service-id  | String  | No       | Describe the service you want to call (e.g., pipedrive). Only needed when a customer has activated multiple integrations for the same Unified API.             |
| x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes.                                                                                                      |
| x-apideck-app-id      | String  | Yes      | The application id of your Unify application. Available at https://app.apideck.com/unify/api-keys.                                                             |
| Authorization         | String  | Yes      | Bearer API KEY                                                                                                                                                 |

## Authorization

You can interact with the API through the authorization methods below.

<!-- ReDoc-Inject: <security-definitions> -->

## Pagination

All API resources have support for bulk retrieval via list APIs.  Apideck uses cursor-based pagination via the optional `cursor` and `limit` parameters.

To fetch the first page of results, call the list API without a `cursor` parameter. Afterwards you can fetch subsequent pages by providing a cursor parameter. You will find the next cursor in the response body in `meta.cursors.next`. If `meta.cursors.next` is `null` you're at the end of the list.

In the REST API you can also use the `links` from the response for added convenience. Simply call the URL in `links.next` to get the next page of results.

### Query Parameters

| Name   | Type   | Required | Description                                                                                                        |
| ------ | ------ | -------- | ------------------------------------------------------------------------------------------------------------------ |
| cursor | String | No       | Cursor to start from. You can find cursors for next & previous pages in the meta.cursors property of the response. |
| limit  | Number | No       | Number of results to return. Minimum 1, Maximum 200, Default 20                                                    |

### Response Body

| Name                  | Type   | Description                                                        |
| --------------------- | ------ | ------------------------------------------------------------------ |
| meta.cursors.previous | String | Cursor to navigate to the previous page of results through the API |
| meta.cursors.current  | String | Cursor to navigate to the current page of results through the API  |
| meta.cursors.next     | String | Cursor to navigate to the next page of results through the API     |
| meta.items_on_page    | Number | Number of items returned in the data property of the response      |
| links.previous        | String | Link to navigate to the previous page of results through the API   |
| links.current         | String | Link to navigate to the current page of results through the API    |
| links.next            | String | Link to navigate to the next page of results through the API       |

⚠️ `meta.cursors.previous`/`links.previous` is not available for all connectors.

## SDKs and API Clients

We currently offer a [Node.js](https://developers.apideck.com/sdks/node), [PHP](https://developers.apideck.com/sdks/php) and [.NET](https://developers.apideck.com/sdks/dot-net) SDK.
Need another SDK? [Request the SDK of your choice](https://integrations.apideck.com/request).

## Debugging

Because of the nature of the abstraction we do in Apideck Unify we still provide the option to the receive raw requests and responses being handled underlying. By including the raw flag `?raw=true` in your requests you can still receive the full request. Please note that this increases the response size and can introduce extra latency.

## Errors

The API returns standard HTTP response codes to indicate success or failure of the API requests. For errors, we also return a customized error message inside the JSON response. You can see the returned HTTP status codes below.

| Code | Title                | Description                                                                                                                                                                                              |
| ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200  | OK                   | The request message has been successfully processed, and it has produced a response. The response message varies, depending on the request method and the requested data.                                |
| 201  | Created              | The request has been fulfilled and has resulted in one or more new resources being created.                                                                                                              |
| 204  | No Content           | The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.                                                                          |
| 400  | Bad Request          | The receiving server cannot understand the request because of malformed syntax. Do not repeat the request without first modifying it; check the request for errors, fix them and then retry the request. |
| 401  | Unauthorized         | The request has not been applied because it lacks valid authentication credentials for the target resource.                                                                                              |
| 402  | Payment Required     | Subscription data is incomplete or out of date. You'll need to provide payment details to continue.                                                                                                      |
| 403  | Forbidden            | You do not have the appropriate user rights to access the request. Do not repeat the request.                                                                                                            |
| 404  | Not Found            | The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.                                                                           |
| 409  | Conflict             | The request could not be completed due to a conflict with the current state of the target resource.                                                                                                      |
| 422  | Unprocessable Entity | The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.                                     |
| 429  | Too Many Requests    | You sent too many requests in a given amount of time (\"rate limit\"). Try again later                                                                                                                     |
| 5xx  | Server Errors        | Something went wrong with the Unify API. These errors are logged on our side. You can contact our team to resolve the issue.                                                                             |

### Handling errors

The Unify API and SDKs can produce errors for many reasons, such as a failed requests due to misconfigured integrations, invalid parameters, authentication errors, and network unavailability.

### Error Types

#### RequestValidationError

Request is not valid for the current endpoint. The response body will include details on the validation error. Check the spelling and types of your attributes, and ensure you are not passing data that is outside of the specification.

#### UnsupportedFiltersError

Filters in the request are valid, but not supported by the connector. Remove the unsupported filter(s) to get a successful response.

#### UnsupportedSortFieldError

Sort field (`sort[by]`) in the request is valid, but not supported by the connector. Replace or remove the sort field to get a successful response.

#### InvalidCursorError

Pagination cursor in the request is not valid for the current connector. Make sure to use a cursor returned from the API, for the same connector.

#### ConnectorExecutionError

A Unified API request made via one of our downstream connectors returned an unexpected error. The `status_code` returned is proxied through to error response along with their original response via the error detail.

#### UnauthorizedError

We were unable to authorize the request as made. This can happen for a number of reasons, from missing header params to passing an incorrect authorization token. Verify your Api Key is being set correctly in the authorization header. ie: `Authorization: 'Bearer sk_live_***'`

#### ConnectorCredentialsError

A request using a given connector has not been authorized. Ensure the connector you are trying to use has been configured correctly and been authorized for use.

#### ConnectorDisabledError

A request has been made to a connector that has since been disabled. This may be temporary - You can contact our team to resolve the issue.

#### ConnectorRateLimitError

You sent too many request to a connector. These rate limits vary from connector to connector. You will need to try again later.

#### RequestLimitError

You have reached the number of requests included in your Free Tier Subscription. You will no be able to make further requests until this limit resets at the end of the month, or talk to us about upgrading your subscription to continue immediately.

#### EntityNotFoundError

You've made a request for a resource or route that does not exist. Verify your path parameters or any identifiers used to fetch this resource.

#### OAuthCredentialsNotFoundError

When adding a connector integration that implements OAuth, both a `client_id` and `client_secret` must be provided before any authorizations can be performed. Verify the integration has been configured properly before continuing.

#### IntegrationNotFoundError

The requested connector integration could not be found associated to your `application_id`. Verify your `application_id` is correct, and that this connector has been added and configured for your application.

#### ConnectionNotFoundError

A valid connection could not be found associated to your `application_id`. Something _may_ have interrupted the authorization flow. You may need to start the connector authorization process again.

#### ConnectionSettingsError

The connector has required settings that were not supplied. Verify `connection.settings` contains all required settings for the connector to be callable.

#### ConnectorNotFoundError

A request was made for an unknown connector. Verify your `service_id` is spelled correctly, and that this connector is enabled for your provided `unified_api`.

#### OAuthRedirectUriError

A request was made either in a connector authorization flow, or attempting to revoke connector access without a valid `redirect_uri`. This is the url the user should be returned to on completion of process.

#### OAuthInvalidStateError

The state param is required and is used to ensure the outgoing authorization state has not been altered before the user is redirected back. It also contains required params needed to identify the connector being used. If this has been altered, the authorization will not succeed.

#### OAuthCodeExchangeError

When attempting to exchange the authorization code for an `access_token` during an OAuth flow, an error occurred. This may be temporary. You can reattempt authorization or contact our team to resolve the issue.

#### OAuthConnectorError

It seems something went wrong on the connector side. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### MappingError

There was an error attempting to retrieve the mapping for a given attribute. We've been notified and are working to fix this issue.

#### ConnectorMappingNotFoundError

It seems the implementation for this connector is incomplete. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### ConnectorResponseMappingNotFoundError

We were unable to retrieve the response mapping for this connector. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### ConnectorOperationMappingNotFoundError

Connector mapping has not been implemented for the requested operation. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### ConnectorWorkflowMappingError

The composite api calls required for this operation have not been mapped entirely. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

#### ConnectorOperationUnsupportedError

You're attempting a call that is not supported by the connector. It's likely this operation is supported by another connector, but we're unable to implement for this one.

#### PaginationNotSupportedError

Pagination is not yet supported for this connector, try removing limit and/or cursor from the query. It's possible this connector is in `beta` or still under development. We've been notified and are working to fix this issue.

## API Design

### API Styles and data formats

#### REST API

The API is organized around [REST](https://restfulapi.net/), providing simple and predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. JSON is returned by all API responses, including errors. In all API requests, you must set the content-type HTTP header to application/json. All API requests must be made over HTTPS. Calls made over HTTP will fail.

##### Available HTTP methods

The Apideck API uses HTTP verbs to understand if you want to read (GET), delete (DELETE) or create (POST) an object. When your web application cannot do a POST or DELETE, we provide the ability to set the method through the query parameter \\_method.

```
POST /messages
GET /messages
GET /messages/{messageId}
PATCH /messages/{messageId}
DELETE /messages/{messageId}
```

Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise. For some endpoints and use cases we divert from REST to provide a better developer experience.

### Schema

All API requests and response bodies adhere to a common JSON format representing individual items, collections of items, links to related items and additional meta data.

### Meta

Meta data can be represented as a top level member named “meta”. Any information may be provided in the meta data. It’s most common use is to return the total number of records when requesting a collection of resources.

### Idempotence (upcoming)

To prevent the creation of duplicate resources, every POST method (such as one that creates a consumer record) must specify a unique value for the X-Unique-Transaction-ID header name. Uniquely identifying each unique POST request ensures that the API processes a given request once and only once.

Uniquely identifying new resource-creation POSTs is especially important when the outcome of a response is ambiguous because of a transient service interruption, such as a server-side timeout or network disruption. If a service interruption occurs, then the client application can safely retry the uniquely identified request without creating duplicate operations. (API endpoints that guarantee that every uniquely identified request is processed only once no matter how many times that uniquely identifiable request is made are described as idempotent.)

### Request IDs

Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.

### Fixed field types

#### Dates

The dates returned by the API are all represented in UTC (ISO8601 format).

This example `2019-11-14T00:55:31.820Z` is defined by the ISO 8601 standard. The T in the middle separates the year-month-day portion from the hour-minute-second portion. The Z on the end means UTC, that is, an offset-from-UTC of zero hours-minutes-seconds. The Z is pronounced \"Zulu\" per military/aviation tradition.

The ISO 8601 standard is more modern. The formats are wisely designed to be easy to parse by machine as well as easy to read by humans across cultures.

#### Prices and Currencies

All prices returned by the API are represented as integer amounts in a currency’s smallest unit. For example, $5 USD would be returned as 500 (i.e, 500 cents).

For zero-decimal currencies, amounts will still be provided as an integer but without the need to divide by 100. For example, an amount of ¥5 (JPY) would be returned as 5.

All currency codes conform to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).

## Support

If you have problems or need help with your case, you can always reach out to our Support.



This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 10.0.0
- Package version: 1.0.0
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen
For more information, please visit [https://developers.apideck.com](https://developers.apideck.com)

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import openapi_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import openapi_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DriveGroupsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    drive_group = openapi_client.DriveGroup() # DriveGroup | 
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)

    try:
        # Create DriveGroup
        api_response = api_instance.drive_groups_add(x_apideck_consumer_id, x_apideck_app_id, drive_group, raw=raw, x_apideck_service_id=x_apideck_service_id)
        print("The response of DriveGroupsApi->drive_groups_add:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DriveGroupsApi->drive_groups_add: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://unify.apideck.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DriveGroupsApi* | [**drive_groups_add**](docs/DriveGroupsApi.md#drive_groups_add) | **POST** /file-storage/drive-groups | Create DriveGroup
*DriveGroupsApi* | [**drive_groups_all**](docs/DriveGroupsApi.md#drive_groups_all) | **GET** /file-storage/drive-groups | List DriveGroups
*DriveGroupsApi* | [**drive_groups_delete**](docs/DriveGroupsApi.md#drive_groups_delete) | **DELETE** /file-storage/drive-groups/{id} | Delete DriveGroup
*DriveGroupsApi* | [**drive_groups_one**](docs/DriveGroupsApi.md#drive_groups_one) | **GET** /file-storage/drive-groups/{id} | Get DriveGroup
*DriveGroupsApi* | [**drive_groups_update**](docs/DriveGroupsApi.md#drive_groups_update) | **PATCH** /file-storage/drive-groups/{id} | Update DriveGroup
*DrivesApi* | [**drives_add**](docs/DrivesApi.md#drives_add) | **POST** /file-storage/drives | Create Drive
*DrivesApi* | [**drives_all**](docs/DrivesApi.md#drives_all) | **GET** /file-storage/drives | List Drives
*DrivesApi* | [**drives_delete**](docs/DrivesApi.md#drives_delete) | **DELETE** /file-storage/drives/{id} | Delete Drive
*DrivesApi* | [**drives_one**](docs/DrivesApi.md#drives_one) | **GET** /file-storage/drives/{id} | Get Drive
*DrivesApi* | [**drives_update**](docs/DrivesApi.md#drives_update) | **PATCH** /file-storage/drives/{id} | Update Drive
*FilesApi* | [**files_all**](docs/FilesApi.md#files_all) | **GET** /file-storage/files | List Files
*FilesApi* | [**files_delete**](docs/FilesApi.md#files_delete) | **DELETE** /file-storage/files/{id} | Delete File
*FilesApi* | [**files_download**](docs/FilesApi.md#files_download) | **GET** /file-storage/files/{id}/download | Download File
*FilesApi* | [**files_export**](docs/FilesApi.md#files_export) | **GET** /file-storage/files/{id}/export | Export File
*FilesApi* | [**files_one**](docs/FilesApi.md#files_one) | **GET** /file-storage/files/{id} | Get File
*FilesApi* | [**files_search**](docs/FilesApi.md#files_search) | **POST** /file-storage/files/search | Search Files
*FilesApi* | [**files_update**](docs/FilesApi.md#files_update) | **PATCH** /file-storage/files/{id} | Rename or move File
*FilesApi* | [**files_upload**](docs/FilesApi.md#files_upload) | **POST** /file-storage/files | Upload file
*FoldersApi* | [**folders_add**](docs/FoldersApi.md#folders_add) | **POST** /file-storage/folders | Create Folder
*FoldersApi* | [**folders_copy**](docs/FoldersApi.md#folders_copy) | **POST** /file-storage/folders/{id}/copy | Copy Folder
*FoldersApi* | [**folders_delete**](docs/FoldersApi.md#folders_delete) | **DELETE** /file-storage/folders/{id} | Delete Folder
*FoldersApi* | [**folders_one**](docs/FoldersApi.md#folders_one) | **GET** /file-storage/folders/{id} | Get Folder
*FoldersApi* | [**folders_update**](docs/FoldersApi.md#folders_update) | **PATCH** /file-storage/folders/{id} | Rename or move Folder
*SharedLinksApi* | [**shared_links_add**](docs/SharedLinksApi.md#shared_links_add) | **POST** /file-storage/shared-links | Create Shared Link
*SharedLinksApi* | [**shared_links_all**](docs/SharedLinksApi.md#shared_links_all) | **GET** /file-storage/shared-links | List SharedLinks
*SharedLinksApi* | [**shared_links_delete**](docs/SharedLinksApi.md#shared_links_delete) | **DELETE** /file-storage/shared-links/{id} | Delete Shared Link
*SharedLinksApi* | [**shared_links_one**](docs/SharedLinksApi.md#shared_links_one) | **GET** /file-storage/shared-links/{id} | Get Shared Link
*SharedLinksApi* | [**shared_links_update**](docs/SharedLinksApi.md#shared_links_update) | **PATCH** /file-storage/shared-links/{id} | Update Shared Link
*UploadSessionsApi* | [**upload_sessions_add**](docs/UploadSessionsApi.md#upload_sessions_add) | **POST** /file-storage/upload-sessions | Start Upload Session
*UploadSessionsApi* | [**upload_sessions_delete**](docs/UploadSessionsApi.md#upload_sessions_delete) | **DELETE** /file-storage/upload-sessions/{id} | Abort Upload Session
*UploadSessionsApi* | [**upload_sessions_finish**](docs/UploadSessionsApi.md#upload_sessions_finish) | **POST** /file-storage/upload-sessions/{id}/finish | Finish Upload Session
*UploadSessionsApi* | [**upload_sessions_one**](docs/UploadSessionsApi.md#upload_sessions_one) | **GET** /file-storage/upload-sessions/{id} | Get Upload Session
*UploadSessionsApi* | [**upload_sessions_upload**](docs/UploadSessionsApi.md#upload_sessions_upload) | **PUT** /file-storage/upload-sessions/{id} | Upload part of File to Upload Session


## Documentation For Models

 - [BadRequestResponse](docs/BadRequestResponse.md)
 - [BadRequestResponseDetail](docs/BadRequestResponseDetail.md)
 - [CopyFolderRequest](docs/CopyFolderRequest.md)
 - [CreateDriveGroupResponse](docs/CreateDriveGroupResponse.md)
 - [CreateDriveResponse](docs/CreateDriveResponse.md)
 - [CreateFileRequest](docs/CreateFileRequest.md)
 - [CreateFileResponse](docs/CreateFileResponse.md)
 - [CreateFolderRequest](docs/CreateFolderRequest.md)
 - [CreateFolderResponse](docs/CreateFolderResponse.md)
 - [CreateSharedLinkResponse](docs/CreateSharedLinkResponse.md)
 - [CreateUploadSessionRequest](docs/CreateUploadSessionRequest.md)
 - [CreateUploadSessionResponse](docs/CreateUploadSessionResponse.md)
 - [DeleteDriveGroupResponse](docs/DeleteDriveGroupResponse.md)
 - [DeleteDriveResponse](docs/DeleteDriveResponse.md)
 - [DeleteFileResponse](docs/DeleteFileResponse.md)
 - [DeleteFolderResponse](docs/DeleteFolderResponse.md)
 - [DeleteSharedLinkResponse](docs/DeleteSharedLinkResponse.md)
 - [DeleteUploadSessionResponse](docs/DeleteUploadSessionResponse.md)
 - [Drive](docs/Drive.md)
 - [DriveGroup](docs/DriveGroup.md)
 - [DriveGroupsFilter](docs/DriveGroupsFilter.md)
 - [DrivesFilter](docs/DrivesFilter.md)
 - [FileStorageEventType](docs/FileStorageEventType.md)
 - [FileStorageWebhookEvent](docs/FileStorageWebhookEvent.md)
 - [FileType](docs/FileType.md)
 - [FilesFilter](docs/FilesFilter.md)
 - [FilesSearch](docs/FilesSearch.md)
 - [FilesSort](docs/FilesSort.md)
 - [Folder](docs/Folder.md)
 - [GetDriveGroupResponse](docs/GetDriveGroupResponse.md)
 - [GetDriveGroupsResponse](docs/GetDriveGroupsResponse.md)
 - [GetDriveResponse](docs/GetDriveResponse.md)
 - [GetDrivesResponse](docs/GetDrivesResponse.md)
 - [GetFileResponse](docs/GetFileResponse.md)
 - [GetFilesResponse](docs/GetFilesResponse.md)
 - [GetFolderResponse](docs/GetFolderResponse.md)
 - [GetFoldersResponse](docs/GetFoldersResponse.md)
 - [GetSharedLinkResponse](docs/GetSharedLinkResponse.md)
 - [GetSharedLinksResponse](docs/GetSharedLinksResponse.md)
 - [GetUploadSessionResponse](docs/GetUploadSessionResponse.md)
 - [LinkedFolder](docs/LinkedFolder.md)
 - [Links](docs/Links.md)
 - [Meta](docs/Meta.md)
 - [MetaCursors](docs/MetaCursors.md)
 - [NotFoundResponse](docs/NotFoundResponse.md)
 - [NotFoundResponseDetail](docs/NotFoundResponseDetail.md)
 - [NotImplementedResponse](docs/NotImplementedResponse.md)
 - [NotImplementedResponseDetail](docs/NotImplementedResponseDetail.md)
 - [Owner](docs/Owner.md)
 - [PassThroughQuery](docs/PassThroughQuery.md)
 - [PaymentRequiredResponse](docs/PaymentRequiredResponse.md)
 - [SharedLink](docs/SharedLink.md)
 - [SharedLinkTarget](docs/SharedLinkTarget.md)
 - [SortDirection](docs/SortDirection.md)
 - [TooManyRequestsResponse](docs/TooManyRequestsResponse.md)
 - [TooManyRequestsResponseDetail](docs/TooManyRequestsResponseDetail.md)
 - [UnauthorizedResponse](docs/UnauthorizedResponse.md)
 - [UnexpectedErrorResponse](docs/UnexpectedErrorResponse.md)
 - [UnexpectedErrorResponseDetail](docs/UnexpectedErrorResponseDetail.md)
 - [UnifiedFile](docs/UnifiedFile.md)
 - [UnifiedFilePermissions](docs/UnifiedFilePermissions.md)
 - [UnifiedId](docs/UnifiedId.md)
 - [UnprocessableResponse](docs/UnprocessableResponse.md)
 - [UpdateDriveGroupResponse](docs/UpdateDriveGroupResponse.md)
 - [UpdateDriveResponse](docs/UpdateDriveResponse.md)
 - [UpdateFileRequest](docs/UpdateFileRequest.md)
 - [UpdateFileResponse](docs/UpdateFileResponse.md)
 - [UpdateFolderRequest](docs/UpdateFolderRequest.md)
 - [UpdateFolderResponse](docs/UpdateFolderResponse.md)
 - [UpdateSharedLinkResponse](docs/UpdateSharedLinkResponse.md)
 - [UpdateUploadSessionResponse](docs/UpdateUploadSessionResponse.md)
 - [UploadSession](docs/UploadSession.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="apiKey"></a>
### apiKey

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Author

hello@apideck.com



# openapi-client
Welcome to the POS API.

You can use this API to access all POS API endpoints.

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
    api_instance = openapi_client.ItemsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    item = openapi_client.Item() # Item | 
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)

    try:
        # Create Item
        api_response = api_instance.items_add(x_apideck_consumer_id, x_apideck_app_id, item, raw=raw, x_apideck_service_id=x_apideck_service_id)
        print("The response of ItemsApi->items_add:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ItemsApi->items_add: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://unify.apideck.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ItemsApi* | [**items_add**](docs/ItemsApi.md#items_add) | **POST** /pos/items | Create Item
*ItemsApi* | [**items_all**](docs/ItemsApi.md#items_all) | **GET** /pos/items | List Items
*ItemsApi* | [**items_delete**](docs/ItemsApi.md#items_delete) | **DELETE** /pos/items/{id} | Delete Item
*ItemsApi* | [**items_one**](docs/ItemsApi.md#items_one) | **GET** /pos/items/{id} | Get Item
*ItemsApi* | [**items_update**](docs/ItemsApi.md#items_update) | **PATCH** /pos/items/{id} | Update Item
*LocationsApi* | [**locations_add**](docs/LocationsApi.md#locations_add) | **POST** /pos/locations | Create Location
*LocationsApi* | [**locations_all**](docs/LocationsApi.md#locations_all) | **GET** /pos/locations | List Locations
*LocationsApi* | [**locations_delete**](docs/LocationsApi.md#locations_delete) | **DELETE** /pos/locations/{id} | Delete Location
*LocationsApi* | [**locations_one**](docs/LocationsApi.md#locations_one) | **GET** /pos/locations/{id} | Get Location
*LocationsApi* | [**locations_update**](docs/LocationsApi.md#locations_update) | **PATCH** /pos/locations/{id} | Update Location
*MerchantsApi* | [**merchants_add**](docs/MerchantsApi.md#merchants_add) | **POST** /pos/merchants | Create Merchant
*MerchantsApi* | [**merchants_all**](docs/MerchantsApi.md#merchants_all) | **GET** /pos/merchants | List Merchants
*MerchantsApi* | [**merchants_delete**](docs/MerchantsApi.md#merchants_delete) | **DELETE** /pos/merchants/{id} | Delete Merchant
*MerchantsApi* | [**merchants_one**](docs/MerchantsApi.md#merchants_one) | **GET** /pos/merchants/{id} | Get Merchant
*MerchantsApi* | [**merchants_update**](docs/MerchantsApi.md#merchants_update) | **PATCH** /pos/merchants/{id} | Update Merchant
*ModifierGroupsApi* | [**modifier_groups_add**](docs/ModifierGroupsApi.md#modifier_groups_add) | **POST** /pos/modifier-groups | Create Modifier Group
*ModifierGroupsApi* | [**modifier_groups_all**](docs/ModifierGroupsApi.md#modifier_groups_all) | **GET** /pos/modifier-groups | List Modifier Groups
*ModifierGroupsApi* | [**modifier_groups_delete**](docs/ModifierGroupsApi.md#modifier_groups_delete) | **DELETE** /pos/modifier-groups/{id} | Delete Modifier Group
*ModifierGroupsApi* | [**modifier_groups_one**](docs/ModifierGroupsApi.md#modifier_groups_one) | **GET** /pos/modifier-groups/{id} | Get Modifier Group
*ModifierGroupsApi* | [**modifier_groups_update**](docs/ModifierGroupsApi.md#modifier_groups_update) | **PATCH** /pos/modifier-groups/{id} | Update Modifier Group
*ModifiersApi* | [**modifiers_add**](docs/ModifiersApi.md#modifiers_add) | **POST** /pos/modifiers | Create Modifier
*ModifiersApi* | [**modifiers_all**](docs/ModifiersApi.md#modifiers_all) | **GET** /pos/modifiers | List Modifiers
*ModifiersApi* | [**modifiers_delete**](docs/ModifiersApi.md#modifiers_delete) | **DELETE** /pos/modifiers/{id} | Delete Modifier
*ModifiersApi* | [**modifiers_one**](docs/ModifiersApi.md#modifiers_one) | **GET** /pos/modifiers/{id} | Get Modifier
*ModifiersApi* | [**modifiers_update**](docs/ModifiersApi.md#modifiers_update) | **PATCH** /pos/modifiers/{id} | Update Modifier
*OrderTypesApi* | [**order_types_add**](docs/OrderTypesApi.md#order_types_add) | **POST** /pos/order-types | Create Order Type
*OrderTypesApi* | [**order_types_all**](docs/OrderTypesApi.md#order_types_all) | **GET** /pos/order-types | List Order Types
*OrderTypesApi* | [**order_types_delete**](docs/OrderTypesApi.md#order_types_delete) | **DELETE** /pos/order-types/{id} | Delete Order Type
*OrderTypesApi* | [**order_types_one**](docs/OrderTypesApi.md#order_types_one) | **GET** /pos/order-types/{id} | Get Order Type
*OrderTypesApi* | [**order_types_update**](docs/OrderTypesApi.md#order_types_update) | **PATCH** /pos/order-types/{id} | Update Order Type
*OrdersApi* | [**orders_add**](docs/OrdersApi.md#orders_add) | **POST** /pos/orders | Create Order
*OrdersApi* | [**orders_all**](docs/OrdersApi.md#orders_all) | **GET** /pos/orders | List Orders
*OrdersApi* | [**orders_delete**](docs/OrdersApi.md#orders_delete) | **DELETE** /pos/orders/{id} | Delete Order
*OrdersApi* | [**orders_one**](docs/OrdersApi.md#orders_one) | **GET** /pos/orders/{id} | Get Order
*OrdersApi* | [**orders_pay**](docs/OrdersApi.md#orders_pay) | **POST** /pos/orders/{id}/pay | Pay Order
*OrdersApi* | [**orders_update**](docs/OrdersApi.md#orders_update) | **PATCH** /pos/orders/{id} | Update Order
*PaymentsApi* | [**payments_add**](docs/PaymentsApi.md#payments_add) | **POST** /pos/payments | Create Payment
*PaymentsApi* | [**payments_all**](docs/PaymentsApi.md#payments_all) | **GET** /pos/payments | List Payments
*PaymentsApi* | [**payments_delete**](docs/PaymentsApi.md#payments_delete) | **DELETE** /pos/payments/{id} | Delete Payment
*PaymentsApi* | [**payments_one**](docs/PaymentsApi.md#payments_one) | **GET** /pos/payments/{id} | Get Payment
*PaymentsApi* | [**payments_update**](docs/PaymentsApi.md#payments_update) | **PATCH** /pos/payments/{id} | Update Payment
*TendersApi* | [**tenders_add**](docs/TendersApi.md#tenders_add) | **POST** /pos/tenders | Create Tender
*TendersApi* | [**tenders_all**](docs/TendersApi.md#tenders_all) | **GET** /pos/tenders | List Tenders
*TendersApi* | [**tenders_delete**](docs/TendersApi.md#tenders_delete) | **DELETE** /pos/tenders/{id} | Delete Tender
*TendersApi* | [**tenders_one**](docs/TendersApi.md#tenders_one) | **GET** /pos/tenders/{id} | Get Tender
*TendersApi* | [**tenders_update**](docs/TendersApi.md#tenders_update) | **PATCH** /pos/tenders/{id} | Update Tender


## Documentation For Models

 - [Address](docs/Address.md)
 - [BadRequestResponse](docs/BadRequestResponse.md)
 - [BadRequestResponseDetail](docs/BadRequestResponseDetail.md)
 - [CashDetails](docs/CashDetails.md)
 - [CategoriesInner](docs/CategoriesInner.md)
 - [CreateItemResponse](docs/CreateItemResponse.md)
 - [CreateLocationResponse](docs/CreateLocationResponse.md)
 - [CreateMerchantResponse](docs/CreateMerchantResponse.md)
 - [CreateModifierGroupResponse](docs/CreateModifierGroupResponse.md)
 - [CreateModifierResponse](docs/CreateModifierResponse.md)
 - [CreateOrderResponse](docs/CreateOrderResponse.md)
 - [CreateOrderTypeResponse](docs/CreateOrderTypeResponse.md)
 - [CreatePosPaymentResponse](docs/CreatePosPaymentResponse.md)
 - [CreateTenderResponse](docs/CreateTenderResponse.md)
 - [Currency](docs/Currency.md)
 - [CustomField](docs/CustomField.md)
 - [CustomFieldValue](docs/CustomFieldValue.md)
 - [DeleteItemResponse](docs/DeleteItemResponse.md)
 - [DeleteLocationResponse](docs/DeleteLocationResponse.md)
 - [DeleteMerchantResponse](docs/DeleteMerchantResponse.md)
 - [DeleteModifierGroupResponse](docs/DeleteModifierGroupResponse.md)
 - [DeleteModifierResponse](docs/DeleteModifierResponse.md)
 - [DeleteOrderResponse](docs/DeleteOrderResponse.md)
 - [DeleteOrderTypeResponse](docs/DeleteOrderTypeResponse.md)
 - [DeletePosPaymentResponse](docs/DeletePosPaymentResponse.md)
 - [DeleteTenderResponse](docs/DeleteTenderResponse.md)
 - [Email](docs/Email.md)
 - [GetItemResponse](docs/GetItemResponse.md)
 - [GetItemsResponse](docs/GetItemsResponse.md)
 - [GetLocationResponse](docs/GetLocationResponse.md)
 - [GetLocationsResponse](docs/GetLocationsResponse.md)
 - [GetMerchantResponse](docs/GetMerchantResponse.md)
 - [GetMerchantsResponse](docs/GetMerchantsResponse.md)
 - [GetModifierGroupResponse](docs/GetModifierGroupResponse.md)
 - [GetModifierGroupsResponse](docs/GetModifierGroupsResponse.md)
 - [GetModifierResponse](docs/GetModifierResponse.md)
 - [GetModifiersResponse](docs/GetModifiersResponse.md)
 - [GetOrderResponse](docs/GetOrderResponse.md)
 - [GetOrderTypeResponse](docs/GetOrderTypeResponse.md)
 - [GetOrderTypesResponse](docs/GetOrderTypesResponse.md)
 - [GetOrdersResponse](docs/GetOrdersResponse.md)
 - [GetPosPaymentResponse](docs/GetPosPaymentResponse.md)
 - [GetPosPaymentsResponse](docs/GetPosPaymentsResponse.md)
 - [GetTenderResponse](docs/GetTenderResponse.md)
 - [GetTendersResponse](docs/GetTendersResponse.md)
 - [Item](docs/Item.md)
 - [ItemOptionsInner](docs/ItemOptionsInner.md)
 - [Links](docs/Links.md)
 - [Location](docs/Location.md)
 - [Merchant](docs/Merchant.md)
 - [Meta](docs/Meta.md)
 - [MetaCursors](docs/MetaCursors.md)
 - [Modifier](docs/Modifier.md)
 - [ModifierGroup](docs/ModifierGroup.md)
 - [ModifierGroupFilter](docs/ModifierGroupFilter.md)
 - [ModifierGroupModifiersInner](docs/ModifierGroupModifiersInner.md)
 - [NotFoundResponse](docs/NotFoundResponse.md)
 - [NotFoundResponseDetail](docs/NotFoundResponseDetail.md)
 - [NotImplementedResponse](docs/NotImplementedResponse.md)
 - [NotImplementedResponseDetail](docs/NotImplementedResponseDetail.md)
 - [Order](docs/Order.md)
 - [OrderCustomersInner](docs/OrderCustomersInner.md)
 - [OrderDiscountsInner](docs/OrderDiscountsInner.md)
 - [OrderFulfillmentsInner](docs/OrderFulfillmentsInner.md)
 - [OrderFulfillmentsInnerPickupDetails](docs/OrderFulfillmentsInnerPickupDetails.md)
 - [OrderFulfillmentsInnerPickupDetailsCurbsidePickupDetails](docs/OrderFulfillmentsInnerPickupDetailsCurbsidePickupDetails.md)
 - [OrderFulfillmentsInnerPickupDetailsRecipient](docs/OrderFulfillmentsInnerPickupDetailsRecipient.md)
 - [OrderLineItemsInner](docs/OrderLineItemsInner.md)
 - [OrderLineItemsInnerAppliedDiscountsInner](docs/OrderLineItemsInnerAppliedDiscountsInner.md)
 - [OrderLineItemsInnerAppliedTaxesInner](docs/OrderLineItemsInnerAppliedTaxesInner.md)
 - [OrderLineItemsInnerModifiersInner](docs/OrderLineItemsInnerModifiersInner.md)
 - [OrderPaymentsInner](docs/OrderPaymentsInner.md)
 - [OrderRefundsInner](docs/OrderRefundsInner.md)
 - [OrderTaxesInner](docs/OrderTaxesInner.md)
 - [OrderTendersInner](docs/OrderTendersInner.md)
 - [OrderType](docs/OrderType.md)
 - [PaymentCard](docs/PaymentCard.md)
 - [PaymentRequiredResponse](docs/PaymentRequiredResponse.md)
 - [PhoneNumber](docs/PhoneNumber.md)
 - [PosBankAccount](docs/PosBankAccount.md)
 - [PosBankAccountAchDetails](docs/PosBankAccountAchDetails.md)
 - [PosPayment](docs/PosPayment.md)
 - [PosPaymentCardDetails](docs/PosPaymentCardDetails.md)
 - [PosPaymentExternalDetails](docs/PosPaymentExternalDetails.md)
 - [PosPaymentProcessingFeesInner](docs/PosPaymentProcessingFeesInner.md)
 - [PosWebhookEvent](docs/PosWebhookEvent.md)
 - [ServiceCharge](docs/ServiceCharge.md)
 - [SocialLink](docs/SocialLink.md)
 - [Tender](docs/Tender.md)
 - [TooManyRequestsResponse](docs/TooManyRequestsResponse.md)
 - [TooManyRequestsResponseDetail](docs/TooManyRequestsResponseDetail.md)
 - [UnauthorizedResponse](docs/UnauthorizedResponse.md)
 - [UnexpectedErrorResponse](docs/UnexpectedErrorResponse.md)
 - [UnexpectedErrorResponseDetail](docs/UnexpectedErrorResponseDetail.md)
 - [UnifiedId](docs/UnifiedId.md)
 - [UnprocessableResponse](docs/UnprocessableResponse.md)
 - [UpdateItemResponse](docs/UpdateItemResponse.md)
 - [UpdateLocationResponse](docs/UpdateLocationResponse.md)
 - [UpdateMerchantResponse](docs/UpdateMerchantResponse.md)
 - [UpdateModifierGroupResponse](docs/UpdateModifierGroupResponse.md)
 - [UpdateModifierResponse](docs/UpdateModifierResponse.md)
 - [UpdateOrderResponse](docs/UpdateOrderResponse.md)
 - [UpdateOrderTypeResponse](docs/UpdateOrderTypeResponse.md)
 - [UpdatePosPaymentResponse](docs/UpdatePosPaymentResponse.md)
 - [UpdateTenderResponse](docs/UpdateTenderResponse.md)
 - [VariationsInner](docs/VariationsInner.md)
 - [VariationsInner1](docs/VariationsInner1.md)
 - [WalletDetails](docs/WalletDetails.md)
 - [Website](docs/Website.md)


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



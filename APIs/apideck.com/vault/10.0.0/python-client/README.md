# openapi-client
Welcome to the Vault API 👋

When you're looking to connect to an API, the first step is authentication.

Vault helps you handle OAuth flows, store API keys, and refresh access tokens from users (called consumers in Apideck).

## Base URL

The base URL for all API requests is `https://unify.apideck.com`

## Get Started

To use the Apideck APIs, you need to sign up for free at [https://app.apideck.com/signup](). Follow the steps below to get started.

- [Create a free account.](https://app.apideck.com/signup)
- Go to the [Dashboard](https://app.apideck.com/unify/unified-apis/dashboard).
- Get your API key and the application ID.
- Select and configure the integrations you want to make available to your users. Through the Unify dashboard, you can configure which connectors you want to support as integrations.
- Retrieve the client_id and client_secret for the integration you want to activate (Only needed for OAuth integrations).
- Soon, you can skip the previous step and use the Apideck sandbox credentials to get you started instead (upcoming)
- Register the redirect URI for the example app (https://unify.apideck.com/vault/callback) in the list of redirect URIs under your app's settings
- Use the [publishing guides](/app-listing-requirements) to get your integration listed across app marketplaces.

### Hosted Vault

Hosted Vault (vault.apideck.com) is a no-code solution, so you don't need to build your own UI to handle the integration settings and authentication.

![Hosted Vault - Integrations portal](https://github.com/apideck-samples/integration-settings/raw/master/public/img/vault.png)

Behind the scenes, Hosted Vault implements the Vault API endpoints and handles the following features for your customers:

- Add a connection
- Handle the OAuth flow
- Configure connection settings per integration
- Manage connections
- Discover and propose integration options
- Search for integrations (upcoming)
- Give integration suggestions based on provided metadata (email or website) when creating the session (upcoming)

To use Hosted Vault, you will need to first [**create a session**](https://developers.apideck.com/apis/vault/reference#operation/sessionsCreate). This can be achieved by making a POST request to the Vault API to create a valid session for a user, hereafter referred to as the consumer ID.

Example using curl:

```
curl -X POST https://unify.apideck.com/vault/sessions
    -H \"Content-Type: application/json\"
    -H \"Authorization: Bearer <your-api-key>\"
    -H \"X-APIDECK-CONSUMER-ID: <consumer-id>\"
    -H \"X-APIDECK-APP-ID: <application-id>\"
    -d '{\"consumer_metadata\": { \"account_name\" : \"Sample\", \"user_name\": \"Sand Box\", \"email\": \"sand@box.com\", \"image\": \"https://unavatar.now.sh/jake\" }, \"theme\": { \"vault_name\": \"Intercom\", \"primary_color\": \"#286efa\", \"sidepanel_background_color\": \"#286efa\",\"sidepanel_text_color\": \"#FFFFFF\", \"favicon\": \"https://res.cloudinary.com/apideck/icons/intercom\" }}'
```

### Vault API

_Beware, this is strategy takes more time to implement in comparison to Hosted Vault._

If you are building your integration settings UI manually, you can call the Vault API directly.

The Vault API is for those who want to completely white label the in-app integrations overview and authentication experience. All the available endpoints are listed below.

Through the API, your customers authenticate directly in your app, where Vault will still take care of redirecting to the auth provider and back to your app.

If you're already storing access tokens, we will help you migrate through our Vault Migration API (upcoming).

## Domain model

At its core, a domain model creates a web of interconnected entities.

Our domain model contains five main entity types: Consumer (user, account, team, machine), Application, Connector, Integration, and Connection.

## Connection state

The connection state is computed based on the connection flow below.

![](https://developers.apideck.com/api-references/vault/connection-flow.png)

More information about the connection state can be found in the [Connection state](https://developers.apideck.com/guides/connection-states) guide.

## Unify and Proxy integration

The only thing you need to use the Unify APIs and Proxy is the consumer id; thereafter, Vault will do the look-up in the background to handle the token injection before performing the API call(s).

## Headers

Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230) states header names are case insensitive.

| Name                  | Type    | Required | Description |
| --------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| x-apideck-app-id      | String  | Yes      | The id of your Unify application. Available at https://app.apideck.com/api-keys. |
| x-apideck-consumer-id | String  | Yes      | The id of the customer stored inside Apideck Vault. This can be a user id, account id, device id or whatever entity that can have integration within your app. |
| x-apideck-raw         | Boolean | No       | Include raw response. Mostly used for debugging purposes. |

## Guides

- [Get started with Apideck](https://developers.apideck.com/getting-started)
- [Get started with Vault](https://developers.apideck.com/guides/vault)
- [Authorize connection via Vault](https://developers.apideck.com/guides/authorize-connections)
- [Vault connection status](https://developers.apideck.com/guides/connection-states)
- [How to build an integrations UI with Vault](https://github.com/apideck-samples/integration-settings)


## FAQ

**What purpose does Vault serve? Can I just handle the authentication and access token myself?**
You can store everything yourself, but that defeats the purpose of using Apideck Unify. Handling tokens for multiple providers can quickly become very complex.

### Is my data secure?

Vault employs data minimization, therefore only requesting the minimum amount of scopes needed to perform an API request.

### How do I migrate existing data?

Using our migration API, you can migrate the access tokens and accounts to Apideck Vault.

### Can I use Vault in combination with existing integrations?

Yes, you can. The flexibility of Unify allows you to quickly the use cases you need while keeping a gradual migration path based on your timeline and requirements.

### How does Vault work for Apideck Ecosystem customers?

Once logged in, pick your ecosystem; on the left-hand side of the screen, you'll have the option to create an application underneath the Unify section.

### How to integrate Apideck Vault

This section covers everything you need to know to authenticate your customers through Vault.
Vault provides **three auth strategies** to use API tokens from your customers:

- Vault API
- Hosted Vault
- Vault Widget (JS, React, Vue)

You can also opt to bypass Vault and still take care of authentication flows yourself. Make sure to put the right safeguards in place to protect your customers' tokens and other sensitive data.

### What auth types does Vault support?

We support all the common authentication types, including: API keys, OAuth, Basic auth, and more.

#### API keys

For Services supporting the API key strategy, you can use Hosted Vault will need to provide an in-app form where users can configure their API keys provided by the integration service.

#### OAuth 2.0

##### Authorization Code Grant Type Flow

Vault handles the complete Authorization Code Grant Type Flow for you. This flow only supports browser-based (passive) authentication because most identity providers don't allow entering a username and password to be entered into applications that they don't own.

Certain connectors require an OAuth redirect authentication flow, where the end-user is redirected to the provider's website or mobile app to authenticate.

This is being handled by the `/authorize` endpoint.

#### Basic auth

Basic authentication is a simple authentication scheme built into the HTTP protocol. The required fields to complete basic auth are handled by Hosted Vault or by updating the connection through the Vault API below.



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
    api_instance = openapi_client.ConnectionsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    unified_api = 'crm' # str | Unified API
    service_id = 'pipedrive' # str | Service ID of the resource to return
    resource = 'leads' # str | Name of the resource (plural)

    try:
        # Get resource settings
        api_response = api_instance.connection_settings_all(x_apideck_consumer_id, x_apideck_app_id, unified_api, service_id, resource)
        print("The response of ConnectionsApi->connection_settings_all:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ConnectionsApi->connection_settings_all: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://unify.apideck.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ConnectionsApi* | [**connection_settings_all**](docs/ConnectionsApi.md#connection_settings_all) | **GET** /vault/connections/{unified_api}/{service_id}/{resource}/config | Get resource settings
*ConnectionsApi* | [**connection_settings_update**](docs/ConnectionsApi.md#connection_settings_update) | **PATCH** /vault/connections/{unified_api}/{service_id}/{resource}/config | Update settings
*ConnectionsApi* | [**connections_add**](docs/ConnectionsApi.md#connections_add) | **POST** /vault/connections/{unified_api}/{service_id} | Create connection
*ConnectionsApi* | [**connections_all**](docs/ConnectionsApi.md#connections_all) | **GET** /vault/connections | Get all connections
*ConnectionsApi* | [**connections_authorize**](docs/ConnectionsApi.md#connections_authorize) | **GET** /vault/authorize/{service_id}/{application_id} | Authorize
*ConnectionsApi* | [**connections_callback**](docs/ConnectionsApi.md#connections_callback) | **GET** /vault/callback | Callback
*ConnectionsApi* | [**connections_delete**](docs/ConnectionsApi.md#connections_delete) | **DELETE** /vault/connections/{unified_api}/{service_id} | Deletes a connection
*ConnectionsApi* | [**connections_import**](docs/ConnectionsApi.md#connections_import) | **POST** /vault/connections/{unified_api}/{service_id}/import | Import connection
*ConnectionsApi* | [**connections_one**](docs/ConnectionsApi.md#connections_one) | **GET** /vault/connections/{unified_api}/{service_id} | Get connection
*ConnectionsApi* | [**connections_revoke**](docs/ConnectionsApi.md#connections_revoke) | **GET** /vault/revoke/{service_id}/{application_id} | Revoke connection
*ConnectionsApi* | [**connections_token**](docs/ConnectionsApi.md#connections_token) | **POST** /vault/connections/{unified_api}/{service_id}/token | Get Access Token
*ConnectionsApi* | [**connections_update**](docs/ConnectionsApi.md#connections_update) | **PATCH** /vault/connections/{unified_api}/{service_id} | Update connection
*ConnectionsApi* | [**custom_fields_all**](docs/ConnectionsApi.md#custom_fields_all) | **GET** /vault/connections/{unified_api}/{service_id}/{resource}/custom-fields | Get resource custom fields
*ConsumersApi* | [**consumer_request_counts_all**](docs/ConsumersApi.md#consumer_request_counts_all) | **GET** /vault/consumers/{consumer_id}/stats | Consumer request counts
*ConsumersApi* | [**consumers_add**](docs/ConsumersApi.md#consumers_add) | **POST** /vault/consumers | Create consumer
*ConsumersApi* | [**consumers_all**](docs/ConsumersApi.md#consumers_all) | **GET** /vault/consumers | Get all consumers
*ConsumersApi* | [**consumers_delete**](docs/ConsumersApi.md#consumers_delete) | **DELETE** /vault/consumers/{consumer_id} | Delete consumer
*ConsumersApi* | [**consumers_one**](docs/ConsumersApi.md#consumers_one) | **GET** /vault/consumers/{consumer_id} | Get consumer
*ConsumersApi* | [**consumers_update**](docs/ConsumersApi.md#consumers_update) | **PATCH** /vault/consumers/{consumer_id} | Update consumer
*LogsApi* | [**logs_all**](docs/LogsApi.md#logs_all) | **GET** /vault/logs | Get all consumer request logs
*SessionsApi* | [**sessions_create**](docs/SessionsApi.md#sessions_create) | **POST** /vault/sessions | Create Session


## Documentation For Models

 - [AuthType](docs/AuthType.md)
 - [BadRequestResponse](docs/BadRequestResponse.md)
 - [BadRequestResponseDetail](docs/BadRequestResponseDetail.md)
 - [Connection](docs/Connection.md)
 - [ConnectionConfigurationInner](docs/ConnectionConfigurationInner.md)
 - [ConnectionConfigurationInnerDefaultsInner](docs/ConnectionConfigurationInnerDefaultsInner.md)
 - [ConnectionConfigurationInnerDefaultsInnerValue](docs/ConnectionConfigurationInnerDefaultsInnerValue.md)
 - [ConnectionConfigurationInnerDefaultsInnerValueAnyOfInner](docs/ConnectionConfigurationInnerDefaultsInnerValueAnyOfInner.md)
 - [ConnectionEvent](docs/ConnectionEvent.md)
 - [ConnectionImportData](docs/ConnectionImportData.md)
 - [ConnectionImportDataCredentials](docs/ConnectionImportDataCredentials.md)
 - [ConnectionMetadata](docs/ConnectionMetadata.md)
 - [ConnectionState](docs/ConnectionState.md)
 - [ConnectionWebhook](docs/ConnectionWebhook.md)
 - [Consumer](docs/Consumer.md)
 - [ConsumerConnection](docs/ConsumerConnection.md)
 - [ConsumerMetadata](docs/ConsumerMetadata.md)
 - [ConsumerRequestCountsInDateRangeResponse](docs/ConsumerRequestCountsInDateRangeResponse.md)
 - [ConsumerRequestCountsInDateRangeResponseData](docs/ConsumerRequestCountsInDateRangeResponseData.md)
 - [CreateConnectionResponse](docs/CreateConnectionResponse.md)
 - [CreateConsumerResponse](docs/CreateConsumerResponse.md)
 - [CreateCustomMappingRequest](docs/CreateCustomMappingRequest.md)
 - [CreateCustomMappingResponse](docs/CreateCustomMappingResponse.md)
 - [CreateSessionResponse](docs/CreateSessionResponse.md)
 - [CreateSessionResponseData](docs/CreateSessionResponseData.md)
 - [CustomFieldFinder](docs/CustomFieldFinder.md)
 - [CustomMapping](docs/CustomMapping.md)
 - [DeleteConsumerResponse](docs/DeleteConsumerResponse.md)
 - [DeleteConsumerResponseData](docs/DeleteConsumerResponseData.md)
 - [FormField](docs/FormField.md)
 - [FormFieldOption](docs/FormFieldOption.md)
 - [FormFieldOptionGroup](docs/FormFieldOptionGroup.md)
 - [GetConnectionResponse](docs/GetConnectionResponse.md)
 - [GetConnectionsResponse](docs/GetConnectionsResponse.md)
 - [GetConsumerResponse](docs/GetConsumerResponse.md)
 - [GetConsumersResponse](docs/GetConsumersResponse.md)
 - [GetConsumersResponseDataInner](docs/GetConsumersResponseDataInner.md)
 - [GetCustomFieldsResponse](docs/GetCustomFieldsResponse.md)
 - [GetCustomMappingResponse](docs/GetCustomMappingResponse.md)
 - [GetLogsResponse](docs/GetLogsResponse.md)
 - [GetResourceExampleResponse](docs/GetResourceExampleResponse.md)
 - [GetResourceSchemaResponse](docs/GetResourceSchemaResponse.md)
 - [IntegrationState](docs/IntegrationState.md)
 - [LinkedConnectorResource](docs/LinkedConnectorResource.md)
 - [Links](docs/Links.md)
 - [Log](docs/Log.md)
 - [LogOperation](docs/LogOperation.md)
 - [LogService](docs/LogService.md)
 - [LogsFilter](docs/LogsFilter.md)
 - [Meta](docs/Meta.md)
 - [MetaCursors](docs/MetaCursors.md)
 - [NotFoundResponse](docs/NotFoundResponse.md)
 - [NotFoundResponseDetail](docs/NotFoundResponseDetail.md)
 - [NotImplementedResponse](docs/NotImplementedResponse.md)
 - [NotImplementedResponseDetail](docs/NotImplementedResponseDetail.md)
 - [OAuthGrantType](docs/OAuthGrantType.md)
 - [PaymentRequiredResponse](docs/PaymentRequiredResponse.md)
 - [RequestCountAllocation](docs/RequestCountAllocation.md)
 - [ResourceExample](docs/ResourceExample.md)
 - [ResourceStatus](docs/ResourceStatus.md)
 - [Session](docs/Session.md)
 - [SessionSettings](docs/SessionSettings.md)
 - [SessionTheme](docs/SessionTheme.md)
 - [SimpleFormFieldOption](docs/SimpleFormFieldOption.md)
 - [SimpleFormFieldOptionValue](docs/SimpleFormFieldOptionValue.md)
 - [SimpleFormFieldOptionValueAnyOfInner](docs/SimpleFormFieldOptionValueAnyOfInner.md)
 - [UnauthorizedResponse](docs/UnauthorizedResponse.md)
 - [UnexpectedErrorResponse](docs/UnexpectedErrorResponse.md)
 - [UnexpectedErrorResponseDetail](docs/UnexpectedErrorResponseDetail.md)
 - [UnifiedApiId](docs/UnifiedApiId.md)
 - [UnprocessableResponse](docs/UnprocessableResponse.md)
 - [UpdateConnectionResponse](docs/UpdateConnectionResponse.md)
 - [UpdateConsumerRequest](docs/UpdateConsumerRequest.md)
 - [UpdateConsumerResponse](docs/UpdateConsumerResponse.md)
 - [UpdateCustomMappingRequest](docs/UpdateCustomMappingRequest.md)
 - [UpdateCustomMappingResponse](docs/UpdateCustomMappingResponse.md)
 - [VaultEventType](docs/VaultEventType.md)
 - [WebhookSubscription](docs/WebhookSubscription.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="apiKey"></a>
### apiKey

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

<a id="applicationId"></a>
### applicationId

- **Type**: API key
- **API key parameter name**: x-apideck-app-id
- **Location**: HTTP header


## Author

hello@apideck.com



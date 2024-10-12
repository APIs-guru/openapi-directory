# openapi_client.IntegrationsApi

All URIs are relative to *https://api.swaggerhub.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_integration**](IntegrationsApi.md#create_integration) | **POST** /apis/{owner}/{api}/{version}/integrations | Create an integration for the specified API and version
[**delete_integration**](IntegrationsApi.md#delete_integration) | **DELETE** /apis/{owner}/{api}/{version}/integrations/{integrationId} | Delete an integration
[**execute_integration**](IntegrationsApi.md#execute_integration) | **POST** /apis/{owner}/{api}/{version}/integrations/{integrationId}/execute | Run an integration
[**get_integration_by_id**](IntegrationsApi.md#get_integration_by_id) | **GET** /apis/{owner}/{api}/{version}/integrations/{integrationId} | Get integration settings
[**get_integrations**](IntegrationsApi.md#get_integrations) | **GET** /apis/{owner}/{api}/{version}/integrations | Get all integrations configured for the specified API version
[**patch_integration**](IntegrationsApi.md#patch_integration) | **PATCH** /apis/{owner}/{api}/{version}/integrations/{integrationId} | Partially update integration settings
[**update_integration**](IntegrationsApi.md#update_integration) | **PUT** /apis/{owner}/{api}/{version}/integrations/{integrationId} | Update integration settings


# **create_integration**
> IntegrationConfiguration create_integration(owner, api, version, integration_type_configuration)

Create an integration for the specified API and version

Use this operation to configure an integration for a specific API version. The integration type is determined by which object is provided in the request body (specifically, by the `configType` value).  For a list of fields that need to be provided in the request body, see the descriptions of the following objects in the \"Models\" section at the bottom of API docs:   * `AmazonApiGatewayIntegration`  * `AmazonApiGatewayLambdaIntegration`  * `ApigeeEdgeIntegration`  * `AutoMockingIntegration`  * `AzureApiManagementIntegration`  * `AzureDevopsServicesIntegration`  * `BitbucketCloudIntegration`  * `BitbucketServerIntegration`  * `GitHubIntegration`  * `GitHubEnterpriseIntegration`  * `GitLabIntegration`  * `IBMApiConnectIntegration`  * `WebhookIntegration`  **Notes:**   * The integration `name` must be unique among all integrations configured for the given API version.   * If `target` is the YAMl/JSON definition, you must specify the `outputFile`.   * If `syncMethod`=_Advanced Sync_, you must specify a non-empty list of either `providedPaths` or `managedPaths` (or both). If you are not sure which paths to use, use `providedPaths`=`[\"*\"]`.   * The operation does not validate the repository details and access tokens.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.integration_configuration import IntegrationConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    integration_type_configuration = None # object | Can be one of the following objects:  | `configType` value        | Object | | ------------------------- | ------ | | AMAZON_API_GATEWAY        | AmazonApiGatewayIntegration | | AMAZON_API_GATEWAY_LAMBDA | AmazonApiGatewayLambdaIntegration | | API_AUTO_MOCKING          | AutoMockingIntegration | | APIGEE_EDGE               | ApigeeEdgeIntegration | | AZURE_API_MANAGEMENT      | AzureApiManagementIntegration | | AZURE_DEVOPS_SERVICES     | AzureDevopsServicesIntegration | | BITBUCKET_CLOUD           | BitbucketCloudIntegration | | BITBUCKET_SERVER          | BitbucketServerIntegration | | GITHUB                    | GitHubIntegration | | GITHUB_ENTERPRISE         | GitHubEnterpriseIntegration | | GITLAB                    | GitLabIntegration | | IBM_API_CONNECT           | IBMApiConnectIntegration | | WEBHOOK                   | WebhookIntegration |  For more examples, see the JSON files in this repository: https://github.com/SmartBear/swaggerhub-cli/tree/master/examples/integrations

    try:
        # Create an integration for the specified API and version
        api_response = api_instance.create_integration(owner, api, version, integration_type_configuration)
        print("The response of IntegrationsApi->create_integration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->create_integration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **integration_type_configuration** | **object**| Can be one of the following objects:  | &#x60;configType&#x60; value        | Object | | ------------------------- | ------ | | AMAZON_API_GATEWAY        | AmazonApiGatewayIntegration | | AMAZON_API_GATEWAY_LAMBDA | AmazonApiGatewayLambdaIntegration | | API_AUTO_MOCKING          | AutoMockingIntegration | | APIGEE_EDGE               | ApigeeEdgeIntegration | | AZURE_API_MANAGEMENT      | AzureApiManagementIntegration | | AZURE_DEVOPS_SERVICES     | AzureDevopsServicesIntegration | | BITBUCKET_CLOUD           | BitbucketCloudIntegration | | BITBUCKET_SERVER          | BitbucketServerIntegration | | GITHUB                    | GitHubIntegration | | GITHUB_ENTERPRISE         | GitHubEnterpriseIntegration | | GITLAB                    | GitLabIntegration | | IBM_API_CONNECT           | IBMApiConnectIntegration | | WEBHOOK                   | WebhookIntegration |  For more examples, see the JSON files in this repository: https://github.com/SmartBear/swaggerhub-cli/tree/master/examples/integrations | 

### Return type

[**IntegrationConfiguration**](IntegrationConfiguration.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The integration was successfully created. The response contains the auto-generated ID of the created integration and its confguration (excluding the access tokens and passwords). |  -  |
**400** | The integration configuration was invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The authenticating user does not have permissions to create integrations in this API |  -  |
**404** | The specified owner, API, or version was not found |  -  |
**409** | An integration with this name already exists in this API |  -  |
**415** | Invalid content type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_integration**
> delete_integration(owner, api, version, integration_id)

Delete an integration

Delete an existing integration specified by its ID.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    integration_id = 'integration_id_example' # str | Integration ID (case-sensitive). To get the available integration IDs, use `GET /apis/{owner}/{api}/{version}/integrations`

    try:
        # Delete an integration
        api_instance.delete_integration(owner, api, version, integration_id)
    except Exception as e:
        print("Exception when calling IntegrationsApi->delete_integration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **integration_id** | **str**| Integration ID (case-sensitive). To get the available integration IDs, use &#x60;GET /apis/{owner}/{api}/{version}/integrations&#x60; | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The integration was successfully deleted |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The authenticating user does not have permissions to delete integrations from this API |  -  |
**404** | The specified owner, API, version, or integration ID was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **execute_integration**
> execute_integration(owner, api, version, integration_id, commit_message=commit_message)

Run an integration

Use this operation to trigger an existing integration.  Source control integrations push to (not pull from) the configured repository and branch. You can optionally provide a custom commit message.  **Note:** Webhooks cannot be triggered by this operation, they are only triggered when an API is saved or published. An attempt to trigger a webhook will return status code 400.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    integration_id = 'integration_id_example' # str | Integration ID (case-sensitive). To get the available integration IDs, use `GET /apis/{owner}/{api}/{version}/integrations`
    commit_message = 'commit_message_example' # str | Commit message for source control integrations (optional)

    try:
        # Run an integration
        api_instance.execute_integration(owner, api, version, integration_id, commit_message=commit_message)
    except Exception as e:
        print("Exception when calling IntegrationsApi->execute_integration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **integration_id** | **str**| Integration ID (case-sensitive). To get the available integration IDs, use &#x60;GET /apis/{owner}/{api}/{version}/integrations&#x60; | 
 **commit_message** | **str**| Commit message for source control integrations | [optional] 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The integration was executed successfully |  -  |
**205** | The integration was executed successfully and the API has been updated |  -  |
**400** | The integration encountered an error while executing. Check that the integration settings (such as access tokens) are valid. |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The authenticating user does not have access to integrations in this API |  -  |
**404** | The specified API or integration ID was not found |  -  |
**409** | The specified integration is disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_integration_by_id**
> IntegrationConfiguration get_integration_by_id(owner, api, version, integration_id)

Get integration settings

Returns the configuration of the specified integration. Access tokens and passwords are not returned for security reasons.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.integration_configuration import IntegrationConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    integration_id = 'integration_id_example' # str | Integration ID (case-sensitive). To get the available integration IDs, use `GET /apis/{owner}/{api}/{version}/integrations`

    try:
        # Get integration settings
        api_response = api_instance.get_integration_by_id(owner, api, version, integration_id)
        print("The response of IntegrationsApi->get_integration_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->get_integration_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **integration_id** | **str**| Integration ID (case-sensitive). To get the available integration IDs, use &#x60;GET /apis/{owner}/{api}/{version}/integrations&#x60; | 

### Return type

[**IntegrationConfiguration**](IntegrationConfiguration.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Can be one of the following objects: &#x60;AmazonApiGatewayIntegration&#x60;, &#x60;AmazonApiGatewayLambdaIntegration&#x60;, &#x60;ApigeeEdgeIntegration&#x60;, &#x60;AutoMockingIntegration&#x60;, &#x60;AzureApiManagementIntegration&#x60;, &#x60;AzureDevopsServicesIntegration&#x60;, &#x60;BitbucketCloudIntegration&#x60;, &#x60;BitbucketServerIntegration&#x60;, &#x60;GitHubIntegration&#x60;, &#x60;GitHubEnterpriseIntegration&#x60;, &#x60;GitLabIntegration&#x60;, &#x60;IBMApiConnectIntegration&#x60;, &#x60;WebhookIntegration&#x60;  |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The authenticating user does not have access to integrations in this API |  -  |
**404** | The specified owner, API, version, or integration ID was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_integrations**
> IntegrationConfigurations get_integrations(owner, api, version)

Get all integrations configured for the specified API version

The returned information includes integration types, names, unique IDs, and enabled/disabled status.  **Note:** The following integration types are currently not returned: Amazon API Gateway Lambda Sync, Apigee Edge, Azure API Management, IBM API Connect.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.models.integration_configurations import IntegrationConfigurations
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier

    try:
        # Get all integrations configured for the specified API version
        api_response = api_instance.get_integrations(owner, api, version)
        print("The response of IntegrationsApi->get_integrations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->get_integrations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 

### Return type

[**IntegrationConfigurations**](IntegrationConfigurations.md)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An object that contains information about the configured integrations |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The authenticating user does not have access to integrations in this API |  -  |
**404** | The specified API or version was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_integration**
> patch_integration(owner, api, version, integration_id, integration_type_configuration)

Partially update integration settings

Use this operation to partially update integration settings for the specified API and integration ID. For example, enable or disable an integration, or specify a new access token.  Only the fields provided in the request body will be updated; other settings will remain unchanged. For a list of fields that can be updated, see the following objects in the \"Models\" section at the bottom of API docs:   * `AmazonApiGatewayIntegration`  * `AmazonApiGatewayLambdaIntegration`  * `ApigeeEdgeIntegration`  * `AutoMockingIntegration`  * `AzureApiManagementIntegration`  * `AzureDevopsServicesIntegration`  * `BitbucketCloudIntegration`  * `BitbucketServerIntegration`  * `GitHubIntegration`  * `GitHubEnterpriseIntegration`  * `GitLabIntegration`  * `IBMApiConnectIntegration`  * `WebhookIntegration`  **Notes:**   * `configType` (integration type) cannot be changed.   * If updating the integration `name`, make sure the new name is unique among all integrations configured for the given API version.   * If you change `target` to the YAMl/JSON definition, you must also specify the `outputFile`.   * If you change `syncMethod` to _Advanced Sync_, you must also specify a non-empty list of either `providedPaths` or `managedPaths` (or both). If you are not sure which paths to use, use `providedPaths`=`[\"*\"]`.   * The update operation does not validate the repository details and access tokens.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    integration_id = 'integration_id_example' # str | Integration ID (case-sensitive). To get the available integration IDs, use `GET /apis/{owner}/{api}/{version}/integrations`
    integration_type_configuration = None # object | An object that contains the integration parameters you want to update

    try:
        # Partially update integration settings
        api_instance.patch_integration(owner, api, version, integration_id, integration_type_configuration)
    except Exception as e:
        print("Exception when calling IntegrationsApi->patch_integration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **integration_id** | **str**| Integration ID (case-sensitive). To get the available integration IDs, use &#x60;GET /apis/{owner}/{api}/{version}/integrations&#x60; | 
 **integration_type_configuration** | **object**| An object that contains the integration parameters you want to update | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Integration was successfully updated |  -  |
**400** | The specified integration configuration is invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The authenticating user does not have access to integrations in this API |  -  |
**404** | The specified owner, API, version, or integration ID was not found |  -  |
**415** | Invalid content type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_integration**
> update_integration(owner, api, version, integration_id, integration_type_configuration)

Update integration settings

Updates integration settings for the specified API and integration ID. The integration type is determined by which object is passed in the request body.  The request body must contain a **full representation** of an integration object. If you want to update just a few parameters, use the PATCH operation instead.  For a list of fields that need to be provided in the request body, see the descriptions of the following objects in the \"Models\" section at the bottom of API docs:   * `AmazonApiGatewayIntegration`  * `AmazonApiGatewayLambdaIntegration`  * `ApigeeEdgeIntegration`  * `AutoMockingIntegration`  * `AzureApiManagementIntegration`  * `AzureDevopsServicesIntegration`  * `BitbucketCloudIntegration`  * `BitbucketServerIntegration`  * `GitHubIntegration`  * `GitHubEnterpriseIntegration`  * `GitLabIntegration`  * `IBMApiConnectIntegration`  * `WebhookIntegration`  **Notes:**   * The integration `name` must be unique among all integrations configured for the given API version.   * If `target` is the YAMl/JSON definition, you must specify the `outputFile`.   * If `syncMethod`=_Advanced Sync_, you must specify a non-empty list of either `providedPaths` or `managedPaths` (or both). If you are not sure which paths to use, use `providedPaths`=`[\"*\"]`.   * The operation does not validate the repository details and access tokens.

### Example

* Api Key Authentication (TokenSecured):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.swaggerhub.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.swaggerhub.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: TokenSecured
configuration.api_key['TokenSecured'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['TokenSecured'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationsApi(api_client)
    owner = 'owner_example' # str | API owner (organization or user, case-sensitive)
    api = 'api_example' # str | API name (case-sensitive)
    version = 'version_example' # str | Version identifier
    integration_id = 'integration_id_example' # str | Integration ID (case-sensitive). To get the available integration IDs, use `GET /apis/{owner}/{api}/{version}/integrations`
    integration_type_configuration = None # object | Can be one of the following objects:  | `configType` value        | Object | | ------------------------- | ------ | | AMAZON_API_GATEWAY        | AmazonApiGatewayIntegration | | AMAZON_API_GATEWAY_LAMBDA | AmazonApiGatewayLambdaIntegration | | API_AUTO_MOCKING          | AutoMockingIntegration | | APIGEE_EDGE               | ApigeeEdgeIntegration | | AZURE_API_MANAGEMENT      | AzureApiManagementIntegration | | AZURE_DEVOPS_SERVICES     | AzureDevopsServicesIntegration | | BITBUCKET_CLOUD           | BitbucketCloudIntegration | | BITBUCKET_SERVER          | BitbucketServerIntegration | | GITHUB                    | GitHubIntegration | | GITHUB_ENTERPRISE         | GitHubEnterpriseIntegration | | GITLAB                    | GitLabIntegration | | IBM_API_CONNECT           | IBMApiConnectIntegration | | WEBHOOK                   | WebhookIntegration |  For more examples, see the JSON files in this repository: https://github.com/SmartBear/swaggerhub-cli/tree/master/examples/integrations

    try:
        # Update integration settings
        api_instance.update_integration(owner, api, version, integration_id, integration_type_configuration)
    except Exception as e:
        print("Exception when calling IntegrationsApi->update_integration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner (organization or user, case-sensitive) | 
 **api** | **str**| API name (case-sensitive) | 
 **version** | **str**| Version identifier | 
 **integration_id** | **str**| Integration ID (case-sensitive). To get the available integration IDs, use &#x60;GET /apis/{owner}/{api}/{version}/integrations&#x60; | 
 **integration_type_configuration** | **object**| Can be one of the following objects:  | &#x60;configType&#x60; value        | Object | | ------------------------- | ------ | | AMAZON_API_GATEWAY        | AmazonApiGatewayIntegration | | AMAZON_API_GATEWAY_LAMBDA | AmazonApiGatewayLambdaIntegration | | API_AUTO_MOCKING          | AutoMockingIntegration | | APIGEE_EDGE               | ApigeeEdgeIntegration | | AZURE_API_MANAGEMENT      | AzureApiManagementIntegration | | AZURE_DEVOPS_SERVICES     | AzureDevopsServicesIntegration | | BITBUCKET_CLOUD           | BitbucketCloudIntegration | | BITBUCKET_SERVER          | BitbucketServerIntegration | | GITHUB                    | GitHubIntegration | | GITHUB_ENTERPRISE         | GitHubEnterpriseIntegration | | GITLAB                    | GitLabIntegration | | IBM_API_CONNECT           | IBMApiConnectIntegration | | WEBHOOK                   | WebhookIntegration |  For more examples, see the JSON files in this repository: https://github.com/SmartBear/swaggerhub-cli/tree/master/examples/integrations | 

### Return type

void (empty response body)

### Authorization

[TokenSecured](../README.md#TokenSecured)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Integration was successfully updated |  -  |
**400** | The specified integration configuration is invalid |  -  |
**401** | Access token is not set or invalid |  -  |
**403** | The authenticating user does not have access to integrations in this API |  -  |
**404** | The specified combination of owner, API, version, integrationId, and configType was not found |  -  |
**415** | Invalid content type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


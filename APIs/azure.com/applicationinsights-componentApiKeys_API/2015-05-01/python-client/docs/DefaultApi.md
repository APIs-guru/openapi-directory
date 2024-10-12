# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**a_pi_keys_create**](DefaultApi.md#a_pi_keys_create) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ApiKeys | 
[**a_pi_keys_delete**](DefaultApi.md#a_pi_keys_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/APIKeys/{keyId} | 
[**a_pi_keys_get**](DefaultApi.md#a_pi_keys_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/APIKeys/{keyId} | 
[**a_pi_keys_list**](DefaultApi.md#a_pi_keys_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ApiKeys | 


# **a_pi_keys_create**
> ApplicationInsightsComponentAPIKey a_pi_keys_create(resource_group_name, api_version, subscription_id, resource_name, api_key_properties)



Create an API Key of an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.api_key_request import APIKeyRequest
from openapi_client.models.application_insights_component_api_key import ApplicationInsightsComponentAPIKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    api_key_properties = openapi_client.APIKeyRequest() # APIKeyRequest | Properties that need to be specified to create an API key of a Application Insights component.

    try:
        api_response = api_instance.a_pi_keys_create(resource_group_name, api_version, subscription_id, resource_name, api_key_properties)
        print("The response of DefaultApi->a_pi_keys_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->a_pi_keys_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **api_key_properties** | [**APIKeyRequest**](APIKeyRequest.md)| Properties that need to be specified to create an API key of a Application Insights component. | 

### Return type

[**ApplicationInsightsComponentAPIKey**](ApplicationInsightsComponentAPIKey.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An object containing the API Key definition created by this POST call. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a_pi_keys_delete**
> ApplicationInsightsComponentAPIKey a_pi_keys_delete(resource_group_name, api_version, subscription_id, resource_name, key_id)



Delete an API Key of an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_api_key import ApplicationInsightsComponentAPIKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    key_id = 'key_id_example' # str | The API Key ID. This is unique within a Application Insights component.

    try:
        api_response = api_instance.a_pi_keys_delete(resource_group_name, api_version, subscription_id, resource_name, key_id)
        print("The response of DefaultApi->a_pi_keys_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->a_pi_keys_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **key_id** | **str**| The API Key ID. This is unique within a Application Insights component. | 

### Return type

[**ApplicationInsightsComponentAPIKey**](ApplicationInsightsComponentAPIKey.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The API Key that was successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a_pi_keys_get**
> ApplicationInsightsComponentAPIKey a_pi_keys_get(resource_group_name, api_version, subscription_id, resource_name, key_id)



Get the API Key for this key id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_api_key import ApplicationInsightsComponentAPIKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    key_id = 'key_id_example' # str | The API Key ID. This is unique within a Application Insights component.

    try:
        api_response = api_instance.a_pi_keys_get(resource_group_name, api_version, subscription_id, resource_name, key_id)
        print("The response of DefaultApi->a_pi_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->a_pi_keys_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **key_id** | **str**| The API Key ID. This is unique within a Application Insights component. | 

### Return type

[**ApplicationInsightsComponentAPIKey**](ApplicationInsightsComponentAPIKey.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The API Key for this key id. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a_pi_keys_list**
> ApplicationInsightsComponentAPIKeyListResult a_pi_keys_list(resource_group_name, api_version, subscription_id, resource_name)



Gets a list of API keys of an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_api_key_list_result import ApplicationInsightsComponentAPIKeyListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.

    try:
        api_response = api_instance.a_pi_keys_list(resource_group_name, api_version, subscription_id, resource_name)
        print("The response of DefaultApi->a_pi_keys_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->a_pi_keys_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 

### Return type

[**ApplicationInsightsComponentAPIKeyListResult**](ApplicationInsightsComponentAPIKeyListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more API key definitions of an Application Insights component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


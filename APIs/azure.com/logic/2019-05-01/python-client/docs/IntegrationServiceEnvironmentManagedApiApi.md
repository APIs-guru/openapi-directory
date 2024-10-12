# openapi_client.IntegrationServiceEnvironmentManagedApiApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_service_environment_managed_apis_delete**](IntegrationServiceEnvironmentManagedApiApi.md#integration_service_environment_managed_apis_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis/{apiName} | 
[**integration_service_environment_managed_apis_get**](IntegrationServiceEnvironmentManagedApiApi.md#integration_service_environment_managed_apis_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis/{apiName} | 
[**integration_service_environment_managed_apis_put**](IntegrationServiceEnvironmentManagedApiApi.md#integration_service_environment_managed_apis_put) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName}/managedApis/{apiName} | 


# **integration_service_environment_managed_apis_delete**
> integration_service_environment_managed_apis_delete(subscription_id, resource_group, integration_service_environment_name, api_name, api_version)



Deletes the integration service environment managed Api.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.IntegrationServiceEnvironmentManagedApiApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group = 'resource_group_example' # str | The resource group.
    integration_service_environment_name = 'integration_service_environment_name_example' # str | The integration service environment name.
    api_name = 'api_name_example' # str | The api name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_service_environment_managed_apis_delete(subscription_id, resource_group, integration_service_environment_name, api_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationServiceEnvironmentManagedApiApi->integration_service_environment_managed_apis_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group** | **str**| The resource group. | 
 **integration_service_environment_name** | **str**| The integration service environment name. | 
 **api_name** | **str**| The api name. | 
 **api_version** | **str**| The API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**204** | No Content |  -  |
**0** | Logic error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_service_environment_managed_apis_get**
> ManagedApi integration_service_environment_managed_apis_get(subscription_id, resource_group, integration_service_environment_name, api_name, api_version)



Gets the integration service environment managed Api.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_api import ManagedApi
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
    api_instance = openapi_client.IntegrationServiceEnvironmentManagedApiApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group = 'resource_group_example' # str | The resource group name.
    integration_service_environment_name = 'integration_service_environment_name_example' # str | The integration service environment name.
    api_name = 'api_name_example' # str | The api name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_service_environment_managed_apis_get(subscription_id, resource_group, integration_service_environment_name, api_name, api_version)
        print("The response of IntegrationServiceEnvironmentManagedApiApi->integration_service_environment_managed_apis_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationServiceEnvironmentManagedApiApi->integration_service_environment_managed_apis_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group** | **str**| The resource group name. | 
 **integration_service_environment_name** | **str**| The integration service environment name. | 
 **api_name** | **str**| The api name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**ManagedApi**](ManagedApi.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Logic error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_service_environment_managed_apis_put**
> ManagedApi integration_service_environment_managed_apis_put(subscription_id, resource_group, integration_service_environment_name, api_name, api_version)



Puts the integration service environment managed Api.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_api import ManagedApi
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
    api_instance = openapi_client.IntegrationServiceEnvironmentManagedApiApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group = 'resource_group_example' # str | The resource group name.
    integration_service_environment_name = 'integration_service_environment_name_example' # str | The integration service environment name.
    api_name = 'api_name_example' # str | The api name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_service_environment_managed_apis_put(subscription_id, resource_group, integration_service_environment_name, api_name, api_version)
        print("The response of IntegrationServiceEnvironmentManagedApiApi->integration_service_environment_managed_apis_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationServiceEnvironmentManagedApiApi->integration_service_environment_managed_apis_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group** | **str**| The resource group name. | 
 **integration_service_environment_name** | **str**| The integration service environment name. | 
 **api_name** | **str**| The api name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**ManagedApi**](ManagedApi.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Logic error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


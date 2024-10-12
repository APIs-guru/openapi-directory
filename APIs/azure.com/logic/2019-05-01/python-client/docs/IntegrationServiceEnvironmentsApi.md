# openapi_client.IntegrationServiceEnvironmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_service_environments_create_or_update**](IntegrationServiceEnvironmentsApi.md#integration_service_environments_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName} | 
[**integration_service_environments_delete**](IntegrationServiceEnvironmentsApi.md#integration_service_environments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName} | 
[**integration_service_environments_get**](IntegrationServiceEnvironmentsApi.md#integration_service_environments_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName} | 
[**integration_service_environments_list_by_resource_group**](IntegrationServiceEnvironmentsApi.md#integration_service_environments_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments | 
[**integration_service_environments_update**](IntegrationServiceEnvironmentsApi.md#integration_service_environments_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Logic/integrationServiceEnvironments/{integrationServiceEnvironmentName} | 


# **integration_service_environments_create_or_update**
> IntegrationServiceEnvironment integration_service_environments_create_or_update(subscription_id, resource_group, integration_service_environment_name, api_version, integration_service_environment)



Creates or updates an integration service environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_service_environment import IntegrationServiceEnvironment
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
    api_instance = openapi_client.IntegrationServiceEnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group = 'resource_group_example' # str | The resource group.
    integration_service_environment_name = 'integration_service_environment_name_example' # str | The integration service environment name.
    api_version = 'api_version_example' # str | The API version.
    integration_service_environment = openapi_client.IntegrationServiceEnvironment() # IntegrationServiceEnvironment | The integration service environment.

    try:
        api_response = api_instance.integration_service_environments_create_or_update(subscription_id, resource_group, integration_service_environment_name, api_version, integration_service_environment)
        print("The response of IntegrationServiceEnvironmentsApi->integration_service_environments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationServiceEnvironmentsApi->integration_service_environments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group** | **str**| The resource group. | 
 **integration_service_environment_name** | **str**| The integration service environment name. | 
 **api_version** | **str**| The API version. | 
 **integration_service_environment** | [**IntegrationServiceEnvironment**](IntegrationServiceEnvironment.md)| The integration service environment. | 

### Return type

[**IntegrationServiceEnvironment**](IntegrationServiceEnvironment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Logic error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_service_environments_delete**
> integration_service_environments_delete(subscription_id, resource_group, integration_service_environment_name, api_version)



Deletes an integration service environment.

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
    api_instance = openapi_client.IntegrationServiceEnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group = 'resource_group_example' # str | The resource group.
    integration_service_environment_name = 'integration_service_environment_name_example' # str | The integration service environment name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_service_environments_delete(subscription_id, resource_group, integration_service_environment_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationServiceEnvironmentsApi->integration_service_environments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group** | **str**| The resource group. | 
 **integration_service_environment_name** | **str**| The integration service environment name. | 
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
**200** | OK |  -  |
**204** | No Content |  -  |
**0** | Logic error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_service_environments_get**
> IntegrationServiceEnvironment integration_service_environments_get(subscription_id, resource_group, integration_service_environment_name, api_version)



Gets an integration service environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_service_environment import IntegrationServiceEnvironment
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
    api_instance = openapi_client.IntegrationServiceEnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group = 'resource_group_example' # str | The resource group.
    integration_service_environment_name = 'integration_service_environment_name_example' # str | The integration service environment name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_service_environments_get(subscription_id, resource_group, integration_service_environment_name, api_version)
        print("The response of IntegrationServiceEnvironmentsApi->integration_service_environments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationServiceEnvironmentsApi->integration_service_environments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group** | **str**| The resource group. | 
 **integration_service_environment_name** | **str**| The integration service environment name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationServiceEnvironment**](IntegrationServiceEnvironment.md)

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

# **integration_service_environments_list_by_resource_group**
> IntegrationServiceEnvironmentListResult integration_service_environments_list_by_resource_group(subscription_id, resource_group, api_version, top=top)



Gets a list of integration service environments by resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_service_environment_list_result import IntegrationServiceEnvironmentListResult
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
    api_instance = openapi_client.IntegrationServiceEnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group = 'resource_group_example' # str | The resource group.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)

    try:
        api_response = api_instance.integration_service_environments_list_by_resource_group(subscription_id, resource_group, api_version, top=top)
        print("The response of IntegrationServiceEnvironmentsApi->integration_service_environments_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationServiceEnvironmentsApi->integration_service_environments_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group** | **str**| The resource group. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 

### Return type

[**IntegrationServiceEnvironmentListResult**](IntegrationServiceEnvironmentListResult.md)

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

# **integration_service_environments_update**
> IntegrationServiceEnvironment integration_service_environments_update(subscription_id, resource_group, integration_service_environment_name, api_version, integration_service_environment)



Updates an integration service environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_service_environment import IntegrationServiceEnvironment
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
    api_instance = openapi_client.IntegrationServiceEnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group = 'resource_group_example' # str | The resource group.
    integration_service_environment_name = 'integration_service_environment_name_example' # str | The integration service environment name.
    api_version = 'api_version_example' # str | The API version.
    integration_service_environment = openapi_client.IntegrationServiceEnvironment() # IntegrationServiceEnvironment | The integration service environment.

    try:
        api_response = api_instance.integration_service_environments_update(subscription_id, resource_group, integration_service_environment_name, api_version, integration_service_environment)
        print("The response of IntegrationServiceEnvironmentsApi->integration_service_environments_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationServiceEnvironmentsApi->integration_service_environments_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group** | **str**| The resource group. | 
 **integration_service_environment_name** | **str**| The integration service environment name. | 
 **api_version** | **str**| The API version. | 
 **integration_service_environment** | [**IntegrationServiceEnvironment**](IntegrationServiceEnvironment.md)| The integration service environment. | 

### Return type

[**IntegrationServiceEnvironment**](IntegrationServiceEnvironment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Logic error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


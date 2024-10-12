# openapi_client.IoTSecuritySolutionAnalyticsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iot_security_solution_analytics_get**](IoTSecuritySolutionAnalyticsApi.md#iot_security_solution_analytics_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default | 
[**iot_security_solution_analytics_list**](IoTSecuritySolutionAnalyticsApi.md#iot_security_solution_analytics_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels | 


# **iot_security_solution_analytics_get**
> IoTSecuritySolutionAnalyticsModel iot_security_solution_analytics_get(api_version, subscription_id, resource_group_name, solution_name)



Use this method to get IoT Security Analytics metrics.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_solution_analytics_model import IoTSecuritySolutionAnalyticsModel
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
    api_instance = openapi_client.IoTSecuritySolutionAnalyticsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The name of the IoT Security solution.

    try:
        api_response = api_instance.iot_security_solution_analytics_get(api_version, subscription_id, resource_group_name, solution_name)
        print("The response of IoTSecuritySolutionAnalyticsApi->iot_security_solution_analytics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionAnalyticsApi->iot_security_solution_analytics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The name of the IoT Security solution. | 

### Return type

[**IoTSecuritySolutionAnalyticsModel**](IoTSecuritySolutionAnalyticsModel.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_security_solution_analytics_list**
> IoTSecuritySolutionAnalyticsModelList iot_security_solution_analytics_list(api_version, subscription_id, resource_group_name, solution_name)



Use this method to get IoT security Analytics metrics in an array.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_solution_analytics_model_list import IoTSecuritySolutionAnalyticsModelList
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
    api_instance = openapi_client.IoTSecuritySolutionAnalyticsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The name of the IoT Security solution.

    try:
        api_response = api_instance.iot_security_solution_analytics_list(api_version, subscription_id, resource_group_name, solution_name)
        print("The response of IoTSecuritySolutionAnalyticsApi->iot_security_solution_analytics_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTSecuritySolutionAnalyticsApi->iot_security_solution_analytics_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The name of the IoT Security solution. | 

### Return type

[**IoTSecuritySolutionAnalyticsModelList**](IoTSecuritySolutionAnalyticsModelList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


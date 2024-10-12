# openapi_client.AggregatedAlertApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iot_security_solutions_analytics_aggregated_alert_dismiss**](AggregatedAlertApi.md#iot_security_solutions_analytics_aggregated_alert_dismiss) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts/{aggregatedAlertName}/dismiss | 
[**iot_security_solutions_analytics_aggregated_alert_get**](AggregatedAlertApi.md#iot_security_solutions_analytics_aggregated_alert_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts/{aggregatedAlertName} | 
[**iot_security_solutions_analytics_aggregated_alert_list**](AggregatedAlertApi.md#iot_security_solutions_analytics_aggregated_alert_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts | 


# **iot_security_solutions_analytics_aggregated_alert_dismiss**
> iot_security_solutions_analytics_aggregated_alert_dismiss(api_version, subscription_id, resource_group_name, solution_name, aggregated_alert_name)



Use this method to dismiss an aggregated IoT Security Solution Alert.

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
    api_instance = openapi_client.AggregatedAlertApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The name of the IoT Security solution.
    aggregated_alert_name = 'aggregated_alert_name_example' # str | Identifier of the aggregated alert.

    try:
        api_instance.iot_security_solutions_analytics_aggregated_alert_dismiss(api_version, subscription_id, resource_group_name, solution_name, aggregated_alert_name)
    except Exception as e:
        print("Exception when calling AggregatedAlertApi->iot_security_solutions_analytics_aggregated_alert_dismiss: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The name of the IoT Security solution. | 
 **aggregated_alert_name** | **str**| Identifier of the aggregated alert. | 

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
**200** | This aggregate alert is permanently dismissed. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_security_solutions_analytics_aggregated_alert_get**
> IoTSecurityAggregatedAlert iot_security_solutions_analytics_aggregated_alert_get(api_version, subscription_id, resource_group_name, solution_name, aggregated_alert_name)



Use this method to get a single the aggregated alert of yours IoT Security solution. This aggregation is performed by alert name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_aggregated_alert import IoTSecurityAggregatedAlert
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
    api_instance = openapi_client.AggregatedAlertApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The name of the IoT Security solution.
    aggregated_alert_name = 'aggregated_alert_name_example' # str | Identifier of the aggregated alert.

    try:
        api_response = api_instance.iot_security_solutions_analytics_aggregated_alert_get(api_version, subscription_id, resource_group_name, solution_name, aggregated_alert_name)
        print("The response of AggregatedAlertApi->iot_security_solutions_analytics_aggregated_alert_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AggregatedAlertApi->iot_security_solutions_analytics_aggregated_alert_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The name of the IoT Security solution. | 
 **aggregated_alert_name** | **str**| Identifier of the aggregated alert. | 

### Return type

[**IoTSecurityAggregatedAlert**](IoTSecurityAggregatedAlert.md)

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

# **iot_security_solutions_analytics_aggregated_alert_list**
> IoTSecurityAggregatedAlertList iot_security_solutions_analytics_aggregated_alert_list(api_version, subscription_id, resource_group_name, solution_name, top=top)



Use this method to get the aggregated alert list of yours IoT Security solution.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.io_t_security_aggregated_alert_list import IoTSecurityAggregatedAlertList
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
    api_instance = openapi_client.AggregatedAlertApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    solution_name = 'solution_name_example' # str | The name of the IoT Security solution.
    top = 56 # int | Number of results to retrieve. (optional)

    try:
        api_response = api_instance.iot_security_solutions_analytics_aggregated_alert_list(api_version, subscription_id, resource_group_name, solution_name, top=top)
        print("The response of AggregatedAlertApi->iot_security_solutions_analytics_aggregated_alert_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AggregatedAlertApi->iot_security_solutions_analytics_aggregated_alert_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **solution_name** | **str**| The name of the IoT Security solution. | 
 **top** | **int**| Number of results to retrieve. | [optional] 

### Return type

[**IoTSecurityAggregatedAlertList**](IoTSecurityAggregatedAlertList.md)

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


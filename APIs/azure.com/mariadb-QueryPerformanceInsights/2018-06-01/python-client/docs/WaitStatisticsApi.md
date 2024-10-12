# openapi_client.WaitStatisticsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wait_statistics_get**](WaitStatisticsApi.md#wait_statistics_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/waitStatistics/{waitStatisticsId} | 
[**wait_statistics_list_by_server**](WaitStatisticsApi.md#wait_statistics_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/waitStatistics | 


# **wait_statistics_get**
> WaitStatistic wait_statistics_get(api_version, subscription_id, resource_group_name, server_name, wait_statistics_id)



Retrieve wait statistics for specified identifier.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.wait_statistic import WaitStatistic
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
    api_instance = openapi_client.WaitStatisticsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    server_name = 'server_name_example' # str | The name of the server.
    wait_statistics_id = 'wait_statistics_id_example' # str | The Wait Statistic identifier.

    try:
        api_response = api_instance.wait_statistics_get(api_version, subscription_id, resource_group_name, server_name, wait_statistics_id)
        print("The response of WaitStatisticsApi->wait_statistics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WaitStatisticsApi->wait_statistics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **server_name** | **str**| The name of the server. | 
 **wait_statistics_id** | **str**| The Wait Statistic identifier. | 

### Return type

[**WaitStatistic**](WaitStatistic.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wait_statistics_list_by_server**
> WaitStatisticsResultList wait_statistics_list_by_server(api_version, subscription_id, resource_group_name, server_name, parameters)



Retrieve wait statistics for specified aggregation window.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.wait_statistics_input import WaitStatisticsInput
from openapi_client.models.wait_statistics_result_list import WaitStatisticsResultList
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
    api_instance = openapi_client.WaitStatisticsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    server_name = 'server_name_example' # str | The name of the server.
    parameters = openapi_client.WaitStatisticsInput() # WaitStatisticsInput | The required parameters for retrieving wait statistics.

    try:
        api_response = api_instance.wait_statistics_list_by_server(api_version, subscription_id, resource_group_name, server_name, parameters)
        print("The response of WaitStatisticsApi->wait_statistics_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WaitStatisticsApi->wait_statistics_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **server_name** | **str**| The name of the server. | 
 **parameters** | [**WaitStatisticsInput**](WaitStatisticsInput.md)| The required parameters for retrieving wait statistics. | 

### Return type

[**WaitStatisticsResultList**](WaitStatisticsResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


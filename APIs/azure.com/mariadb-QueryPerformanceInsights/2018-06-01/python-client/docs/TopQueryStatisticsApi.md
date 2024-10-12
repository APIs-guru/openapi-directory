# openapi_client.TopQueryStatisticsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**top_query_statistics_get**](TopQueryStatisticsApi.md#top_query_statistics_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/topQueryStatistics/{queryStatisticId} | 
[**top_query_statistics_list_by_server**](TopQueryStatisticsApi.md#top_query_statistics_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/topQueryStatistics | 


# **top_query_statistics_get**
> QueryStatistic top_query_statistics_get(api_version, subscription_id, resource_group_name, server_name, query_statistic_id)



Retrieve the query statistic for specified identifier.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_statistic import QueryStatistic
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
    api_instance = openapi_client.TopQueryStatisticsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    server_name = 'server_name_example' # str | The name of the server.
    query_statistic_id = 'query_statistic_id_example' # str | The Query Statistic identifier.

    try:
        api_response = api_instance.top_query_statistics_get(api_version, subscription_id, resource_group_name, server_name, query_statistic_id)
        print("The response of TopQueryStatisticsApi->top_query_statistics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopQueryStatisticsApi->top_query_statistics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **server_name** | **str**| The name of the server. | 
 **query_statistic_id** | **str**| The Query Statistic identifier. | 

### Return type

[**QueryStatistic**](QueryStatistic.md)

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

# **top_query_statistics_list_by_server**
> TopQueryStatisticsResultList top_query_statistics_list_by_server(api_version, subscription_id, resource_group_name, server_name, parameters)



Retrieve the Query-Store top queries for specified metric and aggregation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.top_query_statistics_input import TopQueryStatisticsInput
from openapi_client.models.top_query_statistics_result_list import TopQueryStatisticsResultList
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
    api_instance = openapi_client.TopQueryStatisticsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    server_name = 'server_name_example' # str | The name of the server.
    parameters = openapi_client.TopQueryStatisticsInput() # TopQueryStatisticsInput | The required parameters for retrieving top query statistics.

    try:
        api_response = api_instance.top_query_statistics_list_by_server(api_version, subscription_id, resource_group_name, server_name, parameters)
        print("The response of TopQueryStatisticsApi->top_query_statistics_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopQueryStatisticsApi->top_query_statistics_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **server_name** | **str**| The name of the server. | 
 **parameters** | [**TopQueryStatisticsInput**](TopQueryStatisticsInput.md)| The required parameters for retrieving top query statistics. | 

### Return type

[**TopQueryStatisticsResultList**](TopQueryStatisticsResultList.md)

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


# openapi_client.ElasticPoolsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**elastic_pool_activities_list_by_elastic_pool**](ElasticPoolsApi.md#elastic_pool_activities_list_by_elastic_pool) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/elasticPoolActivity | 
[**elastic_pool_database_activities_list_by_elastic_pool**](ElasticPoolsApi.md#elastic_pool_database_activities_list_by_elastic_pool) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/elasticPoolDatabaseActivity | 


# **elastic_pool_activities_list_by_elastic_pool**
> ElasticPoolActivityListResult elastic_pool_activities_list_by_elastic_pool(api_version, subscription_id, resource_group_name, server_name, elastic_pool_name)



Returns elastic pool activities.

### Example


```python
import openapi_client
from openapi_client.models.elastic_pool_activity_list_result import ElasticPoolActivityListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ElasticPoolsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    elastic_pool_name = 'elastic_pool_name_example' # str | The name of the elastic pool for which to get the current activity.

    try:
        api_response = api_instance.elastic_pool_activities_list_by_elastic_pool(api_version, subscription_id, resource_group_name, server_name, elastic_pool_name)
        print("The response of ElasticPoolsApi->elastic_pool_activities_list_by_elastic_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElasticPoolsApi->elastic_pool_activities_list_by_elastic_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **elastic_pool_name** | **str**| The name of the elastic pool for which to get the current activity. | 

### Return type

[**ElasticPoolActivityListResult**](ElasticPoolActivityListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **elastic_pool_database_activities_list_by_elastic_pool**
> ElasticPoolDatabaseActivityListResult elastic_pool_database_activities_list_by_elastic_pool(api_version, subscription_id, resource_group_name, server_name, elastic_pool_name)



Returns activity on databases inside of an elastic pool.

### Example


```python
import openapi_client
from openapi_client.models.elastic_pool_database_activity_list_result import ElasticPoolDatabaseActivityListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ElasticPoolsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    elastic_pool_name = 'elastic_pool_name_example' # str | The name of the elastic pool.

    try:
        api_response = api_instance.elastic_pool_database_activities_list_by_elastic_pool(api_version, subscription_id, resource_group_name, server_name, elastic_pool_name)
        print("The response of ElasticPoolsApi->elastic_pool_database_activities_list_by_elastic_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElasticPoolsApi->elastic_pool_database_activities_list_by_elastic_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **elastic_pool_name** | **str**| The name of the elastic pool. | 

### Return type

[**ElasticPoolDatabaseActivityListResult**](ElasticPoolDatabaseActivityListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


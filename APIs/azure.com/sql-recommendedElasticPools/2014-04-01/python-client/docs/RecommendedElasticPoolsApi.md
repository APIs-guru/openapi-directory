# openapi_client.RecommendedElasticPoolsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recommended_elastic_pools_get**](RecommendedElasticPoolsApi.md#recommended_elastic_pools_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recommendedElasticPools/{recommendedElasticPoolName} | 
[**recommended_elastic_pools_list_by_server**](RecommendedElasticPoolsApi.md#recommended_elastic_pools_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recommendedElasticPools | 
[**recommended_elastic_pools_list_metrics**](RecommendedElasticPoolsApi.md#recommended_elastic_pools_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recommendedElasticPools/{recommendedElasticPoolName}/metrics | 


# **recommended_elastic_pools_get**
> RecommendedElasticPool recommended_elastic_pools_get(api_version, subscription_id, resource_group_name, server_name, recommended_elastic_pool_name)



Gets a recommended elastic pool.

### Example


```python
import openapi_client
from openapi_client.models.recommended_elastic_pool import RecommendedElasticPool
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
    api_instance = openapi_client.RecommendedElasticPoolsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    recommended_elastic_pool_name = 'recommended_elastic_pool_name_example' # str | The name of the recommended elastic pool to be retrieved.

    try:
        api_response = api_instance.recommended_elastic_pools_get(api_version, subscription_id, resource_group_name, server_name, recommended_elastic_pool_name)
        print("The response of RecommendedElasticPoolsApi->recommended_elastic_pools_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendedElasticPoolsApi->recommended_elastic_pools_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **recommended_elastic_pool_name** | **str**| The name of the recommended elastic pool to be retrieved. | 

### Return type

[**RecommendedElasticPool**](RecommendedElasticPool.md)

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

# **recommended_elastic_pools_list_by_server**
> RecommendedElasticPoolListResult recommended_elastic_pools_list_by_server(api_version, subscription_id, resource_group_name, server_name)



Returns recommended elastic pools.

### Example


```python
import openapi_client
from openapi_client.models.recommended_elastic_pool_list_result import RecommendedElasticPoolListResult
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
    api_instance = openapi_client.RecommendedElasticPoolsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.

    try:
        api_response = api_instance.recommended_elastic_pools_list_by_server(api_version, subscription_id, resource_group_name, server_name)
        print("The response of RecommendedElasticPoolsApi->recommended_elastic_pools_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendedElasticPoolsApi->recommended_elastic_pools_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 

### Return type

[**RecommendedElasticPoolListResult**](RecommendedElasticPoolListResult.md)

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

# **recommended_elastic_pools_list_metrics**
> RecommendedElasticPoolListMetricsResult recommended_elastic_pools_list_metrics(api_version, subscription_id, resource_group_name, server_name, recommended_elastic_pool_name)



Returns recommended elastic pool metrics.

### Example


```python
import openapi_client
from openapi_client.models.recommended_elastic_pool_list_metrics_result import RecommendedElasticPoolListMetricsResult
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
    api_instance = openapi_client.RecommendedElasticPoolsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    recommended_elastic_pool_name = 'recommended_elastic_pool_name_example' # str | The name of the recommended elastic pool to be retrieved.

    try:
        api_response = api_instance.recommended_elastic_pools_list_metrics(api_version, subscription_id, resource_group_name, server_name, recommended_elastic_pool_name)
        print("The response of RecommendedElasticPoolsApi->recommended_elastic_pools_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecommendedElasticPoolsApi->recommended_elastic_pools_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **recommended_elastic_pool_name** | **str**| The name of the recommended elastic pool to be retrieved. | 

### Return type

[**RecommendedElasticPoolListMetricsResult**](RecommendedElasticPoolListMetricsResult.md)

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


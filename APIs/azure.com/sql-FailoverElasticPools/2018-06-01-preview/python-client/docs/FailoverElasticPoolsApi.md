# openapi_client.FailoverElasticPoolsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**elastic_pools_failover**](FailoverElasticPoolsApi.md#elastic_pools_failover) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/failover | 


# **elastic_pools_failover**
> elastic_pools_failover(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version)



Failovers an elastic pool.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.FailoverElasticPoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    elastic_pool_name = 'elastic_pool_name_example' # str | The name of the elastic pool to failover.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.elastic_pools_failover(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling FailoverElasticPoolsApi->elastic_pools_failover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **elastic_pool_name** | **str**| The name of the elastic pool to failover. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully completed elastic pool failover. |  -  |
**202** | Elastic pool failover is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 ManagementServiceFeatureDisabled - User attempted to use a feature which is disabled.   * 400 ElasticPoolFailoverThrottled - There was a recent failover on the elastic pool.   * 400 ElasticPoolFailoverNotSupportedOnSKU - This type of customer initiated failover is not supported on the given SKU.   * 409 ManagementServiceDatabaseBusy - Database &#39;{0}&#39; is busy with another operation. Please try your operation later.   * 409 ElasticPoolNotInStateToFailover - The elastic pool or a database within the elastic pool is currently in a state such that failover cannot be issued. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


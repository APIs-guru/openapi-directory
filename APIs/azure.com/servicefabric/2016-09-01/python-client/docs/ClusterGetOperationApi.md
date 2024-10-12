# openapi_client.ClusterGetOperationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusters_get**](ClusterGetOperationApi.md#clusters_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName} | 


# **clusters_get**
> Cluster clusters_get(resource_group_name, cluster_name, api_version, subscription_id)



Get cluster resource

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster import Cluster
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
    api_instance = openapi_client.ClusterGetOperationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the resource belongs or get created
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource
    api_version = 'api_version_example' # str | The version of the ServiceFabric resource provider api
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier

    try:
        api_response = api_instance.clusters_get(resource_group_name, cluster_name, api_version, subscription_id)
        print("The response of ClusterGetOperationApi->clusters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterGetOperationApi->clusters_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to which the resource belongs or get created | 
 **cluster_name** | **str**| The name of the cluster resource | 
 **api_version** | **str**| The version of the ServiceFabric resource provider api | 
 **subscription_id** | **str**| The customer subscription identifier | 

### Return type

[**Cluster**](Cluster.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Get cluster successfully |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


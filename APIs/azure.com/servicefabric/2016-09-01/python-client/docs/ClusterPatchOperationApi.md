# openapi_client.ClusterPatchOperationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusters_update**](ClusterPatchOperationApi.md#clusters_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName} | 


# **clusters_update**
> Cluster clusters_update(resource_group_name, cluster_name, api_version, subscription_id, parameters)



Update cluster configuration

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster import Cluster
from openapi_client.models.cluster_update_parameters import ClusterUpdateParameters
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
    api_instance = openapi_client.ClusterPatchOperationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the resource belongs or get created
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource
    api_version = 'api_version_example' # str | The version of the ServiceFabric resource provider api
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    parameters = openapi_client.ClusterUpdateParameters() # ClusterUpdateParameters | The parameters which contains the property value and property name which used to update the cluster configuration

    try:
        api_response = api_instance.clusters_update(resource_group_name, cluster_name, api_version, subscription_id, parameters)
        print("The response of ClusterPatchOperationApi->clusters_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterPatchOperationApi->clusters_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to which the resource belongs or get created | 
 **cluster_name** | **str**| The name of the cluster resource | 
 **api_version** | **str**| The version of the ServiceFabric resource provider api | 
 **subscription_id** | **str**| The customer subscription identifier | 
 **parameters** | [**ClusterUpdateParameters**](ClusterUpdateParameters.md)| The parameters which contains the property value and property name which used to update the cluster configuration | 

### Return type

[**Cluster**](Cluster.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Cluster updated successfully |  -  |
**202** | Accepted - Update request accepted; the operation will complete asynchronously. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


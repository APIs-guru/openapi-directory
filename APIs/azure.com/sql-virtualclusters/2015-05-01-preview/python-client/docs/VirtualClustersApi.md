# openapi_client.VirtualClustersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_clusters_delete**](VirtualClustersApi.md#virtual_clusters_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/virtualClusters/{virtualClusterName} | 
[**virtual_clusters_get**](VirtualClustersApi.md#virtual_clusters_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/virtualClusters/{virtualClusterName} | 
[**virtual_clusters_list**](VirtualClustersApi.md#virtual_clusters_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/virtualClusters | 
[**virtual_clusters_list_by_resource_group**](VirtualClustersApi.md#virtual_clusters_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/virtualClusters | 
[**virtual_clusters_update**](VirtualClustersApi.md#virtual_clusters_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/virtualClusters/{virtualClusterName} | 


# **virtual_clusters_delete**
> virtual_clusters_delete(resource_group_name, virtual_cluster_name, subscription_id, api_version)



Deletes a virtual cluster.

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
    api_instance = openapi_client.VirtualClustersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    virtual_cluster_name = 'virtual_cluster_name_example' # str | The name of the virtual cluster.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.virtual_clusters_delete(resource_group_name, virtual_cluster_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling VirtualClustersApi->virtual_clusters_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **virtual_cluster_name** | **str**| The name of the virtual cluster. | 
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
**200** | Successfully deleted the virtual cluster. |  -  |
**202** | Deleting the virtual cluster is in progress. |  -  |
**204** | The specified virtual cluster does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 ManagementServiceFeatureDisabled - User attempted to use a feature which is disabled.   * 404 ResourceDoesNotExist - Resource with the name &#39;{0}&#39; does not exist. To continue, specify a valid resource name.   * 404 VirtualClusterNotInSubscriptionResourceGroup - specified virtual cluster does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveVirtualCluster - The requested virtual cluster was not found   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 409 ConflictingVirtualClusterOperation - An operation is currently in progress for the virtual cluster.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_clusters_get**
> VirtualCluster virtual_clusters_get(resource_group_name, virtual_cluster_name, subscription_id, api_version)



Gets a virtual cluster.

### Example


```python
import openapi_client
from openapi_client.models.virtual_cluster import VirtualCluster
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
    api_instance = openapi_client.VirtualClustersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    virtual_cluster_name = 'virtual_cluster_name_example' # str | The name of the virtual cluster.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.virtual_clusters_get(resource_group_name, virtual_cluster_name, subscription_id, api_version)
        print("The response of VirtualClustersApi->virtual_clusters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualClustersApi->virtual_clusters_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **virtual_cluster_name** | **str**| The name of the virtual cluster. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**VirtualCluster**](VirtualCluster.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified virtual cluster. |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 ManagementServiceFeatureDisabled - User attempted to use a feature which is disabled.   * 404 ResourceDoesNotExist - Resource with the name &#39;{0}&#39; does not exist. To continue, specify a valid resource name.   * 404 VirtualClusterNotInSubscriptionResourceGroup - specified virtual cluster does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveVirtualCluster - The requested virtual cluster was not found   * 404 ResourceNotFound - The requested resource was not found.   * 409 ConflictingVirtualClusterOperation - An operation is currently in progress for the virtual cluster.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_clusters_list**
> VirtualClusterListResult virtual_clusters_list(subscription_id, api_version)



Gets a list of all virtualClusters in the subscription.

### Example


```python
import openapi_client
from openapi_client.models.virtual_cluster_list_result import VirtualClusterListResult
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
    api_instance = openapi_client.VirtualClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.virtual_clusters_list(subscription_id, api_version)
        print("The response of VirtualClustersApi->virtual_clusters_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualClustersApi->virtual_clusters_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**VirtualClusterListResult**](VirtualClusterListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of virtual clusters. |  -  |
**0** | *** Error Responses: *** |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_clusters_list_by_resource_group**
> VirtualClusterListResult virtual_clusters_list_by_resource_group(resource_group_name, subscription_id, api_version)



Gets a list of virtual clusters in a resource group.

### Example


```python
import openapi_client
from openapi_client.models.virtual_cluster_list_result import VirtualClusterListResult
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
    api_instance = openapi_client.VirtualClustersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.virtual_clusters_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of VirtualClustersApi->virtual_clusters_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualClustersApi->virtual_clusters_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**VirtualClusterListResult**](VirtualClusterListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of virtual clusters. |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 ManagementServiceFeatureDisabled - User attempted to use a feature which is disabled.   * 404 ResourceDoesNotExist - Resource with the name &#39;{0}&#39; does not exist. To continue, specify a valid resource name.   * 404 VirtualClusterNotInSubscriptionResourceGroup - specified virtual cluster does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveVirtualCluster - The requested virtual cluster was not found   * 404 ResourceNotFound - The requested resource was not found.   * 409 ConflictingVirtualClusterOperation - An operation is currently in progress for the virtual cluster.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_clusters_update**
> VirtualCluster virtual_clusters_update(resource_group_name, virtual_cluster_name, subscription_id, api_version, parameters)



Updates a virtual cluster.

### Example


```python
import openapi_client
from openapi_client.models.virtual_cluster import VirtualCluster
from openapi_client.models.virtual_cluster_update import VirtualClusterUpdate
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
    api_instance = openapi_client.VirtualClustersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    virtual_cluster_name = 'virtual_cluster_name_example' # str | The name of the virtual cluster.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.VirtualClusterUpdate() # VirtualClusterUpdate | The requested managed instance resource state.

    try:
        api_response = api_instance.virtual_clusters_update(resource_group_name, virtual_cluster_name, subscription_id, api_version, parameters)
        print("The response of VirtualClustersApi->virtual_clusters_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualClustersApi->virtual_clusters_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **virtual_cluster_name** | **str**| The name of the virtual cluster. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**VirtualClusterUpdate**](VirtualClusterUpdate.md)| The requested managed instance resource state. | 

### Return type

[**VirtualCluster**](VirtualCluster.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the virtual cluster. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 ManagementServiceFeatureDisabled - User attempted to use a feature which is disabled.   * 404 ResourceDoesNotExist - Resource with the name &#39;{0}&#39; does not exist. To continue, specify a valid resource name.   * 404 VirtualClusterNotInSubscriptionResourceGroup - specified virtual cluster does not exist in the specified resource group and subscription.   * 404 SubscriptionDoesNotHaveVirtualCluster - The requested virtual cluster was not found   * 404 ResourceNotFound - The requested resource was not found.   * 409 ConflictingVirtualClusterOperation - An operation is currently in progress for the virtual cluster.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


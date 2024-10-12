# openapi_client.OperationalizationClustersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operationalization_clusters_check_system_services_updates_available**](OperationalizationClustersApi.md#operationalization_clusters_check_system_services_updates_available) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName}/checkSystemServicesUpdatesAvailable | 
[**operationalization_clusters_create_or_update**](OperationalizationClustersApi.md#operationalization_clusters_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName} | 
[**operationalization_clusters_delete**](OperationalizationClustersApi.md#operationalization_clusters_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName} | 
[**operationalization_clusters_get**](OperationalizationClustersApi.md#operationalization_clusters_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName} | 
[**operationalization_clusters_list_by_resource_group**](OperationalizationClustersApi.md#operationalization_clusters_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters | 
[**operationalization_clusters_list_by_subscription_id**](OperationalizationClustersApi.md#operationalization_clusters_list_by_subscription_id) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningCompute/operationalizationClusters | 
[**operationalization_clusters_list_keys**](OperationalizationClustersApi.md#operationalization_clusters_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName}/listKeys | 
[**operationalization_clusters_update**](OperationalizationClustersApi.md#operationalization_clusters_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName} | 
[**operationalization_clusters_update_system_services**](OperationalizationClustersApi.md#operationalization_clusters_update_system_services) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningCompute/operationalizationClusters/{clusterName}/updateSystemServices | 


# **operationalization_clusters_check_system_services_updates_available**
> CheckSystemServicesUpdatesAvailableResponse operationalization_clusters_check_system_services_updates_available(api_version, subscription_id, resource_group_name, cluster_name)



Checks if updates are available for system services in the cluster.

### Example


```python
import openapi_client
from openapi_client.models.check_system_services_updates_available_response import CheckSystemServicesUpdatesAvailableResponse
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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearningCompute resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the cluster is located.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.

    try:
        api_response = api_instance.operationalization_clusters_check_system_services_updates_available(api_version, subscription_id, resource_group_name, cluster_name)
        print("The response of OperationalizationClustersApi->operationalization_clusters_check_system_services_updates_available:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->operationalization_clusters_check_system_services_updates_available: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the Microsoft.MachineLearningCompute resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **resource_group_name** | **str**| Name of the resource group in which the cluster is located. | 
 **cluster_name** | **str**| The name of the cluster. | 

### Return type

[**CheckSystemServicesUpdatesAvailableResponse**](CheckSystemServicesUpdatesAvailableResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationalization_clusters_create_or_update**
> OperationalizationCluster operationalization_clusters_create_or_update(api_version, subscription_id, resource_group_name, cluster_name, parameters)



Create or update an operationalization cluster.

### Example


```python
import openapi_client
from openapi_client.models.operationalization_cluster import OperationalizationCluster
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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearningCompute resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the cluster is located.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    parameters = openapi_client.OperationalizationCluster() # OperationalizationCluster | Parameters supplied to create or update an Operationalization cluster.

    try:
        api_response = api_instance.operationalization_clusters_create_or_update(api_version, subscription_id, resource_group_name, cluster_name, parameters)
        print("The response of OperationalizationClustersApi->operationalization_clusters_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->operationalization_clusters_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the Microsoft.MachineLearningCompute resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **resource_group_name** | **str**| Name of the resource group in which the cluster is located. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **parameters** | [**OperationalizationCluster**](OperationalizationCluster.md)| Parameters supplied to create or update an Operationalization cluster. | 

### Return type

[**OperationalizationCluster**](OperationalizationCluster.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The create or update succeeded. |  -  |
**201** | The request was accepted and will complete asynchronously. To get the progress of the operation, call GET operation on the URL in Azure-AsyncOperation header field. For more information about Asynchronous Operations, see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-async-operations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationalization_clusters_delete**
> operationalization_clusters_delete(api_version, subscription_id, resource_group_name, cluster_name, delete_all=delete_all)



Deletes the specified cluster.

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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearningCompute resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the cluster is located.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    delete_all = True # bool | If true, deletes all resources associated with this cluster. (optional)

    try:
        api_instance.operationalization_clusters_delete(api_version, subscription_id, resource_group_name, cluster_name, delete_all=delete_all)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->operationalization_clusters_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the Microsoft.MachineLearningCompute resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **resource_group_name** | **str**| Name of the resource group in which the cluster is located. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **delete_all** | **bool**| If true, deletes all resources associated with this cluster. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The delete request was accepted and will complete asynchronously. The know the progress of the delete operation do a GET call on the URI in the Location header. For more information about Asynchronous Operations, see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-async-operations. |  * Location - URI of the async operation. <br>  |
**204** | No Content. The cluster did not exist but the request was well formed. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationalization_clusters_get**
> OperationalizationCluster operationalization_clusters_get(api_version, subscription_id, resource_group_name, cluster_name)



Gets the operationalization cluster resource view. Note that the credentials are not returned by this call. Call ListKeys to get them.

### Example


```python
import openapi_client
from openapi_client.models.operationalization_cluster import OperationalizationCluster
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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearningCompute resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the cluster is located.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.

    try:
        api_response = api_instance.operationalization_clusters_get(api_version, subscription_id, resource_group_name, cluster_name)
        print("The response of OperationalizationClustersApi->operationalization_clusters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->operationalization_clusters_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the Microsoft.MachineLearningCompute resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **resource_group_name** | **str**| Name of the resource group in which the cluster is located. | 
 **cluster_name** | **str**| The name of the cluster. | 

### Return type

[**OperationalizationCluster**](OperationalizationCluster.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationalization_clusters_list_by_resource_group**
> PaginatedOperationalizationClustersList operationalization_clusters_list_by_resource_group(api_version, subscription_id, resource_group_name, skiptoken=skiptoken)



Gets the clusters in the specified resource group.

### Example


```python
import openapi_client
from openapi_client.models.paginated_operationalization_clusters_list import PaginatedOperationalizationClustersList
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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearningCompute resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the cluster is located.
    skiptoken = 'skiptoken_example' # str | Continuation token for pagination. (optional)

    try:
        api_response = api_instance.operationalization_clusters_list_by_resource_group(api_version, subscription_id, resource_group_name, skiptoken=skiptoken)
        print("The response of OperationalizationClustersApi->operationalization_clusters_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->operationalization_clusters_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the Microsoft.MachineLearningCompute resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **resource_group_name** | **str**| Name of the resource group in which the cluster is located. | 
 **skiptoken** | **str**| Continuation token for pagination. | [optional] 

### Return type

[**PaginatedOperationalizationClustersList**](PaginatedOperationalizationClustersList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The response includes a paginated array of cluster objects and a URI to the next set of results, if any. For the more information the limits of the number of items in a resource group, see https://azure.microsoft.com/en-us/documentation/articles/azure-subscription-service-limits/. Note that the cluster objects are sparsely populated to conserve space in the response content. To get the full cluster object, call the GET operation on the cluster. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationalization_clusters_list_by_subscription_id**
> PaginatedOperationalizationClustersList operationalization_clusters_list_by_subscription_id(api_version, subscription_id, skiptoken=skiptoken)



Gets the operationalization clusters in the specified subscription.

### Example


```python
import openapi_client
from openapi_client.models.paginated_operationalization_clusters_list import PaginatedOperationalizationClustersList
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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearningCompute resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    skiptoken = 'skiptoken_example' # str | Continuation token for pagination. (optional)

    try:
        api_response = api_instance.operationalization_clusters_list_by_subscription_id(api_version, subscription_id, skiptoken=skiptoken)
        print("The response of OperationalizationClustersApi->operationalization_clusters_list_by_subscription_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->operationalization_clusters_list_by_subscription_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the Microsoft.MachineLearningCompute resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **skiptoken** | **str**| Continuation token for pagination. | [optional] 

### Return type

[**PaginatedOperationalizationClustersList**](PaginatedOperationalizationClustersList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The response includes a paginated array of cluster objects and a URI to the next set of results, if any. Note that the cluster objects are sparsely populated to conserve space in the response content. To get the full cluster object, call the GET operation on the cluster. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationalization_clusters_list_keys**
> OperationalizationClusterCredentials operationalization_clusters_list_keys(api_version, subscription_id, resource_group_name, cluster_name)



Gets the credentials for the specified cluster such as Storage, ACR and ACS credentials. This is a long running operation because it fetches keys from dependencies.

### Example


```python
import openapi_client
from openapi_client.models.operationalization_cluster_credentials import OperationalizationClusterCredentials
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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearningCompute resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the cluster is located.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.

    try:
        api_response = api_instance.operationalization_clusters_list_keys(api_version, subscription_id, resource_group_name, cluster_name)
        print("The response of OperationalizationClustersApi->operationalization_clusters_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->operationalization_clusters_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the Microsoft.MachineLearningCompute resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **resource_group_name** | **str**| Name of the resource group in which the cluster is located. | 
 **cluster_name** | **str**| The name of the cluster. | 

### Return type

[**OperationalizationClusterCredentials**](OperationalizationClusterCredentials.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationalization_clusters_update**
> OperationalizationCluster operationalization_clusters_update(api_version, subscription_id, resource_group_name, cluster_name, parameters)



The PATCH operation can be used to update only the tags for a cluster. Use PUT operation to update other properties.

### Example


```python
import openapi_client
from openapi_client.models.operationalization_cluster import OperationalizationCluster
from openapi_client.models.operationalization_cluster_update_parameters import OperationalizationClusterUpdateParameters
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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearningCompute resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the cluster is located.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    parameters = openapi_client.OperationalizationClusterUpdateParameters() # OperationalizationClusterUpdateParameters | The parameters supplied to patch the cluster.

    try:
        api_response = api_instance.operationalization_clusters_update(api_version, subscription_id, resource_group_name, cluster_name, parameters)
        print("The response of OperationalizationClustersApi->operationalization_clusters_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->operationalization_clusters_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the Microsoft.MachineLearningCompute resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **resource_group_name** | **str**| Name of the resource group in which the cluster is located. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **parameters** | [**OperationalizationClusterUpdateParameters**](OperationalizationClusterUpdateParameters.md)| The parameters supplied to patch the cluster. | 

### Return type

[**OperationalizationCluster**](OperationalizationCluster.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The update completed successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationalization_clusters_update_system_services**
> UpdateSystemServicesResponse operationalization_clusters_update_system_services(api_version, subscription_id, resource_group_name, cluster_name)



Updates system services in a cluster.

### Example


```python
import openapi_client
from openapi_client.models.update_system_services_response import UpdateSystemServicesResponse
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
    api_instance = openapi_client.OperationalizationClustersApi(api_client)
    api_version = 'api_version_example' # str | The version of the Microsoft.MachineLearningCompute resource provider API to use.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group in which the cluster is located.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.

    try:
        api_response = api_instance.operationalization_clusters_update_system_services(api_version, subscription_id, resource_group_name, cluster_name)
        print("The response of OperationalizationClustersApi->operationalization_clusters_update_system_services:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationalizationClustersApi->operationalization_clusters_update_system_services: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the Microsoft.MachineLearningCompute resource provider API to use. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **resource_group_name** | **str**| Name of the resource group in which the cluster is located. | 
 **cluster_name** | **str**| The name of the cluster. | 

### Return type

[**UpdateSystemServicesResponse**](UpdateSystemServicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request completed successfully. Check the response body for update details. |  -  |
**202** | The request was accepted and will complete asynchronously. The know the progress of the async operation do a GET call on the URI in the Location header. For more information about Asynchronous Operations, see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-async-operations. |  * Location - URI of the async operation. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


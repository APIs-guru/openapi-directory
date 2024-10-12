# openapi_client.OpenShiftManagedClustersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**open_shift_managed_clusters_create_or_update**](OpenShiftManagedClustersApi.md#open_shift_managed_clusters_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName} | Creates or updates an OpenShift managed cluster.
[**open_shift_managed_clusters_delete**](OpenShiftManagedClustersApi.md#open_shift_managed_clusters_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName} | Deletes an OpenShift managed cluster.
[**open_shift_managed_clusters_get**](OpenShiftManagedClustersApi.md#open_shift_managed_clusters_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName} | Gets a OpenShift managed cluster.
[**open_shift_managed_clusters_list**](OpenShiftManagedClustersApi.md#open_shift_managed_clusters_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/openShiftManagedClusters | Gets a list of OpenShift managed clusters in the specified subscription.
[**open_shift_managed_clusters_list_by_resource_group**](OpenShiftManagedClustersApi.md#open_shift_managed_clusters_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters | Lists OpenShift managed clusters in the specified subscription and resource group.
[**open_shift_managed_clusters_update_tags**](OpenShiftManagedClustersApi.md#open_shift_managed_clusters_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName} | Updates tags on an OpenShift managed cluster.


# **open_shift_managed_clusters_create_or_update**
> OpenShiftManagedCluster open_shift_managed_clusters_create_or_update(api_version, subscription_id, resource_group_name, resource_name, parameters)

Creates or updates an OpenShift managed cluster.

Creates or updates a OpenShift managed cluster with the specified configuration for agents and OpenShift version.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.open_shift_managed_cluster import OpenShiftManagedCluster
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
    api_instance = openapi_client.OpenShiftManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the OpenShift managed cluster resource.
    parameters = openapi_client.OpenShiftManagedCluster() # OpenShiftManagedCluster | Parameters supplied to the Create or Update an OpenShift Managed Cluster operation.

    try:
        # Creates or updates an OpenShift managed cluster.
        api_response = api_instance.open_shift_managed_clusters_create_or_update(api_version, subscription_id, resource_group_name, resource_name, parameters)
        print("The response of OpenShiftManagedClustersApi->open_shift_managed_clusters_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpenShiftManagedClustersApi->open_shift_managed_clusters_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the OpenShift managed cluster resource. | 
 **parameters** | [**OpenShiftManagedCluster**](OpenShiftManagedCluster.md)| Parameters supplied to the Create or Update an OpenShift Managed Cluster operation. | 

### Return type

[**OpenShiftManagedCluster**](OpenShiftManagedCluster.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Error response describing why the operation failed. If the cluster doesn&#39;t exist, 404 (Not found) is returned.If any of the input parameters is wrong, 400(Bad Request) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **open_shift_managed_clusters_delete**
> open_shift_managed_clusters_delete(api_version, subscription_id, resource_group_name, resource_name)

Deletes an OpenShift managed cluster.

Deletes the OpenShift managed cluster with a specified resource group and name.

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
    api_instance = openapi_client.OpenShiftManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the OpenShift managed cluster resource.

    try:
        # Deletes an OpenShift managed cluster.
        api_instance.open_shift_managed_clusters_delete(api_version, subscription_id, resource_group_name, resource_name)
    except Exception as e:
        print("Exception when calling OpenShiftManagedClustersApi->open_shift_managed_clusters_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the OpenShift managed cluster resource. | 

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
**202** | Accepted |  -  |
**204** | NoContent |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **open_shift_managed_clusters_get**
> OpenShiftManagedCluster open_shift_managed_clusters_get(api_version, subscription_id, resource_group_name, resource_name)

Gets a OpenShift managed cluster.

Gets the details of the managed OpenShift cluster with a specified resource group and name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.open_shift_managed_cluster import OpenShiftManagedCluster
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
    api_instance = openapi_client.OpenShiftManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the OpenShift managed cluster resource.

    try:
        # Gets a OpenShift managed cluster.
        api_response = api_instance.open_shift_managed_clusters_get(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of OpenShiftManagedClustersApi->open_shift_managed_clusters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpenShiftManagedClustersApi->open_shift_managed_clusters_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the OpenShift managed cluster resource. | 

### Return type

[**OpenShiftManagedCluster**](OpenShiftManagedCluster.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. If the cluster doesn&#39;t exist, 404 (Not found) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **open_shift_managed_clusters_list**
> OpenShiftManagedClusterListResult open_shift_managed_clusters_list(api_version, subscription_id)

Gets a list of OpenShift managed clusters in the specified subscription.

Gets a list of OpenShift managed clusters in the specified subscription. The operation returns properties of each OpenShift managed cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.open_shift_managed_cluster_list_result import OpenShiftManagedClusterListResult
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
    api_instance = openapi_client.OpenShiftManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        # Gets a list of OpenShift managed clusters in the specified subscription.
        api_response = api_instance.open_shift_managed_clusters_list(api_version, subscription_id)
        print("The response of OpenShiftManagedClustersApi->open_shift_managed_clusters_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpenShiftManagedClustersApi->open_shift_managed_clusters_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**OpenShiftManagedClusterListResult**](OpenShiftManagedClusterListResult.md)

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

# **open_shift_managed_clusters_list_by_resource_group**
> OpenShiftManagedClusterListResult open_shift_managed_clusters_list_by_resource_group(api_version, subscription_id, resource_group_name)

Lists OpenShift managed clusters in the specified subscription and resource group.

Lists OpenShift managed clusters in the specified subscription and resource group. The operation returns properties of each OpenShift managed cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.open_shift_managed_cluster_list_result import OpenShiftManagedClusterListResult
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
    api_instance = openapi_client.OpenShiftManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.

    try:
        # Lists OpenShift managed clusters in the specified subscription and resource group.
        api_response = api_instance.open_shift_managed_clusters_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of OpenShiftManagedClustersApi->open_shift_managed_clusters_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpenShiftManagedClustersApi->open_shift_managed_clusters_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 

### Return type

[**OpenShiftManagedClusterListResult**](OpenShiftManagedClusterListResult.md)

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

# **open_shift_managed_clusters_update_tags**
> OpenShiftManagedCluster open_shift_managed_clusters_update_tags(api_version, subscription_id, resource_group_name, resource_name, parameters)

Updates tags on an OpenShift managed cluster.

Updates an OpenShift managed cluster with the specified tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.open_shift_managed_cluster import OpenShiftManagedCluster
from openapi_client.models.tags_object import TagsObject
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
    api_instance = openapi_client.OpenShiftManagedClustersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_name = 'resource_name_example' # str | The name of the OpenShift managed cluster resource.
    parameters = openapi_client.TagsObject() # TagsObject | Parameters supplied to the Update OpenShift Managed Cluster Tags operation.

    try:
        # Updates tags on an OpenShift managed cluster.
        api_response = api_instance.open_shift_managed_clusters_update_tags(api_version, subscription_id, resource_group_name, resource_name, parameters)
        print("The response of OpenShiftManagedClustersApi->open_shift_managed_clusters_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpenShiftManagedClustersApi->open_shift_managed_clusters_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_name** | **str**| The name of the OpenShift managed cluster resource. | 
 **parameters** | [**TagsObject**](TagsObject.md)| Parameters supplied to the Update OpenShift Managed Cluster Tags operation. | 

### Return type

[**OpenShiftManagedCluster**](OpenShiftManagedCluster.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. If the cluster doesn&#39;t exist, 404 (Not found) is returned. If any of the input parameters is wrong, 400(Bad Request) is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.ClusterApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusters_create**](ClusterApi.md#clusters_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName} | Create a ServiceFabric cluster
[**clusters_delete**](ClusterApi.md#clusters_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName} | Delete cluster resource
[**clusters_get**](ClusterApi.md#clusters_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName} | Get cluster resource
[**clusters_list**](ClusterApi.md#clusters_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/clusters | List cluster resource
[**clusters_list_by_resource_group**](ClusterApi.md#clusters_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters | List cluster resource by resource group
[**clusters_update**](ClusterApi.md#clusters_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName} | Update cluster configuration


# **clusters_create**
> Cluster clusters_create(resource_group_name, cluster_name, api_version, subscription_id, parameters)

Create a ServiceFabric cluster

Create cluster resource 

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
    api_instance = openapi_client.ClusterApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    parameters = openapi_client.Cluster() # Cluster | The cluster resource.

    try:
        # Create a ServiceFabric cluster
        api_response = api_instance.clusters_create(resource_group_name, cluster_name, api_version, subscription_id, parameters)
        print("The response of ClusterApi->clusters_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->clusters_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource | 
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The customer subscription identifier | 
 **parameters** | [**Cluster**](Cluster.md)| The cluster resource. | 

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
**200** | OK - Put cluster successfully |  -  |
**202** | Accepted - Put request accepted; the operation will complete asynchronously. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_delete**
> clusters_delete(resource_group_name, cluster_name, api_version, subscription_id)

Delete cluster resource

Delete cluster resource 

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
    api_instance = openapi_client.ClusterApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier

    try:
        # Delete cluster resource
        api_instance.clusters_delete(resource_group_name, cluster_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ClusterApi->clusters_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource | 
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The customer subscription identifier | 

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
**200** | OK - cluster deleted successfully |  -  |
**204** | NoContent - cluster does not exist |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_get**
> Cluster clusters_get(resource_group_name, cluster_name, api_version, subscription_id)

Get cluster resource

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
    api_instance = openapi_client.ClusterApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier

    try:
        # Get cluster resource
        api_response = api_instance.clusters_get(resource_group_name, cluster_name, api_version, subscription_id)
        print("The response of ClusterApi->clusters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->clusters_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource | 
 **api_version** | **str**| The version of the API. | 
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

# **clusters_list**
> ClusterListResult clusters_list(api_version, subscription_id)

List cluster resource

List cluster resource 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster_list_result import ClusterListResult
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier

    try:
        # List cluster resource
        api_response = api_instance.clusters_list(api_version, subscription_id)
        print("The response of ClusterApi->clusters_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->clusters_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The customer subscription identifier | 

### Return type

[**ClusterListResult**](ClusterListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Get cluster  successfully |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_list_by_resource_group**
> ClusterListResult clusters_list_by_resource_group(resource_group_name, api_version, subscription_id)

List cluster resource by resource group

List cluster resource by resource group 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster_list_result import ClusterListResult
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
    api_instance = openapi_client.ClusterApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier

    try:
        # List cluster resource by resource group
        api_response = api_instance.clusters_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of ClusterApi->clusters_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->clusters_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The customer subscription identifier | 

### Return type

[**ClusterListResult**](ClusterListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Get cluster  successfully |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_update**
> Cluster clusters_update(resource_group_name, cluster_name, api_version, subscription_id, parameters)

Update cluster configuration

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
    api_instance = openapi_client.ClusterApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier
    parameters = openapi_client.ClusterUpdateParameters() # ClusterUpdateParameters | The parameters which contains the property value and property name which used to update the cluster configuration.

    try:
        # Update cluster configuration
        api_response = api_instance.clusters_update(resource_group_name, cluster_name, api_version, subscription_id, parameters)
        print("The response of ClusterApi->clusters_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->clusters_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource | 
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The customer subscription identifier | 
 **parameters** | [**ClusterUpdateParameters**](ClusterUpdateParameters.md)| The parameters which contains the property value and property name which used to update the cluster configuration. | 

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


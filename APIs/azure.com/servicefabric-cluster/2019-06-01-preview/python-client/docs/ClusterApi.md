# openapi_client.ClusterApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusters_create**](ClusterApi.md#clusters_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName} | Creates or updates a Service Fabric cluster resource.
[**clusters_delete**](ClusterApi.md#clusters_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName} | Deletes a Service Fabric cluster resource.
[**clusters_get**](ClusterApi.md#clusters_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName} | Gets a Service Fabric cluster resource.
[**clusters_list**](ClusterApi.md#clusters_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/clusters | Gets the list of Service Fabric cluster resources created in the specified subscription.
[**clusters_list_by_resource_group**](ClusterApi.md#clusters_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters | Gets the list of Service Fabric cluster resources created in the specified resource group.
[**clusters_update**](ClusterApi.md#clusters_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName} | Updates the configuration of a Service Fabric cluster resource.


# **clusters_create**
> Cluster clusters_create(resource_group_name, cluster_name, api_version, subscription_id, parameters)

Creates or updates a Service Fabric cluster resource.

Create or update a Service Fabric cluster resource with the specified name.

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
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    api_version = 2019-06-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-06-01-preview\" for this specification. (default to 2019-06-01-preview)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    parameters = openapi_client.Cluster() # Cluster | The cluster resource.

    try:
        # Creates or updates a Service Fabric cluster resource.
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
 **cluster_name** | **str**| The name of the cluster resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-06-01-preview\&quot; for this specification. | [default to 2019-06-01-preview]
 **subscription_id** | **str**| The customer subscription identifier. | 
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
**200** | The operation completed successfully. |  -  |
**202** | The request was accepted and the operation will complete asynchronously. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_delete**
> clusters_delete(resource_group_name, cluster_name, api_version, subscription_id)

Deletes a Service Fabric cluster resource.

Delete a Service Fabric cluster resource with the specified name.

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
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    api_version = 2019-06-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-06-01-preview\" for this specification. (default to 2019-06-01-preview)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.

    try:
        # Deletes a Service Fabric cluster resource.
        api_instance.clusters_delete(resource_group_name, cluster_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ClusterApi->clusters_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-06-01-preview\&quot; for this specification. | [default to 2019-06-01-preview]
 **subscription_id** | **str**| The customer subscription identifier. | 

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
**200** | The operation completed successfully. |  -  |
**204** | The resource was not found. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_get**
> Cluster clusters_get(resource_group_name, cluster_name, api_version, subscription_id)

Gets a Service Fabric cluster resource.

Get a Service Fabric cluster resource created or in the process of being created in the specified resource group.

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
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    api_version = 2019-06-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-06-01-preview\" for this specification. (default to 2019-06-01-preview)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.

    try:
        # Gets a Service Fabric cluster resource.
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
 **cluster_name** | **str**| The name of the cluster resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-06-01-preview\&quot; for this specification. | [default to 2019-06-01-preview]
 **subscription_id** | **str**| The customer subscription identifier. | 

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
**200** | The operation completed successfully. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_list**
> ClusterListResult clusters_list(api_version, subscription_id)

Gets the list of Service Fabric cluster resources created in the specified subscription.

Gets all Service Fabric cluster resources created or in the process of being created in the subscription.

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
    api_version = 2019-06-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-06-01-preview\" for this specification. (default to 2019-06-01-preview)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.

    try:
        # Gets the list of Service Fabric cluster resources created in the specified subscription.
        api_response = api_instance.clusters_list(api_version, subscription_id)
        print("The response of ClusterApi->clusters_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->clusters_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-06-01-preview\&quot; for this specification. | [default to 2019-06-01-preview]
 **subscription_id** | **str**| The customer subscription identifier. | 

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
**200** | The operation completed successfully. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_list_by_resource_group**
> ClusterListResult clusters_list_by_resource_group(resource_group_name, api_version, subscription_id)

Gets the list of Service Fabric cluster resources created in the specified resource group.

Gets all Service Fabric cluster resources created or in the process of being created in the resource group.

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
    api_version = 2019-06-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-06-01-preview\" for this specification. (default to 2019-06-01-preview)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.

    try:
        # Gets the list of Service Fabric cluster resources created in the specified resource group.
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
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-06-01-preview\&quot; for this specification. | [default to 2019-06-01-preview]
 **subscription_id** | **str**| The customer subscription identifier. | 

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
**200** | The operation completed successfully. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_update**
> Cluster clusters_update(resource_group_name, cluster_name, api_version, subscription_id, parameters)

Updates the configuration of a Service Fabric cluster resource.

Update the configuration of a Service Fabric cluster resource with the specified name.

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
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    api_version = 2019-06-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-06-01-preview\" for this specification. (default to 2019-06-01-preview)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    parameters = openapi_client.ClusterUpdateParameters() # ClusterUpdateParameters | The parameters which contains the property value and property name which used to update the cluster configuration.

    try:
        # Updates the configuration of a Service Fabric cluster resource.
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
 **cluster_name** | **str**| The name of the cluster resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-06-01-preview\&quot; for this specification. | [default to 2019-06-01-preview]
 **subscription_id** | **str**| The customer subscription identifier. | 
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
**200** | The operation completed successfully. |  -  |
**202** | The request was accepted and the operation will complete asynchronously. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


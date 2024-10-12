# openapi_client.ClustersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusters_check_name_availability**](ClustersApi.md#clusters_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Kusto/locations/{location}/checkNameAvailability | 
[**clusters_create_or_update**](ClustersApi.md#clusters_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName} | 
[**clusters_delete**](ClustersApi.md#clusters_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName} | 
[**clusters_get**](ClustersApi.md#clusters_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName} | 
[**clusters_list**](ClustersApi.md#clusters_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Kusto/clusters | 
[**clusters_list_by_resource_group**](ClustersApi.md#clusters_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters | 
[**clusters_list_skus_by_resource**](ClustersApi.md#clusters_list_skus_by_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/skus | 
[**clusters_start**](ClustersApi.md#clusters_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/start | 
[**clusters_stop**](ClustersApi.md#clusters_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/stop | 
[**clusters_update**](ClustersApi.md#clusters_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName} | 


# **clusters_check_name_availability**
> CheckNameResult clusters_check_name_availability(api_version, subscription_id, location, cluster_name)



Checks that the cluster name is valid and is not already in use.

### Example


```python
import openapi_client
from openapi_client.models.check_name_result import CheckNameResult
from openapi_client.models.cluster_check_name_request import ClusterCheckNameRequest
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
    api_instance = openapi_client.ClustersApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Azure location.
    cluster_name = openapi_client.ClusterCheckNameRequest() # ClusterCheckNameRequest | The name of the cluster.

    try:
        api_response = api_instance.clusters_check_name_availability(api_version, subscription_id, location, cluster_name)
        print("The response of ClustersApi->clusters_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Azure location. | 
 **cluster_name** | [**ClusterCheckNameRequest**](ClusterCheckNameRequest.md)| The name of the cluster. | 

### Return type

[**CheckNameResult**](CheckNameResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- Operation to check the kusto resource name availability was successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_create_or_update**
> Cluster clusters_create_or_update(resource_group_name, cluster_name, subscription_id, api_version, parameters)



Create or update a Kusto cluster.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClustersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    parameters = openapi_client.Cluster() # Cluster | The Kusto cluster parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.clusters_create_or_update(resource_group_name, cluster_name, subscription_id, api_version, parameters)
        print("The response of ClustersApi->clusters_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **parameters** | [**Cluster**](Cluster.md)| The Kusto cluster parameters supplied to the CreateOrUpdate operation. | 

### Return type

[**Cluster**](Cluster.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the Cluster. |  -  |
**201** | Successfully created the cluster. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_delete**
> clusters_delete(resource_group_name, cluster_name, subscription_id, api_version)



Deletes a Kusto cluster.

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
    api_instance = openapi_client.ClustersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_instance.clusters_delete(resource_group_name, cluster_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

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
**200** | OK -- cluster deleted successfully. |  -  |
**202** | Accepted the delete cluster request. |  -  |
**204** | NoContent -- cluster does not exist in the subscription. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_get**
> Cluster clusters_get(resource_group_name, cluster_name, subscription_id, api_version)



Gets a Kusto cluster.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClustersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.clusters_get(resource_group_name, cluster_name, subscription_id, api_version)
        print("The response of ClustersApi->clusters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**Cluster**](Cluster.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Kusto cluster. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_list**
> ClusterListResult clusters_list(subscription_id, api_version)



Lists all Kusto clusters within a subscription.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.clusters_list(subscription_id, api_version)
        print("The response of ClustersApi->clusters_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**ClusterListResult**](ClusterListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_list_by_resource_group**
> ClusterListResult clusters_list_by_resource_group(resource_group_name, subscription_id, api_version)



Lists all Kusto clusters within a resource group.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClustersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.clusters_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of ClustersApi->clusters_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**ClusterListResult**](ClusterListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_list_skus_by_resource**
> ListResourceSkusResult clusters_list_skus_by_resource(resource_group_name, cluster_name, api_version, subscription_id)



Returns the SKUs available for the provided resource.

### Example


```python
import openapi_client
from openapi_client.models.list_resource_skus_result import ListResourceSkusResult
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
    api_instance = openapi_client.ClustersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.clusters_list_skus_by_resource(resource_group_name, cluster_name, api_version, subscription_id)
        print("The response of ClustersApi->clusters_list_skus_by_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_list_skus_by_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ListResourceSkusResult**](ListResourceSkusResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_start**
> clusters_start(resource_group_name, cluster_name, subscription_id, api_version)



Starts a Kusto cluster.

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
    api_instance = openapi_client.ClustersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_instance.clusters_start(resource_group_name, cluster_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

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
**200** | OK. |  -  |
**202** | Accepted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_stop**
> clusters_stop(resource_group_name, cluster_name, subscription_id, api_version)



Stops a Kusto cluster.

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
    api_instance = openapi_client.ClustersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_instance.clusters_stop(resource_group_name, cluster_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

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
**200** | OK. |  -  |
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_update**
> Cluster clusters_update(resource_group_name, cluster_name, subscription_id, api_version, parameters)



Update a Kusto cluster.

### Example


```python
import openapi_client
from openapi_client.models.cluster import Cluster
from openapi_client.models.cluster_update import ClusterUpdate
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
    api_instance = openapi_client.ClustersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Kusto cluster.
    cluster_name = 'cluster_name_example' # str | The name of the Kusto cluster.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    parameters = openapi_client.ClusterUpdate() # ClusterUpdate | The Kusto cluster parameters supplied to the Update operation.

    try:
        api_response = api_instance.clusters_update(resource_group_name, cluster_name, subscription_id, api_version, parameters)
        print("The response of ClustersApi->clusters_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the Kusto cluster. | 
 **cluster_name** | **str**| The name of the Kusto cluster. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **parameters** | [**ClusterUpdate**](ClusterUpdate.md)| The Kusto cluster parameters supplied to the Update operation. | 

### Return type

[**Cluster**](Cluster.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the Cluster. |  -  |
**201** | Successfully updated the cluster. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


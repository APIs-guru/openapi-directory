# openapi_client.ClustersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusters_create**](ClustersApi.md#clusters_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName} | 
[**clusters_delete**](ClustersApi.md#clusters_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName} | 
[**clusters_get**](ClustersApi.md#clusters_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName} | 
[**clusters_get_gateway_settings**](ClustersApi.md#clusters_get_gateway_settings) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/getGatewaySettings | 
[**clusters_list**](ClustersApi.md#clusters_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.HDInsight/clusters | 
[**clusters_list_by_resource_group**](ClustersApi.md#clusters_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters | 
[**clusters_resize**](ClustersApi.md#clusters_resize) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/roles/{roleName}/resize | 
[**clusters_rotate_disk_encryption_key**](ClustersApi.md#clusters_rotate_disk_encryption_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/rotatediskencryptionkey | 
[**clusters_update**](ClustersApi.md#clusters_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName} | 
[**clusters_update_gateway_settings**](ClustersApi.md#clusters_update_gateway_settings) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/updateGatewaySettings | 


# **clusters_create**
> Cluster clusters_create(subscription_id, resource_group_name, cluster_name, api_version, parameters)



Creates a new HDInsight cluster with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster import Cluster
from openapi_client.models.cluster_create_parameters_extended import ClusterCreateParametersExtended
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
    api_instance = openapi_client.ClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    api_version = 'api_version_example' # str | The HDInsight client API Version.
    parameters = openapi_client.ClusterCreateParametersExtended() # ClusterCreateParametersExtended | The cluster create request.

    try:
        api_response = api_instance.clusters_create(subscription_id, resource_group_name, cluster_name, api_version, parameters)
        print("The response of ClustersApi->clusters_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **api_version** | **str**| The HDInsight client API Version. | 
 **parameters** | [**ClusterCreateParametersExtended**](ClusterCreateParametersExtended.md)| The cluster create request. | 

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
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_delete**
> clusters_delete(subscription_id, resource_group_name, cluster_name, api_version)



Deletes the specified HDInsight cluster.

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
    api_instance = openapi_client.ClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_instance.clusters_delete(subscription_id, resource_group_name, cluster_name, api_version)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **api_version** | **str**| The HDInsight client API Version. | 

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
**200** | Ok response definition. |  -  |
**202** | Accepted response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_get**
> Cluster clusters_get(subscription_id, resource_group_name, cluster_name, api_version)



Gets the specified cluster.

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
    api_instance = openapi_client.ClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_response = api_instance.clusters_get(subscription_id, resource_group_name, cluster_name, api_version)
        print("The response of ClustersApi->clusters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **api_version** | **str**| The HDInsight client API Version. | 

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
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_get_gateway_settings**
> GatewaySettings clusters_get_gateway_settings(subscription_id, resource_group_name, cluster_name, api_version)



Gets the gateway settings for the specified cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gateway_settings import GatewaySettings
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
    api_instance = openapi_client.ClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_response = api_instance.clusters_get_gateway_settings(subscription_id, resource_group_name, cluster_name, api_version)
        print("The response of ClustersApi->clusters_get_gateway_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_get_gateway_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **api_version** | **str**| The HDInsight client API Version. | 

### Return type

[**GatewaySettings**](GatewaySettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_list**
> ClusterListResult clusters_list(subscription_id, api_version)



Lists all the HDInsight clusters under the subscription.

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
    api_instance = openapi_client.ClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

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
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| The HDInsight client API Version. | 

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
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_list_by_resource_group**
> ClusterListResult clusters_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists the HDInsight clusters in a resource group.

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
    api_instance = openapi_client.ClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_response = api_instance.clusters_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of ClustersApi->clusters_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| The HDInsight client API Version. | 

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
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_resize**
> clusters_resize(subscription_id, resource_group_name, cluster_name, role_name, api_version, parameters)



Resizes the specified HDInsight cluster to the specified size.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster_resize_parameters import ClusterResizeParameters
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
    api_instance = openapi_client.ClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    role_name = 'role_name_example' # str | The constant value for the roleName
    api_version = 'api_version_example' # str | The HDInsight client API Version.
    parameters = openapi_client.ClusterResizeParameters() # ClusterResizeParameters | The parameters for the resize operation.

    try:
        api_instance.clusters_resize(subscription_id, resource_group_name, cluster_name, role_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_resize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **role_name** | **str**| The constant value for the roleName | 
 **api_version** | **str**| The HDInsight client API Version. | 
 **parameters** | [**ClusterResizeParameters**](ClusterResizeParameters.md)| The parameters for the resize operation. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**202** | Accepted response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_rotate_disk_encryption_key**
> clusters_rotate_disk_encryption_key(subscription_id, resource_group_name, cluster_name, api_version, parameters)



Rotate disk encryption key of the specified HDInsight cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster_disk_encryption_parameters import ClusterDiskEncryptionParameters
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
    api_instance = openapi_client.ClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    api_version = 'api_version_example' # str | The HDInsight client API Version.
    parameters = openapi_client.ClusterDiskEncryptionParameters() # ClusterDiskEncryptionParameters | The parameters for the disk encryption operation.

    try:
        api_instance.clusters_rotate_disk_encryption_key(subscription_id, resource_group_name, cluster_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_rotate_disk_encryption_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **api_version** | **str**| The HDInsight client API Version. | 
 **parameters** | [**ClusterDiskEncryptionParameters**](ClusterDiskEncryptionParameters.md)| The parameters for the disk encryption operation. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**202** | Accepted response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_update**
> Cluster clusters_update(subscription_id, resource_group_name, cluster_name, api_version, parameters)



Patch HDInsight cluster with the specified parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster import Cluster
from openapi_client.models.cluster_patch_parameters import ClusterPatchParameters
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
    api_instance = openapi_client.ClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    api_version = 'api_version_example' # str | The HDInsight client API Version.
    parameters = openapi_client.ClusterPatchParameters() # ClusterPatchParameters | The cluster patch request.

    try:
        api_response = api_instance.clusters_update(subscription_id, resource_group_name, cluster_name, api_version, parameters)
        print("The response of ClustersApi->clusters_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **api_version** | **str**| The HDInsight client API Version. | 
 **parameters** | [**ClusterPatchParameters**](ClusterPatchParameters.md)| The cluster patch request. | 

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
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clusters_update_gateway_settings**
> clusters_update_gateway_settings(subscription_id, resource_group_name, cluster_name, api_version, parameters)



Configures the gateway settings on the specified cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.update_gateway_settings_parameters import UpdateGatewaySettingsParameters
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
    api_instance = openapi_client.ClustersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    api_version = 'api_version_example' # str | The HDInsight client API Version.
    parameters = openapi_client.UpdateGatewaySettingsParameters() # UpdateGatewaySettingsParameters | The cluster configurations.

    try:
        api_instance.clusters_update_gateway_settings(subscription_id, resource_group_name, cluster_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling ClustersApi->clusters_update_gateway_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **api_version** | **str**| The HDInsight client API Version. | 
 **parameters** | [**UpdateGatewaySettingsParameters**](UpdateGatewaySettingsParameters.md)| The cluster configurations. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**202** | Accepted response definition |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


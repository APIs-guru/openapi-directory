# openapi_client.ExtensionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extensions_create**](ExtensionsApi.md#extensions_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName} | 
[**extensions_delete**](ExtensionsApi.md#extensions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName} | 
[**extensions_disable_monitoring**](ExtensionsApi.md#extensions_disable_monitoring) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring | 
[**extensions_enable_monitoring**](ExtensionsApi.md#extensions_enable_monitoring) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring | 
[**extensions_get**](ExtensionsApi.md#extensions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName} | 
[**extensions_get_monitoring_status**](ExtensionsApi.md#extensions_get_monitoring_status) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring | 


# **extensions_create**
> extensions_create(subscription_id, resource_group_name, cluster_name, extension_name, api_version, parameters)



Creates an HDInsight cluster extension.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.extension import Extension
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
    api_instance = openapi_client.ExtensionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    extension_name = 'extension_name_example' # str | The name of the cluster extension.
    api_version = 'api_version_example' # str | The HDInsight client API Version.
    parameters = openapi_client.Extension() # Extension | The cluster extensions create request.

    try:
        api_instance.extensions_create(subscription_id, resource_group_name, cluster_name, extension_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling ExtensionsApi->extensions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **extension_name** | **str**| The name of the cluster extension. | 
 **api_version** | **str**| The HDInsight client API Version. | 
 **parameters** | [**Extension**](Extension.md)| The cluster extensions create request. | 

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
**200** | Ok response definition. |  -  |
**202** | Accepted response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extensions_delete**
> extensions_delete(subscription_id, resource_group_name, cluster_name, extension_name, api_version)



Deletes the specified extension for HDInsight cluster.

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
    api_instance = openapi_client.ExtensionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    extension_name = 'extension_name_example' # str | The name of the cluster extension.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_instance.extensions_delete(subscription_id, resource_group_name, cluster_name, extension_name, api_version)
    except Exception as e:
        print("Exception when calling ExtensionsApi->extensions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **extension_name** | **str**| The name of the cluster extension. | 
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

# **extensions_disable_monitoring**
> extensions_disable_monitoring(subscription_id, resource_group_name, cluster_name, api_version)



Disables the Operations Management Suite (OMS) on the HDInsight cluster.

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
    api_instance = openapi_client.ExtensionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_instance.extensions_disable_monitoring(subscription_id, resource_group_name, cluster_name, api_version)
    except Exception as e:
        print("Exception when calling ExtensionsApi->extensions_disable_monitoring: %s\n" % e)
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
**202** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extensions_enable_monitoring**
> extensions_enable_monitoring(subscription_id, resource_group_name, cluster_name, api_version, parameters)



Enables the Operations Management Suite (OMS) on the HDInsight cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster_monitoring_request import ClusterMonitoringRequest
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
    api_instance = openapi_client.ExtensionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    api_version = 'api_version_example' # str | The HDInsight client API Version.
    parameters = openapi_client.ClusterMonitoringRequest() # ClusterMonitoringRequest | The Operations Management Suite (OMS) workspace parameters.

    try:
        api_instance.extensions_enable_monitoring(subscription_id, resource_group_name, cluster_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling ExtensionsApi->extensions_enable_monitoring: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **api_version** | **str**| The HDInsight client API Version. | 
 **parameters** | [**ClusterMonitoringRequest**](ClusterMonitoringRequest.md)| The Operations Management Suite (OMS) workspace parameters. | 

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
**200** | Ok response definition. |  -  |
**202** | Accepted response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extensions_get**
> Extension extensions_get(subscription_id, resource_group_name, cluster_name, extension_name, api_version)



Gets the extension properties for the specified HDInsight cluster extension.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.extension import Extension
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
    api_instance = openapi_client.ExtensionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    extension_name = 'extension_name_example' # str | The name of the cluster extension.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_response = api_instance.extensions_get(subscription_id, resource_group_name, cluster_name, extension_name, api_version)
        print("The response of ExtensionsApi->extensions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExtensionsApi->extensions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **extension_name** | **str**| The name of the cluster extension. | 
 **api_version** | **str**| The HDInsight client API Version. | 

### Return type

[**Extension**](Extension.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extensions_get_monitoring_status**
> ClusterMonitoringResponse extensions_get_monitoring_status(subscription_id, resource_group_name, cluster_name, api_version)



Gets the status of Operations Management Suite (OMS) on the HDInsight cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cluster_monitoring_response import ClusterMonitoringResponse
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
    api_instance = openapi_client.ExtensionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_response = api_instance.extensions_get_monitoring_status(subscription_id, resource_group_name, cluster_name, api_version)
        print("The response of ExtensionsApi->extensions_get_monitoring_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExtensionsApi->extensions_get_monitoring_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **api_version** | **str**| The HDInsight client API Version. | 

### Return type

[**ClusterMonitoringResponse**](ClusterMonitoringResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


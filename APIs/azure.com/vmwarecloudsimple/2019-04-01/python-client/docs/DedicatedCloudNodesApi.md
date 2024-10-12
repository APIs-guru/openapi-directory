# openapi_client.DedicatedCloudNodesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dedicated_cloud_nodes_create_or_update**](DedicatedCloudNodesApi.md#dedicated_cloud_nodes_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/{dedicatedCloudNodeName} | Implements dedicated cloud node PUT method
[**dedicated_cloud_nodes_delete**](DedicatedCloudNodesApi.md#dedicated_cloud_nodes_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/{dedicatedCloudNodeName} | Implements dedicated cloud node DELETE method
[**dedicated_cloud_nodes_get**](DedicatedCloudNodesApi.md#dedicated_cloud_nodes_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/{dedicatedCloudNodeName} | Implements dedicated cloud node GET method
[**dedicated_cloud_nodes_list_by_resource_group**](DedicatedCloudNodesApi.md#dedicated_cloud_nodes_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes | Implements list of dedicated cloud nodes within RG method
[**dedicated_cloud_nodes_list_by_subscription**](DedicatedCloudNodesApi.md#dedicated_cloud_nodes_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes | Implements list of dedicated cloud nodes within subscription method
[**dedicated_cloud_nodes_update**](DedicatedCloudNodesApi.md#dedicated_cloud_nodes_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/{dedicatedCloudNodeName} | Implements dedicated cloud node PATCH method


# **dedicated_cloud_nodes_create_or_update**
> DedicatedCloudNode dedicated_cloud_nodes_create_or_update(subscription_id, resource_group_name, referer, dedicated_cloud_node_name, api_version, dedicated_cloud_node_request)

Implements dedicated cloud node PUT method

Returns dedicated cloud node by its name

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_cloud_node import DedicatedCloudNode
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
    api_instance = openapi_client.DedicatedCloudNodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    referer = 'referer_example' # str | referer url
    dedicated_cloud_node_name = 'dedicated_cloud_node_name_example' # str | dedicated cloud node name
    api_version = 'api_version_example' # str | Client API version.
    dedicated_cloud_node_request = openapi_client.DedicatedCloudNode() # DedicatedCloudNode | Create Dedicated Cloud Node request

    try:
        # Implements dedicated cloud node PUT method
        api_response = api_instance.dedicated_cloud_nodes_create_or_update(subscription_id, resource_group_name, referer, dedicated_cloud_node_name, api_version, dedicated_cloud_node_request)
        print("The response of DedicatedCloudNodesApi->dedicated_cloud_nodes_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedCloudNodesApi->dedicated_cloud_nodes_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **referer** | **str**| referer url | 
 **dedicated_cloud_node_name** | **str**| dedicated cloud node name | 
 **api_version** | **str**| Client API version. | 
 **dedicated_cloud_node_request** | [**DedicatedCloudNode**](DedicatedCloudNode.md)| Create Dedicated Cloud Node request | 

### Return type

[**DedicatedCloudNode**](DedicatedCloudNode.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If resource is created or updated successfully, 200 should be returned |  * Retry-After -  <br>  * Azure-AsyncOperation -  <br>  * Location -  <br>  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_cloud_nodes_delete**
> dedicated_cloud_nodes_delete(subscription_id, resource_group_name, dedicated_cloud_node_name, api_version)

Implements dedicated cloud node DELETE method

Delete dedicated cloud node

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
    api_instance = openapi_client.DedicatedCloudNodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    dedicated_cloud_node_name = 'dedicated_cloud_node_name_example' # str | dedicated cloud node name
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements dedicated cloud node DELETE method
        api_instance.dedicated_cloud_nodes_delete(subscription_id, resource_group_name, dedicated_cloud_node_name, api_version)
    except Exception as e:
        print("Exception when calling DedicatedCloudNodesApi->dedicated_cloud_nodes_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **dedicated_cloud_node_name** | **str**| dedicated cloud node name | 
 **api_version** | **str**| Client API version. | 

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
**204** | no content. resource does not exist and the request is well formed |  -  |
**0** | General Error |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_cloud_nodes_get**
> DedicatedCloudNode dedicated_cloud_nodes_get(subscription_id, resource_group_name, dedicated_cloud_node_name, api_version)

Implements dedicated cloud node GET method

Returns dedicated cloud node

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_cloud_node import DedicatedCloudNode
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
    api_instance = openapi_client.DedicatedCloudNodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    dedicated_cloud_node_name = 'dedicated_cloud_node_name_example' # str | dedicated cloud node name
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements dedicated cloud node GET method
        api_response = api_instance.dedicated_cloud_nodes_get(subscription_id, resource_group_name, dedicated_cloud_node_name, api_version)
        print("The response of DedicatedCloudNodesApi->dedicated_cloud_nodes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedCloudNodesApi->dedicated_cloud_nodes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **dedicated_cloud_node_name** | **str**| dedicated cloud node name | 
 **api_version** | **str**| Client API version. | 

### Return type

[**DedicatedCloudNode**](DedicatedCloudNode.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_cloud_nodes_list_by_resource_group**
> DedicatedCloudNodeListResponse dedicated_cloud_nodes_list_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, top=top, skip_token=skip_token)

Implements list of dedicated cloud nodes within RG method

Returns list of dedicate cloud nodes within resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_cloud_node_list_response import DedicatedCloudNodeListResponse
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
    api_instance = openapi_client.DedicatedCloudNodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    api_version = 'api_version_example' # str | Client API version.
    filter = 'filter_example' # str | The filter to apply on the list operation (optional)
    top = 56 # int | The maximum number of record sets to return (optional)
    skip_token = 'skip_token_example' # str | to be used by nextLink implementation (optional)

    try:
        # Implements list of dedicated cloud nodes within RG method
        api_response = api_instance.dedicated_cloud_nodes_list_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, top=top, skip_token=skip_token)
        print("The response of DedicatedCloudNodesApi->dedicated_cloud_nodes_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedCloudNodesApi->dedicated_cloud_nodes_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **api_version** | **str**| Client API version. | 
 **filter** | **str**| The filter to apply on the list operation | [optional] 
 **top** | **int**| The maximum number of record sets to return | [optional] 
 **skip_token** | **str**| to be used by nextLink implementation | [optional] 

### Return type

[**DedicatedCloudNodeListResponse**](DedicatedCloudNodeListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_cloud_nodes_list_by_subscription**
> DedicatedCloudNodeListResponse dedicated_cloud_nodes_list_by_subscription(subscription_id, api_version, filter=filter, top=top, skip_token=skip_token)

Implements list of dedicated cloud nodes within subscription method

Returns list of dedicate cloud nodes within subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_cloud_node_list_response import DedicatedCloudNodeListResponse
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
    api_instance = openapi_client.DedicatedCloudNodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    api_version = 'api_version_example' # str | Client API version.
    filter = 'filter_example' # str | The filter to apply on the list operation (optional)
    top = 56 # int | The maximum number of record sets to return (optional)
    skip_token = 'skip_token_example' # str | to be used by nextLink implementation (optional)

    try:
        # Implements list of dedicated cloud nodes within subscription method
        api_response = api_instance.dedicated_cloud_nodes_list_by_subscription(subscription_id, api_version, filter=filter, top=top, skip_token=skip_token)
        print("The response of DedicatedCloudNodesApi->dedicated_cloud_nodes_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedCloudNodesApi->dedicated_cloud_nodes_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **api_version** | **str**| Client API version. | 
 **filter** | **str**| The filter to apply on the list operation | [optional] 
 **top** | **int**| The maximum number of record sets to return | [optional] 
 **skip_token** | **str**| to be used by nextLink implementation | [optional] 

### Return type

[**DedicatedCloudNodeListResponse**](DedicatedCloudNodeListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_cloud_nodes_update**
> DedicatedCloudNode dedicated_cloud_nodes_update(subscription_id, resource_group_name, dedicated_cloud_node_name, api_version, dedicated_cloud_node_request)

Implements dedicated cloud node PATCH method

Patches dedicated node properties

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_cloud_node import DedicatedCloudNode
from openapi_client.models.patch_payload import PatchPayload
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
    api_instance = openapi_client.DedicatedCloudNodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    dedicated_cloud_node_name = 'dedicated_cloud_node_name_example' # str | dedicated cloud node name
    api_version = 'api_version_example' # str | Client API version.
    dedicated_cloud_node_request = openapi_client.PatchPayload() # PatchPayload | Patch Dedicated Cloud Node request

    try:
        # Implements dedicated cloud node PATCH method
        api_response = api_instance.dedicated_cloud_nodes_update(subscription_id, resource_group_name, dedicated_cloud_node_name, api_version, dedicated_cloud_node_request)
        print("The response of DedicatedCloudNodesApi->dedicated_cloud_nodes_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedCloudNodesApi->dedicated_cloud_nodes_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **dedicated_cloud_node_name** | **str**| dedicated cloud node name | 
 **api_version** | **str**| Client API version. | 
 **dedicated_cloud_node_request** | [**PatchPayload**](PatchPayload.md)| Patch Dedicated Cloud Node request | 

### Return type

[**DedicatedCloudNode**](DedicatedCloudNode.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If resource is created or updated successfully, 200 should be returned |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


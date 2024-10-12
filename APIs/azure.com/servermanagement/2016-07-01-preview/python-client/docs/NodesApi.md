# openapi_client.NodesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**node_create**](NodesApi.md#node_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName} | 
[**node_delete**](NodesApi.md#node_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName} | 
[**node_get**](NodesApi.md#node_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName} | 
[**node_list**](NodesApi.md#node_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ServerManagement/nodes | 
[**node_list_for_resource_group**](NodesApi.md#node_list_for_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes | 
[**node_update**](NodesApi.md#node_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServerManagement/nodes/{nodeName} | 


# **node_create**
> NodeResource node_create(subscription_id, api_version, resource_group_name, node_name, gateway_parameters)



Creates or updates a management node.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.node_parameters import NodeParameters
from openapi_client.models.node_resource import NodeResource
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
    api_instance = openapi_client.NodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).
    gateway_parameters = openapi_client.NodeParameters() # NodeParameters | Parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.node_create(subscription_id, api_version, resource_group_name, node_name, gateway_parameters)
        print("The response of NodesApi->node_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodesApi->node_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **node_name** | **str**| The node name (256 characters maximum). | 
 **gateway_parameters** | [**NodeParameters**](NodeParameters.md)| Parameters supplied to the CreateOrUpdate operation. | 

### Return type

[**NodeResource**](NodeResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**201** | The operation completed successfully. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_delete**
> node_delete(subscription_id, api_version, resource_group_name, node_name)



deletes a management node

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
    api_instance = openapi_client.NodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).

    try:
        api_instance.node_delete(subscription_id, api_version, resource_group_name, node_name)
    except Exception as e:
        print("Exception when calling NodesApi->node_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **node_name** | **str**| The node name (256 characters maximum). | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The object exists and was deleted successfully. |  -  |
**204** | The request is well formed but the resource does not exist. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_get**
> NodeResource node_get(subscription_id, api_version, resource_group_name, node_name)



Gets a management node.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.node_resource import NodeResource
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
    api_instance = openapi_client.NodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).

    try:
        api_response = api_instance.node_get(subscription_id, api_version, resource_group_name, node_name)
        print("The response of NodesApi->node_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodesApi->node_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **node_name** | **str**| The node name (256 characters maximum). | 

### Return type

[**NodeResource**](NodeResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The object exists and was deleted successfully. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_list**
> NodeResources node_list(subscription_id, api_version)



Lists nodes in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.node_resources import NodeResources
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
    api_instance = openapi_client.NodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.

    try:
        api_response = api_instance.node_list(subscription_id, api_version)
        print("The response of NodesApi->node_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodesApi->node_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 

### Return type

[**NodeResources**](NodeResources.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_list_for_resource_group**
> NodeResources node_list_for_resource_group(subscription_id, api_version, resource_group_name)



Lists nodes in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.node_resources import NodeResources
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
    api_instance = openapi_client.NodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.

    try:
        api_response = api_instance.node_list_for_resource_group(subscription_id, api_version, resource_group_name)
        print("The response of NodesApi->node_list_for_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodesApi->node_list_for_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 

### Return type

[**NodeResources**](NodeResources.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_update**
> NodeResource node_update(subscription_id, api_version, resource_group_name, node_name, node_parameters)



Updates a management node.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.node_parameters import NodeParameters
from openapi_client.models.node_resource import NodeResource
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
    api_instance = openapi_client.NodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API Version.
    resource_group_name = 'resource_group_name_example' # str | The resource group name uniquely identifies the resource group within the user subscriptionId.
    node_name = 'node_name_example' # str | The node name (256 characters maximum).
    node_parameters = openapi_client.NodeParameters() # NodeParameters | Parameters supplied to the CreateOrUpdate operation.

    try:
        api_response = api_instance.node_update(subscription_id, api_version, resource_group_name, node_name, node_parameters)
        print("The response of NodesApi->node_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodesApi->node_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | 
 **resource_group_name** | **str**| The resource group name uniquely identifies the resource group within the user subscriptionId. | 
 **node_name** | **str**| The node name (256 characters maximum). | 
 **node_parameters** | [**NodeParameters**](NodeParameters.md)| Parameters supplied to the CreateOrUpdate operation. | 

### Return type

[**NodeResource**](NodeResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**202** | Accepted: Location header contains the URL where the status of the long running operation can be checked. |  -  |
**0** | Default Response. It will be deserialized as per the error definition specified in the schema, and an exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


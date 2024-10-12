# openapi_client.ExpressRoutePortsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**express_route_ports_create_or_update**](ExpressRoutePortsApi.md#express_route_ports_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName} | 
[**express_route_ports_delete**](ExpressRoutePortsApi.md#express_route_ports_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName} | 
[**express_route_ports_get**](ExpressRoutePortsApi.md#express_route_ports_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName} | 
[**express_route_ports_list**](ExpressRoutePortsApi.md#express_route_ports_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/ExpressRoutePorts | 
[**express_route_ports_list_by_resource_group**](ExpressRoutePortsApi.md#express_route_ports_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts | 
[**express_route_ports_update_tags**](ExpressRoutePortsApi.md#express_route_ports_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName} | 


# **express_route_ports_create_or_update**
> ExpressRoutePort express_route_ports_create_or_update(subscription_id, api_version, resource_group_name, express_route_port_name, parameters)



Creates or updates the specified ExpressRoutePort resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_port import ExpressRoutePort
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
    api_instance = openapi_client.ExpressRoutePortsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_port_name = 'express_route_port_name_example' # str | The name of the ExpressRoutePort resource.
    parameters = openapi_client.ExpressRoutePort() # ExpressRoutePort | Parameters supplied to the create ExpressRoutePort operation.

    try:
        api_response = api_instance.express_route_ports_create_or_update(subscription_id, api_version, resource_group_name, express_route_port_name, parameters)
        print("The response of ExpressRoutePortsApi->express_route_ports_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRoutePortsApi->express_route_ports_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_port_name** | **str**| The name of the ExpressRoutePort resource. | 
 **parameters** | [**ExpressRoutePort**](ExpressRoutePort.md)| Parameters supplied to the create ExpressRoutePort operation. | 

### Return type

[**ExpressRoutePort**](ExpressRoutePort.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ExpressRoutePort resource. |  -  |
**201** | Create successful. The operation returns the resulting ExpressRoutePort resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_ports_delete**
> express_route_ports_delete(subscription_id, api_version, resource_group_name, express_route_port_name)



Deletes the specified ExpressRoutePort resource.

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
    api_instance = openapi_client.ExpressRoutePortsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_port_name = 'express_route_port_name_example' # str | The name of the ExpressRoutePort resource.

    try:
        api_instance.express_route_ports_delete(subscription_id, api_version, resource_group_name, express_route_port_name)
    except Exception as e:
        print("Exception when calling ExpressRoutePortsApi->express_route_ports_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_port_name** | **str**| The name of the ExpressRoutePort resource. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Request successful. Resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_ports_get**
> ExpressRoutePort express_route_ports_get(subscription_id, api_version, resource_group_name, express_route_port_name)



Retrieves the requested ExpressRoutePort resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_port import ExpressRoutePort
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
    api_instance = openapi_client.ExpressRoutePortsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_port_name = 'express_route_port_name_example' # str | The name of ExpressRoutePort.

    try:
        api_response = api_instance.express_route_ports_get(subscription_id, api_version, resource_group_name, express_route_port_name)
        print("The response of ExpressRoutePortsApi->express_route_ports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRoutePortsApi->express_route_ports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_port_name** | **str**| The name of ExpressRoutePort. | 

### Return type

[**ExpressRoutePort**](ExpressRoutePort.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the requested ExpressRoutePort resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_ports_list**
> ExpressRoutePortListResult express_route_ports_list(subscription_id, api_version)



List all the ExpressRoutePort resources in the specified subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_port_list_result import ExpressRoutePortListResult
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
    api_instance = openapi_client.ExpressRoutePortsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.express_route_ports_list(subscription_id, api_version)
        print("The response of ExpressRoutePortsApi->express_route_ports_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRoutePortsApi->express_route_ports_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ExpressRoutePortListResult**](ExpressRoutePortListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of ExpressRoutePort resources. If there are no ExpressRoutePort resources then an empty list is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_ports_list_by_resource_group**
> ExpressRoutePortListResult express_route_ports_list_by_resource_group(subscription_id, api_version, resource_group_name)



List all the ExpressRoutePort resources in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_port_list_result import ExpressRoutePortListResult
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
    api_instance = openapi_client.ExpressRoutePortsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.

    try:
        api_response = api_instance.express_route_ports_list_by_resource_group(subscription_id, api_version, resource_group_name)
        print("The response of ExpressRoutePortsApi->express_route_ports_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRoutePortsApi->express_route_ports_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| The name of the resource group. | 

### Return type

[**ExpressRoutePortListResult**](ExpressRoutePortListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of ExpressRoutePort resources. If there are no ExpressRoutePort resources then an empty list is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_ports_update_tags**
> ExpressRoutePort express_route_ports_update_tags(subscription_id, api_version, resource_group_name, express_route_port_name, parameters)



Update ExpressRoutePort tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_port import ExpressRoutePort
from openapi_client.models.express_route_ports_update_tags_request import ExpressRoutePortsUpdateTagsRequest
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
    api_instance = openapi_client.ExpressRoutePortsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_port_name = 'express_route_port_name_example' # str | The name of the ExpressRoutePort resource.
    parameters = openapi_client.ExpressRoutePortsUpdateTagsRequest() # ExpressRoutePortsUpdateTagsRequest | Parameters supplied to update ExpressRoutePort resource tags.

    try:
        api_response = api_instance.express_route_ports_update_tags(subscription_id, api_version, resource_group_name, express_route_port_name, parameters)
        print("The response of ExpressRoutePortsApi->express_route_ports_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRoutePortsApi->express_route_ports_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_port_name** | **str**| The name of the ExpressRoutePort resource. | 
 **parameters** | [**ExpressRoutePortsUpdateTagsRequest**](ExpressRoutePortsUpdateTagsRequest.md)| Parameters supplied to update ExpressRoutePort resource tags. | 

### Return type

[**ExpressRoutePort**](ExpressRoutePort.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ExpressRoutePort resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


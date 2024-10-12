# openapi_client.MeshGatewaysApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mesh_gateway_create_or_update**](MeshGatewaysApi.md#mesh_gateway_create_or_update) | **PUT** /Resources/Gateways/{gatewayResourceName} | Creates or updates a Gateway resource.
[**mesh_gateway_delete**](MeshGatewaysApi.md#mesh_gateway_delete) | **DELETE** /Resources/Gateways/{gatewayResourceName} | Deletes the Gateway resource.
[**mesh_gateway_get**](MeshGatewaysApi.md#mesh_gateway_get) | **GET** /Resources/Gateways/{gatewayResourceName} | Gets the Gateway resource with the given name.
[**mesh_gateway_list**](MeshGatewaysApi.md#mesh_gateway_list) | **GET** /Resources/Gateways | Lists all the gateway resources.


# **mesh_gateway_create_or_update**
> GatewayResourceDescription mesh_gateway_create_or_update(api_version, gateway_resource_name, gateway_resource_description)

Creates or updates a Gateway resource.

Creates a Gateway resource with the specified name, description and properties. If Gateway resource with the same name exists, then it is updated with the specified description and properties. Use Gateway resource to provide public connectivity to application services.

### Example


```python
import openapi_client
from openapi_client.models.gateway_resource_description import GatewayResourceDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshGatewaysApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    gateway_resource_name = 'gateway_resource_name_example' # str | The identity of the gateway.
    gateway_resource_description = openapi_client.GatewayResourceDescription() # GatewayResourceDescription | Description for creating a Gateway resource.

    try:
        # Creates or updates a Gateway resource.
        api_response = api_instance.mesh_gateway_create_or_update(api_version, gateway_resource_name, gateway_resource_description)
        print("The response of MeshGatewaysApi->mesh_gateway_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshGatewaysApi->mesh_gateway_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **gateway_resource_name** | **str**| The identity of the gateway. | 
 **gateway_resource_description** | [**GatewayResourceDescription**](GatewayResourceDescription.md)| Description for creating a Gateway resource. | 

### Return type

[**GatewayResourceDescription**](GatewayResourceDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_gateway_delete**
> mesh_gateway_delete(api_version, gateway_resource_name)

Deletes the Gateway resource.

Deletes the Gateway resource identified by the name.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshGatewaysApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    gateway_resource_name = 'gateway_resource_name_example' # str | The identity of the gateway.

    try:
        # Deletes the Gateway resource.
        api_instance.mesh_gateway_delete(api_version, gateway_resource_name)
    except Exception as e:
        print("Exception when calling MeshGatewaysApi->mesh_gateway_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **gateway_resource_name** | **str**| The identity of the gateway. | 

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | No Content - the specified gateway was not found. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_gateway_get**
> GatewayResourceDescription mesh_gateway_get(api_version, gateway_resource_name)

Gets the Gateway resource with the given name.

Gets the information about the Gateway resource with the given name. The information include the description and other properties of the Gateway.

### Example


```python
import openapi_client
from openapi_client.models.gateway_resource_description import GatewayResourceDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshGatewaysApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    gateway_resource_name = 'gateway_resource_name_example' # str | The identity of the gateway.

    try:
        # Gets the Gateway resource with the given name.
        api_response = api_instance.mesh_gateway_get(api_version, gateway_resource_name)
        print("The response of MeshGatewaysApi->mesh_gateway_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshGatewaysApi->mesh_gateway_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **gateway_resource_name** | **str**| The identity of the gateway. | 

### Return type

[**GatewayResourceDescription**](GatewayResourceDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_gateway_list**
> PagedGatewayResourceDescriptionList mesh_gateway_list(api_version)

Lists all the gateway resources.

Gets the information about all gateway resources in a given resource group. The information include the description and other properties of the Gateway.

### Example


```python
import openapi_client
from openapi_client.models.paged_gateway_resource_description_list import PagedGatewayResourceDescriptionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshGatewaysApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)

    try:
        # Lists all the gateway resources.
        api_response = api_instance.mesh_gateway_list(api_version)
        print("The response of MeshGatewaysApi->mesh_gateway_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshGatewaysApi->mesh_gateway_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]

### Return type

[**PagedGatewayResourceDescriptionList**](PagedGatewayResourceDescriptionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


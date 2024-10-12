# openapi_client.StacksApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_network_switch_stack_1**](StacksApi.md#add_network_switch_stack_1) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/add | Add a switch to a stack
[**create_network_switch_stack_1**](StacksApi.md#create_network_switch_stack_1) | **POST** /networks/{networkId}/switch/stacks | Create a stack
[**create_network_switch_stack_routing_interface_1**](StacksApi.md#create_network_switch_stack_routing_interface_1) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | Create a layer 3 interface for a switch stack
[**create_network_switch_stack_routing_static_route_1**](StacksApi.md#create_network_switch_stack_routing_static_route_1) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | Create a layer 3 static route for a switch stack
[**delete_network_switch_stack_1**](StacksApi.md#delete_network_switch_stack_1) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId} | Delete a stack
[**delete_network_switch_stack_routing_interface_1**](StacksApi.md#delete_network_switch_stack_routing_interface_1) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Delete a layer 3 interface from a switch stack
[**delete_network_switch_stack_routing_static_route_1**](StacksApi.md#delete_network_switch_stack_routing_static_route_1) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch stack
[**get_network_switch_stack_1**](StacksApi.md#get_network_switch_stack_1) | **GET** /networks/{networkId}/switch/stacks/{switchStackId} | Show a switch stack
[**get_network_switch_stack_routing_interface_1**](StacksApi.md#get_network_switch_stack_routing_interface_1) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Return a layer 3 interface from a switch stack
[**get_network_switch_stack_routing_interface_dhcp_1**](StacksApi.md#get_network_switch_stack_routing_interface_dhcp_1) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch stack
[**get_network_switch_stack_routing_interfaces_1**](StacksApi.md#get_network_switch_stack_routing_interfaces_1) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | List layer 3 interfaces for a switch stack
[**get_network_switch_stack_routing_static_route_1**](StacksApi.md#get_network_switch_stack_routing_static_route_1) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch stack
[**get_network_switch_stack_routing_static_routes_1**](StacksApi.md#get_network_switch_stack_routing_static_routes_1) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | List layer 3 static routes for a switch stack
[**get_network_switch_stacks_1**](StacksApi.md#get_network_switch_stacks_1) | **GET** /networks/{networkId}/switch/stacks | List the switch stacks in a network
[**remove_network_switch_stack_1**](StacksApi.md#remove_network_switch_stack_1) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/remove | Remove a switch from a stack
[**update_network_switch_stack_routing_interface_1**](StacksApi.md#update_network_switch_stack_routing_interface_1) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Update a layer 3 interface for a switch stack
[**update_network_switch_stack_routing_interface_dhcp_1**](StacksApi.md#update_network_switch_stack_routing_interface_dhcp_1) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch stack
[**update_network_switch_stack_routing_static_route_1**](StacksApi.md#update_network_switch_stack_routing_static_route_1) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch stack


# **add_network_switch_stack_1**
> object add_network_switch_stack_1(network_id, switch_stack_id, add_network_switch_stack_request)

Add a switch to a stack

Add a switch to a stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.add_network_switch_stack_request import AddNetworkSwitchStackRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    add_network_switch_stack_request = openapi_client.AddNetworkSwitchStackRequest() # AddNetworkSwitchStackRequest | 

    try:
        # Add a switch to a stack
        api_response = api_instance.add_network_switch_stack_1(network_id, switch_stack_id, add_network_switch_stack_request)
        print("The response of StacksApi->add_network_switch_stack_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->add_network_switch_stack_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **add_network_switch_stack_request** | [**AddNetworkSwitchStackRequest**](AddNetworkSwitchStackRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_switch_stack_1**
> object create_network_switch_stack_1(network_id, create_network_switch_stack_request)

Create a stack

Create a stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_stack_request import CreateNetworkSwitchStackRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_stack_request = openapi_client.CreateNetworkSwitchStackRequest() # CreateNetworkSwitchStackRequest | 

    try:
        # Create a stack
        api_response = api_instance.create_network_switch_stack_1(network_id, create_network_switch_stack_request)
        print("The response of StacksApi->create_network_switch_stack_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->create_network_switch_stack_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_stack_request** | [**CreateNetworkSwitchStackRequest**](CreateNetworkSwitchStackRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_switch_stack_routing_interface_1**
> object create_network_switch_stack_routing_interface_1(network_id, switch_stack_id, create_network_switch_stack_routing_interface_request)

Create a layer 3 interface for a switch stack

Create a layer 3 interface for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_stack_routing_interface_request import CreateNetworkSwitchStackRoutingInterfaceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    create_network_switch_stack_routing_interface_request = openapi_client.CreateNetworkSwitchStackRoutingInterfaceRequest() # CreateNetworkSwitchStackRoutingInterfaceRequest | 

    try:
        # Create a layer 3 interface for a switch stack
        api_response = api_instance.create_network_switch_stack_routing_interface_1(network_id, switch_stack_id, create_network_switch_stack_routing_interface_request)
        print("The response of StacksApi->create_network_switch_stack_routing_interface_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->create_network_switch_stack_routing_interface_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **create_network_switch_stack_routing_interface_request** | [**CreateNetworkSwitchStackRoutingInterfaceRequest**](CreateNetworkSwitchStackRoutingInterfaceRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_switch_stack_routing_static_route_1**
> object create_network_switch_stack_routing_static_route_1(network_id, switch_stack_id, create_device_switch_routing_static_route_request)

Create a layer 3 static route for a switch stack

Create a layer 3 static route for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_device_switch_routing_static_route_request import CreateDeviceSwitchRoutingStaticRouteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    create_device_switch_routing_static_route_request = openapi_client.CreateDeviceSwitchRoutingStaticRouteRequest() # CreateDeviceSwitchRoutingStaticRouteRequest | 

    try:
        # Create a layer 3 static route for a switch stack
        api_response = api_instance.create_network_switch_stack_routing_static_route_1(network_id, switch_stack_id, create_device_switch_routing_static_route_request)
        print("The response of StacksApi->create_network_switch_stack_routing_static_route_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->create_network_switch_stack_routing_static_route_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **create_device_switch_routing_static_route_request** | [**CreateDeviceSwitchRoutingStaticRouteRequest**](CreateDeviceSwitchRoutingStaticRouteRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_switch_stack_1**
> delete_network_switch_stack_1(network_id, switch_stack_id)

Delete a stack

Delete a stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 

    try:
        # Delete a stack
        api_instance.delete_network_switch_stack_1(network_id, switch_stack_id)
    except Exception as e:
        print("Exception when calling StacksApi->delete_network_switch_stack_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_switch_stack_routing_interface_1**
> delete_network_switch_stack_routing_interface_1(network_id, switch_stack_id, interface_id)

Delete a layer 3 interface from a switch stack

Delete a layer 3 interface from a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Delete a layer 3 interface from a switch stack
        api_instance.delete_network_switch_stack_routing_interface_1(network_id, switch_stack_id, interface_id)
    except Exception as e:
        print("Exception when calling StacksApi->delete_network_switch_stack_routing_interface_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **interface_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_switch_stack_routing_static_route_1**
> delete_network_switch_stack_routing_static_route_1(network_id, switch_stack_id, static_route_id)

Delete a layer 3 static route for a switch stack

Delete a layer 3 static route for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Delete a layer 3 static route for a switch stack
        api_instance.delete_network_switch_stack_routing_static_route_1(network_id, switch_stack_id, static_route_id)
    except Exception as e:
        print("Exception when calling StacksApi->delete_network_switch_stack_routing_static_route_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **static_route_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_switch_stack_1**
> GetNetworkSwitchStack200Response get_network_switch_stack_1(network_id, switch_stack_id)

Show a switch stack

Show a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_stack200_response import GetNetworkSwitchStack200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 

    try:
        # Show a switch stack
        api_response = api_instance.get_network_switch_stack_1(network_id, switch_stack_id)
        print("The response of StacksApi->get_network_switch_stack_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->get_network_switch_stack_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 

### Return type

[**GetNetworkSwitchStack200Response**](GetNetworkSwitchStack200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_switch_stack_routing_interface_1**
> object get_network_switch_stack_routing_interface_1(network_id, switch_stack_id, interface_id)

Return a layer 3 interface from a switch stack

Return a layer 3 interface from a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Return a layer 3 interface from a switch stack
        api_response = api_instance.get_network_switch_stack_routing_interface_1(network_id, switch_stack_id, interface_id)
        print("The response of StacksApi->get_network_switch_stack_routing_interface_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->get_network_switch_stack_routing_interface_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **interface_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_switch_stack_routing_interface_dhcp_1**
> object get_network_switch_stack_routing_interface_dhcp_1(network_id, switch_stack_id, interface_id)

Return a layer 3 interface DHCP configuration for a switch stack

Return a layer 3 interface DHCP configuration for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Return a layer 3 interface DHCP configuration for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_interface_dhcp_1(network_id, switch_stack_id, interface_id)
        print("The response of StacksApi->get_network_switch_stack_routing_interface_dhcp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->get_network_switch_stack_routing_interface_dhcp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **interface_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_switch_stack_routing_interfaces_1**
> List[object] get_network_switch_stack_routing_interfaces_1(network_id, switch_stack_id)

List layer 3 interfaces for a switch stack

List layer 3 interfaces for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 

    try:
        # List layer 3 interfaces for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_interfaces_1(network_id, switch_stack_id)
        print("The response of StacksApi->get_network_switch_stack_routing_interfaces_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->get_network_switch_stack_routing_interfaces_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_switch_stack_routing_static_route_1**
> object get_network_switch_stack_routing_static_route_1(network_id, switch_stack_id, static_route_id)

Return a layer 3 static route for a switch stack

Return a layer 3 static route for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Return a layer 3 static route for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_static_route_1(network_id, switch_stack_id, static_route_id)
        print("The response of StacksApi->get_network_switch_stack_routing_static_route_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->get_network_switch_stack_routing_static_route_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **static_route_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_switch_stack_routing_static_routes_1**
> List[object] get_network_switch_stack_routing_static_routes_1(network_id, switch_stack_id)

List layer 3 static routes for a switch stack

List layer 3 static routes for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 

    try:
        # List layer 3 static routes for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_static_routes_1(network_id, switch_stack_id)
        print("The response of StacksApi->get_network_switch_stack_routing_static_routes_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->get_network_switch_stack_routing_static_routes_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_switch_stacks_1**
> List[object] get_network_switch_stacks_1(network_id)

List the switch stacks in a network

List the switch stacks in a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the switch stacks in a network
        api_response = api_instance.get_network_switch_stacks_1(network_id)
        print("The response of StacksApi->get_network_switch_stacks_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->get_network_switch_stacks_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_network_switch_stack_1**
> object remove_network_switch_stack_1(network_id, switch_stack_id, remove_network_switch_stack_request)

Remove a switch from a stack

Remove a switch from a stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.remove_network_switch_stack_request import RemoveNetworkSwitchStackRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    remove_network_switch_stack_request = openapi_client.RemoveNetworkSwitchStackRequest() # RemoveNetworkSwitchStackRequest | 

    try:
        # Remove a switch from a stack
        api_response = api_instance.remove_network_switch_stack_1(network_id, switch_stack_id, remove_network_switch_stack_request)
        print("The response of StacksApi->remove_network_switch_stack_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->remove_network_switch_stack_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **remove_network_switch_stack_request** | [**RemoveNetworkSwitchStackRequest**](RemoveNetworkSwitchStackRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_switch_stack_routing_interface_1**
> object update_network_switch_stack_routing_interface_1(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_request=update_network_switch_stack_routing_interface_request)

Update a layer 3 interface for a switch stack

Update a layer 3 interface for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_stack_routing_interface_request import UpdateNetworkSwitchStackRoutingInterfaceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 
    update_network_switch_stack_routing_interface_request = openapi_client.UpdateNetworkSwitchStackRoutingInterfaceRequest() # UpdateNetworkSwitchStackRoutingInterfaceRequest |  (optional)

    try:
        # Update a layer 3 interface for a switch stack
        api_response = api_instance.update_network_switch_stack_routing_interface_1(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_request=update_network_switch_stack_routing_interface_request)
        print("The response of StacksApi->update_network_switch_stack_routing_interface_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->update_network_switch_stack_routing_interface_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **interface_id** | **str**|  | 
 **update_network_switch_stack_routing_interface_request** | [**UpdateNetworkSwitchStackRoutingInterfaceRequest**](UpdateNetworkSwitchStackRoutingInterfaceRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_switch_stack_routing_interface_dhcp_1**
> object update_network_switch_stack_routing_interface_dhcp_1(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_dhcp_request=update_network_switch_stack_routing_interface_dhcp_request)

Update a layer 3 interface DHCP configuration for a switch stack

Update a layer 3 interface DHCP configuration for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_stack_routing_interface_dhcp_request import UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 
    update_network_switch_stack_routing_interface_dhcp_request = openapi_client.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest() # UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest |  (optional)

    try:
        # Update a layer 3 interface DHCP configuration for a switch stack
        api_response = api_instance.update_network_switch_stack_routing_interface_dhcp_1(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_dhcp_request=update_network_switch_stack_routing_interface_dhcp_request)
        print("The response of StacksApi->update_network_switch_stack_routing_interface_dhcp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->update_network_switch_stack_routing_interface_dhcp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **interface_id** | **str**|  | 
 **update_network_switch_stack_routing_interface_dhcp_request** | [**UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest**](UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_switch_stack_routing_static_route_1**
> object update_network_switch_stack_routing_static_route_1(network_id, switch_stack_id, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)

Update a layer 3 static route for a switch stack

Update a layer 3 static route for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_switch_routing_static_route_request import UpdateDeviceSwitchRoutingStaticRouteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StacksApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 
    update_device_switch_routing_static_route_request = openapi_client.UpdateDeviceSwitchRoutingStaticRouteRequest() # UpdateDeviceSwitchRoutingStaticRouteRequest |  (optional)

    try:
        # Update a layer 3 static route for a switch stack
        api_response = api_instance.update_network_switch_stack_routing_static_route_1(network_id, switch_stack_id, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)
        print("The response of StacksApi->update_network_switch_stack_routing_static_route_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StacksApi->update_network_switch_stack_routing_static_route_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **static_route_id** | **str**|  | 
 **update_device_switch_routing_static_route_request** | [**UpdateDeviceSwitchRoutingStaticRouteRequest**](UpdateDeviceSwitchRoutingStaticRouteRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# openapi_client.RoutingApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_device_switch_routing_interface_1**](RoutingApi.md#create_device_switch_routing_interface_1) | **POST** /devices/{serial}/switch/routing/interfaces | Create a layer 3 interface for a switch
[**create_device_switch_routing_static_route_1**](RoutingApi.md#create_device_switch_routing_static_route_1) | **POST** /devices/{serial}/switch/routing/staticRoutes | Create a layer 3 static route for a switch
[**create_network_switch_routing_multicast_rendezvous_point_1**](RoutingApi.md#create_network_switch_routing_multicast_rendezvous_point_1) | **POST** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | Create a multicast rendezvous point
[**create_network_switch_stack_routing_interface_2**](RoutingApi.md#create_network_switch_stack_routing_interface_2) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | Create a layer 3 interface for a switch stack
[**create_network_switch_stack_routing_static_route_2**](RoutingApi.md#create_network_switch_stack_routing_static_route_2) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | Create a layer 3 static route for a switch stack
[**delete_device_switch_routing_interface_1**](RoutingApi.md#delete_device_switch_routing_interface_1) | **DELETE** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Delete a layer 3 interface from the switch
[**delete_device_switch_routing_static_route_1**](RoutingApi.md#delete_device_switch_routing_static_route_1) | **DELETE** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch
[**delete_network_switch_routing_multicast_rendezvous_point_1**](RoutingApi.md#delete_network_switch_routing_multicast_rendezvous_point_1) | **DELETE** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Delete a multicast rendezvous point
[**delete_network_switch_stack_routing_interface_2**](RoutingApi.md#delete_network_switch_stack_routing_interface_2) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Delete a layer 3 interface from a switch stack
[**delete_network_switch_stack_routing_static_route_2**](RoutingApi.md#delete_network_switch_stack_routing_static_route_2) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch stack
[**get_device_switch_routing_interface_1**](RoutingApi.md#get_device_switch_routing_interface_1) | **GET** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Return a layer 3 interface for a switch
[**get_device_switch_routing_interface_dhcp_1**](RoutingApi.md#get_device_switch_routing_interface_dhcp_1) | **GET** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch
[**get_device_switch_routing_interfaces_1**](RoutingApi.md#get_device_switch_routing_interfaces_1) | **GET** /devices/{serial}/switch/routing/interfaces | List layer 3 interfaces for a switch
[**get_device_switch_routing_static_route_1**](RoutingApi.md#get_device_switch_routing_static_route_1) | **GET** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch
[**get_device_switch_routing_static_routes_1**](RoutingApi.md#get_device_switch_routing_static_routes_1) | **GET** /devices/{serial}/switch/routing/staticRoutes | List layer 3 static routes for a switch
[**get_network_switch_routing_multicast_1**](RoutingApi.md#get_network_switch_routing_multicast_1) | **GET** /networks/{networkId}/switch/routing/multicast | Return multicast settings for a network
[**get_network_switch_routing_multicast_rendezvous_point_1**](RoutingApi.md#get_network_switch_routing_multicast_rendezvous_point_1) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Return a multicast rendezvous point
[**get_network_switch_routing_multicast_rendezvous_points_1**](RoutingApi.md#get_network_switch_routing_multicast_rendezvous_points_1) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | List multicast rendezvous points
[**get_network_switch_routing_ospf_1**](RoutingApi.md#get_network_switch_routing_ospf_1) | **GET** /networks/{networkId}/switch/routing/ospf | Return layer 3 OSPF routing configuration
[**get_network_switch_stack_routing_interface_2**](RoutingApi.md#get_network_switch_stack_routing_interface_2) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Return a layer 3 interface from a switch stack
[**get_network_switch_stack_routing_interface_dhcp_2**](RoutingApi.md#get_network_switch_stack_routing_interface_dhcp_2) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch stack
[**get_network_switch_stack_routing_interfaces_2**](RoutingApi.md#get_network_switch_stack_routing_interfaces_2) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | List layer 3 interfaces for a switch stack
[**get_network_switch_stack_routing_static_route_2**](RoutingApi.md#get_network_switch_stack_routing_static_route_2) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch stack
[**get_network_switch_stack_routing_static_routes_2**](RoutingApi.md#get_network_switch_stack_routing_static_routes_2) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | List layer 3 static routes for a switch stack
[**update_device_switch_routing_interface_1**](RoutingApi.md#update_device_switch_routing_interface_1) | **PUT** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Update a layer 3 interface for a switch
[**update_device_switch_routing_interface_dhcp_1**](RoutingApi.md#update_device_switch_routing_interface_dhcp_1) | **PUT** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch
[**update_device_switch_routing_static_route_1**](RoutingApi.md#update_device_switch_routing_static_route_1) | **PUT** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch
[**update_network_switch_routing_multicast_1**](RoutingApi.md#update_network_switch_routing_multicast_1) | **PUT** /networks/{networkId}/switch/routing/multicast | Update multicast settings for a network
[**update_network_switch_routing_multicast_rendezvous_point_1**](RoutingApi.md#update_network_switch_routing_multicast_rendezvous_point_1) | **PUT** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Update a multicast rendezvous point
[**update_network_switch_routing_ospf_1**](RoutingApi.md#update_network_switch_routing_ospf_1) | **PUT** /networks/{networkId}/switch/routing/ospf | Update layer 3 OSPF routing configuration
[**update_network_switch_stack_routing_interface_2**](RoutingApi.md#update_network_switch_stack_routing_interface_2) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Update a layer 3 interface for a switch stack
[**update_network_switch_stack_routing_interface_dhcp_2**](RoutingApi.md#update_network_switch_stack_routing_interface_dhcp_2) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch stack
[**update_network_switch_stack_routing_static_route_2**](RoutingApi.md#update_network_switch_stack_routing_static_route_2) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch stack


# **create_device_switch_routing_interface_1**
> GetDeviceSwitchRoutingInterfaces200ResponseInner create_device_switch_routing_interface_1(serial, create_device_switch_routing_interface_request=create_device_switch_routing_interface_request)

Create a layer 3 interface for a switch

Create a layer 3 interface for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_device_switch_routing_interface_request import CreateDeviceSwitchRoutingInterfaceRequest
from openapi_client.models.get_device_switch_routing_interfaces200_response_inner import GetDeviceSwitchRoutingInterfaces200ResponseInner
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
    api_instance = openapi_client.RoutingApi(api_client)
    serial = 'serial_example' # str | 
    create_device_switch_routing_interface_request = openapi_client.CreateDeviceSwitchRoutingInterfaceRequest() # CreateDeviceSwitchRoutingInterfaceRequest |  (optional)

    try:
        # Create a layer 3 interface for a switch
        api_response = api_instance.create_device_switch_routing_interface_1(serial, create_device_switch_routing_interface_request=create_device_switch_routing_interface_request)
        print("The response of RoutingApi->create_device_switch_routing_interface_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->create_device_switch_routing_interface_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **create_device_switch_routing_interface_request** | [**CreateDeviceSwitchRoutingInterfaceRequest**](CreateDeviceSwitchRoutingInterfaceRequest.md)|  | [optional] 

### Return type

[**GetDeviceSwitchRoutingInterfaces200ResponseInner**](GetDeviceSwitchRoutingInterfaces200ResponseInner.md)

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

# **create_device_switch_routing_static_route_1**
> object create_device_switch_routing_static_route_1(serial, create_device_switch_routing_static_route_request)

Create a layer 3 static route for a switch

Create a layer 3 static route for a switch

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
    api_instance = openapi_client.RoutingApi(api_client)
    serial = 'serial_example' # str | 
    create_device_switch_routing_static_route_request = openapi_client.CreateDeviceSwitchRoutingStaticRouteRequest() # CreateDeviceSwitchRoutingStaticRouteRequest | 

    try:
        # Create a layer 3 static route for a switch
        api_response = api_instance.create_device_switch_routing_static_route_1(serial, create_device_switch_routing_static_route_request)
        print("The response of RoutingApi->create_device_switch_routing_static_route_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->create_device_switch_routing_static_route_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
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

# **create_network_switch_routing_multicast_rendezvous_point_1**
> object create_network_switch_routing_multicast_rendezvous_point_1(network_id, create_network_switch_routing_multicast_rendezvous_point_request)

Create a multicast rendezvous point

Create a multicast rendezvous point

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_routing_multicast_rendezvous_point_request import CreateNetworkSwitchRoutingMulticastRendezvousPointRequest
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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_routing_multicast_rendezvous_point_request = openapi_client.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest() # CreateNetworkSwitchRoutingMulticastRendezvousPointRequest | 

    try:
        # Create a multicast rendezvous point
        api_response = api_instance.create_network_switch_routing_multicast_rendezvous_point_1(network_id, create_network_switch_routing_multicast_rendezvous_point_request)
        print("The response of RoutingApi->create_network_switch_routing_multicast_rendezvous_point_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->create_network_switch_routing_multicast_rendezvous_point_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_routing_multicast_rendezvous_point_request** | [**CreateNetworkSwitchRoutingMulticastRendezvousPointRequest**](CreateNetworkSwitchRoutingMulticastRendezvousPointRequest.md)|  | 

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

# **create_network_switch_stack_routing_interface_2**
> object create_network_switch_stack_routing_interface_2(network_id, switch_stack_id, create_network_switch_stack_routing_interface_request)

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    create_network_switch_stack_routing_interface_request = openapi_client.CreateNetworkSwitchStackRoutingInterfaceRequest() # CreateNetworkSwitchStackRoutingInterfaceRequest | 

    try:
        # Create a layer 3 interface for a switch stack
        api_response = api_instance.create_network_switch_stack_routing_interface_2(network_id, switch_stack_id, create_network_switch_stack_routing_interface_request)
        print("The response of RoutingApi->create_network_switch_stack_routing_interface_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->create_network_switch_stack_routing_interface_2: %s\n" % e)
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

# **create_network_switch_stack_routing_static_route_2**
> object create_network_switch_stack_routing_static_route_2(network_id, switch_stack_id, create_device_switch_routing_static_route_request)

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    create_device_switch_routing_static_route_request = openapi_client.CreateDeviceSwitchRoutingStaticRouteRequest() # CreateDeviceSwitchRoutingStaticRouteRequest | 

    try:
        # Create a layer 3 static route for a switch stack
        api_response = api_instance.create_network_switch_stack_routing_static_route_2(network_id, switch_stack_id, create_device_switch_routing_static_route_request)
        print("The response of RoutingApi->create_network_switch_stack_routing_static_route_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->create_network_switch_stack_routing_static_route_2: %s\n" % e)
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

# **delete_device_switch_routing_interface_1**
> delete_device_switch_routing_interface_1(serial, interface_id)

Delete a layer 3 interface from the switch

Delete a layer 3 interface from the switch

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
    api_instance = openapi_client.RoutingApi(api_client)
    serial = 'serial_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Delete a layer 3 interface from the switch
        api_instance.delete_device_switch_routing_interface_1(serial, interface_id)
    except Exception as e:
        print("Exception when calling RoutingApi->delete_device_switch_routing_interface_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
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

# **delete_device_switch_routing_static_route_1**
> delete_device_switch_routing_static_route_1(serial, static_route_id)

Delete a layer 3 static route for a switch

Delete a layer 3 static route for a switch

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
    api_instance = openapi_client.RoutingApi(api_client)
    serial = 'serial_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Delete a layer 3 static route for a switch
        api_instance.delete_device_switch_routing_static_route_1(serial, static_route_id)
    except Exception as e:
        print("Exception when calling RoutingApi->delete_device_switch_routing_static_route_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
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

# **delete_network_switch_routing_multicast_rendezvous_point_1**
> delete_network_switch_routing_multicast_rendezvous_point_1(network_id, rendezvous_point_id)

Delete a multicast rendezvous point

Delete a multicast rendezvous point

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    rendezvous_point_id = 'rendezvous_point_id_example' # str | 

    try:
        # Delete a multicast rendezvous point
        api_instance.delete_network_switch_routing_multicast_rendezvous_point_1(network_id, rendezvous_point_id)
    except Exception as e:
        print("Exception when calling RoutingApi->delete_network_switch_routing_multicast_rendezvous_point_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rendezvous_point_id** | **str**|  | 

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

# **delete_network_switch_stack_routing_interface_2**
> delete_network_switch_stack_routing_interface_2(network_id, switch_stack_id, interface_id)

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Delete a layer 3 interface from a switch stack
        api_instance.delete_network_switch_stack_routing_interface_2(network_id, switch_stack_id, interface_id)
    except Exception as e:
        print("Exception when calling RoutingApi->delete_network_switch_stack_routing_interface_2: %s\n" % e)
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

# **delete_network_switch_stack_routing_static_route_2**
> delete_network_switch_stack_routing_static_route_2(network_id, switch_stack_id, static_route_id)

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Delete a layer 3 static route for a switch stack
        api_instance.delete_network_switch_stack_routing_static_route_2(network_id, switch_stack_id, static_route_id)
    except Exception as e:
        print("Exception when calling RoutingApi->delete_network_switch_stack_routing_static_route_2: %s\n" % e)
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

# **get_device_switch_routing_interface_1**
> GetDeviceSwitchRoutingInterfaces200ResponseInner get_device_switch_routing_interface_1(serial, interface_id)

Return a layer 3 interface for a switch

Return a layer 3 interface for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_switch_routing_interfaces200_response_inner import GetDeviceSwitchRoutingInterfaces200ResponseInner
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
    api_instance = openapi_client.RoutingApi(api_client)
    serial = 'serial_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Return a layer 3 interface for a switch
        api_response = api_instance.get_device_switch_routing_interface_1(serial, interface_id)
        print("The response of RoutingApi->get_device_switch_routing_interface_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_device_switch_routing_interface_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **interface_id** | **str**|  | 

### Return type

[**GetDeviceSwitchRoutingInterfaces200ResponseInner**](GetDeviceSwitchRoutingInterfaces200ResponseInner.md)

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

# **get_device_switch_routing_interface_dhcp_1**
> object get_device_switch_routing_interface_dhcp_1(serial, interface_id)

Return a layer 3 interface DHCP configuration for a switch

Return a layer 3 interface DHCP configuration for a switch

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
    api_instance = openapi_client.RoutingApi(api_client)
    serial = 'serial_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Return a layer 3 interface DHCP configuration for a switch
        api_response = api_instance.get_device_switch_routing_interface_dhcp_1(serial, interface_id)
        print("The response of RoutingApi->get_device_switch_routing_interface_dhcp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_device_switch_routing_interface_dhcp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
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

# **get_device_switch_routing_interfaces_1**
> List[GetDeviceSwitchRoutingInterfaces200ResponseInner] get_device_switch_routing_interfaces_1(serial)

List layer 3 interfaces for a switch

List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_switch_routing_interfaces200_response_inner import GetDeviceSwitchRoutingInterfaces200ResponseInner
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
    api_instance = openapi_client.RoutingApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # List layer 3 interfaces for a switch
        api_response = api_instance.get_device_switch_routing_interfaces_1(serial)
        print("The response of RoutingApi->get_device_switch_routing_interfaces_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_device_switch_routing_interfaces_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

[**List[GetDeviceSwitchRoutingInterfaces200ResponseInner]**](GetDeviceSwitchRoutingInterfaces200ResponseInner.md)

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

# **get_device_switch_routing_static_route_1**
> GetDeviceSwitchRoutingStaticRoute200Response get_device_switch_routing_static_route_1(serial, static_route_id)

Return a layer 3 static route for a switch

Return a layer 3 static route for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_switch_routing_static_route200_response import GetDeviceSwitchRoutingStaticRoute200Response
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
    api_instance = openapi_client.RoutingApi(api_client)
    serial = 'serial_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Return a layer 3 static route for a switch
        api_response = api_instance.get_device_switch_routing_static_route_1(serial, static_route_id)
        print("The response of RoutingApi->get_device_switch_routing_static_route_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_device_switch_routing_static_route_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **static_route_id** | **str**|  | 

### Return type

[**GetDeviceSwitchRoutingStaticRoute200Response**](GetDeviceSwitchRoutingStaticRoute200Response.md)

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

# **get_device_switch_routing_static_routes_1**
> List[object] get_device_switch_routing_static_routes_1(serial)

List layer 3 static routes for a switch

List layer 3 static routes for a switch

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
    api_instance = openapi_client.RoutingApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # List layer 3 static routes for a switch
        api_response = api_instance.get_device_switch_routing_static_routes_1(serial)
        print("The response of RoutingApi->get_device_switch_routing_static_routes_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_device_switch_routing_static_routes_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

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

# **get_network_switch_routing_multicast_1**
> object get_network_switch_routing_multicast_1(network_id)

Return multicast settings for a network

Return multicast settings for a network

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return multicast settings for a network
        api_response = api_instance.get_network_switch_routing_multicast_1(network_id)
        print("The response of RoutingApi->get_network_switch_routing_multicast_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_network_switch_routing_multicast_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_switch_routing_multicast_rendezvous_point_1**
> object get_network_switch_routing_multicast_rendezvous_point_1(network_id, rendezvous_point_id)

Return a multicast rendezvous point

Return a multicast rendezvous point

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    rendezvous_point_id = 'rendezvous_point_id_example' # str | 

    try:
        # Return a multicast rendezvous point
        api_response = api_instance.get_network_switch_routing_multicast_rendezvous_point_1(network_id, rendezvous_point_id)
        print("The response of RoutingApi->get_network_switch_routing_multicast_rendezvous_point_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_network_switch_routing_multicast_rendezvous_point_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rendezvous_point_id** | **str**|  | 

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

# **get_network_switch_routing_multicast_rendezvous_points_1**
> List[List[object]] get_network_switch_routing_multicast_rendezvous_points_1(network_id)

List multicast rendezvous points

List multicast rendezvous points

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List multicast rendezvous points
        api_response = api_instance.get_network_switch_routing_multicast_rendezvous_points_1(network_id)
        print("The response of RoutingApi->get_network_switch_routing_multicast_rendezvous_points_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_network_switch_routing_multicast_rendezvous_points_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**List[List[object]]**

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

# **get_network_switch_routing_ospf_1**
> object get_network_switch_routing_ospf_1(network_id)

Return layer 3 OSPF routing configuration

Return layer 3 OSPF routing configuration

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return layer 3 OSPF routing configuration
        api_response = api_instance.get_network_switch_routing_ospf_1(network_id)
        print("The response of RoutingApi->get_network_switch_routing_ospf_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_network_switch_routing_ospf_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_switch_stack_routing_interface_2**
> object get_network_switch_stack_routing_interface_2(network_id, switch_stack_id, interface_id)

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Return a layer 3 interface from a switch stack
        api_response = api_instance.get_network_switch_stack_routing_interface_2(network_id, switch_stack_id, interface_id)
        print("The response of RoutingApi->get_network_switch_stack_routing_interface_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_network_switch_stack_routing_interface_2: %s\n" % e)
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

# **get_network_switch_stack_routing_interface_dhcp_2**
> object get_network_switch_stack_routing_interface_dhcp_2(network_id, switch_stack_id, interface_id)

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Return a layer 3 interface DHCP configuration for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_interface_dhcp_2(network_id, switch_stack_id, interface_id)
        print("The response of RoutingApi->get_network_switch_stack_routing_interface_dhcp_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_network_switch_stack_routing_interface_dhcp_2: %s\n" % e)
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

# **get_network_switch_stack_routing_interfaces_2**
> List[object] get_network_switch_stack_routing_interfaces_2(network_id, switch_stack_id)

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 

    try:
        # List layer 3 interfaces for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_interfaces_2(network_id, switch_stack_id)
        print("The response of RoutingApi->get_network_switch_stack_routing_interfaces_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_network_switch_stack_routing_interfaces_2: %s\n" % e)
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

# **get_network_switch_stack_routing_static_route_2**
> object get_network_switch_stack_routing_static_route_2(network_id, switch_stack_id, static_route_id)

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Return a layer 3 static route for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_static_route_2(network_id, switch_stack_id, static_route_id)
        print("The response of RoutingApi->get_network_switch_stack_routing_static_route_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_network_switch_stack_routing_static_route_2: %s\n" % e)
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

# **get_network_switch_stack_routing_static_routes_2**
> List[object] get_network_switch_stack_routing_static_routes_2(network_id, switch_stack_id)

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 

    try:
        # List layer 3 static routes for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_static_routes_2(network_id, switch_stack_id)
        print("The response of RoutingApi->get_network_switch_stack_routing_static_routes_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->get_network_switch_stack_routing_static_routes_2: %s\n" % e)
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

# **update_device_switch_routing_interface_1**
> GetDeviceSwitchRoutingInterfaces200ResponseInner update_device_switch_routing_interface_1(serial, interface_id, create_device_switch_routing_interface_request=create_device_switch_routing_interface_request)

Update a layer 3 interface for a switch

Update a layer 3 interface for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_device_switch_routing_interface_request import CreateDeviceSwitchRoutingInterfaceRequest
from openapi_client.models.get_device_switch_routing_interfaces200_response_inner import GetDeviceSwitchRoutingInterfaces200ResponseInner
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
    api_instance = openapi_client.RoutingApi(api_client)
    serial = 'serial_example' # str | 
    interface_id = 'interface_id_example' # str | 
    create_device_switch_routing_interface_request = openapi_client.CreateDeviceSwitchRoutingInterfaceRequest() # CreateDeviceSwitchRoutingInterfaceRequest |  (optional)

    try:
        # Update a layer 3 interface for a switch
        api_response = api_instance.update_device_switch_routing_interface_1(serial, interface_id, create_device_switch_routing_interface_request=create_device_switch_routing_interface_request)
        print("The response of RoutingApi->update_device_switch_routing_interface_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_device_switch_routing_interface_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **interface_id** | **str**|  | 
 **create_device_switch_routing_interface_request** | [**CreateDeviceSwitchRoutingInterfaceRequest**](CreateDeviceSwitchRoutingInterfaceRequest.md)|  | [optional] 

### Return type

[**GetDeviceSwitchRoutingInterfaces200ResponseInner**](GetDeviceSwitchRoutingInterfaces200ResponseInner.md)

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

# **update_device_switch_routing_interface_dhcp_1**
> object update_device_switch_routing_interface_dhcp_1(serial, interface_id, update_device_switch_routing_interface_dhcp_request=update_device_switch_routing_interface_dhcp_request)

Update a layer 3 interface DHCP configuration for a switch

Update a layer 3 interface DHCP configuration for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_switch_routing_interface_dhcp_request import UpdateDeviceSwitchRoutingInterfaceDhcpRequest
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
    api_instance = openapi_client.RoutingApi(api_client)
    serial = 'serial_example' # str | 
    interface_id = 'interface_id_example' # str | 
    update_device_switch_routing_interface_dhcp_request = openapi_client.UpdateDeviceSwitchRoutingInterfaceDhcpRequest() # UpdateDeviceSwitchRoutingInterfaceDhcpRequest |  (optional)

    try:
        # Update a layer 3 interface DHCP configuration for a switch
        api_response = api_instance.update_device_switch_routing_interface_dhcp_1(serial, interface_id, update_device_switch_routing_interface_dhcp_request=update_device_switch_routing_interface_dhcp_request)
        print("The response of RoutingApi->update_device_switch_routing_interface_dhcp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_device_switch_routing_interface_dhcp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **interface_id** | **str**|  | 
 **update_device_switch_routing_interface_dhcp_request** | [**UpdateDeviceSwitchRoutingInterfaceDhcpRequest**](UpdateDeviceSwitchRoutingInterfaceDhcpRequest.md)|  | [optional] 

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

# **update_device_switch_routing_static_route_1**
> object update_device_switch_routing_static_route_1(serial, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)

Update a layer 3 static route for a switch

Update a layer 3 static route for a switch

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
    api_instance = openapi_client.RoutingApi(api_client)
    serial = 'serial_example' # str | 
    static_route_id = 'static_route_id_example' # str | 
    update_device_switch_routing_static_route_request = openapi_client.UpdateDeviceSwitchRoutingStaticRouteRequest() # UpdateDeviceSwitchRoutingStaticRouteRequest |  (optional)

    try:
        # Update a layer 3 static route for a switch
        api_response = api_instance.update_device_switch_routing_static_route_1(serial, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)
        print("The response of RoutingApi->update_device_switch_routing_static_route_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_device_switch_routing_static_route_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
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

# **update_network_switch_routing_multicast_1**
> object update_network_switch_routing_multicast_1(network_id, update_network_switch_routing_multicast_request=update_network_switch_routing_multicast_request)

Update multicast settings for a network

Update multicast settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_routing_multicast_request import UpdateNetworkSwitchRoutingMulticastRequest
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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_routing_multicast_request = openapi_client.UpdateNetworkSwitchRoutingMulticastRequest() # UpdateNetworkSwitchRoutingMulticastRequest |  (optional)

    try:
        # Update multicast settings for a network
        api_response = api_instance.update_network_switch_routing_multicast_1(network_id, update_network_switch_routing_multicast_request=update_network_switch_routing_multicast_request)
        print("The response of RoutingApi->update_network_switch_routing_multicast_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_network_switch_routing_multicast_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_routing_multicast_request** | [**UpdateNetworkSwitchRoutingMulticastRequest**](UpdateNetworkSwitchRoutingMulticastRequest.md)|  | [optional] 

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

# **update_network_switch_routing_multicast_rendezvous_point_1**
> object update_network_switch_routing_multicast_rendezvous_point_1(network_id, rendezvous_point_id, update_network_switch_routing_multicast_rendezvous_point_request)

Update a multicast rendezvous point

Update a multicast rendezvous point

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_routing_multicast_rendezvous_point_request import UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest
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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    rendezvous_point_id = 'rendezvous_point_id_example' # str | 
    update_network_switch_routing_multicast_rendezvous_point_request = openapi_client.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest() # UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest | 

    try:
        # Update a multicast rendezvous point
        api_response = api_instance.update_network_switch_routing_multicast_rendezvous_point_1(network_id, rendezvous_point_id, update_network_switch_routing_multicast_rendezvous_point_request)
        print("The response of RoutingApi->update_network_switch_routing_multicast_rendezvous_point_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_network_switch_routing_multicast_rendezvous_point_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rendezvous_point_id** | **str**|  | 
 **update_network_switch_routing_multicast_rendezvous_point_request** | [**UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest**](UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest.md)|  | 

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

# **update_network_switch_routing_ospf_1**
> object update_network_switch_routing_ospf_1(network_id, update_network_switch_routing_ospf_request=update_network_switch_routing_ospf_request)

Update layer 3 OSPF routing configuration

Update layer 3 OSPF routing configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_routing_ospf_request import UpdateNetworkSwitchRoutingOspfRequest
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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_routing_ospf_request = openapi_client.UpdateNetworkSwitchRoutingOspfRequest() # UpdateNetworkSwitchRoutingOspfRequest |  (optional)

    try:
        # Update layer 3 OSPF routing configuration
        api_response = api_instance.update_network_switch_routing_ospf_1(network_id, update_network_switch_routing_ospf_request=update_network_switch_routing_ospf_request)
        print("The response of RoutingApi->update_network_switch_routing_ospf_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_network_switch_routing_ospf_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_routing_ospf_request** | [**UpdateNetworkSwitchRoutingOspfRequest**](UpdateNetworkSwitchRoutingOspfRequest.md)|  | [optional] 

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

# **update_network_switch_stack_routing_interface_2**
> object update_network_switch_stack_routing_interface_2(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_request=update_network_switch_stack_routing_interface_request)

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 
    update_network_switch_stack_routing_interface_request = openapi_client.UpdateNetworkSwitchStackRoutingInterfaceRequest() # UpdateNetworkSwitchStackRoutingInterfaceRequest |  (optional)

    try:
        # Update a layer 3 interface for a switch stack
        api_response = api_instance.update_network_switch_stack_routing_interface_2(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_request=update_network_switch_stack_routing_interface_request)
        print("The response of RoutingApi->update_network_switch_stack_routing_interface_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_network_switch_stack_routing_interface_2: %s\n" % e)
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

# **update_network_switch_stack_routing_interface_dhcp_2**
> object update_network_switch_stack_routing_interface_dhcp_2(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_dhcp_request=update_network_switch_stack_routing_interface_dhcp_request)

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 
    update_network_switch_stack_routing_interface_dhcp_request = openapi_client.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest() # UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest |  (optional)

    try:
        # Update a layer 3 interface DHCP configuration for a switch stack
        api_response = api_instance.update_network_switch_stack_routing_interface_dhcp_2(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_dhcp_request=update_network_switch_stack_routing_interface_dhcp_request)
        print("The response of RoutingApi->update_network_switch_stack_routing_interface_dhcp_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_network_switch_stack_routing_interface_dhcp_2: %s\n" % e)
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

# **update_network_switch_stack_routing_static_route_2**
> object update_network_switch_stack_routing_static_route_2(network_id, switch_stack_id, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)

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
    api_instance = openapi_client.RoutingApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 
    update_device_switch_routing_static_route_request = openapi_client.UpdateDeviceSwitchRoutingStaticRouteRequest() # UpdateDeviceSwitchRoutingStaticRouteRequest |  (optional)

    try:
        # Update a layer 3 static route for a switch stack
        api_response = api_instance.update_network_switch_stack_routing_static_route_2(network_id, switch_stack_id, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)
        print("The response of RoutingApi->update_network_switch_stack_routing_static_route_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutingApi->update_network_switch_stack_routing_static_route_2: %s\n" % e)
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


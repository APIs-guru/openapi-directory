# openapi_client.StaticRoutesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_device_switch_routing_static_route_2**](StaticRoutesApi.md#create_device_switch_routing_static_route_2) | **POST** /devices/{serial}/switch/routing/staticRoutes | Create a layer 3 static route for a switch
[**create_network_appliance_static_route_1**](StaticRoutesApi.md#create_network_appliance_static_route_1) | **POST** /networks/{networkId}/appliance/staticRoutes | Add a static route for an MX or teleworker network
[**create_network_switch_stack_routing_static_route_3**](StaticRoutesApi.md#create_network_switch_stack_routing_static_route_3) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | Create a layer 3 static route for a switch stack
[**delete_device_switch_routing_static_route_2**](StaticRoutesApi.md#delete_device_switch_routing_static_route_2) | **DELETE** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch
[**delete_network_appliance_static_route_1**](StaticRoutesApi.md#delete_network_appliance_static_route_1) | **DELETE** /networks/{networkId}/appliance/staticRoutes/{staticRouteId} | Delete a static route from an MX or teleworker network
[**delete_network_switch_stack_routing_static_route_3**](StaticRoutesApi.md#delete_network_switch_stack_routing_static_route_3) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch stack
[**get_device_switch_routing_static_route_2**](StaticRoutesApi.md#get_device_switch_routing_static_route_2) | **GET** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch
[**get_device_switch_routing_static_routes_2**](StaticRoutesApi.md#get_device_switch_routing_static_routes_2) | **GET** /devices/{serial}/switch/routing/staticRoutes | List layer 3 static routes for a switch
[**get_network_appliance_static_route_1**](StaticRoutesApi.md#get_network_appliance_static_route_1) | **GET** /networks/{networkId}/appliance/staticRoutes/{staticRouteId} | Return a static route for an MX or teleworker network
[**get_network_appliance_static_routes_1**](StaticRoutesApi.md#get_network_appliance_static_routes_1) | **GET** /networks/{networkId}/appliance/staticRoutes | List the static routes for an MX or teleworker network
[**get_network_switch_stack_routing_static_route_3**](StaticRoutesApi.md#get_network_switch_stack_routing_static_route_3) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch stack
[**get_network_switch_stack_routing_static_routes_3**](StaticRoutesApi.md#get_network_switch_stack_routing_static_routes_3) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | List layer 3 static routes for a switch stack
[**update_device_switch_routing_static_route_2**](StaticRoutesApi.md#update_device_switch_routing_static_route_2) | **PUT** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch
[**update_network_appliance_static_route_1**](StaticRoutesApi.md#update_network_appliance_static_route_1) | **PUT** /networks/{networkId}/appliance/staticRoutes/{staticRouteId} | Update a static route for an MX or teleworker network
[**update_network_switch_stack_routing_static_route_3**](StaticRoutesApi.md#update_network_switch_stack_routing_static_route_3) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch stack


# **create_device_switch_routing_static_route_2**
> object create_device_switch_routing_static_route_2(serial, create_device_switch_routing_static_route_request)

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    serial = 'serial_example' # str | 
    create_device_switch_routing_static_route_request = openapi_client.CreateDeviceSwitchRoutingStaticRouteRequest() # CreateDeviceSwitchRoutingStaticRouteRequest | 

    try:
        # Create a layer 3 static route for a switch
        api_response = api_instance.create_device_switch_routing_static_route_2(serial, create_device_switch_routing_static_route_request)
        print("The response of StaticRoutesApi->create_device_switch_routing_static_route_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->create_device_switch_routing_static_route_2: %s\n" % e)
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

# **create_network_appliance_static_route_1**
> object create_network_appliance_static_route_1(network_id, create_network_appliance_static_route_request)

Add a static route for an MX or teleworker network

Add a static route for an MX or teleworker network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_appliance_static_route_request import CreateNetworkApplianceStaticRouteRequest
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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_appliance_static_route_request = openapi_client.CreateNetworkApplianceStaticRouteRequest() # CreateNetworkApplianceStaticRouteRequest | 

    try:
        # Add a static route for an MX or teleworker network
        api_response = api_instance.create_network_appliance_static_route_1(network_id, create_network_appliance_static_route_request)
        print("The response of StaticRoutesApi->create_network_appliance_static_route_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->create_network_appliance_static_route_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_appliance_static_route_request** | [**CreateNetworkApplianceStaticRouteRequest**](CreateNetworkApplianceStaticRouteRequest.md)|  | 

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

# **create_network_switch_stack_routing_static_route_3**
> object create_network_switch_stack_routing_static_route_3(network_id, switch_stack_id, create_device_switch_routing_static_route_request)

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    create_device_switch_routing_static_route_request = openapi_client.CreateDeviceSwitchRoutingStaticRouteRequest() # CreateDeviceSwitchRoutingStaticRouteRequest | 

    try:
        # Create a layer 3 static route for a switch stack
        api_response = api_instance.create_network_switch_stack_routing_static_route_3(network_id, switch_stack_id, create_device_switch_routing_static_route_request)
        print("The response of StaticRoutesApi->create_network_switch_stack_routing_static_route_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->create_network_switch_stack_routing_static_route_3: %s\n" % e)
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

# **delete_device_switch_routing_static_route_2**
> delete_device_switch_routing_static_route_2(serial, static_route_id)

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    serial = 'serial_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Delete a layer 3 static route for a switch
        api_instance.delete_device_switch_routing_static_route_2(serial, static_route_id)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->delete_device_switch_routing_static_route_2: %s\n" % e)
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

# **delete_network_appliance_static_route_1**
> delete_network_appliance_static_route_1(network_id, static_route_id)

Delete a static route from an MX or teleworker network

Delete a static route from an MX or teleworker network

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Delete a static route from an MX or teleworker network
        api_instance.delete_network_appliance_static_route_1(network_id, static_route_id)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->delete_network_appliance_static_route_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
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

# **delete_network_switch_stack_routing_static_route_3**
> delete_network_switch_stack_routing_static_route_3(network_id, switch_stack_id, static_route_id)

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Delete a layer 3 static route for a switch stack
        api_instance.delete_network_switch_stack_routing_static_route_3(network_id, switch_stack_id, static_route_id)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->delete_network_switch_stack_routing_static_route_3: %s\n" % e)
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

# **get_device_switch_routing_static_route_2**
> GetDeviceSwitchRoutingStaticRoute200Response get_device_switch_routing_static_route_2(serial, static_route_id)

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    serial = 'serial_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Return a layer 3 static route for a switch
        api_response = api_instance.get_device_switch_routing_static_route_2(serial, static_route_id)
        print("The response of StaticRoutesApi->get_device_switch_routing_static_route_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->get_device_switch_routing_static_route_2: %s\n" % e)
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

# **get_device_switch_routing_static_routes_2**
> List[object] get_device_switch_routing_static_routes_2(serial)

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # List layer 3 static routes for a switch
        api_response = api_instance.get_device_switch_routing_static_routes_2(serial)
        print("The response of StaticRoutesApi->get_device_switch_routing_static_routes_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->get_device_switch_routing_static_routes_2: %s\n" % e)
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

# **get_network_appliance_static_route_1**
> object get_network_appliance_static_route_1(network_id, static_route_id)

Return a static route for an MX or teleworker network

Return a static route for an MX or teleworker network

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Return a static route for an MX or teleworker network
        api_response = api_instance.get_network_appliance_static_route_1(network_id, static_route_id)
        print("The response of StaticRoutesApi->get_network_appliance_static_route_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->get_network_appliance_static_route_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
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

# **get_network_appliance_static_routes_1**
> List[object] get_network_appliance_static_routes_1(network_id)

List the static routes for an MX or teleworker network

List the static routes for an MX or teleworker network

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the static routes for an MX or teleworker network
        api_response = api_instance.get_network_appliance_static_routes_1(network_id)
        print("The response of StaticRoutesApi->get_network_appliance_static_routes_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->get_network_appliance_static_routes_1: %s\n" % e)
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

# **get_network_switch_stack_routing_static_route_3**
> object get_network_switch_stack_routing_static_route_3(network_id, switch_stack_id, static_route_id)

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Return a layer 3 static route for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_static_route_3(network_id, switch_stack_id, static_route_id)
        print("The response of StaticRoutesApi->get_network_switch_stack_routing_static_route_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->get_network_switch_stack_routing_static_route_3: %s\n" % e)
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

# **get_network_switch_stack_routing_static_routes_3**
> List[object] get_network_switch_stack_routing_static_routes_3(network_id, switch_stack_id)

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 

    try:
        # List layer 3 static routes for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_static_routes_3(network_id, switch_stack_id)
        print("The response of StaticRoutesApi->get_network_switch_stack_routing_static_routes_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->get_network_switch_stack_routing_static_routes_3: %s\n" % e)
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

# **update_device_switch_routing_static_route_2**
> object update_device_switch_routing_static_route_2(serial, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    serial = 'serial_example' # str | 
    static_route_id = 'static_route_id_example' # str | 
    update_device_switch_routing_static_route_request = openapi_client.UpdateDeviceSwitchRoutingStaticRouteRequest() # UpdateDeviceSwitchRoutingStaticRouteRequest |  (optional)

    try:
        # Update a layer 3 static route for a switch
        api_response = api_instance.update_device_switch_routing_static_route_2(serial, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)
        print("The response of StaticRoutesApi->update_device_switch_routing_static_route_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->update_device_switch_routing_static_route_2: %s\n" % e)
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

# **update_network_appliance_static_route_1**
> object update_network_appliance_static_route_1(network_id, static_route_id, update_network_appliance_static_route_request=update_network_appliance_static_route_request)

Update a static route for an MX or teleworker network

Update a static route for an MX or teleworker network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_static_route_request import UpdateNetworkApplianceStaticRouteRequest
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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 
    update_network_appliance_static_route_request = openapi_client.UpdateNetworkApplianceStaticRouteRequest() # UpdateNetworkApplianceStaticRouteRequest |  (optional)

    try:
        # Update a static route for an MX or teleworker network
        api_response = api_instance.update_network_appliance_static_route_1(network_id, static_route_id, update_network_appliance_static_route_request=update_network_appliance_static_route_request)
        print("The response of StaticRoutesApi->update_network_appliance_static_route_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->update_network_appliance_static_route_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **static_route_id** | **str**|  | 
 **update_network_appliance_static_route_request** | [**UpdateNetworkApplianceStaticRouteRequest**](UpdateNetworkApplianceStaticRouteRequest.md)|  | [optional] 

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

# **update_network_switch_stack_routing_static_route_3**
> object update_network_switch_stack_routing_static_route_3(network_id, switch_stack_id, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)

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
    api_instance = openapi_client.StaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 
    update_device_switch_routing_static_route_request = openapi_client.UpdateDeviceSwitchRoutingStaticRouteRequest() # UpdateDeviceSwitchRoutingStaticRouteRequest |  (optional)

    try:
        # Update a layer 3 static route for a switch stack
        api_response = api_instance.update_network_switch_stack_routing_static_route_3(network_id, switch_stack_id, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)
        print("The response of StaticRoutesApi->update_network_switch_stack_routing_static_route_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticRoutesApi->update_network_switch_stack_routing_static_route_3: %s\n" % e)
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


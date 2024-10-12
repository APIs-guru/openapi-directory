# openapi_client.MulticastApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_switch_routing_multicast_rendezvous_point_2**](MulticastApi.md#create_network_switch_routing_multicast_rendezvous_point_2) | **POST** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | Create a multicast rendezvous point
[**delete_network_switch_routing_multicast_rendezvous_point_2**](MulticastApi.md#delete_network_switch_routing_multicast_rendezvous_point_2) | **DELETE** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Delete a multicast rendezvous point
[**get_network_switch_routing_multicast_2**](MulticastApi.md#get_network_switch_routing_multicast_2) | **GET** /networks/{networkId}/switch/routing/multicast | Return multicast settings for a network
[**get_network_switch_routing_multicast_rendezvous_point_2**](MulticastApi.md#get_network_switch_routing_multicast_rendezvous_point_2) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Return a multicast rendezvous point
[**get_network_switch_routing_multicast_rendezvous_points_2**](MulticastApi.md#get_network_switch_routing_multicast_rendezvous_points_2) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | List multicast rendezvous points
[**update_network_switch_routing_multicast_2**](MulticastApi.md#update_network_switch_routing_multicast_2) | **PUT** /networks/{networkId}/switch/routing/multicast | Update multicast settings for a network
[**update_network_switch_routing_multicast_rendezvous_point_2**](MulticastApi.md#update_network_switch_routing_multicast_rendezvous_point_2) | **PUT** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Update a multicast rendezvous point


# **create_network_switch_routing_multicast_rendezvous_point_2**
> object create_network_switch_routing_multicast_rendezvous_point_2(network_id, create_network_switch_routing_multicast_rendezvous_point_request)

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
    api_instance = openapi_client.MulticastApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_routing_multicast_rendezvous_point_request = openapi_client.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest() # CreateNetworkSwitchRoutingMulticastRendezvousPointRequest | 

    try:
        # Create a multicast rendezvous point
        api_response = api_instance.create_network_switch_routing_multicast_rendezvous_point_2(network_id, create_network_switch_routing_multicast_rendezvous_point_request)
        print("The response of MulticastApi->create_network_switch_routing_multicast_rendezvous_point_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MulticastApi->create_network_switch_routing_multicast_rendezvous_point_2: %s\n" % e)
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

# **delete_network_switch_routing_multicast_rendezvous_point_2**
> delete_network_switch_routing_multicast_rendezvous_point_2(network_id, rendezvous_point_id)

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
    api_instance = openapi_client.MulticastApi(api_client)
    network_id = 'network_id_example' # str | 
    rendezvous_point_id = 'rendezvous_point_id_example' # str | 

    try:
        # Delete a multicast rendezvous point
        api_instance.delete_network_switch_routing_multicast_rendezvous_point_2(network_id, rendezvous_point_id)
    except Exception as e:
        print("Exception when calling MulticastApi->delete_network_switch_routing_multicast_rendezvous_point_2: %s\n" % e)
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

# **get_network_switch_routing_multicast_2**
> object get_network_switch_routing_multicast_2(network_id)

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
    api_instance = openapi_client.MulticastApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return multicast settings for a network
        api_response = api_instance.get_network_switch_routing_multicast_2(network_id)
        print("The response of MulticastApi->get_network_switch_routing_multicast_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MulticastApi->get_network_switch_routing_multicast_2: %s\n" % e)
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

# **get_network_switch_routing_multicast_rendezvous_point_2**
> object get_network_switch_routing_multicast_rendezvous_point_2(network_id, rendezvous_point_id)

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
    api_instance = openapi_client.MulticastApi(api_client)
    network_id = 'network_id_example' # str | 
    rendezvous_point_id = 'rendezvous_point_id_example' # str | 

    try:
        # Return a multicast rendezvous point
        api_response = api_instance.get_network_switch_routing_multicast_rendezvous_point_2(network_id, rendezvous_point_id)
        print("The response of MulticastApi->get_network_switch_routing_multicast_rendezvous_point_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MulticastApi->get_network_switch_routing_multicast_rendezvous_point_2: %s\n" % e)
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

# **get_network_switch_routing_multicast_rendezvous_points_2**
> List[List[object]] get_network_switch_routing_multicast_rendezvous_points_2(network_id)

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
    api_instance = openapi_client.MulticastApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List multicast rendezvous points
        api_response = api_instance.get_network_switch_routing_multicast_rendezvous_points_2(network_id)
        print("The response of MulticastApi->get_network_switch_routing_multicast_rendezvous_points_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MulticastApi->get_network_switch_routing_multicast_rendezvous_points_2: %s\n" % e)
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

# **update_network_switch_routing_multicast_2**
> object update_network_switch_routing_multicast_2(network_id, update_network_switch_routing_multicast_request=update_network_switch_routing_multicast_request)

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
    api_instance = openapi_client.MulticastApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_routing_multicast_request = openapi_client.UpdateNetworkSwitchRoutingMulticastRequest() # UpdateNetworkSwitchRoutingMulticastRequest |  (optional)

    try:
        # Update multicast settings for a network
        api_response = api_instance.update_network_switch_routing_multicast_2(network_id, update_network_switch_routing_multicast_request=update_network_switch_routing_multicast_request)
        print("The response of MulticastApi->update_network_switch_routing_multicast_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MulticastApi->update_network_switch_routing_multicast_2: %s\n" % e)
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

# **update_network_switch_routing_multicast_rendezvous_point_2**
> object update_network_switch_routing_multicast_rendezvous_point_2(network_id, rendezvous_point_id, update_network_switch_routing_multicast_rendezvous_point_request)

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
    api_instance = openapi_client.MulticastApi(api_client)
    network_id = 'network_id_example' # str | 
    rendezvous_point_id = 'rendezvous_point_id_example' # str | 
    update_network_switch_routing_multicast_rendezvous_point_request = openapi_client.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest() # UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest | 

    try:
        # Update a multicast rendezvous point
        api_response = api_instance.update_network_switch_routing_multicast_rendezvous_point_2(network_id, rendezvous_point_id, update_network_switch_routing_multicast_rendezvous_point_request)
        print("The response of MulticastApi->update_network_switch_routing_multicast_rendezvous_point_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MulticastApi->update_network_switch_routing_multicast_rendezvous_point_2: %s\n" % e)
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


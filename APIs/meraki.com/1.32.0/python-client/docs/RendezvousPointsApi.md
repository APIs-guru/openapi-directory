# openapi_client.RendezvousPointsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_switch_routing_multicast_rendezvous_point_3**](RendezvousPointsApi.md#create_network_switch_routing_multicast_rendezvous_point_3) | **POST** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | Create a multicast rendezvous point
[**delete_network_switch_routing_multicast_rendezvous_point_3**](RendezvousPointsApi.md#delete_network_switch_routing_multicast_rendezvous_point_3) | **DELETE** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Delete a multicast rendezvous point
[**get_network_switch_routing_multicast_rendezvous_point_3**](RendezvousPointsApi.md#get_network_switch_routing_multicast_rendezvous_point_3) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Return a multicast rendezvous point
[**get_network_switch_routing_multicast_rendezvous_points_3**](RendezvousPointsApi.md#get_network_switch_routing_multicast_rendezvous_points_3) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | List multicast rendezvous points
[**update_network_switch_routing_multicast_rendezvous_point_3**](RendezvousPointsApi.md#update_network_switch_routing_multicast_rendezvous_point_3) | **PUT** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Update a multicast rendezvous point


# **create_network_switch_routing_multicast_rendezvous_point_3**
> object create_network_switch_routing_multicast_rendezvous_point_3(network_id, create_network_switch_routing_multicast_rendezvous_point_request)

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
    api_instance = openapi_client.RendezvousPointsApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_routing_multicast_rendezvous_point_request = openapi_client.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest() # CreateNetworkSwitchRoutingMulticastRendezvousPointRequest | 

    try:
        # Create a multicast rendezvous point
        api_response = api_instance.create_network_switch_routing_multicast_rendezvous_point_3(network_id, create_network_switch_routing_multicast_rendezvous_point_request)
        print("The response of RendezvousPointsApi->create_network_switch_routing_multicast_rendezvous_point_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RendezvousPointsApi->create_network_switch_routing_multicast_rendezvous_point_3: %s\n" % e)
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

# **delete_network_switch_routing_multicast_rendezvous_point_3**
> delete_network_switch_routing_multicast_rendezvous_point_3(network_id, rendezvous_point_id)

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
    api_instance = openapi_client.RendezvousPointsApi(api_client)
    network_id = 'network_id_example' # str | 
    rendezvous_point_id = 'rendezvous_point_id_example' # str | 

    try:
        # Delete a multicast rendezvous point
        api_instance.delete_network_switch_routing_multicast_rendezvous_point_3(network_id, rendezvous_point_id)
    except Exception as e:
        print("Exception when calling RendezvousPointsApi->delete_network_switch_routing_multicast_rendezvous_point_3: %s\n" % e)
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

# **get_network_switch_routing_multicast_rendezvous_point_3**
> object get_network_switch_routing_multicast_rendezvous_point_3(network_id, rendezvous_point_id)

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
    api_instance = openapi_client.RendezvousPointsApi(api_client)
    network_id = 'network_id_example' # str | 
    rendezvous_point_id = 'rendezvous_point_id_example' # str | 

    try:
        # Return a multicast rendezvous point
        api_response = api_instance.get_network_switch_routing_multicast_rendezvous_point_3(network_id, rendezvous_point_id)
        print("The response of RendezvousPointsApi->get_network_switch_routing_multicast_rendezvous_point_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RendezvousPointsApi->get_network_switch_routing_multicast_rendezvous_point_3: %s\n" % e)
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

# **get_network_switch_routing_multicast_rendezvous_points_3**
> List[List[object]] get_network_switch_routing_multicast_rendezvous_points_3(network_id)

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
    api_instance = openapi_client.RendezvousPointsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List multicast rendezvous points
        api_response = api_instance.get_network_switch_routing_multicast_rendezvous_points_3(network_id)
        print("The response of RendezvousPointsApi->get_network_switch_routing_multicast_rendezvous_points_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RendezvousPointsApi->get_network_switch_routing_multicast_rendezvous_points_3: %s\n" % e)
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

# **update_network_switch_routing_multicast_rendezvous_point_3**
> object update_network_switch_routing_multicast_rendezvous_point_3(network_id, rendezvous_point_id, update_network_switch_routing_multicast_rendezvous_point_request)

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
    api_instance = openapi_client.RendezvousPointsApi(api_client)
    network_id = 'network_id_example' # str | 
    rendezvous_point_id = 'rendezvous_point_id_example' # str | 
    update_network_switch_routing_multicast_rendezvous_point_request = openapi_client.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest() # UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest | 

    try:
        # Update a multicast rendezvous point
        api_response = api_instance.update_network_switch_routing_multicast_rendezvous_point_3(network_id, rendezvous_point_id, update_network_switch_routing_multicast_rendezvous_point_request)
        print("The response of RendezvousPointsApi->update_network_switch_routing_multicast_rendezvous_point_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RendezvousPointsApi->update_network_switch_routing_multicast_rendezvous_point_3: %s\n" % e)
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


# openapi_client.MXStaticRoutesApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_static_route**](MXStaticRoutesApi.md#create_network_static_route) | **POST** /networks/{networkId}/staticRoutes | Add a static route for an MX or teleworker network
[**delete_network_static_route**](MXStaticRoutesApi.md#delete_network_static_route) | **DELETE** /networks/{networkId}/staticRoutes/{staticRouteId} | Delete a static route from an MX or teleworker network
[**get_network_static_route**](MXStaticRoutesApi.md#get_network_static_route) | **GET** /networks/{networkId}/staticRoutes/{staticRouteId} | Return a static route for an MX or teleworker network
[**get_network_static_routes**](MXStaticRoutesApi.md#get_network_static_routes) | **GET** /networks/{networkId}/staticRoutes | List the static routes for an MX or teleworker network
[**update_network_static_route**](MXStaticRoutesApi.md#update_network_static_route) | **PUT** /networks/{networkId}/staticRoutes/{staticRouteId} | Update a static route for an MX or teleworker network


# **create_network_static_route**
> object create_network_static_route(network_id, create_network_static_route_request)

Add a static route for an MX or teleworker network

Add a static route for an MX or teleworker network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_static_route_request import CreateNetworkStaticRouteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.MXStaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_static_route_request = openapi_client.CreateNetworkStaticRouteRequest() # CreateNetworkStaticRouteRequest | 

    try:
        # Add a static route for an MX or teleworker network
        api_response = api_instance.create_network_static_route(network_id, create_network_static_route_request)
        print("The response of MXStaticRoutesApi->create_network_static_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MXStaticRoutesApi->create_network_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_static_route_request** | [**CreateNetworkStaticRouteRequest**](CreateNetworkStaticRouteRequest.md)|  | 

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

# **delete_network_static_route**
> delete_network_static_route(network_id, static_route_id)

Delete a static route from an MX or teleworker network

Delete a static route from an MX or teleworker network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.MXStaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Delete a static route from an MX or teleworker network
        api_instance.delete_network_static_route(network_id, static_route_id)
    except Exception as e:
        print("Exception when calling MXStaticRoutesApi->delete_network_static_route: %s\n" % e)
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

# **get_network_static_route**
> object get_network_static_route(network_id, static_route_id)

Return a static route for an MX or teleworker network

Return a static route for an MX or teleworker network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.MXStaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Return a static route for an MX or teleworker network
        api_response = api_instance.get_network_static_route(network_id, static_route_id)
        print("The response of MXStaticRoutesApi->get_network_static_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MXStaticRoutesApi->get_network_static_route: %s\n" % e)
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

# **get_network_static_routes**
> List[object] get_network_static_routes(network_id)

List the static routes for an MX or teleworker network

List the static routes for an MX or teleworker network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.MXStaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the static routes for an MX or teleworker network
        api_response = api_instance.get_network_static_routes(network_id)
        print("The response of MXStaticRoutesApi->get_network_static_routes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MXStaticRoutesApi->get_network_static_routes: %s\n" % e)
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

# **update_network_static_route**
> object update_network_static_route(network_id, static_route_id, update_network_static_route_request=update_network_static_route_request)

Update a static route for an MX or teleworker network

Update a static route for an MX or teleworker network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_static_route_request import UpdateNetworkStaticRouteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.MXStaticRoutesApi(api_client)
    network_id = 'network_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 
    update_network_static_route_request = openapi_client.UpdateNetworkStaticRouteRequest() # UpdateNetworkStaticRouteRequest |  (optional)

    try:
        # Update a static route for an MX or teleworker network
        api_response = api_instance.update_network_static_route(network_id, static_route_id, update_network_static_route_request=update_network_static_route_request)
        print("The response of MXStaticRoutesApi->update_network_static_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MXStaticRoutesApi->update_network_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **static_route_id** | **str**|  | 
 **update_network_static_route_request** | [**UpdateNetworkStaticRouteRequest**](UpdateNetworkStaticRouteRequest.md)|  | [optional] 

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


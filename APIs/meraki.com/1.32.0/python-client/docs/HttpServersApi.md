# openapi_client.HttpServersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_webhooks_http_server_2**](HttpServersApi.md#create_network_webhooks_http_server_2) | **POST** /networks/{networkId}/webhooks/httpServers | Add an HTTP server to a network
[**delete_network_webhooks_http_server_2**](HttpServersApi.md#delete_network_webhooks_http_server_2) | **DELETE** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Delete an HTTP server from a network
[**get_network_webhooks_http_server_2**](HttpServersApi.md#get_network_webhooks_http_server_2) | **GET** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Return an HTTP server for a network
[**get_network_webhooks_http_servers_2**](HttpServersApi.md#get_network_webhooks_http_servers_2) | **GET** /networks/{networkId}/webhooks/httpServers | List the HTTP servers for a network
[**update_network_webhooks_http_server_2**](HttpServersApi.md#update_network_webhooks_http_server_2) | **PUT** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Update an HTTP server


# **create_network_webhooks_http_server_2**
> GetNetworkWebhooksHttpServers200ResponseInner create_network_webhooks_http_server_2(network_id, create_network_webhooks_http_server_request)

Add an HTTP server to a network

Add an HTTP server to a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_webhooks_http_server_request import CreateNetworkWebhooksHttpServerRequest
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner
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
    api_instance = openapi_client.HttpServersApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_webhooks_http_server_request = openapi_client.CreateNetworkWebhooksHttpServerRequest() # CreateNetworkWebhooksHttpServerRequest | 

    try:
        # Add an HTTP server to a network
        api_response = api_instance.create_network_webhooks_http_server_2(network_id, create_network_webhooks_http_server_request)
        print("The response of HttpServersApi->create_network_webhooks_http_server_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HttpServersApi->create_network_webhooks_http_server_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_webhooks_http_server_request** | [**CreateNetworkWebhooksHttpServerRequest**](CreateNetworkWebhooksHttpServerRequest.md)|  | 

### Return type

[**GetNetworkWebhooksHttpServers200ResponseInner**](GetNetworkWebhooksHttpServers200ResponseInner.md)

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

# **delete_network_webhooks_http_server_2**
> delete_network_webhooks_http_server_2(network_id, http_server_id)

Delete an HTTP server from a network

Delete an HTTP server from a network

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
    api_instance = openapi_client.HttpServersApi(api_client)
    network_id = 'network_id_example' # str | 
    http_server_id = 'http_server_id_example' # str | 

    try:
        # Delete an HTTP server from a network
        api_instance.delete_network_webhooks_http_server_2(network_id, http_server_id)
    except Exception as e:
        print("Exception when calling HttpServersApi->delete_network_webhooks_http_server_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **http_server_id** | **str**|  | 

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

# **get_network_webhooks_http_server_2**
> GetNetworkWebhooksHttpServers200ResponseInner get_network_webhooks_http_server_2(network_id, http_server_id)

Return an HTTP server for a network

Return an HTTP server for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner
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
    api_instance = openapi_client.HttpServersApi(api_client)
    network_id = 'network_id_example' # str | 
    http_server_id = 'http_server_id_example' # str | 

    try:
        # Return an HTTP server for a network
        api_response = api_instance.get_network_webhooks_http_server_2(network_id, http_server_id)
        print("The response of HttpServersApi->get_network_webhooks_http_server_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HttpServersApi->get_network_webhooks_http_server_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **http_server_id** | **str**|  | 

### Return type

[**GetNetworkWebhooksHttpServers200ResponseInner**](GetNetworkWebhooksHttpServers200ResponseInner.md)

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

# **get_network_webhooks_http_servers_2**
> List[GetNetworkWebhooksHttpServers200ResponseInner] get_network_webhooks_http_servers_2(network_id)

List the HTTP servers for a network

List the HTTP servers for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner
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
    api_instance = openapi_client.HttpServersApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the HTTP servers for a network
        api_response = api_instance.get_network_webhooks_http_servers_2(network_id)
        print("The response of HttpServersApi->get_network_webhooks_http_servers_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HttpServersApi->get_network_webhooks_http_servers_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkWebhooksHttpServers200ResponseInner]**](GetNetworkWebhooksHttpServers200ResponseInner.md)

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

# **update_network_webhooks_http_server_2**
> GetNetworkWebhooksHttpServers200ResponseInner update_network_webhooks_http_server_2(network_id, http_server_id, update_network_webhooks_http_server_request=update_network_webhooks_http_server_request)

Update an HTTP server

Update an HTTP server. To change a URL, create a new HTTP server.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner
from openapi_client.models.update_network_webhooks_http_server_request import UpdateNetworkWebhooksHttpServerRequest
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
    api_instance = openapi_client.HttpServersApi(api_client)
    network_id = 'network_id_example' # str | 
    http_server_id = 'http_server_id_example' # str | 
    update_network_webhooks_http_server_request = openapi_client.UpdateNetworkWebhooksHttpServerRequest() # UpdateNetworkWebhooksHttpServerRequest |  (optional)

    try:
        # Update an HTTP server
        api_response = api_instance.update_network_webhooks_http_server_2(network_id, http_server_id, update_network_webhooks_http_server_request=update_network_webhooks_http_server_request)
        print("The response of HttpServersApi->update_network_webhooks_http_server_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HttpServersApi->update_network_webhooks_http_server_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **http_server_id** | **str**|  | 
 **update_network_webhooks_http_server_request** | [**UpdateNetworkWebhooksHttpServerRequest**](UpdateNetworkWebhooksHttpServerRequest.md)|  | [optional] 

### Return type

[**GetNetworkWebhooksHttpServers200ResponseInner**](GetNetworkWebhooksHttpServers200ResponseInner.md)

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


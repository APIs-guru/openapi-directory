# openapi_client.SplashAuthorizationStatusApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_client_splash_authorization_status_2**](SplashAuthorizationStatusApi.md#get_network_client_splash_authorization_status_2) | **GET** /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus | Return the splash authorization for a client, for each SSID they&#39;ve associated with through splash
[**update_network_client_splash_authorization_status_2**](SplashAuthorizationStatusApi.md#update_network_client_splash_authorization_status_2) | **PUT** /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus | Update a client&#39;s splash authorization


# **get_network_client_splash_authorization_status_2**
> object get_network_client_splash_authorization_status_2(network_id, client_id)

Return the splash authorization for a client, for each SSID they've associated with through splash

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    api_instance = openapi_client.SplashAuthorizationStatusApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 

    try:
        # Return the splash authorization for a client, for each SSID they've associated with through splash
        api_response = api_instance.get_network_client_splash_authorization_status_2(network_id, client_id)
        print("The response of SplashAuthorizationStatusApi->get_network_client_splash_authorization_status_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SplashAuthorizationStatusApi->get_network_client_splash_authorization_status_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 

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

# **update_network_client_splash_authorization_status_2**
> object update_network_client_splash_authorization_status_2(network_id, client_id, update_network_client_splash_authorization_status_request)

Update a client's splash authorization

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_client_splash_authorization_status_request import UpdateNetworkClientSplashAuthorizationStatusRequest
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
    api_instance = openapi_client.SplashAuthorizationStatusApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    update_network_client_splash_authorization_status_request = openapi_client.UpdateNetworkClientSplashAuthorizationStatusRequest() # UpdateNetworkClientSplashAuthorizationStatusRequest | 

    try:
        # Update a client's splash authorization
        api_response = api_instance.update_network_client_splash_authorization_status_2(network_id, client_id, update_network_client_splash_authorization_status_request)
        print("The response of SplashAuthorizationStatusApi->update_network_client_splash_authorization_status_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SplashAuthorizationStatusApi->update_network_client_splash_authorization_status_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **update_network_client_splash_authorization_status_request** | [**UpdateNetworkClientSplashAuthorizationStatusRequest**](UpdateNetworkClientSplashAuthorizationStatusRequest.md)|  | 

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


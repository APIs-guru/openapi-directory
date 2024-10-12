# openapi_client.SSIDsApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_device_wireless_status**](SSIDsApi.md#get_network_device_wireless_status) | **GET** /networks/{networkId}/devices/{serial}/wireless/status | Return the SSID statuses of an access point
[**get_network_ssid**](SSIDsApi.md#get_network_ssid) | **GET** /networks/{networkId}/ssids/{number} | Return a single SSID
[**get_network_ssids**](SSIDsApi.md#get_network_ssids) | **GET** /networks/{networkId}/ssids | List the SSIDs in a network
[**update_network_ssid**](SSIDsApi.md#update_network_ssid) | **PUT** /networks/{networkId}/ssids/{number} | Update the attributes of an SSID


# **get_network_device_wireless_status**
> object get_network_device_wireless_status(network_id, serial)

Return the SSID statuses of an access point

Return the SSID statuses of an access point

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
    api_instance = openapi_client.SSIDsApi(api_client)
    network_id = 'network_id_example' # str | 
    serial = 'serial_example' # str | 

    try:
        # Return the SSID statuses of an access point
        api_response = api_instance.get_network_device_wireless_status(network_id, serial)
        print("The response of SSIDsApi->get_network_device_wireless_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SSIDsApi->get_network_device_wireless_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **serial** | **str**|  | 

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

# **get_network_ssid**
> object get_network_ssid(network_id, number)

Return a single SSID

Return a single SSID

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
    api_instance = openapi_client.SSIDsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return a single SSID
        api_response = api_instance.get_network_ssid(network_id, number)
        print("The response of SSIDsApi->get_network_ssid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SSIDsApi->get_network_ssid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

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

# **get_network_ssids**
> List[object] get_network_ssids(network_id)

List the SSIDs in a network

List the SSIDs in a network. Supports networks with access points or wireless-enabled security appliances and teleworker gateways.

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
    api_instance = openapi_client.SSIDsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the SSIDs in a network
        api_response = api_instance.get_network_ssids(network_id)
        print("The response of SSIDsApi->get_network_ssids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SSIDsApi->get_network_ssids: %s\n" % e)
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

# **update_network_ssid**
> object update_network_ssid(network_id, number, update_network_ssid_request=update_network_ssid_request)

Update the attributes of an SSID

Update the attributes of an SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_ssid_request import UpdateNetworkSsidRequest
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
    api_instance = openapi_client.SSIDsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_ssid_request = openapi_client.UpdateNetworkSsidRequest() # UpdateNetworkSsidRequest |  (optional)

    try:
        # Update the attributes of an SSID
        api_response = api_instance.update_network_ssid(network_id, number, update_network_ssid_request=update_network_ssid_request)
        print("The response of SSIDsApi->update_network_ssid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SSIDsApi->update_network_ssid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_ssid_request** | [**UpdateNetworkSsidRequest**](UpdateNetworkSsidRequest.md)|  | [optional] 

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


# openapi_client.IdentityPsksApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_wireless_ssid_identity_psk_2**](IdentityPsksApi.md#create_network_wireless_ssid_identity_psk_2) | **POST** /networks/{networkId}/wireless/ssids/{number}/identityPsks | Create an Identity PSK
[**delete_network_wireless_ssid_identity_psk_2**](IdentityPsksApi.md#delete_network_wireless_ssid_identity_psk_2) | **DELETE** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Delete an Identity PSK
[**get_network_wireless_ssid_identity_psk_2**](IdentityPsksApi.md#get_network_wireless_ssid_identity_psk_2) | **GET** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Return an Identity PSK
[**get_network_wireless_ssid_identity_psks_2**](IdentityPsksApi.md#get_network_wireless_ssid_identity_psks_2) | **GET** /networks/{networkId}/wireless/ssids/{number}/identityPsks | List all Identity PSKs in a wireless network
[**update_network_wireless_ssid_identity_psk_2**](IdentityPsksApi.md#update_network_wireless_ssid_identity_psk_2) | **PUT** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Update an Identity PSK


# **create_network_wireless_ssid_identity_psk_2**
> object create_network_wireless_ssid_identity_psk_2(network_id, number, create_network_wireless_ssid_identity_psk_request)

Create an Identity PSK

Create an Identity PSK

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_wireless_ssid_identity_psk_request import CreateNetworkWirelessSsidIdentityPskRequest
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
    api_instance = openapi_client.IdentityPsksApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    create_network_wireless_ssid_identity_psk_request = openapi_client.CreateNetworkWirelessSsidIdentityPskRequest() # CreateNetworkWirelessSsidIdentityPskRequest | 

    try:
        # Create an Identity PSK
        api_response = api_instance.create_network_wireless_ssid_identity_psk_2(network_id, number, create_network_wireless_ssid_identity_psk_request)
        print("The response of IdentityPsksApi->create_network_wireless_ssid_identity_psk_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IdentityPsksApi->create_network_wireless_ssid_identity_psk_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **create_network_wireless_ssid_identity_psk_request** | [**CreateNetworkWirelessSsidIdentityPskRequest**](CreateNetworkWirelessSsidIdentityPskRequest.md)|  | 

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

# **delete_network_wireless_ssid_identity_psk_2**
> delete_network_wireless_ssid_identity_psk_2(network_id, number, identity_psk_id)

Delete an Identity PSK

Delete an Identity PSK

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
    api_instance = openapi_client.IdentityPsksApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    identity_psk_id = 'identity_psk_id_example' # str | 

    try:
        # Delete an Identity PSK
        api_instance.delete_network_wireless_ssid_identity_psk_2(network_id, number, identity_psk_id)
    except Exception as e:
        print("Exception when calling IdentityPsksApi->delete_network_wireless_ssid_identity_psk_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **identity_psk_id** | **str**|  | 

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

# **get_network_wireless_ssid_identity_psk_2**
> GetNetworkWirelessSsidIdentityPsks200ResponseInner get_network_wireless_ssid_identity_psk_2(network_id, number, identity_psk_id)

Return an Identity PSK

Return an Identity PSK

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_identity_psks200_response_inner import GetNetworkWirelessSsidIdentityPsks200ResponseInner
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
    api_instance = openapi_client.IdentityPsksApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    identity_psk_id = 'identity_psk_id_example' # str | 

    try:
        # Return an Identity PSK
        api_response = api_instance.get_network_wireless_ssid_identity_psk_2(network_id, number, identity_psk_id)
        print("The response of IdentityPsksApi->get_network_wireless_ssid_identity_psk_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IdentityPsksApi->get_network_wireless_ssid_identity_psk_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **identity_psk_id** | **str**|  | 

### Return type

[**GetNetworkWirelessSsidIdentityPsks200ResponseInner**](GetNetworkWirelessSsidIdentityPsks200ResponseInner.md)

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

# **get_network_wireless_ssid_identity_psks_2**
> List[GetNetworkWirelessSsidIdentityPsks200ResponseInner] get_network_wireless_ssid_identity_psks_2(network_id, number)

List all Identity PSKs in a wireless network

List all Identity PSKs in a wireless network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_identity_psks200_response_inner import GetNetworkWirelessSsidIdentityPsks200ResponseInner
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
    api_instance = openapi_client.IdentityPsksApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List all Identity PSKs in a wireless network
        api_response = api_instance.get_network_wireless_ssid_identity_psks_2(network_id, number)
        print("The response of IdentityPsksApi->get_network_wireless_ssid_identity_psks_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IdentityPsksApi->get_network_wireless_ssid_identity_psks_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

### Return type

[**List[GetNetworkWirelessSsidIdentityPsks200ResponseInner]**](GetNetworkWirelessSsidIdentityPsks200ResponseInner.md)

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

# **update_network_wireless_ssid_identity_psk_2**
> object update_network_wireless_ssid_identity_psk_2(network_id, number, identity_psk_id, update_network_wireless_ssid_identity_psk_request=update_network_wireless_ssid_identity_psk_request)

Update an Identity PSK

Update an Identity PSK

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_identity_psk_request import UpdateNetworkWirelessSsidIdentityPskRequest
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
    api_instance = openapi_client.IdentityPsksApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    identity_psk_id = 'identity_psk_id_example' # str | 
    update_network_wireless_ssid_identity_psk_request = openapi_client.UpdateNetworkWirelessSsidIdentityPskRequest() # UpdateNetworkWirelessSsidIdentityPskRequest |  (optional)

    try:
        # Update an Identity PSK
        api_response = api_instance.update_network_wireless_ssid_identity_psk_2(network_id, number, identity_psk_id, update_network_wireless_ssid_identity_psk_request=update_network_wireless_ssid_identity_psk_request)
        print("The response of IdentityPsksApi->update_network_wireless_ssid_identity_psk_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IdentityPsksApi->update_network_wireless_ssid_identity_psk_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **identity_psk_id** | **str**|  | 
 **update_network_wireless_ssid_identity_psk_request** | [**UpdateNetworkWirelessSsidIdentityPskRequest**](UpdateNetworkWirelessSsidIdentityPskRequest.md)|  | [optional] 

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


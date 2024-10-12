# openapi_client.VLANsApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_vlan**](VLANsApi.md#create_network_vlan) | **POST** /networks/{networkId}/vlans | Add a VLAN
[**delete_network_vlan**](VLANsApi.md#delete_network_vlan) | **DELETE** /networks/{networkId}/vlans/{vlanId} | Delete a VLAN from a network
[**get_network_vlan**](VLANsApi.md#get_network_vlan) | **GET** /networks/{networkId}/vlans/{vlanId} | Return a VLAN
[**get_network_vlans**](VLANsApi.md#get_network_vlans) | **GET** /networks/{networkId}/vlans | List the VLANs for an MX network
[**get_network_vlans_enabled_state**](VLANsApi.md#get_network_vlans_enabled_state) | **GET** /networks/{networkId}/vlansEnabledState | Returns the enabled status of VLANs for the network
[**update_network_vlan**](VLANsApi.md#update_network_vlan) | **PUT** /networks/{networkId}/vlans/{vlanId} | Update a VLAN
[**update_network_vlans_enabled_state**](VLANsApi.md#update_network_vlans_enabled_state) | **PUT** /networks/{networkId}/vlansEnabledState | Enable/Disable VLANs for the given network


# **create_network_vlan**
> object create_network_vlan(network_id, create_network_vlan_request)

Add a VLAN

Add a VLAN

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_vlan_request import CreateNetworkVlanRequest
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
    api_instance = openapi_client.VLANsApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_vlan_request = openapi_client.CreateNetworkVlanRequest() # CreateNetworkVlanRequest | 

    try:
        # Add a VLAN
        api_response = api_instance.create_network_vlan(network_id, create_network_vlan_request)
        print("The response of VLANsApi->create_network_vlan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VLANsApi->create_network_vlan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_vlan_request** | [**CreateNetworkVlanRequest**](CreateNetworkVlanRequest.md)|  | 

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

# **delete_network_vlan**
> delete_network_vlan(network_id, vlan_id)

Delete a VLAN from a network

Delete a VLAN from a network

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
    api_instance = openapi_client.VLANsApi(api_client)
    network_id = 'network_id_example' # str | 
    vlan_id = 'vlan_id_example' # str | 

    try:
        # Delete a VLAN from a network
        api_instance.delete_network_vlan(network_id, vlan_id)
    except Exception as e:
        print("Exception when calling VLANsApi->delete_network_vlan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **vlan_id** | **str**|  | 

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

# **get_network_vlan**
> object get_network_vlan(network_id, vlan_id)

Return a VLAN

Return a VLAN

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
    api_instance = openapi_client.VLANsApi(api_client)
    network_id = 'network_id_example' # str | 
    vlan_id = 'vlan_id_example' # str | 

    try:
        # Return a VLAN
        api_response = api_instance.get_network_vlan(network_id, vlan_id)
        print("The response of VLANsApi->get_network_vlan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VLANsApi->get_network_vlan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **vlan_id** | **str**|  | 

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

# **get_network_vlans**
> List[object] get_network_vlans(network_id)

List the VLANs for an MX network

List the VLANs for an MX network

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
    api_instance = openapi_client.VLANsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the VLANs for an MX network
        api_response = api_instance.get_network_vlans(network_id)
        print("The response of VLANsApi->get_network_vlans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VLANsApi->get_network_vlans: %s\n" % e)
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

# **get_network_vlans_enabled_state**
> object get_network_vlans_enabled_state(network_id)

Returns the enabled status of VLANs for the network

Returns the enabled status of VLANs for the network

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
    api_instance = openapi_client.VLANsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the enabled status of VLANs for the network
        api_response = api_instance.get_network_vlans_enabled_state(network_id)
        print("The response of VLANsApi->get_network_vlans_enabled_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VLANsApi->get_network_vlans_enabled_state: %s\n" % e)
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

# **update_network_vlan**
> object update_network_vlan(network_id, vlan_id, update_network_vlan_request=update_network_vlan_request)

Update a VLAN

Update a VLAN

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_vlan_request import UpdateNetworkVlanRequest
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
    api_instance = openapi_client.VLANsApi(api_client)
    network_id = 'network_id_example' # str | 
    vlan_id = 'vlan_id_example' # str | 
    update_network_vlan_request = openapi_client.UpdateNetworkVlanRequest() # UpdateNetworkVlanRequest |  (optional)

    try:
        # Update a VLAN
        api_response = api_instance.update_network_vlan(network_id, vlan_id, update_network_vlan_request=update_network_vlan_request)
        print("The response of VLANsApi->update_network_vlan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VLANsApi->update_network_vlan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **vlan_id** | **str**|  | 
 **update_network_vlan_request** | [**UpdateNetworkVlanRequest**](UpdateNetworkVlanRequest.md)|  | [optional] 

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

# **update_network_vlans_enabled_state**
> object update_network_vlans_enabled_state(network_id, update_network_vlans_enabled_state_request)

Enable/Disable VLANs for the given network

Enable/Disable VLANs for the given network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_vlans_enabled_state_request import UpdateNetworkVlansEnabledStateRequest
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
    api_instance = openapi_client.VLANsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_vlans_enabled_state_request = openapi_client.UpdateNetworkVlansEnabledStateRequest() # UpdateNetworkVlansEnabledStateRequest | 

    try:
        # Enable/Disable VLANs for the given network
        api_response = api_instance.update_network_vlans_enabled_state(network_id, update_network_vlans_enabled_state_request)
        print("The response of VLANsApi->update_network_vlans_enabled_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VLANsApi->update_network_vlans_enabled_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_vlans_enabled_state_request** | [**UpdateNetworkVlansEnabledStateRequest**](UpdateNetworkVlansEnabledStateRequest.md)|  | 

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


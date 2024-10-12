# openapi_client.VlansApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_appliance_vlan_1**](VlansApi.md#create_network_appliance_vlan_1) | **POST** /networks/{networkId}/appliance/vlans | Add a VLAN
[**delete_network_appliance_vlan_1**](VlansApi.md#delete_network_appliance_vlan_1) | **DELETE** /networks/{networkId}/appliance/vlans/{vlanId} | Delete a VLAN from a network
[**get_network_appliance_vlan_1**](VlansApi.md#get_network_appliance_vlan_1) | **GET** /networks/{networkId}/appliance/vlans/{vlanId} | Return a VLAN
[**get_network_appliance_vlans_1**](VlansApi.md#get_network_appliance_vlans_1) | **GET** /networks/{networkId}/appliance/vlans | List the VLANs for an MX network
[**get_network_appliance_vlans_settings_1**](VlansApi.md#get_network_appliance_vlans_settings_1) | **GET** /networks/{networkId}/appliance/vlans/settings | Returns the enabled status of VLANs for the network
[**update_network_appliance_vlan_1**](VlansApi.md#update_network_appliance_vlan_1) | **PUT** /networks/{networkId}/appliance/vlans/{vlanId} | Update a VLAN
[**update_network_appliance_vlans_settings_1**](VlansApi.md#update_network_appliance_vlans_settings_1) | **PUT** /networks/{networkId}/appliance/vlans/settings | Enable/Disable VLANs for the given network


# **create_network_appliance_vlan_1**
> CreateNetworkApplianceVlan201Response create_network_appliance_vlan_1(network_id, create_network_appliance_vlan_request)

Add a VLAN

Add a VLAN

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_appliance_vlan201_response import CreateNetworkApplianceVlan201Response
from openapi_client.models.create_network_appliance_vlan_request import CreateNetworkApplianceVlanRequest
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
    api_instance = openapi_client.VlansApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_appliance_vlan_request = openapi_client.CreateNetworkApplianceVlanRequest() # CreateNetworkApplianceVlanRequest | 

    try:
        # Add a VLAN
        api_response = api_instance.create_network_appliance_vlan_1(network_id, create_network_appliance_vlan_request)
        print("The response of VlansApi->create_network_appliance_vlan_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VlansApi->create_network_appliance_vlan_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_appliance_vlan_request** | [**CreateNetworkApplianceVlanRequest**](CreateNetworkApplianceVlanRequest.md)|  | 

### Return type

[**CreateNetworkApplianceVlan201Response**](CreateNetworkApplianceVlan201Response.md)

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

# **delete_network_appliance_vlan_1**
> delete_network_appliance_vlan_1(network_id, vlan_id)

Delete a VLAN from a network

Delete a VLAN from a network

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
    api_instance = openapi_client.VlansApi(api_client)
    network_id = 'network_id_example' # str | 
    vlan_id = 'vlan_id_example' # str | 

    try:
        # Delete a VLAN from a network
        api_instance.delete_network_appliance_vlan_1(network_id, vlan_id)
    except Exception as e:
        print("Exception when calling VlansApi->delete_network_appliance_vlan_1: %s\n" % e)
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

# **get_network_appliance_vlan_1**
> GetNetworkApplianceVlans200ResponseInner get_network_appliance_vlan_1(network_id, vlan_id)

Return a VLAN

Return a VLAN

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_vlans200_response_inner import GetNetworkApplianceVlans200ResponseInner
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
    api_instance = openapi_client.VlansApi(api_client)
    network_id = 'network_id_example' # str | 
    vlan_id = 'vlan_id_example' # str | 

    try:
        # Return a VLAN
        api_response = api_instance.get_network_appliance_vlan_1(network_id, vlan_id)
        print("The response of VlansApi->get_network_appliance_vlan_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VlansApi->get_network_appliance_vlan_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **vlan_id** | **str**|  | 

### Return type

[**GetNetworkApplianceVlans200ResponseInner**](GetNetworkApplianceVlans200ResponseInner.md)

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

# **get_network_appliance_vlans_1**
> List[GetNetworkApplianceVlans200ResponseInner] get_network_appliance_vlans_1(network_id)

List the VLANs for an MX network

List the VLANs for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_vlans200_response_inner import GetNetworkApplianceVlans200ResponseInner
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
    api_instance = openapi_client.VlansApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the VLANs for an MX network
        api_response = api_instance.get_network_appliance_vlans_1(network_id)
        print("The response of VlansApi->get_network_appliance_vlans_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VlansApi->get_network_appliance_vlans_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkApplianceVlans200ResponseInner]**](GetNetworkApplianceVlans200ResponseInner.md)

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

# **get_network_appliance_vlans_settings_1**
> object get_network_appliance_vlans_settings_1(network_id)

Returns the enabled status of VLANs for the network

Returns the enabled status of VLANs for the network

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
    api_instance = openapi_client.VlansApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the enabled status of VLANs for the network
        api_response = api_instance.get_network_appliance_vlans_settings_1(network_id)
        print("The response of VlansApi->get_network_appliance_vlans_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VlansApi->get_network_appliance_vlans_settings_1: %s\n" % e)
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

# **update_network_appliance_vlan_1**
> GetNetworkApplianceVlans200ResponseInner update_network_appliance_vlan_1(network_id, vlan_id, update_network_appliance_vlan_request=update_network_appliance_vlan_request)

Update a VLAN

Update a VLAN

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_vlans200_response_inner import GetNetworkApplianceVlans200ResponseInner
from openapi_client.models.update_network_appliance_vlan_request import UpdateNetworkApplianceVlanRequest
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
    api_instance = openapi_client.VlansApi(api_client)
    network_id = 'network_id_example' # str | 
    vlan_id = 'vlan_id_example' # str | 
    update_network_appliance_vlan_request = openapi_client.UpdateNetworkApplianceVlanRequest() # UpdateNetworkApplianceVlanRequest |  (optional)

    try:
        # Update a VLAN
        api_response = api_instance.update_network_appliance_vlan_1(network_id, vlan_id, update_network_appliance_vlan_request=update_network_appliance_vlan_request)
        print("The response of VlansApi->update_network_appliance_vlan_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VlansApi->update_network_appliance_vlan_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **vlan_id** | **str**|  | 
 **update_network_appliance_vlan_request** | [**UpdateNetworkApplianceVlanRequest**](UpdateNetworkApplianceVlanRequest.md)|  | [optional] 

### Return type

[**GetNetworkApplianceVlans200ResponseInner**](GetNetworkApplianceVlans200ResponseInner.md)

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

# **update_network_appliance_vlans_settings_1**
> object update_network_appliance_vlans_settings_1(network_id, update_network_appliance_vlans_settings_request=update_network_appliance_vlans_settings_request)

Enable/Disable VLANs for the given network

Enable/Disable VLANs for the given network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_vlans_settings_request import UpdateNetworkApplianceVlansSettingsRequest
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
    api_instance = openapi_client.VlansApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_vlans_settings_request = openapi_client.UpdateNetworkApplianceVlansSettingsRequest() # UpdateNetworkApplianceVlansSettingsRequest |  (optional)

    try:
        # Enable/Disable VLANs for the given network
        api_response = api_instance.update_network_appliance_vlans_settings_1(network_id, update_network_appliance_vlans_settings_request=update_network_appliance_vlans_settings_request)
        print("The response of VlansApi->update_network_appliance_vlans_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VlansApi->update_network_appliance_vlans_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_vlans_settings_request** | [**UpdateNetworkApplianceVlansSettingsRequest**](UpdateNetworkApplianceVlansSettingsRequest.md)|  | [optional] 

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


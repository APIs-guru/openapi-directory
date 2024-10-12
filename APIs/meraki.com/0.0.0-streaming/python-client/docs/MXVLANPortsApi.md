# openapi_client.MXVLANPortsApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_appliance_port**](MXVLANPortsApi.md#get_network_appliance_port) | **GET** /networks/{networkId}/appliancePorts/{appliancePortId} | Return per-port VLAN settings for a single MX port.
[**get_network_appliance_ports**](MXVLANPortsApi.md#get_network_appliance_ports) | **GET** /networks/{networkId}/appliancePorts | List per-port VLAN settings for all ports of a MX.
[**update_network_appliance_port**](MXVLANPortsApi.md#update_network_appliance_port) | **PUT** /networks/{networkId}/appliancePorts/{appliancePortId} | Update the per-port VLAN settings for a single MX port.


# **get_network_appliance_port**
> object get_network_appliance_port(network_id, appliance_port_id)

Return per-port VLAN settings for a single MX port.

Return per-port VLAN settings for a single MX port.

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
    api_instance = openapi_client.MXVLANPortsApi(api_client)
    network_id = 'network_id_example' # str | 
    appliance_port_id = 'appliance_port_id_example' # str | 

    try:
        # Return per-port VLAN settings for a single MX port.
        api_response = api_instance.get_network_appliance_port(network_id, appliance_port_id)
        print("The response of MXVLANPortsApi->get_network_appliance_port:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MXVLANPortsApi->get_network_appliance_port: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **appliance_port_id** | **str**|  | 

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

# **get_network_appliance_ports**
> List[object] get_network_appliance_ports(network_id)

List per-port VLAN settings for all ports of a MX.

List per-port VLAN settings for all ports of a MX.

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
    api_instance = openapi_client.MXVLANPortsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List per-port VLAN settings for all ports of a MX.
        api_response = api_instance.get_network_appliance_ports(network_id)
        print("The response of MXVLANPortsApi->get_network_appliance_ports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MXVLANPortsApi->get_network_appliance_ports: %s\n" % e)
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

# **update_network_appliance_port**
> object update_network_appliance_port(network_id, appliance_port_id, update_network_appliance_port_request=update_network_appliance_port_request)

Update the per-port VLAN settings for a single MX port.

Update the per-port VLAN settings for a single MX port.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_port_request import UpdateNetworkAppliancePortRequest
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
    api_instance = openapi_client.MXVLANPortsApi(api_client)
    network_id = 'network_id_example' # str | 
    appliance_port_id = 'appliance_port_id_example' # str | 
    update_network_appliance_port_request = openapi_client.UpdateNetworkAppliancePortRequest() # UpdateNetworkAppliancePortRequest |  (optional)

    try:
        # Update the per-port VLAN settings for a single MX port.
        api_response = api_instance.update_network_appliance_port(network_id, appliance_port_id, update_network_appliance_port_request=update_network_appliance_port_request)
        print("The response of MXVLANPortsApi->update_network_appliance_port:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MXVLANPortsApi->update_network_appliance_port: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **appliance_port_id** | **str**|  | 
 **update_network_appliance_port_request** | [**UpdateNetworkAppliancePortRequest**](UpdateNetworkAppliancePortRequest.md)|  | [optional] 

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


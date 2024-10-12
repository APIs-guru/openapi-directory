# openapi_client.CellularGatewayApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_cellular_gateway_lan**](CellularGatewayApi.md#get_device_cellular_gateway_lan) | **GET** /devices/{serial}/cellularGateway/lan | Show the LAN Settings of a MG
[**get_device_cellular_gateway_port_forwarding_rules**](CellularGatewayApi.md#get_device_cellular_gateway_port_forwarding_rules) | **GET** /devices/{serial}/cellularGateway/portForwardingRules | Returns the port forwarding rules for a single MG.
[**get_network_cellular_gateway_connectivity_monitoring_destinations**](CellularGatewayApi.md#get_network_cellular_gateway_connectivity_monitoring_destinations) | **GET** /networks/{networkId}/cellularGateway/connectivityMonitoringDestinations | Return the connectivity testing destinations for an MG network
[**get_network_cellular_gateway_dhcp**](CellularGatewayApi.md#get_network_cellular_gateway_dhcp) | **GET** /networks/{networkId}/cellularGateway/dhcp | List common DHCP settings of MGs
[**get_network_cellular_gateway_subnet_pool**](CellularGatewayApi.md#get_network_cellular_gateway_subnet_pool) | **GET** /networks/{networkId}/cellularGateway/subnetPool | Return the subnet pool and mask configured for MGs in the network.
[**get_network_cellular_gateway_uplink**](CellularGatewayApi.md#get_network_cellular_gateway_uplink) | **GET** /networks/{networkId}/cellularGateway/uplink | Returns the uplink settings for your MG network.
[**get_organization_cellular_gateway_uplink_statuses**](CellularGatewayApi.md#get_organization_cellular_gateway_uplink_statuses) | **GET** /organizations/{organizationId}/cellularGateway/uplink/statuses | List the uplink status of every Meraki MG cellular gateway in the organization
[**update_device_cellular_gateway_lan**](CellularGatewayApi.md#update_device_cellular_gateway_lan) | **PUT** /devices/{serial}/cellularGateway/lan | Update the LAN Settings for a single MG.
[**update_device_cellular_gateway_port_forwarding_rules**](CellularGatewayApi.md#update_device_cellular_gateway_port_forwarding_rules) | **PUT** /devices/{serial}/cellularGateway/portForwardingRules | Updates the port forwarding rules for a single MG.
[**update_network_cellular_gateway_connectivity_monitoring_destinations**](CellularGatewayApi.md#update_network_cellular_gateway_connectivity_monitoring_destinations) | **PUT** /networks/{networkId}/cellularGateway/connectivityMonitoringDestinations | Update the connectivity testing destinations for an MG network
[**update_network_cellular_gateway_dhcp**](CellularGatewayApi.md#update_network_cellular_gateway_dhcp) | **PUT** /networks/{networkId}/cellularGateway/dhcp | Update common DHCP settings of MGs
[**update_network_cellular_gateway_subnet_pool**](CellularGatewayApi.md#update_network_cellular_gateway_subnet_pool) | **PUT** /networks/{networkId}/cellularGateway/subnetPool | Update the subnet pool and mask configuration for MGs in the network.
[**update_network_cellular_gateway_uplink**](CellularGatewayApi.md#update_network_cellular_gateway_uplink) | **PUT** /networks/{networkId}/cellularGateway/uplink | Updates the uplink settings for your MG network.


# **get_device_cellular_gateway_lan**
> object get_device_cellular_gateway_lan(serial)

Show the LAN Settings of a MG

Show the LAN Settings of a MG

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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Show the LAN Settings of a MG
        api_response = api_instance.get_device_cellular_gateway_lan(serial)
        print("The response of CellularGatewayApi->get_device_cellular_gateway_lan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->get_device_cellular_gateway_lan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **get_device_cellular_gateway_port_forwarding_rules**
> object get_device_cellular_gateway_port_forwarding_rules(serial)

Returns the port forwarding rules for a single MG.

Returns the port forwarding rules for a single MG.

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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns the port forwarding rules for a single MG.
        api_response = api_instance.get_device_cellular_gateway_port_forwarding_rules(serial)
        print("The response of CellularGatewayApi->get_device_cellular_gateway_port_forwarding_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->get_device_cellular_gateway_port_forwarding_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **get_network_cellular_gateway_connectivity_monitoring_destinations**
> object get_network_cellular_gateway_connectivity_monitoring_destinations(network_id)

Return the connectivity testing destinations for an MG network

Return the connectivity testing destinations for an MG network

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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the connectivity testing destinations for an MG network
        api_response = api_instance.get_network_cellular_gateway_connectivity_monitoring_destinations(network_id)
        print("The response of CellularGatewayApi->get_network_cellular_gateway_connectivity_monitoring_destinations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->get_network_cellular_gateway_connectivity_monitoring_destinations: %s\n" % e)
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

# **get_network_cellular_gateway_dhcp**
> GetNetworkCellularGatewayDhcp200Response get_network_cellular_gateway_dhcp(network_id)

List common DHCP settings of MGs

List common DHCP settings of MGs

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_cellular_gateway_dhcp200_response import GetNetworkCellularGatewayDhcp200Response
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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List common DHCP settings of MGs
        api_response = api_instance.get_network_cellular_gateway_dhcp(network_id)
        print("The response of CellularGatewayApi->get_network_cellular_gateway_dhcp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->get_network_cellular_gateway_dhcp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkCellularGatewayDhcp200Response**](GetNetworkCellularGatewayDhcp200Response.md)

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

# **get_network_cellular_gateway_subnet_pool**
> object get_network_cellular_gateway_subnet_pool(network_id)

Return the subnet pool and mask configured for MGs in the network.

Return the subnet pool and mask configured for MGs in the network.

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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the subnet pool and mask configured for MGs in the network.
        api_response = api_instance.get_network_cellular_gateway_subnet_pool(network_id)
        print("The response of CellularGatewayApi->get_network_cellular_gateway_subnet_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->get_network_cellular_gateway_subnet_pool: %s\n" % e)
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

# **get_network_cellular_gateway_uplink**
> object get_network_cellular_gateway_uplink(network_id)

Returns the uplink settings for your MG network.

Returns the uplink settings for your MG network.

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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the uplink settings for your MG network.
        api_response = api_instance.get_network_cellular_gateway_uplink(network_id)
        print("The response of CellularGatewayApi->get_network_cellular_gateway_uplink:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->get_network_cellular_gateway_uplink: %s\n" % e)
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

# **get_organization_cellular_gateway_uplink_statuses**
> List[GetOrganizationCellularGatewayUplinkStatuses200ResponseInner] get_organization_cellular_gateway_uplink_statuses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)

List the uplink status of every Meraki MG cellular gateway in the organization

List the uplink status of every Meraki MG cellular gateway in the organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_cellular_gateway_uplink_statuses200_response_inner import GetOrganizationCellularGatewayUplinkStatuses200ResponseInner
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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of network IDs. The returned devices will be filtered to only include these networks. (optional)
    serials = ['serials_example'] # List[str] | A list of serial numbers. The returned devices will be filtered to only include these serials. (optional)
    iccids = ['iccids_example'] # List[str] | A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. (optional)

    try:
        # List the uplink status of every Meraki MG cellular gateway in the organization
        api_response = api_instance.get_organization_cellular_gateway_uplink_statuses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)
        print("The response of CellularGatewayApi->get_organization_cellular_gateway_uplink_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->get_organization_cellular_gateway_uplink_statuses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| A list of network IDs. The returned devices will be filtered to only include these networks. | [optional] 
 **serials** | [**List[str]**](str.md)| A list of serial numbers. The returned devices will be filtered to only include these serials. | [optional] 
 **iccids** | [**List[str]**](str.md)| A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. | [optional] 

### Return type

[**List[GetOrganizationCellularGatewayUplinkStatuses200ResponseInner]**](GetOrganizationCellularGatewayUplinkStatuses200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_device_cellular_gateway_lan**
> object update_device_cellular_gateway_lan(serial, update_device_cellular_gateway_lan_request=update_device_cellular_gateway_lan_request)

Update the LAN Settings for a single MG.

Update the LAN Settings for a single MG.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_cellular_gateway_lan_request import UpdateDeviceCellularGatewayLanRequest
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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    serial = 'serial_example' # str | 
    update_device_cellular_gateway_lan_request = openapi_client.UpdateDeviceCellularGatewayLanRequest() # UpdateDeviceCellularGatewayLanRequest |  (optional)

    try:
        # Update the LAN Settings for a single MG.
        api_response = api_instance.update_device_cellular_gateway_lan(serial, update_device_cellular_gateway_lan_request=update_device_cellular_gateway_lan_request)
        print("The response of CellularGatewayApi->update_device_cellular_gateway_lan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->update_device_cellular_gateway_lan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_cellular_gateway_lan_request** | [**UpdateDeviceCellularGatewayLanRequest**](UpdateDeviceCellularGatewayLanRequest.md)|  | [optional] 

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

# **update_device_cellular_gateway_port_forwarding_rules**
> object update_device_cellular_gateway_port_forwarding_rules(serial, update_device_cellular_gateway_port_forwarding_rules_request=update_device_cellular_gateway_port_forwarding_rules_request)

Updates the port forwarding rules for a single MG.

Updates the port forwarding rules for a single MG.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_cellular_gateway_port_forwarding_rules_request import UpdateDeviceCellularGatewayPortForwardingRulesRequest
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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    serial = 'serial_example' # str | 
    update_device_cellular_gateway_port_forwarding_rules_request = openapi_client.UpdateDeviceCellularGatewayPortForwardingRulesRequest() # UpdateDeviceCellularGatewayPortForwardingRulesRequest |  (optional)

    try:
        # Updates the port forwarding rules for a single MG.
        api_response = api_instance.update_device_cellular_gateway_port_forwarding_rules(serial, update_device_cellular_gateway_port_forwarding_rules_request=update_device_cellular_gateway_port_forwarding_rules_request)
        print("The response of CellularGatewayApi->update_device_cellular_gateway_port_forwarding_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->update_device_cellular_gateway_port_forwarding_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_cellular_gateway_port_forwarding_rules_request** | [**UpdateDeviceCellularGatewayPortForwardingRulesRequest**](UpdateDeviceCellularGatewayPortForwardingRulesRequest.md)|  | [optional] 

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

# **update_network_cellular_gateway_connectivity_monitoring_destinations**
> object update_network_cellular_gateway_connectivity_monitoring_destinations(network_id, update_network_cellular_gateway_connectivity_monitoring_destinations_request=update_network_cellular_gateway_connectivity_monitoring_destinations_request)

Update the connectivity testing destinations for an MG network

Update the connectivity testing destinations for an MG network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_cellular_gateway_connectivity_monitoring_destinations_request import UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest
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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_cellular_gateway_connectivity_monitoring_destinations_request = openapi_client.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest() # UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest |  (optional)

    try:
        # Update the connectivity testing destinations for an MG network
        api_response = api_instance.update_network_cellular_gateway_connectivity_monitoring_destinations(network_id, update_network_cellular_gateway_connectivity_monitoring_destinations_request=update_network_cellular_gateway_connectivity_monitoring_destinations_request)
        print("The response of CellularGatewayApi->update_network_cellular_gateway_connectivity_monitoring_destinations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->update_network_cellular_gateway_connectivity_monitoring_destinations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_cellular_gateway_connectivity_monitoring_destinations_request** | [**UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest**](UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest.md)|  | [optional] 

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

# **update_network_cellular_gateway_dhcp**
> GetNetworkCellularGatewayDhcp200Response update_network_cellular_gateway_dhcp(network_id, update_network_cellular_gateway_dhcp_request=update_network_cellular_gateway_dhcp_request)

Update common DHCP settings of MGs

Update common DHCP settings of MGs

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_cellular_gateway_dhcp200_response import GetNetworkCellularGatewayDhcp200Response
from openapi_client.models.update_network_cellular_gateway_dhcp_request import UpdateNetworkCellularGatewayDhcpRequest
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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_cellular_gateway_dhcp_request = openapi_client.UpdateNetworkCellularGatewayDhcpRequest() # UpdateNetworkCellularGatewayDhcpRequest |  (optional)

    try:
        # Update common DHCP settings of MGs
        api_response = api_instance.update_network_cellular_gateway_dhcp(network_id, update_network_cellular_gateway_dhcp_request=update_network_cellular_gateway_dhcp_request)
        print("The response of CellularGatewayApi->update_network_cellular_gateway_dhcp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->update_network_cellular_gateway_dhcp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_cellular_gateway_dhcp_request** | [**UpdateNetworkCellularGatewayDhcpRequest**](UpdateNetworkCellularGatewayDhcpRequest.md)|  | [optional] 

### Return type

[**GetNetworkCellularGatewayDhcp200Response**](GetNetworkCellularGatewayDhcp200Response.md)

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

# **update_network_cellular_gateway_subnet_pool**
> object update_network_cellular_gateway_subnet_pool(network_id, update_network_cellular_gateway_subnet_pool_request=update_network_cellular_gateway_subnet_pool_request)

Update the subnet pool and mask configuration for MGs in the network.

Update the subnet pool and mask configuration for MGs in the network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_cellular_gateway_subnet_pool_request import UpdateNetworkCellularGatewaySubnetPoolRequest
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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_cellular_gateway_subnet_pool_request = openapi_client.UpdateNetworkCellularGatewaySubnetPoolRequest() # UpdateNetworkCellularGatewaySubnetPoolRequest |  (optional)

    try:
        # Update the subnet pool and mask configuration for MGs in the network.
        api_response = api_instance.update_network_cellular_gateway_subnet_pool(network_id, update_network_cellular_gateway_subnet_pool_request=update_network_cellular_gateway_subnet_pool_request)
        print("The response of CellularGatewayApi->update_network_cellular_gateway_subnet_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->update_network_cellular_gateway_subnet_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_cellular_gateway_subnet_pool_request** | [**UpdateNetworkCellularGatewaySubnetPoolRequest**](UpdateNetworkCellularGatewaySubnetPoolRequest.md)|  | [optional] 

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

# **update_network_cellular_gateway_uplink**
> object update_network_cellular_gateway_uplink(network_id, update_network_cellular_gateway_uplink_request=update_network_cellular_gateway_uplink_request)

Updates the uplink settings for your MG network.

Updates the uplink settings for your MG network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_cellular_gateway_uplink_request import UpdateNetworkCellularGatewayUplinkRequest
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
    api_instance = openapi_client.CellularGatewayApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_cellular_gateway_uplink_request = openapi_client.UpdateNetworkCellularGatewayUplinkRequest() # UpdateNetworkCellularGatewayUplinkRequest |  (optional)

    try:
        # Updates the uplink settings for your MG network.
        api_response = api_instance.update_network_cellular_gateway_uplink(network_id, update_network_cellular_gateway_uplink_request=update_network_cellular_gateway_uplink_request)
        print("The response of CellularGatewayApi->update_network_cellular_gateway_uplink:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularGatewayApi->update_network_cellular_gateway_uplink: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_cellular_gateway_uplink_request** | [**UpdateNetworkCellularGatewayUplinkRequest**](UpdateNetworkCellularGatewayUplinkRequest.md)|  | [optional] 

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


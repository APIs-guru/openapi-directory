# openapi_client.PortsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cycle_device_switch_ports_1**](PortsApi.md#cycle_device_switch_ports_1) | **POST** /devices/{serial}/switch/ports/cycle | Cycle a set of switch ports
[**get_device_switch_port_1**](PortsApi.md#get_device_switch_port_1) | **GET** /devices/{serial}/switch/ports/{portId} | Return a switch port
[**get_device_switch_ports_1**](PortsApi.md#get_device_switch_ports_1) | **GET** /devices/{serial}/switch/ports | List the switch ports for a switch
[**get_device_switch_ports_statuses_1**](PortsApi.md#get_device_switch_ports_statuses_1) | **GET** /devices/{serial}/switch/ports/statuses | Return the status for all the ports of a switch
[**get_device_switch_ports_statuses_packets_1**](PortsApi.md#get_device_switch_ports_statuses_packets_1) | **GET** /devices/{serial}/switch/ports/statuses/packets | Return the packet counters for all the ports of a switch
[**get_network_appliance_port_1**](PortsApi.md#get_network_appliance_port_1) | **GET** /networks/{networkId}/appliance/ports/{portId} | Return per-port VLAN settings for a single MX port.
[**get_network_appliance_ports_1**](PortsApi.md#get_network_appliance_ports_1) | **GET** /networks/{networkId}/appliance/ports | List per-port VLAN settings for all ports of a MX.
[**get_organization_config_template_switch_profile_port_3**](PortsApi.md#get_organization_config_template_switch_profile_port_3) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Return a switch profile port
[**get_organization_config_template_switch_profile_ports_3**](PortsApi.md#get_organization_config_template_switch_profile_ports_3) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports | Return all the ports of a switch profile
[**get_organization_switch_ports_by_switch_1**](PortsApi.md#get_organization_switch_ports_by_switch_1) | **GET** /organizations/{organizationId}/switch/ports/bySwitch | List the switchports in an organization by switch
[**update_device_switch_port_1**](PortsApi.md#update_device_switch_port_1) | **PUT** /devices/{serial}/switch/ports/{portId} | Update a switch port
[**update_network_appliance_port_1**](PortsApi.md#update_network_appliance_port_1) | **PUT** /networks/{networkId}/appliance/ports/{portId} | Update the per-port VLAN settings for a single MX port.
[**update_organization_config_template_switch_profile_port_3**](PortsApi.md#update_organization_config_template_switch_profile_port_3) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Update a switch profile port


# **cycle_device_switch_ports_1**
> object cycle_device_switch_ports_1(serial, cycle_device_switch_ports_request)

Cycle a set of switch ports

Cycle a set of switch ports

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.cycle_device_switch_ports_request import CycleDeviceSwitchPortsRequest
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
    api_instance = openapi_client.PortsApi(api_client)
    serial = 'serial_example' # str | 
    cycle_device_switch_ports_request = openapi_client.CycleDeviceSwitchPortsRequest() # CycleDeviceSwitchPortsRequest | 

    try:
        # Cycle a set of switch ports
        api_response = api_instance.cycle_device_switch_ports_1(serial, cycle_device_switch_ports_request)
        print("The response of PortsApi->cycle_device_switch_ports_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->cycle_device_switch_ports_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **cycle_device_switch_ports_request** | [**CycleDeviceSwitchPortsRequest**](CycleDeviceSwitchPortsRequest.md)|  | 

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

# **get_device_switch_port_1**
> GetDeviceSwitchPorts200ResponseInner get_device_switch_port_1(serial, port_id)

Return a switch port

Return a switch port

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_switch_ports200_response_inner import GetDeviceSwitchPorts200ResponseInner
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
    api_instance = openapi_client.PortsApi(api_client)
    serial = 'serial_example' # str | 
    port_id = 'port_id_example' # str | 

    try:
        # Return a switch port
        api_response = api_instance.get_device_switch_port_1(serial, port_id)
        print("The response of PortsApi->get_device_switch_port_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->get_device_switch_port_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **port_id** | **str**|  | 

### Return type

[**GetDeviceSwitchPorts200ResponseInner**](GetDeviceSwitchPorts200ResponseInner.md)

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

# **get_device_switch_ports_1**
> List[GetDeviceSwitchPorts200ResponseInner] get_device_switch_ports_1(serial)

List the switch ports for a switch

List the switch ports for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_switch_ports200_response_inner import GetDeviceSwitchPorts200ResponseInner
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
    api_instance = openapi_client.PortsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # List the switch ports for a switch
        api_response = api_instance.get_device_switch_ports_1(serial)
        print("The response of PortsApi->get_device_switch_ports_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->get_device_switch_ports_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

[**List[GetDeviceSwitchPorts200ResponseInner]**](GetDeviceSwitchPorts200ResponseInner.md)

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

# **get_device_switch_ports_statuses_1**
> List[GetDeviceSwitchPortsStatuses200ResponseInner] get_device_switch_ports_statuses_1(serial, t0=t0, timespan=timespan)

Return the status for all the ports of a switch

Return the status for all the ports of a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_switch_ports_statuses200_response_inner import GetDeviceSwitchPortsStatuses200ResponseInner
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
    api_instance = openapi_client.PortsApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return the status for all the ports of a switch
        api_response = api_instance.get_device_switch_ports_statuses_1(serial, t0=t0, timespan=timespan)
        print("The response of PortsApi->get_device_switch_ports_statuses_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->get_device_switch_ports_statuses_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetDeviceSwitchPortsStatuses200ResponseInner]**](GetDeviceSwitchPortsStatuses200ResponseInner.md)

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

# **get_device_switch_ports_statuses_packets_1**
> List[object] get_device_switch_ports_statuses_packets_1(serial, t0=t0, timespan=timespan)

Return the packet counters for all the ports of a switch

Return the packet counters for all the ports of a switch

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
    api_instance = openapi_client.PortsApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 1 day from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day. (optional)

    try:
        # Return the packet counters for all the ports of a switch
        api_response = api_instance.get_device_switch_ports_statuses_packets_1(serial, t0=t0, timespan=timespan)
        print("The response of PortsApi->get_device_switch_ports_statuses_packets_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->get_device_switch_ports_statuses_packets_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 1 day from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day. | [optional] 

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

# **get_network_appliance_port_1**
> GetNetworkAppliancePorts200ResponseInner get_network_appliance_port_1(network_id, port_id)

Return per-port VLAN settings for a single MX port.

Return per-port VLAN settings for a single MX port.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_ports200_response_inner import GetNetworkAppliancePorts200ResponseInner
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
    api_instance = openapi_client.PortsApi(api_client)
    network_id = 'network_id_example' # str | 
    port_id = 'port_id_example' # str | 

    try:
        # Return per-port VLAN settings for a single MX port.
        api_response = api_instance.get_network_appliance_port_1(network_id, port_id)
        print("The response of PortsApi->get_network_appliance_port_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->get_network_appliance_port_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **port_id** | **str**|  | 

### Return type

[**GetNetworkAppliancePorts200ResponseInner**](GetNetworkAppliancePorts200ResponseInner.md)

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

# **get_network_appliance_ports_1**
> List[GetNetworkAppliancePorts200ResponseInner] get_network_appliance_ports_1(network_id)

List per-port VLAN settings for all ports of a MX.

List per-port VLAN settings for all ports of a MX.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_ports200_response_inner import GetNetworkAppliancePorts200ResponseInner
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
    api_instance = openapi_client.PortsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List per-port VLAN settings for all ports of a MX.
        api_response = api_instance.get_network_appliance_ports_1(network_id)
        print("The response of PortsApi->get_network_appliance_ports_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->get_network_appliance_ports_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkAppliancePorts200ResponseInner]**](GetNetworkAppliancePorts200ResponseInner.md)

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

# **get_organization_config_template_switch_profile_port_3**
> GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner get_organization_config_template_switch_profile_port_3(organization_id, config_template_id, profile_id, port_id)

Return a switch profile port

Return a switch profile port

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_config_template_switch_profile_ports200_response_inner import GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner
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
    api_instance = openapi_client.PortsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    profile_id = 'profile_id_example' # str | 
    port_id = 'port_id_example' # str | 

    try:
        # Return a switch profile port
        api_response = api_instance.get_organization_config_template_switch_profile_port_3(organization_id, config_template_id, profile_id, port_id)
        print("The response of PortsApi->get_organization_config_template_switch_profile_port_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->get_organization_config_template_switch_profile_port_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 
 **profile_id** | **str**|  | 
 **port_id** | **str**|  | 

### Return type

[**GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner**](GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner.md)

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

# **get_organization_config_template_switch_profile_ports_3**
> List[GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner] get_organization_config_template_switch_profile_ports_3(organization_id, config_template_id, profile_id)

Return all the ports of a switch profile

Return all the ports of a switch profile

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_config_template_switch_profile_ports200_response_inner import GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner
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
    api_instance = openapi_client.PortsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    profile_id = 'profile_id_example' # str | 

    try:
        # Return all the ports of a switch profile
        api_response = api_instance.get_organization_config_template_switch_profile_ports_3(organization_id, config_template_id, profile_id)
        print("The response of PortsApi->get_organization_config_template_switch_profile_ports_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->get_organization_config_template_switch_profile_ports_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 
 **profile_id** | **str**|  | 

### Return type

[**List[GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner]**](GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner.md)

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

# **get_organization_switch_ports_by_switch_1**
> List[GetOrganizationSwitchPortsBySwitch200ResponseInner] get_organization_switch_ports_by_switch_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, port_profile_ids=port_profile_ids, name=name, mac=mac, macs=macs, serial=serial, serials=serials, configuration_updated_after=configuration_updated_after)

List the switchports in an organization by switch

List the switchports in an organization by switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_switch_ports_by_switch200_response_inner import GetOrganizationSwitchPortsBySwitch200ResponseInner
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
    api_instance = openapi_client.PortsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 50. Default is 50. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter switchports by network. (optional)
    port_profile_ids = ['port_profile_ids_example'] # List[str] | Optional parameter to filter switchports belonging to the specified switchport profiles. (optional)
    name = 'name_example' # str | Optional parameter to filter switchports belonging to switches by name. All returned switches will have a name that contains the search term or is an exact match. (optional)
    mac = 'mac_example' # str | Optional parameter to filter switchports belonging to switches by MAC address. All returned switches will have a MAC address that contains the search term or is an exact match. (optional)
    macs = ['macs_example'] # List[str] | Optional parameter to filter switchports by one or more MAC addresses belonging to devices. All switchports returned belong to MAC addresses of switches that are an exact match. (optional)
    serial = 'serial_example' # str | Optional parameter to filter switchports belonging to switches by serial number. All returned switches will have a serial number that contains the search term or is an exact match. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter switchports belonging to switches with one or more serial numbers. All switchports returned belong to serial numbers of switches that are an exact match. (optional)
    configuration_updated_after = 'configuration_updated_after_example' # str | Optional parameter to filter results by switches where the configuration has been updated after the given timestamp. (optional)

    try:
        # List the switchports in an organization by switch
        api_response = api_instance.get_organization_switch_ports_by_switch_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, port_profile_ids=port_profile_ids, name=name, mac=mac, macs=macs, serial=serial, serials=serials, configuration_updated_after=configuration_updated_after)
        print("The response of PortsApi->get_organization_switch_ports_by_switch_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->get_organization_switch_ports_by_switch_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 50. Default is 50. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter switchports by network. | [optional] 
 **port_profile_ids** | [**List[str]**](str.md)| Optional parameter to filter switchports belonging to the specified switchport profiles. | [optional] 
 **name** | **str**| Optional parameter to filter switchports belonging to switches by name. All returned switches will have a name that contains the search term or is an exact match. | [optional] 
 **mac** | **str**| Optional parameter to filter switchports belonging to switches by MAC address. All returned switches will have a MAC address that contains the search term or is an exact match. | [optional] 
 **macs** | [**List[str]**](str.md)| Optional parameter to filter switchports by one or more MAC addresses belonging to devices. All switchports returned belong to MAC addresses of switches that are an exact match. | [optional] 
 **serial** | **str**| Optional parameter to filter switchports belonging to switches by serial number. All returned switches will have a serial number that contains the search term or is an exact match. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter switchports belonging to switches with one or more serial numbers. All switchports returned belong to serial numbers of switches that are an exact match. | [optional] 
 **configuration_updated_after** | **str**| Optional parameter to filter results by switches where the configuration has been updated after the given timestamp. | [optional] 

### Return type

[**List[GetOrganizationSwitchPortsBySwitch200ResponseInner]**](GetOrganizationSwitchPortsBySwitch200ResponseInner.md)

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

# **update_device_switch_port_1**
> GetDeviceSwitchPorts200ResponseInner update_device_switch_port_1(serial, port_id, update_device_switch_port_request=update_device_switch_port_request)

Update a switch port

Update a switch port

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_switch_ports200_response_inner import GetDeviceSwitchPorts200ResponseInner
from openapi_client.models.update_device_switch_port_request import UpdateDeviceSwitchPortRequest
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
    api_instance = openapi_client.PortsApi(api_client)
    serial = 'serial_example' # str | 
    port_id = 'port_id_example' # str | 
    update_device_switch_port_request = openapi_client.UpdateDeviceSwitchPortRequest() # UpdateDeviceSwitchPortRequest |  (optional)

    try:
        # Update a switch port
        api_response = api_instance.update_device_switch_port_1(serial, port_id, update_device_switch_port_request=update_device_switch_port_request)
        print("The response of PortsApi->update_device_switch_port_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->update_device_switch_port_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **port_id** | **str**|  | 
 **update_device_switch_port_request** | [**UpdateDeviceSwitchPortRequest**](UpdateDeviceSwitchPortRequest.md)|  | [optional] 

### Return type

[**GetDeviceSwitchPorts200ResponseInner**](GetDeviceSwitchPorts200ResponseInner.md)

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

# **update_network_appliance_port_1**
> GetNetworkAppliancePorts200ResponseInner update_network_appliance_port_1(network_id, port_id, update_network_appliance_port_request=update_network_appliance_port_request)

Update the per-port VLAN settings for a single MX port.

Update the per-port VLAN settings for a single MX port.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_ports200_response_inner import GetNetworkAppliancePorts200ResponseInner
from openapi_client.models.update_network_appliance_port_request import UpdateNetworkAppliancePortRequest
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
    api_instance = openapi_client.PortsApi(api_client)
    network_id = 'network_id_example' # str | 
    port_id = 'port_id_example' # str | 
    update_network_appliance_port_request = openapi_client.UpdateNetworkAppliancePortRequest() # UpdateNetworkAppliancePortRequest |  (optional)

    try:
        # Update the per-port VLAN settings for a single MX port.
        api_response = api_instance.update_network_appliance_port_1(network_id, port_id, update_network_appliance_port_request=update_network_appliance_port_request)
        print("The response of PortsApi->update_network_appliance_port_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->update_network_appliance_port_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **port_id** | **str**|  | 
 **update_network_appliance_port_request** | [**UpdateNetworkAppliancePortRequest**](UpdateNetworkAppliancePortRequest.md)|  | [optional] 

### Return type

[**GetNetworkAppliancePorts200ResponseInner**](GetNetworkAppliancePorts200ResponseInner.md)

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

# **update_organization_config_template_switch_profile_port_3**
> GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner update_organization_config_template_switch_profile_port_3(organization_id, config_template_id, profile_id, port_id, update_organization_config_template_switch_profile_port_request=update_organization_config_template_switch_profile_port_request)

Update a switch profile port

Update a switch profile port

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_config_template_switch_profile_ports200_response_inner import GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner
from openapi_client.models.update_organization_config_template_switch_profile_port_request import UpdateOrganizationConfigTemplateSwitchProfilePortRequest
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
    api_instance = openapi_client.PortsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    profile_id = 'profile_id_example' # str | 
    port_id = 'port_id_example' # str | 
    update_organization_config_template_switch_profile_port_request = openapi_client.UpdateOrganizationConfigTemplateSwitchProfilePortRequest() # UpdateOrganizationConfigTemplateSwitchProfilePortRequest |  (optional)

    try:
        # Update a switch profile port
        api_response = api_instance.update_organization_config_template_switch_profile_port_3(organization_id, config_template_id, profile_id, port_id, update_organization_config_template_switch_profile_port_request=update_organization_config_template_switch_profile_port_request)
        print("The response of PortsApi->update_organization_config_template_switch_profile_port_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->update_organization_config_template_switch_profile_port_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 
 **profile_id** | **str**|  | 
 **port_id** | **str**|  | 
 **update_organization_config_template_switch_profile_port_request** | [**UpdateOrganizationConfigTemplateSwitchProfilePortRequest**](UpdateOrganizationConfigTemplateSwitchProfilePortRequest.md)|  | [optional] 

### Return type

[**GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner**](GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner.md)

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


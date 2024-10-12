# openapi_client.DevicesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blink_device_leds**](DevicesApi.md#blink_device_leds) | **POST** /devices/{serial}/blinkLeds | Blink the LEDs on a device
[**checkin_network_sm_devices_1**](DevicesApi.md#checkin_network_sm_devices_1) | **POST** /networks/{networkId}/sm/devices/checkin | Force check-in a set of devices
[**claim_network_devices_1**](DevicesApi.md#claim_network_devices_1) | **POST** /networks/{networkId}/devices/claim | Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
[**clone_organization_switch_devices_1**](DevicesApi.md#clone_organization_switch_devices_1) | **POST** /organizations/{organizationId}/switch/devices/clone | Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
[**create_device_live_tools_ping**](DevicesApi.md#create_device_live_tools_ping) | **POST** /devices/{serial}/liveTools/ping | Enqueue a job to ping a target host from the device
[**create_device_live_tools_ping_device**](DevicesApi.md#create_device_live_tools_ping_device) | **POST** /devices/{serial}/liveTools/pingDevice | Enqueue a job to check connectivity status to the device
[**get_device**](DevicesApi.md#get_device) | **GET** /devices/{serial} | Return a single device
[**get_device_cellular_sims**](DevicesApi.md#get_device_cellular_sims) | **GET** /devices/{serial}/cellular/sims | Return the SIM and APN configurations for a cellular device.
[**get_device_clients**](DevicesApi.md#get_device_clients) | **GET** /devices/{serial}/clients | List the clients of a device, up to a maximum of a month ago
[**get_device_live_tools_ping**](DevicesApi.md#get_device_live_tools_ping) | **GET** /devices/{serial}/liveTools/ping/{id} | Return a ping job
[**get_device_live_tools_ping_device**](DevicesApi.md#get_device_live_tools_ping_device) | **GET** /devices/{serial}/liveTools/pingDevice/{id} | Return a ping device job
[**get_device_lldp_cdp**](DevicesApi.md#get_device_lldp_cdp) | **GET** /devices/{serial}/lldpCdp | List LLDP and CDP information for a device
[**get_device_loss_and_latency_history**](DevicesApi.md#get_device_loss_and_latency_history) | **GET** /devices/{serial}/lossAndLatencyHistory | Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
[**get_device_management_interface**](DevicesApi.md#get_device_management_interface) | **GET** /devices/{serial}/managementInterface | Return the management interface settings for a device
[**get_network_devices_1**](DevicesApi.md#get_network_devices_1) | **GET** /networks/{networkId}/devices | List the devices in a network
[**get_network_sm_device_cellular_usage_history_1**](DevicesApi.md#get_network_sm_device_cellular_usage_history_1) | **GET** /networks/{networkId}/sm/devices/{deviceId}/cellularUsageHistory | Return the client&#39;s daily cellular data usage history
[**get_network_sm_device_certs_1**](DevicesApi.md#get_network_sm_device_certs_1) | **GET** /networks/{networkId}/sm/devices/{deviceId}/certs | List the certs on a device
[**get_network_sm_device_connectivity_1**](DevicesApi.md#get_network_sm_device_connectivity_1) | **GET** /networks/{networkId}/sm/devices/{deviceId}/connectivity | Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
[**get_network_sm_device_desktop_logs_1**](DevicesApi.md#get_network_sm_device_desktop_logs_1) | **GET** /networks/{networkId}/sm/devices/{deviceId}/desktopLogs | Return historical records of various Systems Manager network connection details for desktop devices.
[**get_network_sm_device_device_command_logs_1**](DevicesApi.md#get_network_sm_device_device_command_logs_1) | **GET** /networks/{networkId}/sm/devices/{deviceId}/deviceCommandLogs | Return historical records of commands sent to Systems Manager devices
[**get_network_sm_device_device_profiles_1**](DevicesApi.md#get_network_sm_device_device_profiles_1) | **GET** /networks/{networkId}/sm/devices/{deviceId}/deviceProfiles | Get the installed profiles associated with a device
[**get_network_sm_device_network_adapters_1**](DevicesApi.md#get_network_sm_device_network_adapters_1) | **GET** /networks/{networkId}/sm/devices/{deviceId}/networkAdapters | List the network adapters of a device
[**get_network_sm_device_performance_history_1**](DevicesApi.md#get_network_sm_device_performance_history_1) | **GET** /networks/{networkId}/sm/devices/{deviceId}/performanceHistory | Return historical records of various Systems Manager client metrics for desktop devices.
[**get_network_sm_device_restrictions_1**](DevicesApi.md#get_network_sm_device_restrictions_1) | **GET** /networks/{networkId}/sm/devices/{deviceId}/restrictions | List the restrictions on a device
[**get_network_sm_device_security_centers_1**](DevicesApi.md#get_network_sm_device_security_centers_1) | **GET** /networks/{networkId}/sm/devices/{deviceId}/securityCenters | List the security centers on a device
[**get_network_sm_device_softwares_1**](DevicesApi.md#get_network_sm_device_softwares_1) | **GET** /networks/{networkId}/sm/devices/{deviceId}/softwares | Get a list of softwares associated with a device
[**get_network_sm_device_wlan_lists_1**](DevicesApi.md#get_network_sm_device_wlan_lists_1) | **GET** /networks/{networkId}/sm/devices/{deviceId}/wlanLists | List the saved SSID names on a device
[**get_network_sm_devices_1**](DevicesApi.md#get_network_sm_devices_1) | **GET** /networks/{networkId}/sm/devices | List the devices enrolled in an SM network with various specified fields and filters
[**get_network_wireless_devices_connection_stats_1**](DevicesApi.md#get_network_wireless_devices_connection_stats_1) | **GET** /networks/{networkId}/wireless/devices/connectionStats | Aggregated connectivity info for this network, grouped by node
[**get_network_wireless_devices_latency_stats_1**](DevicesApi.md#get_network_wireless_devices_latency_stats_1) | **GET** /networks/{networkId}/wireless/devices/latencyStats | Aggregated latency info for this network, grouped by node
[**get_organization_devices_1**](DevicesApi.md#get_organization_devices_1) | **GET** /organizations/{organizationId}/devices | List the devices in an organization
[**get_organization_devices_availabilities_1**](DevicesApi.md#get_organization_devices_availabilities_1) | **GET** /organizations/{organizationId}/devices/availabilities | List the availability information for devices in an organization
[**get_organization_devices_power_modules_statuses_by_device_1**](DevicesApi.md#get_organization_devices_power_modules_statuses_by_device_1) | **GET** /organizations/{organizationId}/devices/powerModules/statuses/byDevice | List the power status information for devices in an organization
[**get_organization_devices_statuses_1**](DevicesApi.md#get_organization_devices_statuses_1) | **GET** /organizations/{organizationId}/devices/statuses | List the status of every Meraki device in the organization
[**get_organization_devices_statuses_overview_1**](DevicesApi.md#get_organization_devices_statuses_overview_1) | **GET** /organizations/{organizationId}/devices/statuses/overview | Return an overview of current device statuses
[**get_organization_devices_uplinks_addresses_by_device_1**](DevicesApi.md#get_organization_devices_uplinks_addresses_by_device_1) | **GET** /organizations/{organizationId}/devices/uplinks/addresses/byDevice | List the current uplink addresses for devices in an organization.
[**get_organization_devices_uplinks_loss_and_latency_1**](DevicesApi.md#get_organization_devices_uplinks_loss_and_latency_1) | **GET** /organizations/{organizationId}/devices/uplinksLossAndLatency | Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
[**get_organization_inventory_device_2**](DevicesApi.md#get_organization_inventory_device_2) | **GET** /organizations/{organizationId}/inventory/devices/{serial} | Return a single device from the inventory of an organization
[**get_organization_inventory_devices_2**](DevicesApi.md#get_organization_inventory_devices_2) | **GET** /organizations/{organizationId}/inventory/devices | Return the device inventory for an organization
[**get_organization_summary_top_devices_by_usage_3**](DevicesApi.md#get_organization_summary_top_devices_by_usage_3) | **GET** /organizations/{organizationId}/summary/top/devices/byUsage | Return metrics for organization&#39;s top 10 devices sorted by data usage over given time range
[**get_organization_summary_top_devices_models_by_usage_3**](DevicesApi.md#get_organization_summary_top_devices_models_by_usage_3) | **GET** /organizations/{organizationId}/summary/top/devices/models/byUsage | Return metrics for organization&#39;s top 10 device models sorted by data usage over given time range
[**get_organization_wireless_devices_ethernet_statuses_1**](DevicesApi.md#get_organization_wireless_devices_ethernet_statuses_1) | **GET** /organizations/{organizationId}/wireless/devices/ethernet/statuses | Endpoint to see power status for wireless devices
[**lock_network_sm_devices_1**](DevicesApi.md#lock_network_sm_devices_1) | **POST** /networks/{networkId}/sm/devices/lock | Lock a set of devices
[**modify_network_sm_devices_tags_1**](DevicesApi.md#modify_network_sm_devices_tags_1) | **POST** /networks/{networkId}/sm/devices/modifyTags | Add, delete, or update the tags of a set of devices
[**move_network_sm_devices_1**](DevicesApi.md#move_network_sm_devices_1) | **POST** /networks/{networkId}/sm/devices/move | Move a set of devices to a new network
[**reboot_device**](DevicesApi.md#reboot_device) | **POST** /devices/{serial}/reboot | Reboot a device
[**refresh_network_sm_device_details_1**](DevicesApi.md#refresh_network_sm_device_details_1) | **POST** /networks/{networkId}/sm/devices/{deviceId}/refreshDetails | Refresh the details of a device
[**remove_network_devices_1**](DevicesApi.md#remove_network_devices_1) | **POST** /networks/{networkId}/devices/remove | Remove a single device
[**unenroll_network_sm_device_1**](DevicesApi.md#unenroll_network_sm_device_1) | **POST** /networks/{networkId}/sm/devices/{deviceId}/unenroll | Unenroll a device
[**update_device**](DevicesApi.md#update_device) | **PUT** /devices/{serial} | Update the attributes of a device
[**update_device_cellular_sims**](DevicesApi.md#update_device_cellular_sims) | **PUT** /devices/{serial}/cellular/sims | Updates the SIM and APN configurations for a cellular device.
[**update_device_management_interface**](DevicesApi.md#update_device_management_interface) | **PUT** /devices/{serial}/managementInterface | Update the management interface settings for a device
[**update_network_sm_devices_fields_1**](DevicesApi.md#update_network_sm_devices_fields_1) | **PUT** /networks/{networkId}/sm/devices/fields | Modify the fields of a device
[**vmx_network_devices_claim_1**](DevicesApi.md#vmx_network_devices_claim_1) | **POST** /networks/{networkId}/devices/claim/vmx | Claim a vMX into a network
[**wipe_network_sm_devices_1**](DevicesApi.md#wipe_network_sm_devices_1) | **POST** /networks/{networkId}/sm/devices/wipe | Wipe a device


# **blink_device_leds**
> object blink_device_leds(serial, blink_device_leds_request=blink_device_leds_request)

Blink the LEDs on a device

Blink the LEDs on a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.blink_device_leds_request import BlinkDeviceLedsRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 
    blink_device_leds_request = openapi_client.BlinkDeviceLedsRequest() # BlinkDeviceLedsRequest |  (optional)

    try:
        # Blink the LEDs on a device
        api_response = api_instance.blink_device_leds(serial, blink_device_leds_request=blink_device_leds_request)
        print("The response of DevicesApi->blink_device_leds:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->blink_device_leds: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **blink_device_leds_request** | [**BlinkDeviceLedsRequest**](BlinkDeviceLedsRequest.md)|  | [optional] 

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
**202** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkin_network_sm_devices_1**
> CheckinNetworkSmDevices200Response checkin_network_sm_devices_1(network_id, checkin_network_sm_devices_request=checkin_network_sm_devices_request)

Force check-in a set of devices

Force check-in a set of devices

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.checkin_network_sm_devices200_response import CheckinNetworkSmDevices200Response
from openapi_client.models.checkin_network_sm_devices_request import CheckinNetworkSmDevicesRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    checkin_network_sm_devices_request = openapi_client.CheckinNetworkSmDevicesRequest() # CheckinNetworkSmDevicesRequest |  (optional)

    try:
        # Force check-in a set of devices
        api_response = api_instance.checkin_network_sm_devices_1(network_id, checkin_network_sm_devices_request=checkin_network_sm_devices_request)
        print("The response of DevicesApi->checkin_network_sm_devices_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->checkin_network_sm_devices_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **checkin_network_sm_devices_request** | [**CheckinNetworkSmDevicesRequest**](CheckinNetworkSmDevicesRequest.md)|  | [optional] 

### Return type

[**CheckinNetworkSmDevices200Response**](CheckinNetworkSmDevices200Response.md)

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

# **claim_network_devices_1**
> claim_network_devices_1(network_id, claim_network_devices_request)

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.claim_network_devices_request import ClaimNetworkDevicesRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    claim_network_devices_request = openapi_client.ClaimNetworkDevicesRequest() # ClaimNetworkDevicesRequest | 

    try:
        # Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
        api_instance.claim_network_devices_1(network_id, claim_network_devices_request)
    except Exception as e:
        print("Exception when calling DevicesApi->claim_network_devices_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **claim_network_devices_request** | [**ClaimNetworkDevicesRequest**](ClaimNetworkDevicesRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clone_organization_switch_devices_1**
> object clone_organization_switch_devices_1(organization_id, clone_organization_switch_devices_request)

Clone port-level and some switch-level configuration settings from a source switch to one or more target switches

Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.clone_organization_switch_devices_request import CloneOrganizationSwitchDevicesRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    clone_organization_switch_devices_request = openapi_client.CloneOrganizationSwitchDevicesRequest() # CloneOrganizationSwitchDevicesRequest | 

    try:
        # Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
        api_response = api_instance.clone_organization_switch_devices_1(organization_id, clone_organization_switch_devices_request)
        print("The response of DevicesApi->clone_organization_switch_devices_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->clone_organization_switch_devices_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **clone_organization_switch_devices_request** | [**CloneOrganizationSwitchDevicesRequest**](CloneOrganizationSwitchDevicesRequest.md)|  | 

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

# **create_device_live_tools_ping**
> CreateDeviceLiveToolsPing201Response create_device_live_tools_ping(serial, create_device_live_tools_ping_request)

Enqueue a job to ping a target host from the device

Enqueue a job to ping a target host from the device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_device_live_tools_ping201_response import CreateDeviceLiveToolsPing201Response
from openapi_client.models.create_device_live_tools_ping_request import CreateDeviceLiveToolsPingRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 
    create_device_live_tools_ping_request = openapi_client.CreateDeviceLiveToolsPingRequest() # CreateDeviceLiveToolsPingRequest | 

    try:
        # Enqueue a job to ping a target host from the device
        api_response = api_instance.create_device_live_tools_ping(serial, create_device_live_tools_ping_request)
        print("The response of DevicesApi->create_device_live_tools_ping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->create_device_live_tools_ping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **create_device_live_tools_ping_request** | [**CreateDeviceLiveToolsPingRequest**](CreateDeviceLiveToolsPingRequest.md)|  | 

### Return type

[**CreateDeviceLiveToolsPing201Response**](CreateDeviceLiveToolsPing201Response.md)

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

# **create_device_live_tools_ping_device**
> CreateDeviceLiveToolsPing201Response create_device_live_tools_ping_device(serial, create_device_live_tools_ping_device_request=create_device_live_tools_ping_device_request)

Enqueue a job to check connectivity status to the device

Enqueue a job to check connectivity status to the device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_device_live_tools_ping201_response import CreateDeviceLiveToolsPing201Response
from openapi_client.models.create_device_live_tools_ping_device_request import CreateDeviceLiveToolsPingDeviceRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 
    create_device_live_tools_ping_device_request = openapi_client.CreateDeviceLiveToolsPingDeviceRequest() # CreateDeviceLiveToolsPingDeviceRequest |  (optional)

    try:
        # Enqueue a job to check connectivity status to the device
        api_response = api_instance.create_device_live_tools_ping_device(serial, create_device_live_tools_ping_device_request=create_device_live_tools_ping_device_request)
        print("The response of DevicesApi->create_device_live_tools_ping_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->create_device_live_tools_ping_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **create_device_live_tools_ping_device_request** | [**CreateDeviceLiveToolsPingDeviceRequest**](CreateDeviceLiveToolsPingDeviceRequest.md)|  | [optional] 

### Return type

[**CreateDeviceLiveToolsPing201Response**](CreateDeviceLiveToolsPing201Response.md)

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

# **get_device**
> object get_device(serial)

Return a single device

Return a single device

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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return a single device
        api_response = api_instance.get_device(serial)
        print("The response of DevicesApi->get_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_device: %s\n" % e)
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

# **get_device_cellular_sims**
> object get_device_cellular_sims(serial)

Return the SIM and APN configurations for a cellular device.

Return the SIM and APN configurations for a cellular device.

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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the SIM and APN configurations for a cellular device.
        api_response = api_instance.get_device_cellular_sims(serial)
        print("The response of DevicesApi->get_device_cellular_sims:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_device_cellular_sims: %s\n" % e)
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

# **get_device_clients**
> List[object] get_device_clients(serial, t0=t0, timespan=timespan)

List the clients of a device, up to a maximum of a month ago

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # List the clients of a device, up to a maximum of a month ago
        api_response = api_instance.get_device_clients(serial, t0=t0, timespan=timespan)
        print("The response of DevicesApi->get_device_clients:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_device_clients: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

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

# **get_device_live_tools_ping**
> GetDeviceLiveToolsPing200Response get_device_live_tools_ping(serial, id)

Return a ping job

Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_live_tools_ping200_response import GetDeviceLiveToolsPing200Response
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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 
    id = 'id_example' # str | 

    try:
        # Return a ping job
        api_response = api_instance.get_device_live_tools_ping(serial, id)
        print("The response of DevicesApi->get_device_live_tools_ping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_device_live_tools_ping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **id** | **str**|  | 

### Return type

[**GetDeviceLiveToolsPing200Response**](GetDeviceLiveToolsPing200Response.md)

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

# **get_device_live_tools_ping_device**
> GetDeviceLiveToolsPing200Response get_device_live_tools_ping_device(serial, id)

Return a ping device job

Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_live_tools_ping200_response import GetDeviceLiveToolsPing200Response
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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 
    id = 'id_example' # str | 

    try:
        # Return a ping device job
        api_response = api_instance.get_device_live_tools_ping_device(serial, id)
        print("The response of DevicesApi->get_device_live_tools_ping_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_device_live_tools_ping_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **id** | **str**|  | 

### Return type

[**GetDeviceLiveToolsPing200Response**](GetDeviceLiveToolsPing200Response.md)

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

# **get_device_lldp_cdp**
> object get_device_lldp_cdp(serial)

List LLDP and CDP information for a device

List LLDP and CDP information for a device

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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # List LLDP and CDP information for a device
        api_response = api_instance.get_device_lldp_cdp(serial)
        print("The response of DevicesApi->get_device_lldp_cdp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_device_lldp_cdp: %s\n" % e)
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

# **get_device_loss_and_latency_history**
> List[object] get_device_loss_and_latency_history(serial, ip, t0=t0, t1=t1, timespan=timespan, resolution=resolution, uplink=uplink)

Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 
    ip = 'ip_example' # str | The destination IP used to obtain the requested stats. This is required.
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 60 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60. (optional)
    uplink = 'uplink_example' # str | The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1. (optional)

    try:
        # Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
        api_response = api_instance.get_device_loss_and_latency_history(serial, ip, t0=t0, t1=t1, timespan=timespan, resolution=resolution, uplink=uplink)
        print("The response of DevicesApi->get_device_loss_and_latency_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_device_loss_and_latency_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **ip** | **str**| The destination IP used to obtain the requested stats. This is required. | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 60 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60. | [optional] 
 **uplink** | **str**| The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1. | [optional] 

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

# **get_device_management_interface**
> object get_device_management_interface(serial)

Return the management interface settings for a device

Return the management interface settings for a device

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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the management interface settings for a device
        api_response = api_instance.get_device_management_interface(serial)
        print("The response of DevicesApi->get_device_management_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_device_management_interface: %s\n" % e)
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

# **get_network_devices_1**
> List[object] get_network_devices_1(network_id)

List the devices in a network

List the devices in a network

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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the devices in a network
        api_response = api_instance.get_network_devices_1(network_id)
        print("The response of DevicesApi->get_network_devices_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_devices_1: %s\n" % e)
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

# **get_network_sm_device_cellular_usage_history_1**
> List[GetNetworkSmDeviceCellularUsageHistory200ResponseInner] get_network_sm_device_cellular_usage_history_1(network_id, device_id)

Return the client's daily cellular data usage history

Return the client's daily cellular data usage history. Usage data is in kilobytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_cellular_usage_history200_response_inner import GetNetworkSmDeviceCellularUsageHistory200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # Return the client's daily cellular data usage history
        api_response = api_instance.get_network_sm_device_cellular_usage_history_1(network_id, device_id)
        print("The response of DevicesApi->get_network_sm_device_cellular_usage_history_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_device_cellular_usage_history_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceCellularUsageHistory200ResponseInner]**](GetNetworkSmDeviceCellularUsageHistory200ResponseInner.md)

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

# **get_network_sm_device_certs_1**
> List[GetNetworkSmDeviceCerts200ResponseInner] get_network_sm_device_certs_1(network_id, device_id)

List the certs on a device

List the certs on a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_certs200_response_inner import GetNetworkSmDeviceCerts200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # List the certs on a device
        api_response = api_instance.get_network_sm_device_certs_1(network_id, device_id)
        print("The response of DevicesApi->get_network_sm_device_certs_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_device_certs_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceCerts200ResponseInner]**](GetNetworkSmDeviceCerts200ResponseInner.md)

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

# **get_network_sm_device_connectivity_1**
> List[GetNetworkSmDeviceConnectivity200ResponseInner] get_network_sm_device_connectivity_1(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

Returns historical connectivity data (whether a device is regularly checking in to Dashboard).

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_connectivity200_response_inner import GetNetworkSmDeviceConnectivity200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
        api_response = api_instance.get_network_sm_device_connectivity_1(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of DevicesApi->get_network_sm_device_connectivity_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_device_connectivity_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmDeviceConnectivity200ResponseInner]**](GetNetworkSmDeviceConnectivity200ResponseInner.md)

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

# **get_network_sm_device_desktop_logs_1**
> List[GetNetworkSmDeviceDesktopLogs200ResponseInner] get_network_sm_device_desktop_logs_1(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return historical records of various Systems Manager network connection details for desktop devices.

Return historical records of various Systems Manager network connection details for desktop devices.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_desktop_logs200_response_inner import GetNetworkSmDeviceDesktopLogs200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return historical records of various Systems Manager network connection details for desktop devices.
        api_response = api_instance.get_network_sm_device_desktop_logs_1(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of DevicesApi->get_network_sm_device_desktop_logs_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_device_desktop_logs_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmDeviceDesktopLogs200ResponseInner]**](GetNetworkSmDeviceDesktopLogs200ResponseInner.md)

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

# **get_network_sm_device_device_command_logs_1**
> List[GetNetworkSmDeviceDeviceCommandLogs200ResponseInner] get_network_sm_device_device_command_logs_1(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return historical records of commands sent to Systems Manager devices

Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_device_command_logs200_response_inner import GetNetworkSmDeviceDeviceCommandLogs200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return historical records of commands sent to Systems Manager devices
        api_response = api_instance.get_network_sm_device_device_command_logs_1(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of DevicesApi->get_network_sm_device_device_command_logs_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_device_device_command_logs_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmDeviceDeviceCommandLogs200ResponseInner]**](GetNetworkSmDeviceDeviceCommandLogs200ResponseInner.md)

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

# **get_network_sm_device_device_profiles_1**
> List[GetNetworkSmDeviceDeviceProfiles200ResponseInner] get_network_sm_device_device_profiles_1(network_id, device_id)

Get the installed profiles associated with a device

Get the installed profiles associated with a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_device_profiles200_response_inner import GetNetworkSmDeviceDeviceProfiles200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # Get the installed profiles associated with a device
        api_response = api_instance.get_network_sm_device_device_profiles_1(network_id, device_id)
        print("The response of DevicesApi->get_network_sm_device_device_profiles_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_device_device_profiles_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceDeviceProfiles200ResponseInner]**](GetNetworkSmDeviceDeviceProfiles200ResponseInner.md)

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

# **get_network_sm_device_network_adapters_1**
> List[GetNetworkSmDeviceNetworkAdapters200ResponseInner] get_network_sm_device_network_adapters_1(network_id, device_id)

List the network adapters of a device

List the network adapters of a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_network_adapters200_response_inner import GetNetworkSmDeviceNetworkAdapters200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # List the network adapters of a device
        api_response = api_instance.get_network_sm_device_network_adapters_1(network_id, device_id)
        print("The response of DevicesApi->get_network_sm_device_network_adapters_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_device_network_adapters_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceNetworkAdapters200ResponseInner]**](GetNetworkSmDeviceNetworkAdapters200ResponseInner.md)

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

# **get_network_sm_device_performance_history_1**
> List[GetNetworkSmDevicePerformanceHistory200ResponseInner] get_network_sm_device_performance_history_1(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return historical records of various Systems Manager client metrics for desktop devices.

Return historical records of various Systems Manager client metrics for desktop devices.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_performance_history200_response_inner import GetNetworkSmDevicePerformanceHistory200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return historical records of various Systems Manager client metrics for desktop devices.
        api_response = api_instance.get_network_sm_device_performance_history_1(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of DevicesApi->get_network_sm_device_performance_history_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_device_performance_history_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmDevicePerformanceHistory200ResponseInner]**](GetNetworkSmDevicePerformanceHistory200ResponseInner.md)

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

# **get_network_sm_device_restrictions_1**
> List[object] get_network_sm_device_restrictions_1(network_id, device_id)

List the restrictions on a device

List the restrictions on a device

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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # List the restrictions on a device
        api_response = api_instance.get_network_sm_device_restrictions_1(network_id, device_id)
        print("The response of DevicesApi->get_network_sm_device_restrictions_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_device_restrictions_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

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

# **get_network_sm_device_security_centers_1**
> List[GetNetworkSmDeviceSecurityCenters200ResponseInner] get_network_sm_device_security_centers_1(network_id, device_id)

List the security centers on a device

List the security centers on a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_security_centers200_response_inner import GetNetworkSmDeviceSecurityCenters200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # List the security centers on a device
        api_response = api_instance.get_network_sm_device_security_centers_1(network_id, device_id)
        print("The response of DevicesApi->get_network_sm_device_security_centers_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_device_security_centers_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceSecurityCenters200ResponseInner]**](GetNetworkSmDeviceSecurityCenters200ResponseInner.md)

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

# **get_network_sm_device_softwares_1**
> List[GetNetworkSmDeviceSoftwares200ResponseInner] get_network_sm_device_softwares_1(network_id, device_id)

Get a list of softwares associated with a device

Get a list of softwares associated with a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_softwares200_response_inner import GetNetworkSmDeviceSoftwares200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # Get a list of softwares associated with a device
        api_response = api_instance.get_network_sm_device_softwares_1(network_id, device_id)
        print("The response of DevicesApi->get_network_sm_device_softwares_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_device_softwares_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceSoftwares200ResponseInner]**](GetNetworkSmDeviceSoftwares200ResponseInner.md)

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

# **get_network_sm_device_wlan_lists_1**
> List[GetNetworkSmDeviceWlanLists200ResponseInner] get_network_sm_device_wlan_lists_1(network_id, device_id)

List the saved SSID names on a device

List the saved SSID names on a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_wlan_lists200_response_inner import GetNetworkSmDeviceWlanLists200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # List the saved SSID names on a device
        api_response = api_instance.get_network_sm_device_wlan_lists_1(network_id, device_id)
        print("The response of DevicesApi->get_network_sm_device_wlan_lists_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_device_wlan_lists_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceWlanLists200ResponseInner]**](GetNetworkSmDeviceWlanLists200ResponseInner.md)

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

# **get_network_sm_devices_1**
> List[GetNetworkSmDevices200ResponseInner] get_network_sm_devices_1(network_id, fields=fields, wifi_macs=wifi_macs, serials=serials, ids=ids, scope=scope, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

List the devices enrolled in an SM network with various specified fields and filters

List the devices enrolled in an SM network with various specified fields and filters

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_devices200_response_inner import GetNetworkSmDevices200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    fields = ['fields_example'] # List[str] | Additional fields that will be displayed for each device.     The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,     systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,     ownerEmail, ownerUsername, osBuild, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,     simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,     isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,     hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, androidSecurityPatchVersion, and url. (optional)
    wifi_macs = ['wifi_macs_example'] # List[str] | Filter devices by wifi mac(s). (optional)
    serials = ['serials_example'] # List[str] | Filter devices by serial(s). (optional)
    ids = ['ids_example'] # List[str] | Filter devices by id(s). (optional)
    scope = ['scope_example'] # List[str] | Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # List the devices enrolled in an SM network with various specified fields and filters
        api_response = api_instance.get_network_sm_devices_1(network_id, fields=fields, wifi_macs=wifi_macs, serials=serials, ids=ids, scope=scope, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of DevicesApi->get_network_sm_devices_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_sm_devices_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **fields** | [**List[str]**](str.md)| Additional fields that will be displayed for each device.     The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,     systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,     ownerEmail, ownerUsername, osBuild, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,     simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,     isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,     hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, androidSecurityPatchVersion, and url. | [optional] 
 **wifi_macs** | [**List[str]**](str.md)| Filter devices by wifi mac(s). | [optional] 
 **serials** | [**List[str]**](str.md)| Filter devices by serial(s). | [optional] 
 **ids** | [**List[str]**](str.md)| Filter devices by id(s). | [optional] 
 **scope** | [**List[str]**](str.md)| Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSmDevices200ResponseInner]**](GetNetworkSmDevices200ResponseInner.md)

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

# **get_network_wireless_devices_connection_stats_1**
> List[GetDeviceWirelessConnectionStats200Response] get_network_wireless_devices_connection_stats_1(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)

Aggregated connectivity info for this network, grouped by node

Aggregated connectivity info for this network, grouped by node

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_wireless_connection_stats200_response import GetDeviceWirelessConnectionStats200Response
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)

    try:
        # Aggregated connectivity info for this network, grouped by node
        api_response = api_instance.get_network_wireless_devices_connection_stats_1(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)
        print("The response of DevicesApi->get_network_wireless_devices_connection_stats_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_wireless_devices_connection_stats_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **int**| Filter results by SSID | [optional] 
 **vlan** | **int**| Filter results by VLAN | [optional] 
 **ap_tag** | **str**| Filter results by AP Tag | [optional] 

### Return type

[**List[GetDeviceWirelessConnectionStats200Response]**](GetDeviceWirelessConnectionStats200Response.md)

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

# **get_network_wireless_devices_latency_stats_1**
> List[object] get_network_wireless_devices_latency_stats_1(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

Aggregated latency info for this network, grouped by node

Aggregated latency info for this network, grouped by node

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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)
    fields = 'fields_example' # str | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. (optional)

    try:
        # Aggregated latency info for this network, grouped by node
        api_response = api_instance.get_network_wireless_devices_latency_stats_1(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of DevicesApi->get_network_wireless_devices_latency_stats_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_network_wireless_devices_latency_stats_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **int**| Filter results by SSID | [optional] 
 **vlan** | **int**| Filter results by VLAN | [optional] 
 **ap_tag** | **str**| Filter results by AP Tag | [optional] 
 **fields** | **str**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

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

# **get_organization_devices_1**
> List[GetOrganizationDevices200ResponseInner] get_organization_devices_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, configuration_updated_after=configuration_updated_after, network_ids=network_ids, product_types=product_types, tags=tags, tags_filter_type=tags_filter_type, name=name, mac=mac, serial=serial, model=model, macs=macs, serials=serials, sensor_metrics=sensor_metrics, sensor_alert_profile_ids=sensor_alert_profile_ids, models=models)

List the devices in an organization

List the devices in an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices200_response_inner import GetOrganizationDevices200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    configuration_updated_after = 'configuration_updated_after_example' # str | Filter results by whether or not the device's configuration has been updated after the given timestamp (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter devices by network. (optional)
    product_types = ['product_types_example'] # List[str] | Optional parameter to filter devices by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. (optional)
    tags = ['tags_example'] # List[str] | Optional parameter to filter devices by tags. (optional)
    tags_filter_type = 'tags_filter_type_example' # str | Optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. (optional)
    name = 'name_example' # str | Optional parameter to filter devices by name. All returned devices will have a name that contains the search term or is an exact match. (optional)
    mac = 'mac_example' # str | Optional parameter to filter devices by MAC address. All returned devices will have a MAC address that contains the search term or is an exact match. (optional)
    serial = 'serial_example' # str | Optional parameter to filter devices by serial number. All returned devices will have a serial number that contains the search term or is an exact match. (optional)
    model = 'model_example' # str | Optional parameter to filter devices by model. All returned devices will have a model that contains the search term or is an exact match. (optional)
    macs = ['macs_example'] # List[str] | Optional parameter to filter devices by one or more MAC addresses. All returned devices will have a MAC address that is an exact match. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter devices by one or more serial numbers. All returned devices will have a serial number that is an exact match. (optional)
    sensor_metrics = ['sensor_metrics_example'] # List[str] | Optional parameter to filter devices by the metrics that they provide. Only applies to sensor devices. (optional)
    sensor_alert_profile_ids = ['sensor_alert_profile_ids_example'] # List[str] | Optional parameter to filter devices by the alert profiles that are bound to them. Only applies to sensor devices. (optional)
    models = ['models_example'] # List[str] | Optional parameter to filter devices by one or more models. All returned devices will have a model that is an exact match. (optional)

    try:
        # List the devices in an organization
        api_response = api_instance.get_organization_devices_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, configuration_updated_after=configuration_updated_after, network_ids=network_ids, product_types=product_types, tags=tags, tags_filter_type=tags_filter_type, name=name, mac=mac, serial=serial, model=model, macs=macs, serials=serials, sensor_metrics=sensor_metrics, sensor_alert_profile_ids=sensor_alert_profile_ids, models=models)
        print("The response of DevicesApi->get_organization_devices_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_organization_devices_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **configuration_updated_after** | **str**| Filter results by whether or not the device&#39;s configuration has been updated after the given timestamp | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter devices by network. | [optional] 
 **product_types** | [**List[str]**](str.md)| Optional parameter to filter devices by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. | [optional] 
 **tags** | [**List[str]**](str.md)| Optional parameter to filter devices by tags. | [optional] 
 **tags_filter_type** | **str**| Optional parameter of value &#39;withAnyTags&#39; or &#39;withAllTags&#39; to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, &#39;withAnyTags&#39; will be selected. | [optional] 
 **name** | **str**| Optional parameter to filter devices by name. All returned devices will have a name that contains the search term or is an exact match. | [optional] 
 **mac** | **str**| Optional parameter to filter devices by MAC address. All returned devices will have a MAC address that contains the search term or is an exact match. | [optional] 
 **serial** | **str**| Optional parameter to filter devices by serial number. All returned devices will have a serial number that contains the search term or is an exact match. | [optional] 
 **model** | **str**| Optional parameter to filter devices by model. All returned devices will have a model that contains the search term or is an exact match. | [optional] 
 **macs** | [**List[str]**](str.md)| Optional parameter to filter devices by one or more MAC addresses. All returned devices will have a MAC address that is an exact match. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter devices by one or more serial numbers. All returned devices will have a serial number that is an exact match. | [optional] 
 **sensor_metrics** | [**List[str]**](str.md)| Optional parameter to filter devices by the metrics that they provide. Only applies to sensor devices. | [optional] 
 **sensor_alert_profile_ids** | [**List[str]**](str.md)| Optional parameter to filter devices by the alert profiles that are bound to them. Only applies to sensor devices. | [optional] 
 **models** | [**List[str]**](str.md)| Optional parameter to filter devices by one or more models. All returned devices will have a model that is an exact match. | [optional] 

### Return type

[**List[GetOrganizationDevices200ResponseInner]**](GetOrganizationDevices200ResponseInner.md)

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

# **get_organization_devices_availabilities_1**
> List[GetOrganizationDevicesAvailabilities200ResponseInner] get_organization_devices_availabilities_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)

List the availability information for devices in an organization

List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_availabilities200_response_inner import GetOrganizationDevicesAvailabilities200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches. (optional)
    product_types = ['product_types_example'] # List[str] | Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. (optional)
    tags = ['tags_example'] # List[str] | An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). This filter uses multiple exact matches. (optional)
    tags_filter_type = 'tags_filter_type_example' # str | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. (optional)

    try:
        # List the availability information for devices in an organization
        api_response = api_instance.get_organization_devices_availabilities_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)
        print("The response of DevicesApi->get_organization_devices_availabilities_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_organization_devices_availabilities_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches. | [optional] 
 **product_types** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. | [optional] 
 **tags** | [**List[str]**](str.md)| An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, &#39;tagsFilterType&#39; should also be included (see below). This filter uses multiple exact matches. | [optional] 
 **tags_filter_type** | **str**| An optional parameter of value &#39;withAnyTags&#39; or &#39;withAllTags&#39; to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, &#39;withAnyTags&#39; will be selected. | [optional] 

### Return type

[**List[GetOrganizationDevicesAvailabilities200ResponseInner]**](GetOrganizationDevicesAvailabilities200ResponseInner.md)

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

# **get_organization_devices_power_modules_statuses_by_device_1**
> List[GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner] get_organization_devices_power_modules_statuses_by_device_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)

List the power status information for devices in an organization

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_power_modules_statuses_by_device200_response_inner import GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches. (optional)
    product_types = ['product_types_example'] # List[str] | Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. (optional)
    tags = ['tags_example'] # List[str] | An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). This filter uses multiple exact matches. (optional)
    tags_filter_type = 'tags_filter_type_example' # str | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. (optional)

    try:
        # List the power status information for devices in an organization
        api_response = api_instance.get_organization_devices_power_modules_statuses_by_device_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)
        print("The response of DevicesApi->get_organization_devices_power_modules_statuses_by_device_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_organization_devices_power_modules_statuses_by_device_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches. | [optional] 
 **product_types** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. | [optional] 
 **tags** | [**List[str]**](str.md)| An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, &#39;tagsFilterType&#39; should also be included (see below). This filter uses multiple exact matches. | [optional] 
 **tags_filter_type** | **str**| An optional parameter of value &#39;withAnyTags&#39; or &#39;withAllTags&#39; to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, &#39;withAnyTags&#39; will be selected. | [optional] 

### Return type

[**List[GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner]**](GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner.md)

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

# **get_organization_devices_statuses_1**
> GetOrganizationDevicesStatuses200Response get_organization_devices_statuses_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, statuses=statuses, product_types=product_types, models=models, tags=tags, tags_filter_type=tags_filter_type)

List the status of every Meraki device in the organization

List the status of every Meraki device in the organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_statuses200_response import GetOrganizationDevicesStatuses200Response
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter devices by network ids. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter devices by serials. (optional)
    statuses = ['statuses_example'] # List[str] | Optional parameter to filter devices by statuses. Valid statuses are [\"online\", \"alerting\", \"offline\", \"dormant\"]. (optional)
    product_types = ['product_types_example'] # List[str] | An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. (optional)
    models = ['models_example'] # List[str] | Optional parameter to filter devices by models. (optional)
    tags = ['tags_example'] # List[str] | An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). (optional)
    tags_filter_type = 'tags_filter_type_example' # str | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. (optional)

    try:
        # List the status of every Meraki device in the organization
        api_response = api_instance.get_organization_devices_statuses_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, statuses=statuses, product_types=product_types, models=models, tags=tags, tags_filter_type=tags_filter_type)
        print("The response of DevicesApi->get_organization_devices_statuses_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_organization_devices_statuses_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter devices by network ids. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter devices by serials. | [optional] 
 **statuses** | [**List[str]**](str.md)| Optional parameter to filter devices by statuses. Valid statuses are [\&quot;online\&quot;, \&quot;alerting\&quot;, \&quot;offline\&quot;, \&quot;dormant\&quot;]. | [optional] 
 **product_types** | [**List[str]**](str.md)| An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. | [optional] 
 **models** | [**List[str]**](str.md)| Optional parameter to filter devices by models. | [optional] 
 **tags** | [**List[str]**](str.md)| An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, &#39;tagsFilterType&#39; should also be included (see below). | [optional] 
 **tags_filter_type** | **str**| An optional parameter of value &#39;withAnyTags&#39; or &#39;withAllTags&#39; to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, &#39;withAnyTags&#39; will be selected. | [optional] 

### Return type

[**GetOrganizationDevicesStatuses200Response**](GetOrganizationDevicesStatuses200Response.md)

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

# **get_organization_devices_statuses_overview_1**
> GetOrganizationDevicesStatusesOverview200Response get_organization_devices_statuses_overview_1(organization_id, product_types=product_types, network_ids=network_ids)

Return an overview of current device statuses

Return an overview of current device statuses

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_statuses_overview200_response import GetOrganizationDevicesStatusesOverview200Response
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    product_types = ['product_types_example'] # List[str] | An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. (optional)
    network_ids = ['network_ids_example'] # List[str] | An optional parameter to filter device statuses by network. (optional)

    try:
        # Return an overview of current device statuses
        api_response = api_instance.get_organization_devices_statuses_overview_1(organization_id, product_types=product_types, network_ids=network_ids)
        print("The response of DevicesApi->get_organization_devices_statuses_overview_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_organization_devices_statuses_overview_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **product_types** | [**List[str]**](str.md)| An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. | [optional] 
 **network_ids** | [**List[str]**](str.md)| An optional parameter to filter device statuses by network. | [optional] 

### Return type

[**GetOrganizationDevicesStatusesOverview200Response**](GetOrganizationDevicesStatusesOverview200Response.md)

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

# **get_organization_devices_uplinks_addresses_by_device_1**
> List[GetOrganizationDevicesUplinksAddressesByDevice200ResponseInner] get_organization_devices_uplinks_addresses_by_device_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)

List the current uplink addresses for devices in an organization.

List the current uplink addresses for devices in an organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_uplinks_addresses_by_device200_response_inner import GetOrganizationDevicesUplinksAddressesByDevice200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter device uplinks by network ID. This filter uses multiple exact matches. (optional)
    product_types = ['product_types_example'] # List[str] | Optional parameter to filter device uplinks by device product types. This filter uses multiple exact matches. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. (optional)
    tags = ['tags_example'] # List[str] | An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). This filter uses multiple exact matches. (optional)
    tags_filter_type = 'tags_filter_type_example' # str | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. (optional)

    try:
        # List the current uplink addresses for devices in an organization.
        api_response = api_instance.get_organization_devices_uplinks_addresses_by_device_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)
        print("The response of DevicesApi->get_organization_devices_uplinks_addresses_by_device_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_organization_devices_uplinks_addresses_by_device_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter device uplinks by network ID. This filter uses multiple exact matches. | [optional] 
 **product_types** | [**List[str]**](str.md)| Optional parameter to filter device uplinks by device product types. This filter uses multiple exact matches. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. | [optional] 
 **tags** | [**List[str]**](str.md)| An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, &#39;tagsFilterType&#39; should also be included (see below). This filter uses multiple exact matches. | [optional] 
 **tags_filter_type** | **str**| An optional parameter of value &#39;withAnyTags&#39; or &#39;withAllTags&#39; to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, &#39;withAnyTags&#39; will be selected. | [optional] 

### Return type

[**List[GetOrganizationDevicesUplinksAddressesByDevice200ResponseInner]**](GetOrganizationDevicesUplinksAddressesByDevice200ResponseInner.md)

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

# **get_organization_devices_uplinks_loss_and_latency_1**
> List[GetOrganizationDevicesUplinksLossAndLatency200ResponseInner] get_organization_devices_uplinks_loss_and_latency_1(organization_id, t0=t0, t1=t1, timespan=timespan, uplink=uplink, ip=ip)

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_uplinks_loss_and_latency200_response_inner import GetOrganizationDevicesUplinksLossAndLatency200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 60 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes. (optional)
    uplink = 'uplink_example' # str | Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. (optional)
    ip = 'ip_example' # str | Optional filter for a specific destination IP. Default will return all destination IPs. (optional)

    try:
        # Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
        api_response = api_instance.get_organization_devices_uplinks_loss_and_latency_1(organization_id, t0=t0, t1=t1, timespan=timespan, uplink=uplink, ip=ip)
        print("The response of DevicesApi->get_organization_devices_uplinks_loss_and_latency_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_organization_devices_uplinks_loss_and_latency_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 60 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes. | [optional] 
 **uplink** | **str**| Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. | [optional] 
 **ip** | **str**| Optional filter for a specific destination IP. Default will return all destination IPs. | [optional] 

### Return type

[**List[GetOrganizationDevicesUplinksLossAndLatency200ResponseInner]**](GetOrganizationDevicesUplinksLossAndLatency200ResponseInner.md)

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

# **get_organization_inventory_device_2**
> GetOrganizationInventoryDevices200ResponseInner get_organization_inventory_device_2(organization_id, serial)

Return a single device from the inventory of an organization

Return a single device from the inventory of an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_inventory_devices200_response_inner import GetOrganizationInventoryDevices200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    serial = 'serial_example' # str | 

    try:
        # Return a single device from the inventory of an organization
        api_response = api_instance.get_organization_inventory_device_2(organization_id, serial)
        print("The response of DevicesApi->get_organization_inventory_device_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_organization_inventory_device_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **serial** | **str**|  | 

### Return type

[**GetOrganizationInventoryDevices200ResponseInner**](GetOrganizationInventoryDevices200ResponseInner.md)

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

# **get_organization_inventory_devices_2**
> List[GetOrganizationInventoryDevices200ResponseInner] get_organization_inventory_devices_2(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, used_state=used_state, search=search, macs=macs, network_ids=network_ids, serials=serials, models=models, order_numbers=order_numbers, tags=tags, tags_filter_type=tags_filter_type, product_types=product_types)

Return the device inventory for an organization

Return the device inventory for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_inventory_devices200_response_inner import GetOrganizationInventoryDevices200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    used_state = 'used_state_example' # str | Filter results by used or unused inventory. Accepted values are 'used' or 'unused'. (optional)
    search = 'search_example' # str | Search for devices in inventory based on serial number, mac address, or model. (optional)
    macs = ['macs_example'] # List[str] | Search for devices in inventory based on mac addresses. (optional)
    network_ids = ['network_ids_example'] # List[str] | Search for devices in inventory based on network ids. (optional)
    serials = ['serials_example'] # List[str] | Search for devices in inventory based on serials. (optional)
    models = ['models_example'] # List[str] | Search for devices in inventory based on model. (optional)
    order_numbers = ['order_numbers_example'] # List[str] | Search for devices in inventory based on order numbers. (optional)
    tags = ['tags_example'] # List[str] | Filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). (optional)
    tags_filter_type = 'tags_filter_type_example' # str | To use with 'tags' parameter, to filter devices which contain ANY or ALL given tags. Accepted values are 'withAnyTags' or 'withAllTags', default is 'withAnyTags'. (optional)
    product_types = ['product_types_example'] # List[str] | Filter devices by product type. Accepted values are appliance, camera, cellularGateway, sensor, switch, systemsManager, and wireless. (optional)

    try:
        # Return the device inventory for an organization
        api_response = api_instance.get_organization_inventory_devices_2(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, used_state=used_state, search=search, macs=macs, network_ids=network_ids, serials=serials, models=models, order_numbers=order_numbers, tags=tags, tags_filter_type=tags_filter_type, product_types=product_types)
        print("The response of DevicesApi->get_organization_inventory_devices_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_organization_inventory_devices_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **used_state** | **str**| Filter results by used or unused inventory. Accepted values are &#39;used&#39; or &#39;unused&#39;. | [optional] 
 **search** | **str**| Search for devices in inventory based on serial number, mac address, or model. | [optional] 
 **macs** | [**List[str]**](str.md)| Search for devices in inventory based on mac addresses. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Search for devices in inventory based on network ids. | [optional] 
 **serials** | [**List[str]**](str.md)| Search for devices in inventory based on serials. | [optional] 
 **models** | [**List[str]**](str.md)| Search for devices in inventory based on model. | [optional] 
 **order_numbers** | [**List[str]**](str.md)| Search for devices in inventory based on order numbers. | [optional] 
 **tags** | [**List[str]**](str.md)| Filter devices by tags. The filtering is case-sensitive. If tags are included, &#39;tagsFilterType&#39; should also be included (see below). | [optional] 
 **tags_filter_type** | **str**| To use with &#39;tags&#39; parameter, to filter devices which contain ANY or ALL given tags. Accepted values are &#39;withAnyTags&#39; or &#39;withAllTags&#39;, default is &#39;withAnyTags&#39;. | [optional] 
 **product_types** | [**List[str]**](str.md)| Filter devices by product type. Accepted values are appliance, camera, cellularGateway, sensor, switch, systemsManager, and wireless. | [optional] 

### Return type

[**List[GetOrganizationInventoryDevices200ResponseInner]**](GetOrganizationInventoryDevices200ResponseInner.md)

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

# **get_organization_summary_top_devices_by_usage_3**
> List[GetOrganizationSummaryTopDevicesByUsage200ResponseInner] get_organization_summary_top_devices_by_usage_3(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top 10 devices sorted by data usage over given time range

Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_devices_by_usage200_response_inner import GetOrganizationSummaryTopDevicesByUsage200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 devices sorted by data usage over given time range
        api_response = api_instance.get_organization_summary_top_devices_by_usage_3(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of DevicesApi->get_organization_summary_top_devices_by_usage_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_organization_summary_top_devices_by_usage_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopDevicesByUsage200ResponseInner]**](GetOrganizationSummaryTopDevicesByUsage200ResponseInner.md)

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

# **get_organization_summary_top_devices_models_by_usage_3**
> List[GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner] get_organization_summary_top_devices_models_by_usage_3(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top 10 device models sorted by data usage over given time range

Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_devices_models_by_usage200_response_inner import GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 device models sorted by data usage over given time range
        api_response = api_instance.get_organization_summary_top_devices_models_by_usage_3(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of DevicesApi->get_organization_summary_top_devices_models_by_usage_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_organization_summary_top_devices_models_by_usage_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner]**](GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner.md)

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

# **get_organization_wireless_devices_ethernet_statuses_1**
> List[GetOrganizationWirelessDevicesEthernetStatuses200ResponseInner] get_organization_wireless_devices_ethernet_statuses_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids)

Endpoint to see power status for wireless devices

Endpoint to see power status for wireless devices

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_wireless_devices_ethernet_statuses200_response_inner import GetOrganizationWirelessDevicesEthernetStatuses200ResponseInner
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
    api_instance = openapi_client.DevicesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456 (optional)

    try:
        # Endpoint to see power status for wireless devices
        api_response = api_instance.get_organization_wireless_devices_ethernet_statuses_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids)
        print("The response of DevicesApi->get_organization_wireless_devices_ethernet_statuses_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->get_organization_wireless_devices_ethernet_statuses_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]&#x3D;N_12345678&amp;networkIds[]&#x3D;L_3456 | [optional] 

### Return type

[**List[GetOrganizationWirelessDevicesEthernetStatuses200ResponseInner]**](GetOrganizationWirelessDevicesEthernetStatuses200ResponseInner.md)

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

# **lock_network_sm_devices_1**
> CheckinNetworkSmDevices200Response lock_network_sm_devices_1(network_id, lock_network_sm_devices_request=lock_network_sm_devices_request)

Lock a set of devices

Lock a set of devices

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.checkin_network_sm_devices200_response import CheckinNetworkSmDevices200Response
from openapi_client.models.lock_network_sm_devices_request import LockNetworkSmDevicesRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    lock_network_sm_devices_request = openapi_client.LockNetworkSmDevicesRequest() # LockNetworkSmDevicesRequest |  (optional)

    try:
        # Lock a set of devices
        api_response = api_instance.lock_network_sm_devices_1(network_id, lock_network_sm_devices_request=lock_network_sm_devices_request)
        print("The response of DevicesApi->lock_network_sm_devices_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->lock_network_sm_devices_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **lock_network_sm_devices_request** | [**LockNetworkSmDevicesRequest**](LockNetworkSmDevicesRequest.md)|  | [optional] 

### Return type

[**CheckinNetworkSmDevices200Response**](CheckinNetworkSmDevices200Response.md)

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

# **modify_network_sm_devices_tags_1**
> List[ModifyNetworkSmDevicesTags200ResponseInner] modify_network_sm_devices_tags_1(network_id, modify_network_sm_devices_tags_request)

Add, delete, or update the tags of a set of devices

Add, delete, or update the tags of a set of devices

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.modify_network_sm_devices_tags200_response_inner import ModifyNetworkSmDevicesTags200ResponseInner
from openapi_client.models.modify_network_sm_devices_tags_request import ModifyNetworkSmDevicesTagsRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    modify_network_sm_devices_tags_request = openapi_client.ModifyNetworkSmDevicesTagsRequest() # ModifyNetworkSmDevicesTagsRequest | 

    try:
        # Add, delete, or update the tags of a set of devices
        api_response = api_instance.modify_network_sm_devices_tags_1(network_id, modify_network_sm_devices_tags_request)
        print("The response of DevicesApi->modify_network_sm_devices_tags_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->modify_network_sm_devices_tags_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **modify_network_sm_devices_tags_request** | [**ModifyNetworkSmDevicesTagsRequest**](ModifyNetworkSmDevicesTagsRequest.md)|  | 

### Return type

[**List[ModifyNetworkSmDevicesTags200ResponseInner]**](ModifyNetworkSmDevicesTags200ResponseInner.md)

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

# **move_network_sm_devices_1**
> MoveNetworkSmDevices200Response move_network_sm_devices_1(network_id, move_network_sm_devices_request)

Move a set of devices to a new network

Move a set of devices to a new network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.move_network_sm_devices200_response import MoveNetworkSmDevices200Response
from openapi_client.models.move_network_sm_devices_request import MoveNetworkSmDevicesRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    move_network_sm_devices_request = openapi_client.MoveNetworkSmDevicesRequest() # MoveNetworkSmDevicesRequest | 

    try:
        # Move a set of devices to a new network
        api_response = api_instance.move_network_sm_devices_1(network_id, move_network_sm_devices_request)
        print("The response of DevicesApi->move_network_sm_devices_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->move_network_sm_devices_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **move_network_sm_devices_request** | [**MoveNetworkSmDevicesRequest**](MoveNetworkSmDevicesRequest.md)|  | 

### Return type

[**MoveNetworkSmDevices200Response**](MoveNetworkSmDevices200Response.md)

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

# **reboot_device**
> object reboot_device(serial)

Reboot a device

Reboot a device

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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Reboot a device
        api_response = api_instance.reboot_device(serial)
        print("The response of DevicesApi->reboot_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->reboot_device: %s\n" % e)
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
**202** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refresh_network_sm_device_details_1**
> refresh_network_sm_device_details_1(network_id, device_id)

Refresh the details of a device

Refresh the details of a device

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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # Refresh the details of a device
        api_instance.refresh_network_sm_device_details_1(network_id, device_id)
    except Exception as e:
        print("Exception when calling DevicesApi->refresh_network_sm_device_details_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

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
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_network_devices_1**
> remove_network_devices_1(network_id, remove_network_devices_request)

Remove a single device

Remove a single device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.remove_network_devices_request import RemoveNetworkDevicesRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    remove_network_devices_request = openapi_client.RemoveNetworkDevicesRequest() # RemoveNetworkDevicesRequest | 

    try:
        # Remove a single device
        api_instance.remove_network_devices_1(network_id, remove_network_devices_request)
    except Exception as e:
        print("Exception when calling DevicesApi->remove_network_devices_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **remove_network_devices_request** | [**RemoveNetworkDevicesRequest**](RemoveNetworkDevicesRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unenroll_network_sm_device_1**
> object unenroll_network_sm_device_1(network_id, device_id)

Unenroll a device

Unenroll a device

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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # Unenroll a device
        api_response = api_instance.unenroll_network_sm_device_1(network_id, device_id)
        print("The response of DevicesApi->unenroll_network_sm_device_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->unenroll_network_sm_device_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

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

# **update_device**
> object update_device(serial, update_device_request=update_device_request)

Update the attributes of a device

Update the attributes of a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_request import UpdateDeviceRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 
    update_device_request = openapi_client.UpdateDeviceRequest() # UpdateDeviceRequest |  (optional)

    try:
        # Update the attributes of a device
        api_response = api_instance.update_device(serial, update_device_request=update_device_request)
        print("The response of DevicesApi->update_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->update_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_request** | [**UpdateDeviceRequest**](UpdateDeviceRequest.md)|  | [optional] 

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

# **update_device_cellular_sims**
> object update_device_cellular_sims(serial, update_device_cellular_sims_request=update_device_cellular_sims_request)

Updates the SIM and APN configurations for a cellular device.

Updates the SIM and APN configurations for a cellular device.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_cellular_sims_request import UpdateDeviceCellularSimsRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 
    update_device_cellular_sims_request = openapi_client.UpdateDeviceCellularSimsRequest() # UpdateDeviceCellularSimsRequest |  (optional)

    try:
        # Updates the SIM and APN configurations for a cellular device.
        api_response = api_instance.update_device_cellular_sims(serial, update_device_cellular_sims_request=update_device_cellular_sims_request)
        print("The response of DevicesApi->update_device_cellular_sims:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->update_device_cellular_sims: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_cellular_sims_request** | [**UpdateDeviceCellularSimsRequest**](UpdateDeviceCellularSimsRequest.md)|  | [optional] 

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

# **update_device_management_interface**
> object update_device_management_interface(serial, update_device_management_interface_request=update_device_management_interface_request)

Update the management interface settings for a device

Update the management interface settings for a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_management_interface_request import UpdateDeviceManagementInterfaceRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    serial = 'serial_example' # str | 
    update_device_management_interface_request = openapi_client.UpdateDeviceManagementInterfaceRequest() # UpdateDeviceManagementInterfaceRequest |  (optional)

    try:
        # Update the management interface settings for a device
        api_response = api_instance.update_device_management_interface(serial, update_device_management_interface_request=update_device_management_interface_request)
        print("The response of DevicesApi->update_device_management_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->update_device_management_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_management_interface_request** | [**UpdateDeviceManagementInterfaceRequest**](UpdateDeviceManagementInterfaceRequest.md)|  | [optional] 

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

# **update_network_sm_devices_fields_1**
> List[UpdateNetworkSmDevicesFields200ResponseInner] update_network_sm_devices_fields_1(network_id, update_network_sm_devices_fields_request)

Modify the fields of a device

Modify the fields of a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_sm_devices_fields200_response_inner import UpdateNetworkSmDevicesFields200ResponseInner
from openapi_client.models.update_network_sm_devices_fields_request import UpdateNetworkSmDevicesFieldsRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_sm_devices_fields_request = openapi_client.UpdateNetworkSmDevicesFieldsRequest() # UpdateNetworkSmDevicesFieldsRequest | 

    try:
        # Modify the fields of a device
        api_response = api_instance.update_network_sm_devices_fields_1(network_id, update_network_sm_devices_fields_request)
        print("The response of DevicesApi->update_network_sm_devices_fields_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->update_network_sm_devices_fields_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_sm_devices_fields_request** | [**UpdateNetworkSmDevicesFieldsRequest**](UpdateNetworkSmDevicesFieldsRequest.md)|  | 

### Return type

[**List[UpdateNetworkSmDevicesFields200ResponseInner]**](UpdateNetworkSmDevicesFields200ResponseInner.md)

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

# **vmx_network_devices_claim_1**
> object vmx_network_devices_claim_1(network_id, vmx_network_devices_claim_request)

Claim a vMX into a network

Claim a vMX into a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.vmx_network_devices_claim_request import VmxNetworkDevicesClaimRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    vmx_network_devices_claim_request = openapi_client.VmxNetworkDevicesClaimRequest() # VmxNetworkDevicesClaimRequest | 

    try:
        # Claim a vMX into a network
        api_response = api_instance.vmx_network_devices_claim_1(network_id, vmx_network_devices_claim_request)
        print("The response of DevicesApi->vmx_network_devices_claim_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->vmx_network_devices_claim_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **vmx_network_devices_claim_request** | [**VmxNetworkDevicesClaimRequest**](VmxNetworkDevicesClaimRequest.md)|  | 

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

# **wipe_network_sm_devices_1**
> WipeNetworkSmDevices200Response wipe_network_sm_devices_1(network_id, wipe_network_sm_devices_request=wipe_network_sm_devices_request)

Wipe a device

Wipe a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.wipe_network_sm_devices200_response import WipeNetworkSmDevices200Response
from openapi_client.models.wipe_network_sm_devices_request import WipeNetworkSmDevicesRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    network_id = 'network_id_example' # str | 
    wipe_network_sm_devices_request = openapi_client.WipeNetworkSmDevicesRequest() # WipeNetworkSmDevicesRequest |  (optional)

    try:
        # Wipe a device
        api_response = api_instance.wipe_network_sm_devices_1(network_id, wipe_network_sm_devices_request=wipe_network_sm_devices_request)
        print("The response of DevicesApi->wipe_network_sm_devices_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->wipe_network_sm_devices_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **wipe_network_sm_devices_request** | [**WipeNetworkSmDevicesRequest**](WipeNetworkSmDevicesRequest.md)|  | [optional] 

### Return type

[**WipeNetworkSmDevices200Response**](WipeNetworkSmDevices200Response.md)

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


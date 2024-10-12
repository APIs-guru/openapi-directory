# openapi_client.WirelessApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_wireless_rf_profile**](WirelessApi.md#create_network_wireless_rf_profile) | **POST** /networks/{networkId}/wireless/rfProfiles | Creates new RF profile for this network
[**create_network_wireless_ssid_identity_psk**](WirelessApi.md#create_network_wireless_ssid_identity_psk) | **POST** /networks/{networkId}/wireless/ssids/{number}/identityPsks | Create an Identity PSK
[**delete_network_wireless_rf_profile**](WirelessApi.md#delete_network_wireless_rf_profile) | **DELETE** /networks/{networkId}/wireless/rfProfiles/{rfProfileId} | Delete a RF Profile
[**delete_network_wireless_ssid_identity_psk**](WirelessApi.md#delete_network_wireless_ssid_identity_psk) | **DELETE** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Delete an Identity PSK
[**get_device_wireless_bluetooth_settings**](WirelessApi.md#get_device_wireless_bluetooth_settings) | **GET** /devices/{serial}/wireless/bluetooth/settings | Return the bluetooth settings for a wireless device
[**get_device_wireless_connection_stats**](WirelessApi.md#get_device_wireless_connection_stats) | **GET** /devices/{serial}/wireless/connectionStats | Aggregated connectivity info for a given AP on this network
[**get_device_wireless_latency_stats**](WirelessApi.md#get_device_wireless_latency_stats) | **GET** /devices/{serial}/wireless/latencyStats | Aggregated latency info for a given AP on this network
[**get_device_wireless_radio_settings**](WirelessApi.md#get_device_wireless_radio_settings) | **GET** /devices/{serial}/wireless/radio/settings | Return the radio settings of a device
[**get_device_wireless_status**](WirelessApi.md#get_device_wireless_status) | **GET** /devices/{serial}/wireless/status | Return the SSID statuses of an access point
[**get_network_wireless_air_marshal**](WirelessApi.md#get_network_wireless_air_marshal) | **GET** /networks/{networkId}/wireless/airMarshal | List Air Marshal scan results from a network
[**get_network_wireless_alternate_management_interface**](WirelessApi.md#get_network_wireless_alternate_management_interface) | **GET** /networks/{networkId}/wireless/alternateManagementInterface | Return alternate management interface and devices with IP assigned
[**get_network_wireless_billing**](WirelessApi.md#get_network_wireless_billing) | **GET** /networks/{networkId}/wireless/billing | Return the billing settings of this network
[**get_network_wireless_bluetooth_settings**](WirelessApi.md#get_network_wireless_bluetooth_settings) | **GET** /networks/{networkId}/wireless/bluetooth/settings | Return the Bluetooth settings for a network. &lt;a href&#x3D;\&quot;https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\&quot;&gt;Bluetooth settings&lt;/a&gt; must be enabled on the network.
[**get_network_wireless_channel_utilization_history**](WirelessApi.md#get_network_wireless_channel_utilization_history) | **GET** /networks/{networkId}/wireless/channelUtilizationHistory | Return AP channel utilization over time for a device or network client
[**get_network_wireless_client_connection_stats**](WirelessApi.md#get_network_wireless_client_connection_stats) | **GET** /networks/{networkId}/wireless/clients/{clientId}/connectionStats | Aggregated connectivity info for a given client on this network
[**get_network_wireless_client_connectivity_events**](WirelessApi.md#get_network_wireless_client_connectivity_events) | **GET** /networks/{networkId}/wireless/clients/{clientId}/connectivityEvents | List the wireless connectivity events for a client within a network in the timespan.
[**get_network_wireless_client_count_history**](WirelessApi.md#get_network_wireless_client_count_history) | **GET** /networks/{networkId}/wireless/clientCountHistory | Return wireless client counts over time for a network, device, or network client
[**get_network_wireless_client_latency_history**](WirelessApi.md#get_network_wireless_client_latency_history) | **GET** /networks/{networkId}/wireless/clients/{clientId}/latencyHistory | Return the latency history for a client
[**get_network_wireless_client_latency_stats**](WirelessApi.md#get_network_wireless_client_latency_stats) | **GET** /networks/{networkId}/wireless/clients/{clientId}/latencyStats | Aggregated latency info for a given client on this network
[**get_network_wireless_clients_connection_stats**](WirelessApi.md#get_network_wireless_clients_connection_stats) | **GET** /networks/{networkId}/wireless/clients/connectionStats | Aggregated connectivity info for this network, grouped by clients
[**get_network_wireless_clients_latency_stats**](WirelessApi.md#get_network_wireless_clients_latency_stats) | **GET** /networks/{networkId}/wireless/clients/latencyStats | Aggregated latency info for this network, grouped by clients
[**get_network_wireless_connection_stats**](WirelessApi.md#get_network_wireless_connection_stats) | **GET** /networks/{networkId}/wireless/connectionStats | Aggregated connectivity info for this network
[**get_network_wireless_data_rate_history**](WirelessApi.md#get_network_wireless_data_rate_history) | **GET** /networks/{networkId}/wireless/dataRateHistory | Return PHY data rates over time for a network, device, or network client
[**get_network_wireless_devices_connection_stats**](WirelessApi.md#get_network_wireless_devices_connection_stats) | **GET** /networks/{networkId}/wireless/devices/connectionStats | Aggregated connectivity info for this network, grouped by node
[**get_network_wireless_devices_latency_stats**](WirelessApi.md#get_network_wireless_devices_latency_stats) | **GET** /networks/{networkId}/wireless/devices/latencyStats | Aggregated latency info for this network, grouped by node
[**get_network_wireless_failed_connections**](WirelessApi.md#get_network_wireless_failed_connections) | **GET** /networks/{networkId}/wireless/failedConnections | List of all failed client connection events on this network in a given time range
[**get_network_wireless_latency_history**](WirelessApi.md#get_network_wireless_latency_history) | **GET** /networks/{networkId}/wireless/latencyHistory | Return average wireless latency over time for a network, device, or network client
[**get_network_wireless_latency_stats**](WirelessApi.md#get_network_wireless_latency_stats) | **GET** /networks/{networkId}/wireless/latencyStats | Aggregated latency info for this network
[**get_network_wireless_mesh_statuses**](WirelessApi.md#get_network_wireless_mesh_statuses) | **GET** /networks/{networkId}/wireless/meshStatuses | List wireless mesh statuses for repeaters
[**get_network_wireless_rf_profile**](WirelessApi.md#get_network_wireless_rf_profile) | **GET** /networks/{networkId}/wireless/rfProfiles/{rfProfileId} | Return a RF profile
[**get_network_wireless_rf_profiles**](WirelessApi.md#get_network_wireless_rf_profiles) | **GET** /networks/{networkId}/wireless/rfProfiles | List the non-basic RF profiles for this network
[**get_network_wireless_settings**](WirelessApi.md#get_network_wireless_settings) | **GET** /networks/{networkId}/wireless/settings | Return the wireless settings for a network
[**get_network_wireless_signal_quality_history**](WirelessApi.md#get_network_wireless_signal_quality_history) | **GET** /networks/{networkId}/wireless/signalQualityHistory | Return signal quality (SNR/RSSI) over time for a device or network client
[**get_network_wireless_ssid**](WirelessApi.md#get_network_wireless_ssid) | **GET** /networks/{networkId}/wireless/ssids/{number} | Return a single MR SSID
[**get_network_wireless_ssid_bonjour_forwarding**](WirelessApi.md#get_network_wireless_ssid_bonjour_forwarding) | **GET** /networks/{networkId}/wireless/ssids/{number}/bonjourForwarding | List the Bonjour forwarding setting and rules for the SSID
[**get_network_wireless_ssid_device_type_group_policies**](WirelessApi.md#get_network_wireless_ssid_device_type_group_policies) | **GET** /networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies | List the device type group policies for the SSID
[**get_network_wireless_ssid_eap_override**](WirelessApi.md#get_network_wireless_ssid_eap_override) | **GET** /networks/{networkId}/wireless/ssids/{number}/eapOverride | Return the EAP overridden parameters for an SSID
[**get_network_wireless_ssid_firewall_l3_firewall_rules**](WirelessApi.md#get_network_wireless_ssid_firewall_l3_firewall_rules) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules | Return the L3 firewall rules for an SSID on an MR network
[**get_network_wireless_ssid_firewall_l7_firewall_rules**](WirelessApi.md#get_network_wireless_ssid_firewall_l7_firewall_rules) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Return the L7 firewall rules for an SSID on an MR network
[**get_network_wireless_ssid_hotspot20**](WirelessApi.md#get_network_wireless_ssid_hotspot20) | **GET** /networks/{networkId}/wireless/ssids/{number}/hotspot20 | Return the Hotspot 2.0 settings for an SSID
[**get_network_wireless_ssid_identity_psk**](WirelessApi.md#get_network_wireless_ssid_identity_psk) | **GET** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Return an Identity PSK
[**get_network_wireless_ssid_identity_psks**](WirelessApi.md#get_network_wireless_ssid_identity_psks) | **GET** /networks/{networkId}/wireless/ssids/{number}/identityPsks | List all Identity PSKs in a wireless network
[**get_network_wireless_ssid_schedules**](WirelessApi.md#get_network_wireless_ssid_schedules) | **GET** /networks/{networkId}/wireless/ssids/{number}/schedules | List the outage schedule for the SSID
[**get_network_wireless_ssid_splash_settings**](WirelessApi.md#get_network_wireless_ssid_splash_settings) | **GET** /networks/{networkId}/wireless/ssids/{number}/splash/settings | Display the splash page settings for the given SSID
[**get_network_wireless_ssid_traffic_shaping_rules**](WirelessApi.md#get_network_wireless_ssid_traffic_shaping_rules) | **GET** /networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules | Display the traffic shaping settings for a SSID on an MR network
[**get_network_wireless_ssid_vpn**](WirelessApi.md#get_network_wireless_ssid_vpn) | **GET** /networks/{networkId}/wireless/ssids/{number}/vpn | List the VPN settings for the SSID.
[**get_network_wireless_ssids**](WirelessApi.md#get_network_wireless_ssids) | **GET** /networks/{networkId}/wireless/ssids | List the MR SSIDs in a network
[**get_network_wireless_usage_history**](WirelessApi.md#get_network_wireless_usage_history) | **GET** /networks/{networkId}/wireless/usageHistory | Return AP usage over time for a device or network client
[**get_organization_wireless_devices_ethernet_statuses**](WirelessApi.md#get_organization_wireless_devices_ethernet_statuses) | **GET** /organizations/{organizationId}/wireless/devices/ethernet/statuses | Endpoint to see power status for wireless devices
[**update_device_wireless_bluetooth_settings**](WirelessApi.md#update_device_wireless_bluetooth_settings) | **PUT** /devices/{serial}/wireless/bluetooth/settings | Update the bluetooth settings for a wireless device
[**update_device_wireless_radio_settings**](WirelessApi.md#update_device_wireless_radio_settings) | **PUT** /devices/{serial}/wireless/radio/settings | Update the radio settings of a device
[**update_network_wireless_alternate_management_interface**](WirelessApi.md#update_network_wireless_alternate_management_interface) | **PUT** /networks/{networkId}/wireless/alternateManagementInterface | Update alternate management interface and device static IP
[**update_network_wireless_billing**](WirelessApi.md#update_network_wireless_billing) | **PUT** /networks/{networkId}/wireless/billing | Update the billing settings
[**update_network_wireless_bluetooth_settings**](WirelessApi.md#update_network_wireless_bluetooth_settings) | **PUT** /networks/{networkId}/wireless/bluetooth/settings | Update the Bluetooth settings for a network
[**update_network_wireless_rf_profile**](WirelessApi.md#update_network_wireless_rf_profile) | **PUT** /networks/{networkId}/wireless/rfProfiles/{rfProfileId} | Updates specified RF profile for this network
[**update_network_wireless_settings**](WirelessApi.md#update_network_wireless_settings) | **PUT** /networks/{networkId}/wireless/settings | Update the wireless settings for a network
[**update_network_wireless_ssid**](WirelessApi.md#update_network_wireless_ssid) | **PUT** /networks/{networkId}/wireless/ssids/{number} | Update the attributes of an MR SSID
[**update_network_wireless_ssid_bonjour_forwarding**](WirelessApi.md#update_network_wireless_ssid_bonjour_forwarding) | **PUT** /networks/{networkId}/wireless/ssids/{number}/bonjourForwarding | Update the bonjour forwarding setting and rules for the SSID
[**update_network_wireless_ssid_device_type_group_policies**](WirelessApi.md#update_network_wireless_ssid_device_type_group_policies) | **PUT** /networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies | Update the device type group policies for the SSID
[**update_network_wireless_ssid_eap_override**](WirelessApi.md#update_network_wireless_ssid_eap_override) | **PUT** /networks/{networkId}/wireless/ssids/{number}/eapOverride | Update the EAP overridden parameters for an SSID.
[**update_network_wireless_ssid_firewall_l3_firewall_rules**](WirelessApi.md#update_network_wireless_ssid_firewall_l3_firewall_rules) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules | Update the L3 firewall rules of an SSID on an MR network
[**update_network_wireless_ssid_firewall_l7_firewall_rules**](WirelessApi.md#update_network_wireless_ssid_firewall_l7_firewall_rules) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Update the L7 firewall rules of an SSID on an MR network
[**update_network_wireless_ssid_hotspot20**](WirelessApi.md#update_network_wireless_ssid_hotspot20) | **PUT** /networks/{networkId}/wireless/ssids/{number}/hotspot20 | Update the Hotspot 2.0 settings of an SSID
[**update_network_wireless_ssid_identity_psk**](WirelessApi.md#update_network_wireless_ssid_identity_psk) | **PUT** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Update an Identity PSK
[**update_network_wireless_ssid_schedules**](WirelessApi.md#update_network_wireless_ssid_schedules) | **PUT** /networks/{networkId}/wireless/ssids/{number}/schedules | Update the outage schedule for the SSID
[**update_network_wireless_ssid_splash_settings**](WirelessApi.md#update_network_wireless_ssid_splash_settings) | **PUT** /networks/{networkId}/wireless/ssids/{number}/splash/settings | Modify the splash page settings for the given SSID
[**update_network_wireless_ssid_traffic_shaping_rules**](WirelessApi.md#update_network_wireless_ssid_traffic_shaping_rules) | **PUT** /networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules | Update the traffic shaping settings for an SSID on an MR network
[**update_network_wireless_ssid_vpn**](WirelessApi.md#update_network_wireless_ssid_vpn) | **PUT** /networks/{networkId}/wireless/ssids/{number}/vpn | Update the VPN settings for the SSID


# **create_network_wireless_rf_profile**
> CreateNetworkWirelessRfProfile201Response create_network_wireless_rf_profile(network_id, create_network_wireless_rf_profile_request)

Creates new RF profile for this network

Creates new RF profile for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_wireless_rf_profile201_response import CreateNetworkWirelessRfProfile201Response
from openapi_client.models.create_network_wireless_rf_profile_request import CreateNetworkWirelessRfProfileRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_wireless_rf_profile_request = openapi_client.CreateNetworkWirelessRfProfileRequest() # CreateNetworkWirelessRfProfileRequest | 

    try:
        # Creates new RF profile for this network
        api_response = api_instance.create_network_wireless_rf_profile(network_id, create_network_wireless_rf_profile_request)
        print("The response of WirelessApi->create_network_wireless_rf_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->create_network_wireless_rf_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_wireless_rf_profile_request** | [**CreateNetworkWirelessRfProfileRequest**](CreateNetworkWirelessRfProfileRequest.md)|  | 

### Return type

[**CreateNetworkWirelessRfProfile201Response**](CreateNetworkWirelessRfProfile201Response.md)

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

# **create_network_wireless_ssid_identity_psk**
> object create_network_wireless_ssid_identity_psk(network_id, number, create_network_wireless_ssid_identity_psk_request)

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    create_network_wireless_ssid_identity_psk_request = openapi_client.CreateNetworkWirelessSsidIdentityPskRequest() # CreateNetworkWirelessSsidIdentityPskRequest | 

    try:
        # Create an Identity PSK
        api_response = api_instance.create_network_wireless_ssid_identity_psk(network_id, number, create_network_wireless_ssid_identity_psk_request)
        print("The response of WirelessApi->create_network_wireless_ssid_identity_psk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->create_network_wireless_ssid_identity_psk: %s\n" % e)
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

# **delete_network_wireless_rf_profile**
> delete_network_wireless_rf_profile(network_id, rf_profile_id)

Delete a RF Profile

Delete a RF Profile

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    rf_profile_id = 'rf_profile_id_example' # str | 

    try:
        # Delete a RF Profile
        api_instance.delete_network_wireless_rf_profile(network_id, rf_profile_id)
    except Exception as e:
        print("Exception when calling WirelessApi->delete_network_wireless_rf_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rf_profile_id** | **str**|  | 

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

# **delete_network_wireless_ssid_identity_psk**
> delete_network_wireless_ssid_identity_psk(network_id, number, identity_psk_id)

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    identity_psk_id = 'identity_psk_id_example' # str | 

    try:
        # Delete an Identity PSK
        api_instance.delete_network_wireless_ssid_identity_psk(network_id, number, identity_psk_id)
    except Exception as e:
        print("Exception when calling WirelessApi->delete_network_wireless_ssid_identity_psk: %s\n" % e)
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

# **get_device_wireless_bluetooth_settings**
> GetDeviceWirelessBluetoothSettings200Response get_device_wireless_bluetooth_settings(serial)

Return the bluetooth settings for a wireless device

Return the bluetooth settings for a wireless device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_wireless_bluetooth_settings200_response import GetDeviceWirelessBluetoothSettings200Response
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
    api_instance = openapi_client.WirelessApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the bluetooth settings for a wireless device
        api_response = api_instance.get_device_wireless_bluetooth_settings(serial)
        print("The response of WirelessApi->get_device_wireless_bluetooth_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_device_wireless_bluetooth_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

[**GetDeviceWirelessBluetoothSettings200Response**](GetDeviceWirelessBluetoothSettings200Response.md)

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

# **get_device_wireless_connection_stats**
> GetDeviceWirelessConnectionStats200Response get_device_wireless_connection_stats(serial, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)

Aggregated connectivity info for a given AP on this network

Aggregated connectivity info for a given AP on this network

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
    api_instance = openapi_client.WirelessApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)

    try:
        # Aggregated connectivity info for a given AP on this network
        api_response = api_instance.get_device_wireless_connection_stats(serial, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)
        print("The response of WirelessApi->get_device_wireless_connection_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_device_wireless_connection_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **int**| Filter results by SSID | [optional] 
 **vlan** | **int**| Filter results by VLAN | [optional] 
 **ap_tag** | **str**| Filter results by AP Tag | [optional] 

### Return type

[**GetDeviceWirelessConnectionStats200Response**](GetDeviceWirelessConnectionStats200Response.md)

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

# **get_device_wireless_latency_stats**
> object get_device_wireless_latency_stats(serial, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

Aggregated latency info for a given AP on this network

Aggregated latency info for a given AP on this network

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
    api_instance = openapi_client.WirelessApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)
    fields = 'fields_example' # str | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. (optional)

    try:
        # Aggregated latency info for a given AP on this network
        api_response = api_instance.get_device_wireless_latency_stats(serial, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of WirelessApi->get_device_wireless_latency_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_device_wireless_latency_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **int**| Filter results by SSID | [optional] 
 **vlan** | **int**| Filter results by VLAN | [optional] 
 **ap_tag** | **str**| Filter results by AP Tag | [optional] 
 **fields** | **str**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

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

# **get_device_wireless_radio_settings**
> object get_device_wireless_radio_settings(serial)

Return the radio settings of a device

Return the radio settings of a device

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
    api_instance = openapi_client.WirelessApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the radio settings of a device
        api_response = api_instance.get_device_wireless_radio_settings(serial)
        print("The response of WirelessApi->get_device_wireless_radio_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_device_wireless_radio_settings: %s\n" % e)
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

# **get_device_wireless_status**
> object get_device_wireless_status(serial)

Return the SSID statuses of an access point

Return the SSID statuses of an access point

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
    api_instance = openapi_client.WirelessApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the SSID statuses of an access point
        api_response = api_instance.get_device_wireless_status(serial)
        print("The response of WirelessApi->get_device_wireless_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_device_wireless_status: %s\n" % e)
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

# **get_network_wireless_air_marshal**
> List[object] get_network_wireless_air_marshal(network_id, t0=t0, timespan=timespan)

List Air Marshal scan results from a network

List Air Marshal scan results from a network

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)

    try:
        # List Air Marshal scan results from a network
        api_response = api_instance.get_network_wireless_air_marshal(network_id, t0=t0, timespan=timespan)
        print("The response of WirelessApi->get_network_wireless_air_marshal:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_air_marshal: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 

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

# **get_network_wireless_alternate_management_interface**
> object get_network_wireless_alternate_management_interface(network_id)

Return alternate management interface and devices with IP assigned

Return alternate management interface and devices with IP assigned

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return alternate management interface and devices with IP assigned
        api_response = api_instance.get_network_wireless_alternate_management_interface(network_id)
        print("The response of WirelessApi->get_network_wireless_alternate_management_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_alternate_management_interface: %s\n" % e)
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

# **get_network_wireless_billing**
> object get_network_wireless_billing(network_id)

Return the billing settings of this network

Return the billing settings of this network

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the billing settings of this network
        api_response = api_instance.get_network_wireless_billing(network_id)
        print("The response of WirelessApi->get_network_wireless_billing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_billing: %s\n" % e)
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

# **get_network_wireless_bluetooth_settings**
> GetNetworkWirelessBluetoothSettings200Response get_network_wireless_bluetooth_settings(network_id)

Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.

Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_bluetooth_settings200_response import GetNetworkWirelessBluetoothSettings200Response
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the Bluetooth settings for a network. <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a> must be enabled on the network.
        api_response = api_instance.get_network_wireless_bluetooth_settings(network_id)
        print("The response of WirelessApi->get_network_wireless_bluetooth_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_bluetooth_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkWirelessBluetoothSettings200Response**](GetNetworkWirelessBluetoothSettings200Response.md)

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

# **get_network_wireless_channel_utilization_history**
> List[GetNetworkWirelessChannelUtilizationHistory200ResponseInner] get_network_wireless_channel_utilization_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band)

Return AP channel utilization over time for a device or network client

Return AP channel utilization over time for a device or network client

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_channel_utilization_history200_response_inner import GetNetworkWirelessChannelUtilizationHistory200ResponseInner
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 600, 1200, 3600, 14400, 86400. The default is 86400. (optional)
    auto_resolution = True # bool | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. (optional)
    client_id = 'client_id_example' # str | Filter results by network client to return per-device, per-band AP channel utilization metrics inner joined by the queried client's connection history. (optional)
    device_serial = 'device_serial_example' # str | Filter results by device to return AP channel utilization metrics for the queried device; either :band or :clientId must be jointly specified. (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP tag to return AP channel utilization metrics for devices labeled with the given tag; either :clientId or :deviceSerial must be jointly specified. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). (optional)

    try:
        # Return AP channel utilization over time for a device or network client
        api_response = api_instance.get_network_wireless_channel_utilization_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band)
        print("The response of WirelessApi->get_network_wireless_channel_utilization_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_channel_utilization_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **auto_resolution** | **bool**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#39;resolution&#39; parameter. The default setting is false. | [optional] 
 **client_id** | **str**| Filter results by network client to return per-device, per-band AP channel utilization metrics inner joined by the queried client&#39;s connection history. | [optional] 
 **device_serial** | **str**| Filter results by device to return AP channel utilization metrics for the queried device; either :band or :clientId must be jointly specified. | [optional] 
 **ap_tag** | **str**| Filter results by AP tag to return AP channel utilization metrics for devices labeled with the given tag; either :clientId or :deviceSerial must be jointly specified. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). | [optional] 

### Return type

[**List[GetNetworkWirelessChannelUtilizationHistory200ResponseInner]**](GetNetworkWirelessChannelUtilizationHistory200ResponseInner.md)

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

# **get_network_wireless_client_connection_stats**
> object get_network_wireless_client_connection_stats(network_id, client_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)

Aggregated connectivity info for a given client on this network

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)

    try:
        # Aggregated connectivity info for a given client on this network
        api_response = api_instance.get_network_wireless_client_connection_stats(network_id, client_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)
        print("The response of WirelessApi->get_network_wireless_client_connection_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_client_connection_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **int**| Filter results by SSID | [optional] 
 **vlan** | **int**| Filter results by VLAN | [optional] 
 **ap_tag** | **str**| Filter results by AP Tag | [optional] 

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

# **get_network_wireless_client_connectivity_events**
> List[object] get_network_wireless_client_connectivity_events(network_id, client_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan, types=types, included_severities=included_severities, band=band, ssid_number=ssid_number, device_serial=device_serial)

List the wireless connectivity events for a client within a network in the timespan.

List the wireless connectivity events for a client within a network in the timespan.

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    types = ['types_example'] # List[str] | A list of event types to include. If not specified, events of all types will be returned. Valid types are 'assoc', 'disassoc', 'auth', 'deauth', 'dns', 'dhcp', 'roam', 'connection' and/or 'sticky'. (optional)
    included_severities = ['included_severities_example'] # List[str] | A list of severities to include. If not specified, events of all severities will be returned. Valid severities are 'good', 'info', 'warn' and/or 'bad'. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5', '6'). (optional)
    ssid_number = 56 # int | An SSID number to include. If not specified, events for all SSIDs will be returned. (optional)
    device_serial = 'device_serial_example' # str | Filter results by an AP's serial number. (optional)

    try:
        # List the wireless connectivity events for a client within a network in the timespan.
        api_response = api_instance.get_network_wireless_client_connectivity_events(network_id, client_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan, types=types, included_severities=included_severities, band=band, ssid_number=ssid_number, device_serial=device_serial)
        print("The response of WirelessApi->get_network_wireless_client_connectivity_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_client_connectivity_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **types** | [**List[str]**](str.md)| A list of event types to include. If not specified, events of all types will be returned. Valid types are &#39;assoc&#39;, &#39;disassoc&#39;, &#39;auth&#39;, &#39;deauth&#39;, &#39;dns&#39;, &#39;dhcp&#39;, &#39;roam&#39;, &#39;connection&#39; and/or &#39;sticky&#39;. | [optional] 
 **included_severities** | [**List[str]**](str.md)| A list of severities to include. If not specified, events of all severities will be returned. Valid severities are &#39;good&#39;, &#39;info&#39;, &#39;warn&#39; and/or &#39;bad&#39;. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39;, &#39;6&#39;). | [optional] 
 **ssid_number** | **int**| An SSID number to include. If not specified, events for all SSIDs will be returned. | [optional] 
 **device_serial** | **str**| Filter results by an AP&#39;s serial number. | [optional] 

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
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_wireless_client_count_history**
> List[GetNetworkWirelessClientCountHistory200ResponseInner] get_network_wireless_client_count_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)

Return wireless client counts over time for a network, device, or network client

Return wireless client counts over time for a network, device, or network client

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_client_count_history200_response_inner import GetNetworkWirelessClientCountHistory200ResponseInner
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. (optional)
    auto_resolution = True # bool | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. (optional)
    client_id = 'client_id_example' # str | Filter results by network client to return per-device client counts over time inner joined by the queried client's connection history. (optional)
    device_serial = 'device_serial_example' # str | Filter results by device. (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP tag. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). (optional)
    ssid = 56 # int | Filter results by SSID number. (optional)

    try:
        # Return wireless client counts over time for a network, device, or network client
        api_response = api_instance.get_network_wireless_client_count_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)
        print("The response of WirelessApi->get_network_wireless_client_count_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_client_count_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **auto_resolution** | **bool**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#39;resolution&#39; parameter. The default setting is false. | [optional] 
 **client_id** | **str**| Filter results by network client to return per-device client counts over time inner joined by the queried client&#39;s connection history. | [optional] 
 **device_serial** | **str**| Filter results by device. | [optional] 
 **ap_tag** | **str**| Filter results by AP tag. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). | [optional] 
 **ssid** | **int**| Filter results by SSID number. | [optional] 

### Return type

[**List[GetNetworkWirelessClientCountHistory200ResponseInner]**](GetNetworkWirelessClientCountHistory200ResponseInner.md)

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

# **get_network_wireless_client_latency_history**
> List[object] get_network_wireless_client_latency_history(network_id, client_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)

Return the latency history for a client

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 791 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 791 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400. (optional)

    try:
        # Return the latency history for a client
        api_response = api_instance.get_network_wireless_client_latency_history(network_id, client_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)
        print("The response of WirelessApi->get_network_wireless_client_latency_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_client_latency_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 791 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 791 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400. | [optional] 

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

# **get_network_wireless_client_latency_stats**
> object get_network_wireless_client_latency_stats(network_id, client_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

Aggregated latency info for a given client on this network

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)
    fields = 'fields_example' # str | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. (optional)

    try:
        # Aggregated latency info for a given client on this network
        api_response = api_instance.get_network_wireless_client_latency_stats(network_id, client_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of WirelessApi->get_network_wireless_client_latency_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_client_latency_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **int**| Filter results by SSID | [optional] 
 **vlan** | **int**| Filter results by VLAN | [optional] 
 **ap_tag** | **str**| Filter results by AP Tag | [optional] 
 **fields** | **str**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

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

# **get_network_wireless_clients_connection_stats**
> List[object] get_network_wireless_clients_connection_stats(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)

Aggregated connectivity info for this network, grouped by clients

Aggregated connectivity info for this network, grouped by clients

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)

    try:
        # Aggregated connectivity info for this network, grouped by clients
        api_response = api_instance.get_network_wireless_clients_connection_stats(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)
        print("The response of WirelessApi->get_network_wireless_clients_connection_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_clients_connection_stats: %s\n" % e)
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

# **get_network_wireless_clients_latency_stats**
> List[object] get_network_wireless_clients_latency_stats(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

Aggregated latency info for this network, grouped by clients

Aggregated latency info for this network, grouped by clients

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
    api_instance = openapi_client.WirelessApi(api_client)
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
        # Aggregated latency info for this network, grouped by clients
        api_response = api_instance.get_network_wireless_clients_latency_stats(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of WirelessApi->get_network_wireless_clients_latency_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_clients_latency_stats: %s\n" % e)
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

# **get_network_wireless_connection_stats**
> GetNetworkWirelessConnectionStats200Response get_network_wireless_connection_stats(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)

Aggregated connectivity info for this network

Aggregated connectivity info for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_connection_stats200_response import GetNetworkWirelessConnectionStats200Response
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)

    try:
        # Aggregated connectivity info for this network
        api_response = api_instance.get_network_wireless_connection_stats(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)
        print("The response of WirelessApi->get_network_wireless_connection_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_connection_stats: %s\n" % e)
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

[**GetNetworkWirelessConnectionStats200Response**](GetNetworkWirelessConnectionStats200Response.md)

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

# **get_network_wireless_data_rate_history**
> List[GetNetworkWirelessDataRateHistory200ResponseInner] get_network_wireless_data_rate_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)

Return PHY data rates over time for a network, device, or network client

Return PHY data rates over time for a network, device, or network client

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_data_rate_history200_response_inner import GetNetworkWirelessDataRateHistory200ResponseInner
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. (optional)
    auto_resolution = True # bool | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. (optional)
    client_id = 'client_id_example' # str | Filter results by network client. (optional)
    device_serial = 'device_serial_example' # str | Filter results by device. (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP tag. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). (optional)
    ssid = 56 # int | Filter results by SSID number. (optional)

    try:
        # Return PHY data rates over time for a network, device, or network client
        api_response = api_instance.get_network_wireless_data_rate_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)
        print("The response of WirelessApi->get_network_wireless_data_rate_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_data_rate_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **auto_resolution** | **bool**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#39;resolution&#39; parameter. The default setting is false. | [optional] 
 **client_id** | **str**| Filter results by network client. | [optional] 
 **device_serial** | **str**| Filter results by device. | [optional] 
 **ap_tag** | **str**| Filter results by AP tag. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). | [optional] 
 **ssid** | **int**| Filter results by SSID number. | [optional] 

### Return type

[**List[GetNetworkWirelessDataRateHistory200ResponseInner]**](GetNetworkWirelessDataRateHistory200ResponseInner.md)

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

# **get_network_wireless_devices_connection_stats**
> List[GetDeviceWirelessConnectionStats200Response] get_network_wireless_devices_connection_stats(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)

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
    api_instance = openapi_client.WirelessApi(api_client)
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
        api_response = api_instance.get_network_wireless_devices_connection_stats(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)
        print("The response of WirelessApi->get_network_wireless_devices_connection_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_devices_connection_stats: %s\n" % e)
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

# **get_network_wireless_devices_latency_stats**
> List[object] get_network_wireless_devices_latency_stats(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

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
    api_instance = openapi_client.WirelessApi(api_client)
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
        api_response = api_instance.get_network_wireless_devices_latency_stats(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of WirelessApi->get_network_wireless_devices_latency_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_devices_latency_stats: %s\n" % e)
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

# **get_network_wireless_failed_connections**
> List[GetNetworkWirelessFailedConnections200ResponseInner] get_network_wireless_failed_connections(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, serial=serial, client_id=client_id)

List of all failed client connection events on this network in a given time range

List of all failed client connection events on this network in a given time range

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_failed_connections200_response_inner import GetNetworkWirelessFailedConnections200ResponseInner
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)
    serial = 'serial_example' # str | Filter by AP (optional)
    client_id = 'client_id_example' # str | Filter by client MAC (optional)

    try:
        # List of all failed client connection events on this network in a given time range
        api_response = api_instance.get_network_wireless_failed_connections(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, serial=serial, client_id=client_id)
        print("The response of WirelessApi->get_network_wireless_failed_connections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_failed_connections: %s\n" % e)
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
 **serial** | **str**| Filter by AP | [optional] 
 **client_id** | **str**| Filter by client MAC | [optional] 

### Return type

[**List[GetNetworkWirelessFailedConnections200ResponseInner]**](GetNetworkWirelessFailedConnections200ResponseInner.md)

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

# **get_network_wireless_latency_history**
> List[GetNetworkWirelessLatencyHistory200ResponseInner] get_network_wireless_latency_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid, access_category=access_category)

Return average wireless latency over time for a network, device, or network client

Return average wireless latency over time for a network, device, or network client

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_latency_history200_response_inner import GetNetworkWirelessLatencyHistory200ResponseInner
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. (optional)
    auto_resolution = True # bool | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. (optional)
    client_id = 'client_id_example' # str | Filter results by network client. (optional)
    device_serial = 'device_serial_example' # str | Filter results by device. (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP tag. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). (optional)
    ssid = 56 # int | Filter results by SSID number. (optional)
    access_category = 'access_category_example' # str | Filter by access category. (optional)

    try:
        # Return average wireless latency over time for a network, device, or network client
        api_response = api_instance.get_network_wireless_latency_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid, access_category=access_category)
        print("The response of WirelessApi->get_network_wireless_latency_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_latency_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **auto_resolution** | **bool**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#39;resolution&#39; parameter. The default setting is false. | [optional] 
 **client_id** | **str**| Filter results by network client. | [optional] 
 **device_serial** | **str**| Filter results by device. | [optional] 
 **ap_tag** | **str**| Filter results by AP tag. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). | [optional] 
 **ssid** | **int**| Filter results by SSID number. | [optional] 
 **access_category** | **str**| Filter by access category. | [optional] 

### Return type

[**List[GetNetworkWirelessLatencyHistory200ResponseInner]**](GetNetworkWirelessLatencyHistory200ResponseInner.md)

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

# **get_network_wireless_latency_stats**
> object get_network_wireless_latency_stats(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

Aggregated latency info for this network

Aggregated latency info for this network

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
    api_instance = openapi_client.WirelessApi(api_client)
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
        # Aggregated latency info for this network
        api_response = api_instance.get_network_wireless_latency_stats(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of WirelessApi->get_network_wireless_latency_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_latency_stats: %s\n" % e)
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

# **get_network_wireless_mesh_statuses**
> object get_network_wireless_mesh_statuses(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

List wireless mesh statuses for repeaters

List wireless mesh statuses for repeaters

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 500. Default is 50. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # List wireless mesh statuses for repeaters
        api_response = api_instance.get_network_wireless_mesh_statuses(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of WirelessApi->get_network_wireless_mesh_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_mesh_statuses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 500. Default is 50. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

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
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_wireless_rf_profile**
> object get_network_wireless_rf_profile(network_id, rf_profile_id)

Return a RF profile

Return a RF profile

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    rf_profile_id = 'rf_profile_id_example' # str | 

    try:
        # Return a RF profile
        api_response = api_instance.get_network_wireless_rf_profile(network_id, rf_profile_id)
        print("The response of WirelessApi->get_network_wireless_rf_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_rf_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rf_profile_id** | **str**|  | 

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

# **get_network_wireless_rf_profiles**
> List[object] get_network_wireless_rf_profiles(network_id, include_template_profiles=include_template_profiles)

List the non-basic RF profiles for this network

List the non-basic RF profiles for this network

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    include_template_profiles = True # bool | If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false. (optional)

    try:
        # List the non-basic RF profiles for this network
        api_response = api_instance.get_network_wireless_rf_profiles(network_id, include_template_profiles=include_template_profiles)
        print("The response of WirelessApi->get_network_wireless_rf_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_rf_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **include_template_profiles** | **bool**| If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false. | [optional] 

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

# **get_network_wireless_settings**
> GetNetworkWirelessSettings200Response get_network_wireless_settings(network_id)

Return the wireless settings for a network

Return the wireless settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_settings200_response import GetNetworkWirelessSettings200Response
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the wireless settings for a network
        api_response = api_instance.get_network_wireless_settings(network_id)
        print("The response of WirelessApi->get_network_wireless_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkWirelessSettings200Response**](GetNetworkWirelessSettings200Response.md)

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

# **get_network_wireless_signal_quality_history**
> List[GetNetworkWirelessSignalQualityHistory200ResponseInner] get_network_wireless_signal_quality_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)

Return signal quality (SNR/RSSI) over time for a device or network client

Return signal quality (SNR/RSSI) over time for a device or network client

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_signal_quality_history200_response_inner import GetNetworkWirelessSignalQualityHistory200ResponseInner
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. (optional)
    auto_resolution = True # bool | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. (optional)
    client_id = 'client_id_example' # str | Filter results by network client. (optional)
    device_serial = 'device_serial_example' # str | Filter results by device. (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). (optional)
    ssid = 56 # int | Filter results by SSID number. (optional)

    try:
        # Return signal quality (SNR/RSSI) over time for a device or network client
        api_response = api_instance.get_network_wireless_signal_quality_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)
        print("The response of WirelessApi->get_network_wireless_signal_quality_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_signal_quality_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **auto_resolution** | **bool**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#39;resolution&#39; parameter. The default setting is false. | [optional] 
 **client_id** | **str**| Filter results by network client. | [optional] 
 **device_serial** | **str**| Filter results by device. | [optional] 
 **ap_tag** | **str**| Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). | [optional] 
 **ssid** | **int**| Filter results by SSID number. | [optional] 

### Return type

[**List[GetNetworkWirelessSignalQualityHistory200ResponseInner]**](GetNetworkWirelessSignalQualityHistory200ResponseInner.md)

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

# **get_network_wireless_ssid**
> object get_network_wireless_ssid(network_id, number)

Return a single MR SSID

Return a single MR SSID

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return a single MR SSID
        api_response = api_instance.get_network_wireless_ssid(network_id, number)
        print("The response of WirelessApi->get_network_wireless_ssid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid: %s\n" % e)
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

# **get_network_wireless_ssid_bonjour_forwarding**
> object get_network_wireless_ssid_bonjour_forwarding(network_id, number)

List the Bonjour forwarding setting and rules for the SSID

List the Bonjour forwarding setting and rules for the SSID

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List the Bonjour forwarding setting and rules for the SSID
        api_response = api_instance.get_network_wireless_ssid_bonjour_forwarding(network_id, number)
        print("The response of WirelessApi->get_network_wireless_ssid_bonjour_forwarding:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid_bonjour_forwarding: %s\n" % e)
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

# **get_network_wireless_ssid_device_type_group_policies**
> object get_network_wireless_ssid_device_type_group_policies(network_id, number)

List the device type group policies for the SSID

List the device type group policies for the SSID

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List the device type group policies for the SSID
        api_response = api_instance.get_network_wireless_ssid_device_type_group_policies(network_id, number)
        print("The response of WirelessApi->get_network_wireless_ssid_device_type_group_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid_device_type_group_policies: %s\n" % e)
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

# **get_network_wireless_ssid_eap_override**
> GetNetworkWirelessSsidEapOverride200Response get_network_wireless_ssid_eap_override(network_id, number)

Return the EAP overridden parameters for an SSID

Return the EAP overridden parameters for an SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_eap_override200_response import GetNetworkWirelessSsidEapOverride200Response
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return the EAP overridden parameters for an SSID
        api_response = api_instance.get_network_wireless_ssid_eap_override(network_id, number)
        print("The response of WirelessApi->get_network_wireless_ssid_eap_override:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid_eap_override: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

### Return type

[**GetNetworkWirelessSsidEapOverride200Response**](GetNetworkWirelessSsidEapOverride200Response.md)

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

# **get_network_wireless_ssid_firewall_l3_firewall_rules**
> object get_network_wireless_ssid_firewall_l3_firewall_rules(network_id, number)

Return the L3 firewall rules for an SSID on an MR network

Return the L3 firewall rules for an SSID on an MR network

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return the L3 firewall rules for an SSID on an MR network
        api_response = api_instance.get_network_wireless_ssid_firewall_l3_firewall_rules(network_id, number)
        print("The response of WirelessApi->get_network_wireless_ssid_firewall_l3_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid_firewall_l3_firewall_rules: %s\n" % e)
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

# **get_network_wireless_ssid_firewall_l7_firewall_rules**
> object get_network_wireless_ssid_firewall_l7_firewall_rules(network_id, number)

Return the L7 firewall rules for an SSID on an MR network

Return the L7 firewall rules for an SSID on an MR network

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return the L7 firewall rules for an SSID on an MR network
        api_response = api_instance.get_network_wireless_ssid_firewall_l7_firewall_rules(network_id, number)
        print("The response of WirelessApi->get_network_wireless_ssid_firewall_l7_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid_firewall_l7_firewall_rules: %s\n" % e)
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

# **get_network_wireless_ssid_hotspot20**
> object get_network_wireless_ssid_hotspot20(network_id, number)

Return the Hotspot 2.0 settings for an SSID

Return the Hotspot 2.0 settings for an SSID

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return the Hotspot 2.0 settings for an SSID
        api_response = api_instance.get_network_wireless_ssid_hotspot20(network_id, number)
        print("The response of WirelessApi->get_network_wireless_ssid_hotspot20:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid_hotspot20: %s\n" % e)
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

# **get_network_wireless_ssid_identity_psk**
> GetNetworkWirelessSsidIdentityPsks200ResponseInner get_network_wireless_ssid_identity_psk(network_id, number, identity_psk_id)

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    identity_psk_id = 'identity_psk_id_example' # str | 

    try:
        # Return an Identity PSK
        api_response = api_instance.get_network_wireless_ssid_identity_psk(network_id, number, identity_psk_id)
        print("The response of WirelessApi->get_network_wireless_ssid_identity_psk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid_identity_psk: %s\n" % e)
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

# **get_network_wireless_ssid_identity_psks**
> List[GetNetworkWirelessSsidIdentityPsks200ResponseInner] get_network_wireless_ssid_identity_psks(network_id, number)

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List all Identity PSKs in a wireless network
        api_response = api_instance.get_network_wireless_ssid_identity_psks(network_id, number)
        print("The response of WirelessApi->get_network_wireless_ssid_identity_psks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid_identity_psks: %s\n" % e)
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

# **get_network_wireless_ssid_schedules**
> object get_network_wireless_ssid_schedules(network_id, number)

List the outage schedule for the SSID

List the outage schedule for the SSID

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List the outage schedule for the SSID
        api_response = api_instance.get_network_wireless_ssid_schedules(network_id, number)
        print("The response of WirelessApi->get_network_wireless_ssid_schedules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid_schedules: %s\n" % e)
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

# **get_network_wireless_ssid_splash_settings**
> GetNetworkWirelessSsidSplashSettings200Response get_network_wireless_ssid_splash_settings(network_id, number)

Display the splash page settings for the given SSID

Display the splash page settings for the given SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_splash_settings200_response import GetNetworkWirelessSsidSplashSettings200Response
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Display the splash page settings for the given SSID
        api_response = api_instance.get_network_wireless_ssid_splash_settings(network_id, number)
        print("The response of WirelessApi->get_network_wireless_ssid_splash_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid_splash_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

### Return type

[**GetNetworkWirelessSsidSplashSettings200Response**](GetNetworkWirelessSsidSplashSettings200Response.md)

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

# **get_network_wireless_ssid_traffic_shaping_rules**
> object get_network_wireless_ssid_traffic_shaping_rules(network_id, number)

Display the traffic shaping settings for a SSID on an MR network

Display the traffic shaping settings for a SSID on an MR network

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Display the traffic shaping settings for a SSID on an MR network
        api_response = api_instance.get_network_wireless_ssid_traffic_shaping_rules(network_id, number)
        print("The response of WirelessApi->get_network_wireless_ssid_traffic_shaping_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid_traffic_shaping_rules: %s\n" % e)
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

# **get_network_wireless_ssid_vpn**
> object get_network_wireless_ssid_vpn(network_id, number)

List the VPN settings for the SSID.

List the VPN settings for the SSID.

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List the VPN settings for the SSID.
        api_response = api_instance.get_network_wireless_ssid_vpn(network_id, number)
        print("The response of WirelessApi->get_network_wireless_ssid_vpn:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssid_vpn: %s\n" % e)
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

# **get_network_wireless_ssids**
> List[object] get_network_wireless_ssids(network_id)

List the MR SSIDs in a network

List the MR SSIDs in a network

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the MR SSIDs in a network
        api_response = api_instance.get_network_wireless_ssids(network_id)
        print("The response of WirelessApi->get_network_wireless_ssids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_ssids: %s\n" % e)
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

# **get_network_wireless_usage_history**
> List[GetNetworkWirelessUsageHistory200ResponseInner] get_network_wireless_usage_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)

Return AP usage over time for a device or network client

Return AP usage over time for a device or network client

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_usage_history200_response_inner import GetNetworkWirelessUsageHistory200ResponseInner
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. (optional)
    auto_resolution = True # bool | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. (optional)
    client_id = 'client_id_example' # str | Filter results by network client to return per-device AP usage over time inner joined by the queried client's connection history. (optional)
    device_serial = 'device_serial_example' # str | Filter results by device. Requires :band. (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). (optional)
    ssid = 56 # int | Filter results by SSID number. (optional)

    try:
        # Return AP usage over time for a device or network client
        api_response = api_instance.get_network_wireless_usage_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)
        print("The response of WirelessApi->get_network_wireless_usage_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_network_wireless_usage_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **auto_resolution** | **bool**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#39;resolution&#39; parameter. The default setting is false. | [optional] 
 **client_id** | **str**| Filter results by network client to return per-device AP usage over time inner joined by the queried client&#39;s connection history. | [optional] 
 **device_serial** | **str**| Filter results by device. Requires :band. | [optional] 
 **ap_tag** | **str**| Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). | [optional] 
 **ssid** | **int**| Filter results by SSID number. | [optional] 

### Return type

[**List[GetNetworkWirelessUsageHistory200ResponseInner]**](GetNetworkWirelessUsageHistory200ResponseInner.md)

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

# **get_organization_wireless_devices_ethernet_statuses**
> List[GetOrganizationWirelessDevicesEthernetStatuses200ResponseInner] get_organization_wireless_devices_ethernet_statuses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids)

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
    api_instance = openapi_client.WirelessApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456 (optional)

    try:
        # Endpoint to see power status for wireless devices
        api_response = api_instance.get_organization_wireless_devices_ethernet_statuses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids)
        print("The response of WirelessApi->get_organization_wireless_devices_ethernet_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->get_organization_wireless_devices_ethernet_statuses: %s\n" % e)
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

# **update_device_wireless_bluetooth_settings**
> GetDeviceWirelessBluetoothSettings200Response update_device_wireless_bluetooth_settings(serial, update_device_wireless_bluetooth_settings_request=update_device_wireless_bluetooth_settings_request)

Update the bluetooth settings for a wireless device

Update the bluetooth settings for a wireless device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_wireless_bluetooth_settings200_response import GetDeviceWirelessBluetoothSettings200Response
from openapi_client.models.update_device_wireless_bluetooth_settings_request import UpdateDeviceWirelessBluetoothSettingsRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    serial = 'serial_example' # str | 
    update_device_wireless_bluetooth_settings_request = openapi_client.UpdateDeviceWirelessBluetoothSettingsRequest() # UpdateDeviceWirelessBluetoothSettingsRequest |  (optional)

    try:
        # Update the bluetooth settings for a wireless device
        api_response = api_instance.update_device_wireless_bluetooth_settings(serial, update_device_wireless_bluetooth_settings_request=update_device_wireless_bluetooth_settings_request)
        print("The response of WirelessApi->update_device_wireless_bluetooth_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_device_wireless_bluetooth_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_wireless_bluetooth_settings_request** | [**UpdateDeviceWirelessBluetoothSettingsRequest**](UpdateDeviceWirelessBluetoothSettingsRequest.md)|  | [optional] 

### Return type

[**GetDeviceWirelessBluetoothSettings200Response**](GetDeviceWirelessBluetoothSettings200Response.md)

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

# **update_device_wireless_radio_settings**
> object update_device_wireless_radio_settings(serial, update_device_wireless_radio_settings_request=update_device_wireless_radio_settings_request)

Update the radio settings of a device

Update the radio settings of a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_wireless_radio_settings_request import UpdateDeviceWirelessRadioSettingsRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    serial = 'serial_example' # str | 
    update_device_wireless_radio_settings_request = openapi_client.UpdateDeviceWirelessRadioSettingsRequest() # UpdateDeviceWirelessRadioSettingsRequest |  (optional)

    try:
        # Update the radio settings of a device
        api_response = api_instance.update_device_wireless_radio_settings(serial, update_device_wireless_radio_settings_request=update_device_wireless_radio_settings_request)
        print("The response of WirelessApi->update_device_wireless_radio_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_device_wireless_radio_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_wireless_radio_settings_request** | [**UpdateDeviceWirelessRadioSettingsRequest**](UpdateDeviceWirelessRadioSettingsRequest.md)|  | [optional] 

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

# **update_network_wireless_alternate_management_interface**
> object update_network_wireless_alternate_management_interface(network_id, update_network_wireless_alternate_management_interface_request=update_network_wireless_alternate_management_interface_request)

Update alternate management interface and device static IP

Update alternate management interface and device static IP

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_alternate_management_interface_request import UpdateNetworkWirelessAlternateManagementInterfaceRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_wireless_alternate_management_interface_request = openapi_client.UpdateNetworkWirelessAlternateManagementInterfaceRequest() # UpdateNetworkWirelessAlternateManagementInterfaceRequest |  (optional)

    try:
        # Update alternate management interface and device static IP
        api_response = api_instance.update_network_wireless_alternate_management_interface(network_id, update_network_wireless_alternate_management_interface_request=update_network_wireless_alternate_management_interface_request)
        print("The response of WirelessApi->update_network_wireless_alternate_management_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_alternate_management_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_wireless_alternate_management_interface_request** | [**UpdateNetworkWirelessAlternateManagementInterfaceRequest**](UpdateNetworkWirelessAlternateManagementInterfaceRequest.md)|  | [optional] 

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

# **update_network_wireless_billing**
> object update_network_wireless_billing(network_id, update_network_wireless_billing_request=update_network_wireless_billing_request)

Update the billing settings

Update the billing settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_billing_request import UpdateNetworkWirelessBillingRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_wireless_billing_request = openapi_client.UpdateNetworkWirelessBillingRequest() # UpdateNetworkWirelessBillingRequest |  (optional)

    try:
        # Update the billing settings
        api_response = api_instance.update_network_wireless_billing(network_id, update_network_wireless_billing_request=update_network_wireless_billing_request)
        print("The response of WirelessApi->update_network_wireless_billing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_billing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_wireless_billing_request** | [**UpdateNetworkWirelessBillingRequest**](UpdateNetworkWirelessBillingRequest.md)|  | [optional] 

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

# **update_network_wireless_bluetooth_settings**
> GetNetworkWirelessBluetoothSettings200Response update_network_wireless_bluetooth_settings(network_id, update_network_wireless_bluetooth_settings_request=update_network_wireless_bluetooth_settings_request)

Update the Bluetooth settings for a network

Update the Bluetooth settings for a network. See the docs page for <a href=\"https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)\">Bluetooth settings</a>.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_bluetooth_settings200_response import GetNetworkWirelessBluetoothSettings200Response
from openapi_client.models.update_network_wireless_bluetooth_settings_request import UpdateNetworkWirelessBluetoothSettingsRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_wireless_bluetooth_settings_request = openapi_client.UpdateNetworkWirelessBluetoothSettingsRequest() # UpdateNetworkWirelessBluetoothSettingsRequest |  (optional)

    try:
        # Update the Bluetooth settings for a network
        api_response = api_instance.update_network_wireless_bluetooth_settings(network_id, update_network_wireless_bluetooth_settings_request=update_network_wireless_bluetooth_settings_request)
        print("The response of WirelessApi->update_network_wireless_bluetooth_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_bluetooth_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_wireless_bluetooth_settings_request** | [**UpdateNetworkWirelessBluetoothSettingsRequest**](UpdateNetworkWirelessBluetoothSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkWirelessBluetoothSettings200Response**](GetNetworkWirelessBluetoothSettings200Response.md)

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

# **update_network_wireless_rf_profile**
> CreateNetworkWirelessRfProfile201Response update_network_wireless_rf_profile(network_id, rf_profile_id, update_network_wireless_rf_profile_request=update_network_wireless_rf_profile_request)

Updates specified RF profile for this network

Updates specified RF profile for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_wireless_rf_profile201_response import CreateNetworkWirelessRfProfile201Response
from openapi_client.models.update_network_wireless_rf_profile_request import UpdateNetworkWirelessRfProfileRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    rf_profile_id = 'rf_profile_id_example' # str | 
    update_network_wireless_rf_profile_request = openapi_client.UpdateNetworkWirelessRfProfileRequest() # UpdateNetworkWirelessRfProfileRequest |  (optional)

    try:
        # Updates specified RF profile for this network
        api_response = api_instance.update_network_wireless_rf_profile(network_id, rf_profile_id, update_network_wireless_rf_profile_request=update_network_wireless_rf_profile_request)
        print("The response of WirelessApi->update_network_wireless_rf_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_rf_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rf_profile_id** | **str**|  | 
 **update_network_wireless_rf_profile_request** | [**UpdateNetworkWirelessRfProfileRequest**](UpdateNetworkWirelessRfProfileRequest.md)|  | [optional] 

### Return type

[**CreateNetworkWirelessRfProfile201Response**](CreateNetworkWirelessRfProfile201Response.md)

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

# **update_network_wireless_settings**
> GetNetworkWirelessSettings200Response update_network_wireless_settings(network_id, update_network_wireless_settings_request=update_network_wireless_settings_request)

Update the wireless settings for a network

Update the wireless settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_settings200_response import GetNetworkWirelessSettings200Response
from openapi_client.models.update_network_wireless_settings_request import UpdateNetworkWirelessSettingsRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_wireless_settings_request = openapi_client.UpdateNetworkWirelessSettingsRequest() # UpdateNetworkWirelessSettingsRequest |  (optional)

    try:
        # Update the wireless settings for a network
        api_response = api_instance.update_network_wireless_settings(network_id, update_network_wireless_settings_request=update_network_wireless_settings_request)
        print("The response of WirelessApi->update_network_wireless_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_wireless_settings_request** | [**UpdateNetworkWirelessSettingsRequest**](UpdateNetworkWirelessSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkWirelessSettings200Response**](GetNetworkWirelessSettings200Response.md)

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

# **update_network_wireless_ssid**
> object update_network_wireless_ssid(network_id, number, update_network_wireless_ssid_request=update_network_wireless_ssid_request)

Update the attributes of an MR SSID

Update the attributes of an MR SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_request import UpdateNetworkWirelessSsidRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_request = openapi_client.UpdateNetworkWirelessSsidRequest() # UpdateNetworkWirelessSsidRequest |  (optional)

    try:
        # Update the attributes of an MR SSID
        api_response = api_instance.update_network_wireless_ssid(network_id, number, update_network_wireless_ssid_request=update_network_wireless_ssid_request)
        print("The response of WirelessApi->update_network_wireless_ssid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_ssid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_request** | [**UpdateNetworkWirelessSsidRequest**](UpdateNetworkWirelessSsidRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_bonjour_forwarding**
> object update_network_wireless_ssid_bonjour_forwarding(network_id, number, update_network_wireless_ssid_bonjour_forwarding_request=update_network_wireless_ssid_bonjour_forwarding_request)

Update the bonjour forwarding setting and rules for the SSID

Update the bonjour forwarding setting and rules for the SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_bonjour_forwarding_request import UpdateNetworkWirelessSsidBonjourForwardingRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_bonjour_forwarding_request = openapi_client.UpdateNetworkWirelessSsidBonjourForwardingRequest() # UpdateNetworkWirelessSsidBonjourForwardingRequest |  (optional)

    try:
        # Update the bonjour forwarding setting and rules for the SSID
        api_response = api_instance.update_network_wireless_ssid_bonjour_forwarding(network_id, number, update_network_wireless_ssid_bonjour_forwarding_request=update_network_wireless_ssid_bonjour_forwarding_request)
        print("The response of WirelessApi->update_network_wireless_ssid_bonjour_forwarding:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_ssid_bonjour_forwarding: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_bonjour_forwarding_request** | [**UpdateNetworkWirelessSsidBonjourForwardingRequest**](UpdateNetworkWirelessSsidBonjourForwardingRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_device_type_group_policies**
> object update_network_wireless_ssid_device_type_group_policies(network_id, number, update_network_wireless_ssid_device_type_group_policies_request=update_network_wireless_ssid_device_type_group_policies_request)

Update the device type group policies for the SSID

Update the device type group policies for the SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_device_type_group_policies_request import UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_device_type_group_policies_request = openapi_client.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest() # UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest |  (optional)

    try:
        # Update the device type group policies for the SSID
        api_response = api_instance.update_network_wireless_ssid_device_type_group_policies(network_id, number, update_network_wireless_ssid_device_type_group_policies_request=update_network_wireless_ssid_device_type_group_policies_request)
        print("The response of WirelessApi->update_network_wireless_ssid_device_type_group_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_ssid_device_type_group_policies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_device_type_group_policies_request** | [**UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest**](UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_eap_override**
> GetNetworkWirelessSsidEapOverride200Response update_network_wireless_ssid_eap_override(network_id, number, update_network_wireless_ssid_eap_override_request=update_network_wireless_ssid_eap_override_request)

Update the EAP overridden parameters for an SSID.

Update the EAP overridden parameters for an SSID.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_eap_override200_response import GetNetworkWirelessSsidEapOverride200Response
from openapi_client.models.update_network_wireless_ssid_eap_override_request import UpdateNetworkWirelessSsidEapOverrideRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_eap_override_request = openapi_client.UpdateNetworkWirelessSsidEapOverrideRequest() # UpdateNetworkWirelessSsidEapOverrideRequest |  (optional)

    try:
        # Update the EAP overridden parameters for an SSID.
        api_response = api_instance.update_network_wireless_ssid_eap_override(network_id, number, update_network_wireless_ssid_eap_override_request=update_network_wireless_ssid_eap_override_request)
        print("The response of WirelessApi->update_network_wireless_ssid_eap_override:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_ssid_eap_override: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_eap_override_request** | [**UpdateNetworkWirelessSsidEapOverrideRequest**](UpdateNetworkWirelessSsidEapOverrideRequest.md)|  | [optional] 

### Return type

[**GetNetworkWirelessSsidEapOverride200Response**](GetNetworkWirelessSsidEapOverride200Response.md)

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

# **update_network_wireless_ssid_firewall_l3_firewall_rules**
> object update_network_wireless_ssid_firewall_l3_firewall_rules(network_id, number, update_network_wireless_ssid_firewall_l3_firewall_rules_request=update_network_wireless_ssid_firewall_l3_firewall_rules_request)

Update the L3 firewall rules of an SSID on an MR network

Update the L3 firewall rules of an SSID on an MR network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_firewall_l3_firewall_rules_request import UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_firewall_l3_firewall_rules_request = openapi_client.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest() # UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest |  (optional)

    try:
        # Update the L3 firewall rules of an SSID on an MR network
        api_response = api_instance.update_network_wireless_ssid_firewall_l3_firewall_rules(network_id, number, update_network_wireless_ssid_firewall_l3_firewall_rules_request=update_network_wireless_ssid_firewall_l3_firewall_rules_request)
        print("The response of WirelessApi->update_network_wireless_ssid_firewall_l3_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_ssid_firewall_l3_firewall_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_firewall_l3_firewall_rules_request** | [**UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest**](UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_firewall_l7_firewall_rules**
> object update_network_wireless_ssid_firewall_l7_firewall_rules(network_id, number, update_network_wireless_ssid_firewall_l7_firewall_rules_request=update_network_wireless_ssid_firewall_l7_firewall_rules_request)

Update the L7 firewall rules of an SSID on an MR network

Update the L7 firewall rules of an SSID on an MR network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_firewall_l7_firewall_rules_request import UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_firewall_l7_firewall_rules_request = openapi_client.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest() # UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest |  (optional)

    try:
        # Update the L7 firewall rules of an SSID on an MR network
        api_response = api_instance.update_network_wireless_ssid_firewall_l7_firewall_rules(network_id, number, update_network_wireless_ssid_firewall_l7_firewall_rules_request=update_network_wireless_ssid_firewall_l7_firewall_rules_request)
        print("The response of WirelessApi->update_network_wireless_ssid_firewall_l7_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_ssid_firewall_l7_firewall_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_firewall_l7_firewall_rules_request** | [**UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest**](UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_hotspot20**
> object update_network_wireless_ssid_hotspot20(network_id, number, update_network_wireless_ssid_hotspot20_request=update_network_wireless_ssid_hotspot20_request)

Update the Hotspot 2.0 settings of an SSID

Update the Hotspot 2.0 settings of an SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_hotspot20_request import UpdateNetworkWirelessSsidHotspot20Request
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_hotspot20_request = openapi_client.UpdateNetworkWirelessSsidHotspot20Request() # UpdateNetworkWirelessSsidHotspot20Request |  (optional)

    try:
        # Update the Hotspot 2.0 settings of an SSID
        api_response = api_instance.update_network_wireless_ssid_hotspot20(network_id, number, update_network_wireless_ssid_hotspot20_request=update_network_wireless_ssid_hotspot20_request)
        print("The response of WirelessApi->update_network_wireless_ssid_hotspot20:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_ssid_hotspot20: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_hotspot20_request** | [**UpdateNetworkWirelessSsidHotspot20Request**](UpdateNetworkWirelessSsidHotspot20Request.md)|  | [optional] 

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

# **update_network_wireless_ssid_identity_psk**
> object update_network_wireless_ssid_identity_psk(network_id, number, identity_psk_id, update_network_wireless_ssid_identity_psk_request=update_network_wireless_ssid_identity_psk_request)

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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    identity_psk_id = 'identity_psk_id_example' # str | 
    update_network_wireless_ssid_identity_psk_request = openapi_client.UpdateNetworkWirelessSsidIdentityPskRequest() # UpdateNetworkWirelessSsidIdentityPskRequest |  (optional)

    try:
        # Update an Identity PSK
        api_response = api_instance.update_network_wireless_ssid_identity_psk(network_id, number, identity_psk_id, update_network_wireless_ssid_identity_psk_request=update_network_wireless_ssid_identity_psk_request)
        print("The response of WirelessApi->update_network_wireless_ssid_identity_psk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_ssid_identity_psk: %s\n" % e)
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

# **update_network_wireless_ssid_schedules**
> object update_network_wireless_ssid_schedules(network_id, number, update_network_wireless_ssid_schedules_request=update_network_wireless_ssid_schedules_request)

Update the outage schedule for the SSID

Update the outage schedule for the SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_schedules_request import UpdateNetworkWirelessSsidSchedulesRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_schedules_request = openapi_client.UpdateNetworkWirelessSsidSchedulesRequest() # UpdateNetworkWirelessSsidSchedulesRequest |  (optional)

    try:
        # Update the outage schedule for the SSID
        api_response = api_instance.update_network_wireless_ssid_schedules(network_id, number, update_network_wireless_ssid_schedules_request=update_network_wireless_ssid_schedules_request)
        print("The response of WirelessApi->update_network_wireless_ssid_schedules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_ssid_schedules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_schedules_request** | [**UpdateNetworkWirelessSsidSchedulesRequest**](UpdateNetworkWirelessSsidSchedulesRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_splash_settings**
> GetNetworkWirelessSsidSplashSettings200Response update_network_wireless_ssid_splash_settings(network_id, number, update_network_wireless_ssid_splash_settings_request=update_network_wireless_ssid_splash_settings_request)

Modify the splash page settings for the given SSID

Modify the splash page settings for the given SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_splash_settings200_response import GetNetworkWirelessSsidSplashSettings200Response
from openapi_client.models.update_network_wireless_ssid_splash_settings_request import UpdateNetworkWirelessSsidSplashSettingsRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_splash_settings_request = openapi_client.UpdateNetworkWirelessSsidSplashSettingsRequest() # UpdateNetworkWirelessSsidSplashSettingsRequest |  (optional)

    try:
        # Modify the splash page settings for the given SSID
        api_response = api_instance.update_network_wireless_ssid_splash_settings(network_id, number, update_network_wireless_ssid_splash_settings_request=update_network_wireless_ssid_splash_settings_request)
        print("The response of WirelessApi->update_network_wireless_ssid_splash_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_ssid_splash_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_splash_settings_request** | [**UpdateNetworkWirelessSsidSplashSettingsRequest**](UpdateNetworkWirelessSsidSplashSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkWirelessSsidSplashSettings200Response**](GetNetworkWirelessSsidSplashSettings200Response.md)

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

# **update_network_wireless_ssid_traffic_shaping_rules**
> object update_network_wireless_ssid_traffic_shaping_rules(network_id, number, update_network_wireless_ssid_traffic_shaping_rules_request=update_network_wireless_ssid_traffic_shaping_rules_request)

Update the traffic shaping settings for an SSID on an MR network

Update the traffic shaping settings for an SSID on an MR network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_traffic_shaping_rules_request import UpdateNetworkWirelessSsidTrafficShapingRulesRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_traffic_shaping_rules_request = openapi_client.UpdateNetworkWirelessSsidTrafficShapingRulesRequest() # UpdateNetworkWirelessSsidTrafficShapingRulesRequest |  (optional)

    try:
        # Update the traffic shaping settings for an SSID on an MR network
        api_response = api_instance.update_network_wireless_ssid_traffic_shaping_rules(network_id, number, update_network_wireless_ssid_traffic_shaping_rules_request=update_network_wireless_ssid_traffic_shaping_rules_request)
        print("The response of WirelessApi->update_network_wireless_ssid_traffic_shaping_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_ssid_traffic_shaping_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_traffic_shaping_rules_request** | [**UpdateNetworkWirelessSsidTrafficShapingRulesRequest**](UpdateNetworkWirelessSsidTrafficShapingRulesRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_vpn**
> object update_network_wireless_ssid_vpn(network_id, number, update_network_wireless_ssid_vpn_request=update_network_wireless_ssid_vpn_request)

Update the VPN settings for the SSID

Update the VPN settings for the SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_vpn_request import UpdateNetworkWirelessSsidVpnRequest
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
    api_instance = openapi_client.WirelessApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_vpn_request = openapi_client.UpdateNetworkWirelessSsidVpnRequest() # UpdateNetworkWirelessSsidVpnRequest |  (optional)

    try:
        # Update the VPN settings for the SSID
        api_response = api_instance.update_network_wireless_ssid_vpn(network_id, number, update_network_wireless_ssid_vpn_request=update_network_wireless_ssid_vpn_request)
        print("The response of WirelessApi->update_network_wireless_ssid_vpn:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->update_network_wireless_ssid_vpn: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_vpn_request** | [**UpdateNetworkWirelessSsidVpnRequest**](UpdateNetworkWirelessSsidVpnRequest.md)|  | [optional] 

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


# openapi_client.MonitorApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generate_device_camera_snapshot_0**](MonitorApi.md#generate_device_camera_snapshot_0) | **POST** /devices/{serial}/camera/generateSnapshot | Generate a snapshot of what the camera sees at the specified time and return a link to that image.
[**get_administered_identities_me_0**](MonitorApi.md#get_administered_identities_me_0) | **GET** /administered/identities/me | Returns the identity of the current user.
[**get_device_appliance_dhcp_subnets_0**](MonitorApi.md#get_device_appliance_dhcp_subnets_0) | **GET** /devices/{serial}/appliance/dhcp/subnets | Return the DHCP subnet information for an appliance
[**get_device_appliance_performance_0**](MonitorApi.md#get_device_appliance_performance_0) | **GET** /devices/{serial}/appliance/performance | Return the performance score for a single MX
[**get_device_appliance_prefixes_delegated_0**](MonitorApi.md#get_device_appliance_prefixes_delegated_0) | **GET** /devices/{serial}/appliance/prefixes/delegated | Return current delegated IPv6 prefixes on an appliance.
[**get_device_appliance_prefixes_delegated_vlan_assignments_0**](MonitorApi.md#get_device_appliance_prefixes_delegated_vlan_assignments_0) | **GET** /devices/{serial}/appliance/prefixes/delegated/vlanAssignments | Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
[**get_device_camera_analytics_live_0**](MonitorApi.md#get_device_camera_analytics_live_0) | **GET** /devices/{serial}/camera/analytics/live | Returns live state from camera of analytics zones
[**get_device_camera_analytics_overview_0**](MonitorApi.md#get_device_camera_analytics_overview_0) | **GET** /devices/{serial}/camera/analytics/overview | Returns an overview of aggregate analytics data for a timespan
[**get_device_camera_analytics_recent_0**](MonitorApi.md#get_device_camera_analytics_recent_0) | **GET** /devices/{serial}/camera/analytics/recent | Returns most recent record for analytics zones
[**get_device_camera_analytics_zone_history_0**](MonitorApi.md#get_device_camera_analytics_zone_history_0) | **GET** /devices/{serial}/camera/analytics/zones/{zoneId}/history | Return historical records for analytic zones
[**get_device_camera_analytics_zones_0**](MonitorApi.md#get_device_camera_analytics_zones_0) | **GET** /devices/{serial}/camera/analytics/zones | Returns all configured analytic zones for this camera
[**get_device_clients_0**](MonitorApi.md#get_device_clients_0) | **GET** /devices/{serial}/clients | List the clients of a device, up to a maximum of a month ago
[**get_device_lldp_cdp_0**](MonitorApi.md#get_device_lldp_cdp_0) | **GET** /devices/{serial}/lldpCdp | List LLDP and CDP information for a device
[**get_device_loss_and_latency_history_0**](MonitorApi.md#get_device_loss_and_latency_history_0) | **GET** /devices/{serial}/lossAndLatencyHistory | Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
[**get_device_switch_ports_statuses_0**](MonitorApi.md#get_device_switch_ports_statuses_0) | **GET** /devices/{serial}/switch/ports/statuses | Return the status for all the ports of a switch
[**get_device_switch_ports_statuses_packets_0**](MonitorApi.md#get_device_switch_ports_statuses_packets_0) | **GET** /devices/{serial}/switch/ports/statuses/packets | Return the packet counters for all the ports of a switch
[**get_device_wireless_connection_stats_0**](MonitorApi.md#get_device_wireless_connection_stats_0) | **GET** /devices/{serial}/wireless/connectionStats | Aggregated connectivity info for a given AP on this network
[**get_device_wireless_latency_stats_0**](MonitorApi.md#get_device_wireless_latency_stats_0) | **GET** /devices/{serial}/wireless/latencyStats | Aggregated latency info for a given AP on this network
[**get_device_wireless_status_0**](MonitorApi.md#get_device_wireless_status_0) | **GET** /devices/{serial}/wireless/status | Return the SSID statuses of an access point
[**get_network_alerts_history_0**](MonitorApi.md#get_network_alerts_history_0) | **GET** /networks/{networkId}/alerts/history | Return the alert history for this network
[**get_network_appliance_client_security_events_0**](MonitorApi.md#get_network_appliance_client_security_events_0) | **GET** /networks/{networkId}/appliance/clients/{clientId}/security/events | List the security events for a client
[**get_network_appliance_security_events_0**](MonitorApi.md#get_network_appliance_security_events_0) | **GET** /networks/{networkId}/appliance/security/events | List the security events for a network
[**get_network_appliance_uplinks_usage_history_0**](MonitorApi.md#get_network_appliance_uplinks_usage_history_0) | **GET** /networks/{networkId}/appliance/uplinks/usageHistory | Get the sent and received bytes for each uplink of a network.
[**get_network_bluetooth_client_0**](MonitorApi.md#get_network_bluetooth_client_0) | **GET** /networks/{networkId}/bluetoothClients/{bluetoothClientId} | Return a Bluetooth client
[**get_network_bluetooth_clients_0**](MonitorApi.md#get_network_bluetooth_clients_0) | **GET** /networks/{networkId}/bluetoothClients | List the Bluetooth clients seen by APs in this network
[**get_network_client_0**](MonitorApi.md#get_network_client_0) | **GET** /networks/{networkId}/clients/{clientId} | Return the client associated with the given identifier
[**get_network_client_traffic_history_0**](MonitorApi.md#get_network_client_traffic_history_0) | **GET** /networks/{networkId}/clients/{clientId}/trafficHistory | Return the client&#39;s network traffic data over time
[**get_network_client_usage_history_0**](MonitorApi.md#get_network_client_usage_history_0) | **GET** /networks/{networkId}/clients/{clientId}/usageHistory | Return the client&#39;s daily usage history
[**get_network_clients_0**](MonitorApi.md#get_network_clients_0) | **GET** /networks/{networkId}/clients | List the clients that have used this network in the timespan
[**get_network_clients_application_usage_0**](MonitorApi.md#get_network_clients_application_usage_0) | **GET** /networks/{networkId}/clients/applicationUsage | Return the application usage data for clients
[**get_network_clients_bandwidth_usage_history_0**](MonitorApi.md#get_network_clients_bandwidth_usage_history_0) | **GET** /networks/{networkId}/clients/bandwidthUsageHistory | Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
[**get_network_clients_overview_0**](MonitorApi.md#get_network_clients_overview_0) | **GET** /networks/{networkId}/clients/overview | Return overview statistics for network clients
[**get_network_clients_usage_histories_0**](MonitorApi.md#get_network_clients_usage_histories_0) | **GET** /networks/{networkId}/clients/usageHistories | Return the usage histories for clients
[**get_network_events_0**](MonitorApi.md#get_network_events_0) | **GET** /networks/{networkId}/events | List the events for the network
[**get_network_events_event_types_0**](MonitorApi.md#get_network_events_event_types_0) | **GET** /networks/{networkId}/events/eventTypes | List the event type to human-readable description
[**get_network_insight_application_health_by_time_0**](MonitorApi.md#get_network_insight_application_health_by_time_0) | **GET** /networks/{networkId}/insight/applications/{applicationId}/healthByTime | Get application health by time
[**get_network_network_health_channel_utilization_0**](MonitorApi.md#get_network_network_health_channel_utilization_0) | **GET** /networks/{networkId}/networkHealth/channelUtilization | Get the channel utilization over each radio for all APs in a network.
[**get_network_sensor_alerts_current_overview_by_metric_0**](MonitorApi.md#get_network_sensor_alerts_current_overview_by_metric_0) | **GET** /networks/{networkId}/sensor/alerts/current/overview/byMetric | Return an overview of currently alerting sensors by metric
[**get_network_sensor_alerts_overview_by_metric_0**](MonitorApi.md#get_network_sensor_alerts_overview_by_metric_0) | **GET** /networks/{networkId}/sensor/alerts/overview/byMetric | Return an overview of alert occurrences over a timespan, by metric
[**get_network_sm_device_cellular_usage_history_0**](MonitorApi.md#get_network_sm_device_cellular_usage_history_0) | **GET** /networks/{networkId}/sm/devices/{deviceId}/cellularUsageHistory | Return the client&#39;s daily cellular data usage history
[**get_network_sm_device_connectivity_0**](MonitorApi.md#get_network_sm_device_connectivity_0) | **GET** /networks/{networkId}/sm/devices/{deviceId}/connectivity | Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
[**get_network_sm_device_desktop_logs_0**](MonitorApi.md#get_network_sm_device_desktop_logs_0) | **GET** /networks/{networkId}/sm/devices/{deviceId}/desktopLogs | Return historical records of various Systems Manager network connection details for desktop devices.
[**get_network_sm_device_device_command_logs_0**](MonitorApi.md#get_network_sm_device_device_command_logs_0) | **GET** /networks/{networkId}/sm/devices/{deviceId}/deviceCommandLogs | Return historical records of commands sent to Systems Manager devices
[**get_network_sm_device_performance_history_0**](MonitorApi.md#get_network_sm_device_performance_history_0) | **GET** /networks/{networkId}/sm/devices/{deviceId}/performanceHistory | Return historical records of various Systems Manager client metrics for desktop devices.
[**get_network_splash_login_attempts_0**](MonitorApi.md#get_network_splash_login_attempts_0) | **GET** /networks/{networkId}/splashLoginAttempts | List the splash login attempts for a network
[**get_network_topology_link_layer_0**](MonitorApi.md#get_network_topology_link_layer_0) | **GET** /networks/{networkId}/topology/linkLayer | List the LLDP and CDP information for all discovered devices and connections in a network.
[**get_network_traffic_0**](MonitorApi.md#get_network_traffic_0) | **GET** /networks/{networkId}/traffic | Return the traffic analysis data for this network
[**get_network_wireless_air_marshal_0**](MonitorApi.md#get_network_wireless_air_marshal_0) | **GET** /networks/{networkId}/wireless/airMarshal | List Air Marshal scan results from a network
[**get_network_wireless_channel_utilization_history_0**](MonitorApi.md#get_network_wireless_channel_utilization_history_0) | **GET** /networks/{networkId}/wireless/channelUtilizationHistory | Return AP channel utilization over time for a device or network client
[**get_network_wireless_client_connection_stats_0**](MonitorApi.md#get_network_wireless_client_connection_stats_0) | **GET** /networks/{networkId}/wireless/clients/{clientId}/connectionStats | Aggregated connectivity info for a given client on this network
[**get_network_wireless_client_connectivity_events_0**](MonitorApi.md#get_network_wireless_client_connectivity_events_0) | **GET** /networks/{networkId}/wireless/clients/{clientId}/connectivityEvents | List the wireless connectivity events for a client within a network in the timespan.
[**get_network_wireless_client_count_history_0**](MonitorApi.md#get_network_wireless_client_count_history_0) | **GET** /networks/{networkId}/wireless/clientCountHistory | Return wireless client counts over time for a network, device, or network client
[**get_network_wireless_client_latency_history_0**](MonitorApi.md#get_network_wireless_client_latency_history_0) | **GET** /networks/{networkId}/wireless/clients/{clientId}/latencyHistory | Return the latency history for a client
[**get_network_wireless_client_latency_stats_0**](MonitorApi.md#get_network_wireless_client_latency_stats_0) | **GET** /networks/{networkId}/wireless/clients/{clientId}/latencyStats | Aggregated latency info for a given client on this network
[**get_network_wireless_clients_connection_stats_0**](MonitorApi.md#get_network_wireless_clients_connection_stats_0) | **GET** /networks/{networkId}/wireless/clients/connectionStats | Aggregated connectivity info for this network, grouped by clients
[**get_network_wireless_clients_latency_stats_0**](MonitorApi.md#get_network_wireless_clients_latency_stats_0) | **GET** /networks/{networkId}/wireless/clients/latencyStats | Aggregated latency info for this network, grouped by clients
[**get_network_wireless_connection_stats_0**](MonitorApi.md#get_network_wireless_connection_stats_0) | **GET** /networks/{networkId}/wireless/connectionStats | Aggregated connectivity info for this network
[**get_network_wireless_data_rate_history_0**](MonitorApi.md#get_network_wireless_data_rate_history_0) | **GET** /networks/{networkId}/wireless/dataRateHistory | Return PHY data rates over time for a network, device, or network client
[**get_network_wireless_devices_connection_stats_0**](MonitorApi.md#get_network_wireless_devices_connection_stats_0) | **GET** /networks/{networkId}/wireless/devices/connectionStats | Aggregated connectivity info for this network, grouped by node
[**get_network_wireless_devices_latency_stats_0**](MonitorApi.md#get_network_wireless_devices_latency_stats_0) | **GET** /networks/{networkId}/wireless/devices/latencyStats | Aggregated latency info for this network, grouped by node
[**get_network_wireless_failed_connections_0**](MonitorApi.md#get_network_wireless_failed_connections_0) | **GET** /networks/{networkId}/wireless/failedConnections | List of all failed client connection events on this network in a given time range
[**get_network_wireless_latency_history_0**](MonitorApi.md#get_network_wireless_latency_history_0) | **GET** /networks/{networkId}/wireless/latencyHistory | Return average wireless latency over time for a network, device, or network client
[**get_network_wireless_latency_stats_0**](MonitorApi.md#get_network_wireless_latency_stats_0) | **GET** /networks/{networkId}/wireless/latencyStats | Aggregated latency info for this network
[**get_network_wireless_mesh_statuses_0**](MonitorApi.md#get_network_wireless_mesh_statuses_0) | **GET** /networks/{networkId}/wireless/meshStatuses | List wireless mesh statuses for repeaters
[**get_network_wireless_signal_quality_history_0**](MonitorApi.md#get_network_wireless_signal_quality_history_0) | **GET** /networks/{networkId}/wireless/signalQualityHistory | Return signal quality (SNR/RSSI) over time for a device or network client
[**get_network_wireless_usage_history_0**](MonitorApi.md#get_network_wireless_usage_history_0) | **GET** /networks/{networkId}/wireless/usageHistory | Return AP usage over time for a device or network client
[**get_organization_adaptive_policy_overview_0**](MonitorApi.md#get_organization_adaptive_policy_overview_0) | **GET** /organizations/{organizationId}/adaptivePolicy/overview | Returns adaptive policy aggregate statistics for an organization
[**get_organization_api_requests_0**](MonitorApi.md#get_organization_api_requests_0) | **GET** /organizations/{organizationId}/apiRequests | List the API requests made by an organization
[**get_organization_api_requests_overview_0**](MonitorApi.md#get_organization_api_requests_overview_0) | **GET** /organizations/{organizationId}/apiRequests/overview | Return an aggregated overview of API requests data
[**get_organization_api_requests_overview_response_codes_by_interval_0**](MonitorApi.md#get_organization_api_requests_overview_response_codes_by_interval_0) | **GET** /organizations/{organizationId}/apiRequests/overview/responseCodes/byInterval | Tracks organizations&#39; API requests by response code across a given time period
[**get_organization_appliance_security_events_0**](MonitorApi.md#get_organization_appliance_security_events_0) | **GET** /organizations/{organizationId}/appliance/security/events | List the security events for an organization
[**get_organization_appliance_uplink_statuses_0**](MonitorApi.md#get_organization_appliance_uplink_statuses_0) | **GET** /organizations/{organizationId}/appliance/uplink/statuses | List the uplink status of every Meraki MX and Z series appliances in the organization
[**get_organization_appliance_vpn_stats_0**](MonitorApi.md#get_organization_appliance_vpn_stats_0) | **GET** /organizations/{organizationId}/appliance/vpn/stats | Show VPN history stat for networks in an organization
[**get_organization_appliance_vpn_statuses_0**](MonitorApi.md#get_organization_appliance_vpn_statuses_0) | **GET** /organizations/{organizationId}/appliance/vpn/statuses | Show VPN status for networks in an organization
[**get_organization_cellular_gateway_uplink_statuses_0**](MonitorApi.md#get_organization_cellular_gateway_uplink_statuses_0) | **GET** /organizations/{organizationId}/cellularGateway/uplink/statuses | List the uplink status of every Meraki MG cellular gateway in the organization
[**get_organization_clients_bandwidth_usage_history_0**](MonitorApi.md#get_organization_clients_bandwidth_usage_history_0) | **GET** /organizations/{organizationId}/clients/bandwidthUsageHistory | Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
[**get_organization_clients_overview_0**](MonitorApi.md#get_organization_clients_overview_0) | **GET** /organizations/{organizationId}/clients/overview | Return summary information around client data usage (in mb) across the given organization.
[**get_organization_configuration_changes_0**](MonitorApi.md#get_organization_configuration_changes_0) | **GET** /organizations/{organizationId}/configurationChanges | View the Change Log for your organization
[**get_organization_devices_availabilities_0**](MonitorApi.md#get_organization_devices_availabilities_0) | **GET** /organizations/{organizationId}/devices/availabilities | List the availability information for devices in an organization
[**get_organization_devices_power_modules_statuses_by_device_0**](MonitorApi.md#get_organization_devices_power_modules_statuses_by_device_0) | **GET** /organizations/{organizationId}/devices/powerModules/statuses/byDevice | List the power status information for devices in an organization
[**get_organization_devices_statuses_0**](MonitorApi.md#get_organization_devices_statuses_0) | **GET** /organizations/{organizationId}/devices/statuses | List the status of every Meraki device in the organization
[**get_organization_devices_statuses_overview_0**](MonitorApi.md#get_organization_devices_statuses_overview_0) | **GET** /organizations/{organizationId}/devices/statuses/overview | Return an overview of current device statuses
[**get_organization_devices_uplinks_addresses_by_device_0**](MonitorApi.md#get_organization_devices_uplinks_addresses_by_device_0) | **GET** /organizations/{organizationId}/devices/uplinks/addresses/byDevice | List the current uplink addresses for devices in an organization.
[**get_organization_devices_uplinks_loss_and_latency_0**](MonitorApi.md#get_organization_devices_uplinks_loss_and_latency_0) | **GET** /organizations/{organizationId}/devices/uplinksLossAndLatency | Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
[**get_organization_licenses_overview_0**](MonitorApi.md#get_organization_licenses_overview_0) | **GET** /organizations/{organizationId}/licenses/overview | Return an overview of the license state for an organization
[**get_organization_openapi_spec_0**](MonitorApi.md#get_organization_openapi_spec_0) | **GET** /organizations/{organizationId}/openapiSpec | Return the OpenAPI 2.0 Specification of the organization&#39;s API documentation in JSON
[**get_organization_sensor_readings_history_0**](MonitorApi.md#get_organization_sensor_readings_history_0) | **GET** /organizations/{organizationId}/sensor/readings/history | Return all reported readings from sensors in a given timespan, sorted by timestamp
[**get_organization_sensor_readings_latest_0**](MonitorApi.md#get_organization_sensor_readings_latest_0) | **GET** /organizations/{organizationId}/sensor/readings/latest | Return the latest available reading for each metric from each sensor, sorted by sensor serial
[**get_organization_summary_top_appliances_by_utilization_0**](MonitorApi.md#get_organization_summary_top_appliances_by_utilization_0) | **GET** /organizations/{organizationId}/summary/top/appliances/byUtilization | Return the top 10 appliances sorted by utilization over given time range.
[**get_organization_summary_top_clients_by_usage_0**](MonitorApi.md#get_organization_summary_top_clients_by_usage_0) | **GET** /organizations/{organizationId}/summary/top/clients/byUsage | Return metrics for organization&#39;s top 10 clients by data usage (in mb) over given time range.
[**get_organization_summary_top_clients_manufacturers_by_usage_0**](MonitorApi.md#get_organization_summary_top_clients_manufacturers_by_usage_0) | **GET** /organizations/{organizationId}/summary/top/clients/manufacturers/byUsage | Return metrics for organization&#39;s top clients by data usage (in mb) over given time range, grouped by manufacturer.
[**get_organization_summary_top_devices_by_usage_0**](MonitorApi.md#get_organization_summary_top_devices_by_usage_0) | **GET** /organizations/{organizationId}/summary/top/devices/byUsage | Return metrics for organization&#39;s top 10 devices sorted by data usage over given time range
[**get_organization_summary_top_devices_models_by_usage_0**](MonitorApi.md#get_organization_summary_top_devices_models_by_usage_0) | **GET** /organizations/{organizationId}/summary/top/devices/models/byUsage | Return metrics for organization&#39;s top 10 device models sorted by data usage over given time range
[**get_organization_summary_top_ssids_by_usage_0**](MonitorApi.md#get_organization_summary_top_ssids_by_usage_0) | **GET** /organizations/{organizationId}/summary/top/ssids/byUsage | Return metrics for organization&#39;s top 10 ssids by data usage over given time range
[**get_organization_summary_top_switches_by_energy_usage_0**](MonitorApi.md#get_organization_summary_top_switches_by_energy_usage_0) | **GET** /organizations/{organizationId}/summary/top/switches/byEnergyUsage | Return metrics for organization&#39;s top 10 switches by energy usage over given time range
[**get_organization_uplinks_statuses_0**](MonitorApi.md#get_organization_uplinks_statuses_0) | **GET** /organizations/{organizationId}/uplinks/statuses | List the uplink status of every Meraki MX, MG and Z series devices in the organization
[**get_organization_webhooks_alert_types_0**](MonitorApi.md#get_organization_webhooks_alert_types_0) | **GET** /organizations/{organizationId}/webhooks/alertTypes | Return a list of alert types to be used with managing webhook alerts
[**get_organization_webhooks_logs_0**](MonitorApi.md#get_organization_webhooks_logs_0) | **GET** /organizations/{organizationId}/webhooks/logs | Return the log of webhook POSTs sent


# **generate_device_camera_snapshot_0**
> object generate_device_camera_snapshot_0(serial, generate_device_camera_snapshot_request=generate_device_camera_snapshot_request)

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.generate_device_camera_snapshot_request import GenerateDeviceCameraSnapshotRequest
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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 
    generate_device_camera_snapshot_request = openapi_client.GenerateDeviceCameraSnapshotRequest() # GenerateDeviceCameraSnapshotRequest |  (optional)

    try:
        # Generate a snapshot of what the camera sees at the specified time and return a link to that image.
        api_response = api_instance.generate_device_camera_snapshot_0(serial, generate_device_camera_snapshot_request=generate_device_camera_snapshot_request)
        print("The response of MonitorApi->generate_device_camera_snapshot_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->generate_device_camera_snapshot_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **generate_device_camera_snapshot_request** | [**GenerateDeviceCameraSnapshotRequest**](GenerateDeviceCameraSnapshotRequest.md)|  | [optional] 

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

# **get_administered_identities_me_0**
> GetAdministeredIdentitiesMe200Response get_administered_identities_me_0()

Returns the identity of the current user.

Returns the identity of the current user.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_administered_identities_me200_response import GetAdministeredIdentitiesMe200Response
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
    api_instance = openapi_client.MonitorApi(api_client)

    try:
        # Returns the identity of the current user.
        api_response = api_instance.get_administered_identities_me_0()
        print("The response of MonitorApi->get_administered_identities_me_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_administered_identities_me_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAdministeredIdentitiesMe200Response**](GetAdministeredIdentitiesMe200Response.md)

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

# **get_device_appliance_dhcp_subnets_0**
> List[object] get_device_appliance_dhcp_subnets_0(serial)

Return the DHCP subnet information for an appliance

Return the DHCP subnet information for an appliance

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the DHCP subnet information for an appliance
        api_response = api_instance.get_device_appliance_dhcp_subnets_0(serial)
        print("The response of MonitorApi->get_device_appliance_dhcp_subnets_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_appliance_dhcp_subnets_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

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

# **get_device_appliance_performance_0**
> object get_device_appliance_performance_0(serial)

Return the performance score for a single MX

Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the performance score for a single MX
        api_response = api_instance.get_device_appliance_performance_0(serial)
        print("The response of MonitorApi->get_device_appliance_performance_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_appliance_performance_0: %s\n" % e)
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

# **get_device_appliance_prefixes_delegated_0**
> List[object] get_device_appliance_prefixes_delegated_0(serial)

Return current delegated IPv6 prefixes on an appliance.

Return current delegated IPv6 prefixes on an appliance.

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return current delegated IPv6 prefixes on an appliance.
        api_response = api_instance.get_device_appliance_prefixes_delegated_0(serial)
        print("The response of MonitorApi->get_device_appliance_prefixes_delegated_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_appliance_prefixes_delegated_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

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

# **get_device_appliance_prefixes_delegated_vlan_assignments_0**
> List[object] get_device_appliance_prefixes_delegated_vlan_assignments_0(serial)

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
        api_response = api_instance.get_device_appliance_prefixes_delegated_vlan_assignments_0(serial)
        print("The response of MonitorApi->get_device_appliance_prefixes_delegated_vlan_assignments_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_appliance_prefixes_delegated_vlan_assignments_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

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

# **get_device_camera_analytics_live_0**
> object get_device_camera_analytics_live_0(serial)

Returns live state from camera of analytics zones

Returns live state from camera of analytics zones

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns live state from camera of analytics zones
        api_response = api_instance.get_device_camera_analytics_live_0(serial)
        print("The response of MonitorApi->get_device_camera_analytics_live_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_camera_analytics_live_0: %s\n" % e)
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

# **get_device_camera_analytics_overview_0**
> List[object] get_device_camera_analytics_overview_0(serial, t0=t0, t1=t1, timespan=timespan, object_type=object_type)

Returns an overview of aggregate analytics data for a timespan

Returns an overview of aggregate analytics data for a timespan

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour. (optional)
    object_type = 'object_type_example' # str | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. (optional)

    try:
        # Returns an overview of aggregate analytics data for a timespan
        api_response = api_instance.get_device_camera_analytics_overview_0(serial, t0=t0, t1=t1, timespan=timespan, object_type=object_type)
        print("The response of MonitorApi->get_device_camera_analytics_overview_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_camera_analytics_overview_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour. | [optional] 
 **object_type** | **str**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

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

# **get_device_camera_analytics_recent_0**
> List[object] get_device_camera_analytics_recent_0(serial, object_type=object_type)

Returns most recent record for analytics zones

Returns most recent record for analytics zones

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 
    object_type = 'object_type_example' # str | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. (optional)

    try:
        # Returns most recent record for analytics zones
        api_response = api_instance.get_device_camera_analytics_recent_0(serial, object_type=object_type)
        print("The response of MonitorApi->get_device_camera_analytics_recent_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_camera_analytics_recent_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **object_type** | **str**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

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

# **get_device_camera_analytics_zone_history_0**
> List[object] get_device_camera_analytics_zone_history_0(serial, zone_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, object_type=object_type)

Return historical records for analytic zones

Return historical records for analytic zones

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 
    zone_id = 'zone_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 14 hours after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60. (optional)
    object_type = 'object_type_example' # str | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. (optional)

    try:
        # Return historical records for analytic zones
        api_response = api_instance.get_device_camera_analytics_zone_history_0(serial, zone_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, object_type=object_type)
        print("The response of MonitorApi->get_device_camera_analytics_zone_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_camera_analytics_zone_history_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **zone_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 14 hours after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60. | [optional] 
 **object_type** | **str**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

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

# **get_device_camera_analytics_zones_0**
> List[object] get_device_camera_analytics_zones_0(serial)

Returns all configured analytic zones for this camera

Returns all configured analytic zones for this camera

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns all configured analytic zones for this camera
        api_response = api_instance.get_device_camera_analytics_zones_0(serial)
        print("The response of MonitorApi->get_device_camera_analytics_zones_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_camera_analytics_zones_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

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

# **get_device_clients_0**
> List[object] get_device_clients_0(serial, t0=t0, timespan=timespan)

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # List the clients of a device, up to a maximum of a month ago
        api_response = api_instance.get_device_clients_0(serial, t0=t0, timespan=timespan)
        print("The response of MonitorApi->get_device_clients_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_clients_0: %s\n" % e)
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

# **get_device_lldp_cdp_0**
> object get_device_lldp_cdp_0(serial)

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # List LLDP and CDP information for a device
        api_response = api_instance.get_device_lldp_cdp_0(serial)
        print("The response of MonitorApi->get_device_lldp_cdp_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_lldp_cdp_0: %s\n" % e)
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

# **get_device_loss_and_latency_history_0**
> List[object] get_device_loss_and_latency_history_0(serial, ip, t0=t0, t1=t1, timespan=timespan, resolution=resolution, uplink=uplink)

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 
    ip = 'ip_example' # str | The destination IP used to obtain the requested stats. This is required.
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 60 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60. (optional)
    uplink = 'uplink_example' # str | The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1. (optional)

    try:
        # Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
        api_response = api_instance.get_device_loss_and_latency_history_0(serial, ip, t0=t0, t1=t1, timespan=timespan, resolution=resolution, uplink=uplink)
        print("The response of MonitorApi->get_device_loss_and_latency_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_loss_and_latency_history_0: %s\n" % e)
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

# **get_device_switch_ports_statuses_0**
> List[GetDeviceSwitchPortsStatuses200ResponseInner] get_device_switch_ports_statuses_0(serial, t0=t0, timespan=timespan)

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return the status for all the ports of a switch
        api_response = api_instance.get_device_switch_ports_statuses_0(serial, t0=t0, timespan=timespan)
        print("The response of MonitorApi->get_device_switch_ports_statuses_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_switch_ports_statuses_0: %s\n" % e)
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

# **get_device_switch_ports_statuses_packets_0**
> List[object] get_device_switch_ports_statuses_packets_0(serial, t0=t0, timespan=timespan)

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 1 day from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day. (optional)

    try:
        # Return the packet counters for all the ports of a switch
        api_response = api_instance.get_device_switch_ports_statuses_packets_0(serial, t0=t0, timespan=timespan)
        print("The response of MonitorApi->get_device_switch_ports_statuses_packets_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_switch_ports_statuses_packets_0: %s\n" % e)
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

# **get_device_wireless_connection_stats_0**
> GetDeviceWirelessConnectionStats200Response get_device_wireless_connection_stats_0(serial, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_device_wireless_connection_stats_0(serial, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)
        print("The response of MonitorApi->get_device_wireless_connection_stats_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_wireless_connection_stats_0: %s\n" % e)
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

# **get_device_wireless_latency_stats_0**
> object get_device_wireless_latency_stats_0(serial, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_device_wireless_latency_stats_0(serial, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of MonitorApi->get_device_wireless_latency_stats_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_wireless_latency_stats_0: %s\n" % e)
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

# **get_device_wireless_status_0**
> object get_device_wireless_status_0(serial)

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
    api_instance = openapi_client.MonitorApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the SSID statuses of an access point
        api_response = api_instance.get_device_wireless_status_0(serial)
        print("The response of MonitorApi->get_device_wireless_status_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_device_wireless_status_0: %s\n" % e)
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

# **get_network_alerts_history_0**
> List[GetNetworkAlertsHistory200ResponseInner] get_network_alerts_history_0(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return the alert history for this network

Return the alert history for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_alerts_history200_response_inner import GetNetworkAlertsHistory200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return the alert history for this network
        api_response = api_instance.get_network_alerts_history_0(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of MonitorApi->get_network_alerts_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_alerts_history_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkAlertsHistory200ResponseInner]**](GetNetworkAlertsHistory200ResponseInner.md)

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

# **get_network_appliance_client_security_events_0**
> List[object] get_network_appliance_client_security_events_0(network_id, client_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)

List the security events for a client

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 791 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    sort_order = 'sort_order_example' # str | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. (optional)

    try:
        # List the security events for a client
        api_response = api_instance.get_network_appliance_client_security_events_0(network_id, client_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)
        print("The response of MonitorApi->get_network_appliance_client_security_events_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_appliance_client_security_events_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 791 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sort_order** | **str**| Sorted order of security events based on event detection time. Order options are &#39;ascending&#39; or &#39;descending&#39;. Default is ascending order. | [optional] 

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

# **get_network_appliance_security_events_0**
> List[object] get_network_appliance_security_events_0(network_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)

List the security events for a network

List the security events for a network

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 365 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    sort_order = 'sort_order_example' # str | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. (optional)

    try:
        # List the security events for a network
        api_response = api_instance.get_network_appliance_security_events_0(network_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)
        print("The response of MonitorApi->get_network_appliance_security_events_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_appliance_security_events_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sort_order** | **str**| Sorted order of security events based on event detection time. Order options are &#39;ascending&#39; or &#39;descending&#39;. Default is ascending order. | [optional] 

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

# **get_network_appliance_uplinks_usage_history_0**
> List[object] get_network_appliance_uplinks_usage_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)

Get the sent and received bytes for each uplink of a network.

Get the sent and received bytes for each uplink of a network.

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 10 minutes. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 60, 300, 600, 1800, 3600, 86400. The default is 60. (optional)

    try:
        # Get the sent and received bytes for each uplink of a network.
        api_response = api_instance.get_network_appliance_uplinks_usage_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)
        print("The response of MonitorApi->get_network_appliance_uplinks_usage_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_appliance_uplinks_usage_history_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 10 minutes. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 60, 300, 600, 1800, 3600, 86400. The default is 60. | [optional] 

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

# **get_network_bluetooth_client_0**
> object get_network_bluetooth_client_0(network_id, bluetooth_client_id, include_connectivity_history=include_connectivity_history, connectivity_history_timespan=connectivity_history_timespan)

Return a Bluetooth client

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    bluetooth_client_id = 'bluetooth_client_id_example' # str | 
    include_connectivity_history = True # bool | Include the connectivity history for this client (optional)
    connectivity_history_timespan = 56 # int | The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used. (optional)

    try:
        # Return a Bluetooth client
        api_response = api_instance.get_network_bluetooth_client_0(network_id, bluetooth_client_id, include_connectivity_history=include_connectivity_history, connectivity_history_timespan=connectivity_history_timespan)
        print("The response of MonitorApi->get_network_bluetooth_client_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_bluetooth_client_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **bluetooth_client_id** | **str**|  | 
 **include_connectivity_history** | **bool**| Include the connectivity history for this client | [optional] 
 **connectivity_history_timespan** | **int**| The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used. | [optional] 

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

# **get_network_bluetooth_clients_0**
> List[object] get_network_bluetooth_clients_0(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, include_connectivity_history=include_connectivity_history)

List the Bluetooth clients seen by APs in this network

List the Bluetooth clients seen by APs in this network

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 7 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    include_connectivity_history = True # bool | Include the connectivity history for this client (optional)

    try:
        # List the Bluetooth clients seen by APs in this network
        api_response = api_instance.get_network_bluetooth_clients_0(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, include_connectivity_history=include_connectivity_history)
        print("The response of MonitorApi->get_network_bluetooth_clients_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_bluetooth_clients_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 7 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **include_connectivity_history** | **bool**| Include the connectivity history for this client | [optional] 

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

# **get_network_client_0**
> GetNetworkClient200Response get_network_client_0(network_id, client_id)

Return the client associated with the given identifier

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_client200_response import GetNetworkClient200Response
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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 

    try:
        # Return the client associated with the given identifier
        api_response = api_instance.get_network_client_0(network_id, client_id)
        print("The response of MonitorApi->get_network_client_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_client_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 

### Return type

[**GetNetworkClient200Response**](GetNetworkClient200Response.md)

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

# **get_network_client_traffic_history_0**
> List[object] get_network_client_traffic_history_0(network_id, client_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return the client's network traffic data over time

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return the client's network traffic data over time
        api_response = api_instance.get_network_client_traffic_history_0(network_id, client_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of MonitorApi->get_network_client_traffic_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_client_traffic_history_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

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

# **get_network_client_usage_history_0**
> List[object] get_network_client_usage_history_0(network_id, client_id)

Return the client's daily usage history

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 

    try:
        # Return the client's daily usage history
        api_response = api_instance.get_network_client_usage_history_0(network_id, client_id)
        print("The response of MonitorApi->get_network_client_usage_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_client_usage_history_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 

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

# **get_network_clients_0**
> GetNetworkClients200Response get_network_clients_0(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, statuses=statuses, ip=ip, ip6=ip6, ip6_local=ip6_local, mac=mac, os=os, description=description, vlan=vlan, recent_device_connections=recent_device_connections)

List the clients that have used this network in the timespan

List the clients that have used this network in the timespan

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_clients200_response import GetNetworkClients200Response
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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    statuses = ['statuses_example'] # List[str] | Filters clients based on status. Can be one of 'Online' or 'Offline'. (optional)
    ip = 'ip_example' # str | Filters clients based on a partial or full match for the ip address field. (optional)
    ip6 = 'ip6_example' # str | Filters clients based on a partial or full match for the ip6 address field. (optional)
    ip6_local = 'ip6_local_example' # str | Filters clients based on a partial or full match for the ip6Local address field. (optional)
    mac = 'mac_example' # str | Filters clients based on a partial or full match for the mac address field. (optional)
    os = 'os_example' # str | Filters clients based on a partial or full match for the os (operating system) field. (optional)
    description = 'description_example' # str | Filters clients based on a partial or full match for the description field. (optional)
    vlan = 'vlan_example' # str | Filters clients based on the full match for the VLAN field. (optional)
    recent_device_connections = ['recent_device_connections_example'] # List[str] | Filters clients based on recent connection type. Can be one of 'Wired' or 'Wireless'. (optional)

    try:
        # List the clients that have used this network in the timespan
        api_response = api_instance.get_network_clients_0(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, statuses=statuses, ip=ip, ip6=ip6, ip6_local=ip6_local, mac=mac, os=os, description=description, vlan=vlan, recent_device_connections=recent_device_connections)
        print("The response of MonitorApi->get_network_clients_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_clients_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **statuses** | [**List[str]**](str.md)| Filters clients based on status. Can be one of &#39;Online&#39; or &#39;Offline&#39;. | [optional] 
 **ip** | **str**| Filters clients based on a partial or full match for the ip address field. | [optional] 
 **ip6** | **str**| Filters clients based on a partial or full match for the ip6 address field. | [optional] 
 **ip6_local** | **str**| Filters clients based on a partial or full match for the ip6Local address field. | [optional] 
 **mac** | **str**| Filters clients based on a partial or full match for the mac address field. | [optional] 
 **os** | **str**| Filters clients based on a partial or full match for the os (operating system) field. | [optional] 
 **description** | **str**| Filters clients based on a partial or full match for the description field. | [optional] 
 **vlan** | **str**| Filters clients based on the full match for the VLAN field. | [optional] 
 **recent_device_connections** | [**List[str]**](str.md)| Filters clients based on recent connection type. Can be one of &#39;Wired&#39; or &#39;Wireless&#39;. | [optional] 

### Return type

[**GetNetworkClients200Response**](GetNetworkClients200Response.md)

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

# **get_network_clients_application_usage_0**
> List[object] get_network_clients_application_usage_0(network_id, clients, ssid_number=ssid_number, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan)

Return the application usage data for clients

Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    clients = 'clients_example' # str | A list of client keys, MACs or IPs separated by comma.
    ssid_number = 56 # int | An SSID number to include. If not specified, eveusage histories application usagents for all SSIDs will be returned. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return the application usage data for clients
        api_response = api_instance.get_network_clients_application_usage_0(network_id, clients, ssid_number=ssid_number, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_network_clients_application_usage_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_clients_application_usage_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **clients** | **str**| A list of client keys, MACs or IPs separated by comma. | 
 **ssid_number** | **int**| An SSID number to include. If not specified, eveusage histories application usagents for all SSIDs will be returned. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

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

# **get_network_clients_bandwidth_usage_history_0**
> List[object] get_network_clients_bandwidth_usage_history_0(network_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.

Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 30 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
        api_response = api_instance.get_network_clients_bandwidth_usage_history_0(network_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of MonitorApi->get_network_clients_bandwidth_usage_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_clients_bandwidth_usage_history_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 30 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

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

# **get_network_clients_overview_0**
> object get_network_clients_overview_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)

Return overview statistics for network clients

Return overview statistics for network clients

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 7200, 86400, 604800, 2592000. The default is 604800. (optional)

    try:
        # Return overview statistics for network clients
        api_response = api_instance.get_network_clients_overview_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)
        print("The response of MonitorApi->get_network_clients_overview_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_clients_overview_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 7200, 86400, 604800, 2592000. The default is 604800. | [optional] 

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

# **get_network_clients_usage_histories_0**
> List[object] get_network_clients_usage_histories_0(network_id, clients, ssid_number=ssid_number, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan)

Return the usage histories for clients

Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    clients = 'clients_example' # str | A list of client keys, MACs or IPs separated by comma.
    ssid_number = 56 # int | An SSID number to include. If not specified, events for all SSIDs will be returned. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return the usage histories for clients
        api_response = api_instance.get_network_clients_usage_histories_0(network_id, clients, ssid_number=ssid_number, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_network_clients_usage_histories_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_clients_usage_histories_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **clients** | **str**| A list of client keys, MACs or IPs separated by comma. | 
 **ssid_number** | **int**| An SSID number to include. If not specified, events for all SSIDs will be returned. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

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

# **get_network_events_0**
> GetNetworkEvents200Response get_network_events_0(network_id, product_type=product_type, included_event_types=included_event_types, excluded_event_types=excluded_event_types, device_mac=device_mac, device_serial=device_serial, device_name=device_name, client_ip=client_ip, client_mac=client_mac, client_name=client_name, sm_device_mac=sm_device_mac, sm_device_name=sm_device_name, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

List the events for the network

List the events for the network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_events200_response import GetNetworkEvents200Response
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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    product_type = 'product_type_example' # str | The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway (optional)
    included_event_types = ['included_event_types_example'] # List[str] | A list of event types. The returned events will be filtered to only include events with these types. (optional)
    excluded_event_types = ['excluded_event_types_example'] # List[str] | A list of event types. The returned events will be filtered to exclude events with these types. (optional)
    device_mac = 'device_mac_example' # str | The MAC address of the Meraki device which the list of events will be filtered with (optional)
    device_serial = 'device_serial_example' # str | The serial of the Meraki device which the list of events will be filtered with (optional)
    device_name = 'device_name_example' # str | The name of the Meraki device which the list of events will be filtered with (optional)
    client_ip = 'client_ip_example' # str | The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks. (optional)
    client_mac = 'client_mac_example' # str | The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks. (optional)
    client_name = 'client_name_example' # str | The name, or partial name, of the client which the list of events will be filtered with (optional)
    sm_device_mac = 'sm_device_mac_example' # str | The MAC address of the Systems Manager device which the list of events will be filtered with (optional)
    sm_device_name = 'sm_device_name_example' # str | The name of the Systems Manager device which the list of events will be filtered with (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # List the events for the network
        api_response = api_instance.get_network_events_0(network_id, product_type=product_type, included_event_types=included_event_types, excluded_event_types=excluded_event_types, device_mac=device_mac, device_serial=device_serial, device_name=device_name, client_ip=client_ip, client_mac=client_mac, client_name=client_name, sm_device_mac=sm_device_mac, sm_device_name=sm_device_name, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of MonitorApi->get_network_events_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_events_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **product_type** | **str**| The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway | [optional] 
 **included_event_types** | [**List[str]**](str.md)| A list of event types. The returned events will be filtered to only include events with these types. | [optional] 
 **excluded_event_types** | [**List[str]**](str.md)| A list of event types. The returned events will be filtered to exclude events with these types. | [optional] 
 **device_mac** | **str**| The MAC address of the Meraki device which the list of events will be filtered with | [optional] 
 **device_serial** | **str**| The serial of the Meraki device which the list of events will be filtered with | [optional] 
 **device_name** | **str**| The name of the Meraki device which the list of events will be filtered with | [optional] 
 **client_ip** | **str**| The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks. | [optional] 
 **client_mac** | **str**| The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks. | [optional] 
 **client_name** | **str**| The name, or partial name, of the client which the list of events will be filtered with | [optional] 
 **sm_device_mac** | **str**| The MAC address of the Systems Manager device which the list of events will be filtered with | [optional] 
 **sm_device_name** | **str**| The name of the Systems Manager device which the list of events will be filtered with | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**GetNetworkEvents200Response**](GetNetworkEvents200Response.md)

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

# **get_network_events_event_types_0**
> List[GetNetworkEventsEventTypes200ResponseInner] get_network_events_event_types_0(network_id)

List the event type to human-readable description

List the event type to human-readable description

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_events_event_types200_response_inner import GetNetworkEventsEventTypes200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the event type to human-readable description
        api_response = api_instance.get_network_events_event_types_0(network_id)
        print("The response of MonitorApi->get_network_events_event_types_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_events_event_types_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkEventsEventTypes200ResponseInner]**](GetNetworkEventsEventTypes200ResponseInner.md)

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

# **get_network_insight_application_health_by_time_0**
> List[GetNetworkInsightApplicationHealthByTime200ResponseInner] get_network_insight_application_health_by_time_0(network_id, application_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)

Get application health by time

Get application health by time

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_insight_application_health_by_time200_response_inner import GetNetworkInsightApplicationHealthByTime200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    application_id = 'application_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 7 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 60, 300, 3600, 86400. The default is 300. (optional)

    try:
        # Get application health by time
        api_response = api_instance.get_network_insight_application_health_by_time_0(network_id, application_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)
        print("The response of MonitorApi->get_network_insight_application_health_by_time_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_insight_application_health_by_time_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **application_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 7 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 60, 300, 3600, 86400. The default is 300. | [optional] 

### Return type

[**List[GetNetworkInsightApplicationHealthByTime200ResponseInner]**](GetNetworkInsightApplicationHealthByTime200ResponseInner.md)

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

# **get_network_network_health_channel_utilization_0**
> List[object] get_network_network_health_channel_utilization_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Get the channel utilization over each radio for all APs in a network.

Get the channel utilization over each radio for all APs in a network.

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 600. The default is 600. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 100. Default is 10. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Get the channel utilization over each radio for all APs in a network.
        api_response = api_instance.get_network_network_health_channel_utilization_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of MonitorApi->get_network_network_health_channel_utilization_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_network_health_channel_utilization_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 600. The default is 600. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 100. Default is 10. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

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

# **get_network_sensor_alerts_current_overview_by_metric_0**
> GetNetworkSensorAlertsCurrentOverviewByMetric200Response get_network_sensor_alerts_current_overview_by_metric_0(network_id)

Return an overview of currently alerting sensors by metric

Return an overview of currently alerting sensors by metric

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_alerts_current_overview_by_metric200_response import GetNetworkSensorAlertsCurrentOverviewByMetric200Response
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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return an overview of currently alerting sensors by metric
        api_response = api_instance.get_network_sensor_alerts_current_overview_by_metric_0(network_id)
        print("The response of MonitorApi->get_network_sensor_alerts_current_overview_by_metric_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_sensor_alerts_current_overview_by_metric_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSensorAlertsCurrentOverviewByMetric200Response**](GetNetworkSensorAlertsCurrentOverviewByMetric200Response.md)

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

# **get_network_sensor_alerts_overview_by_metric_0**
> List[GetNetworkSensorAlertsOverviewByMetric200ResponseInner] get_network_sensor_alerts_overview_by_metric_0(network_id, t0=t0, t1=t1, timespan=timespan, interval=interval)

Return an overview of alert occurrences over a timespan, by metric

Return an overview of alert occurrences over a timespan, by metric

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_alerts_overview_by_metric200_response_inner import GetNetworkSensorAlertsOverviewByMetric200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)
    interval = 56 # int | The time interval in seconds for returned data. The valid intervals are: 86400, 604800. The default is 604800. (optional)

    try:
        # Return an overview of alert occurrences over a timespan, by metric
        api_response = api_instance.get_network_sensor_alerts_overview_by_metric_0(network_id, t0=t0, t1=t1, timespan=timespan, interval=interval)
        print("The response of MonitorApi->get_network_sensor_alerts_overview_by_metric_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_sensor_alerts_overview_by_metric_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **interval** | **int**| The time interval in seconds for returned data. The valid intervals are: 86400, 604800. The default is 604800. | [optional] 

### Return type

[**List[GetNetworkSensorAlertsOverviewByMetric200ResponseInner]**](GetNetworkSensorAlertsOverviewByMetric200ResponseInner.md)

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

# **get_network_sm_device_cellular_usage_history_0**
> List[GetNetworkSmDeviceCellularUsageHistory200ResponseInner] get_network_sm_device_cellular_usage_history_0(network_id, device_id)

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # Return the client's daily cellular data usage history
        api_response = api_instance.get_network_sm_device_cellular_usage_history_0(network_id, device_id)
        print("The response of MonitorApi->get_network_sm_device_cellular_usage_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_sm_device_cellular_usage_history_0: %s\n" % e)
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

# **get_network_sm_device_connectivity_0**
> List[GetNetworkSmDeviceConnectivity200ResponseInner] get_network_sm_device_connectivity_0(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
        api_response = api_instance.get_network_sm_device_connectivity_0(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of MonitorApi->get_network_sm_device_connectivity_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_sm_device_connectivity_0: %s\n" % e)
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

# **get_network_sm_device_desktop_logs_0**
> List[GetNetworkSmDeviceDesktopLogs200ResponseInner] get_network_sm_device_desktop_logs_0(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return historical records of various Systems Manager network connection details for desktop devices.
        api_response = api_instance.get_network_sm_device_desktop_logs_0(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of MonitorApi->get_network_sm_device_desktop_logs_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_sm_device_desktop_logs_0: %s\n" % e)
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

# **get_network_sm_device_device_command_logs_0**
> List[GetNetworkSmDeviceDeviceCommandLogs200ResponseInner] get_network_sm_device_device_command_logs_0(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return historical records of commands sent to Systems Manager devices
        api_response = api_instance.get_network_sm_device_device_command_logs_0(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of MonitorApi->get_network_sm_device_device_command_logs_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_sm_device_device_command_logs_0: %s\n" % e)
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

# **get_network_sm_device_performance_history_0**
> List[GetNetworkSmDevicePerformanceHistory200ResponseInner] get_network_sm_device_performance_history_0(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return historical records of various Systems Manager client metrics for desktop devices.
        api_response = api_instance.get_network_sm_device_performance_history_0(network_id, device_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of MonitorApi->get_network_sm_device_performance_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_sm_device_performance_history_0: %s\n" % e)
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

# **get_network_splash_login_attempts_0**
> List[object] get_network_splash_login_attempts_0(network_id, ssid_number=ssid_number, login_identifier=login_identifier, timespan=timespan)

List the splash login attempts for a network

List the splash login attempts for a network

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    ssid_number = 56 # int | Only return the login attempts for the specified SSID (optional)
    login_identifier = 'login_identifier_example' # str | The username, email, or phone number used during login (optional)
    timespan = 56 # int | The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months (optional)

    try:
        # List the splash login attempts for a network
        api_response = api_instance.get_network_splash_login_attempts_0(network_id, ssid_number=ssid_number, login_identifier=login_identifier, timespan=timespan)
        print("The response of MonitorApi->get_network_splash_login_attempts_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_splash_login_attempts_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **ssid_number** | **int**| Only return the login attempts for the specified SSID | [optional] 
 **login_identifier** | **str**| The username, email, or phone number used during login | [optional] 
 **timespan** | **int**| The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months | [optional] 

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

# **get_network_topology_link_layer_0**
> object get_network_topology_link_layer_0(network_id)

List the LLDP and CDP information for all discovered devices and connections in a network.

List the LLDP and CDP information for all discovered devices and connections in a network.

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the LLDP and CDP information for all discovered devices and connections in a network.
        api_response = api_instance.get_network_topology_link_layer_0(network_id)
        print("The response of MonitorApi->get_network_topology_link_layer_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_topology_link_layer_0: %s\n" % e)
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

# **get_network_traffic_0**
> List[object] get_network_traffic_0(network_id, t0=t0, timespan=timespan, device_type=device_type)

Return the traffic analysis data for this network

Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 30 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days. (optional)
    device_type = 'device_type_example' # str | Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'. When using 'combined', for each rule the data will come from the device type with the most usage. (optional)

    try:
        # Return the traffic analysis data for this network
        api_response = api_instance.get_network_traffic_0(network_id, t0=t0, timespan=timespan, device_type=device_type)
        print("The response of MonitorApi->get_network_traffic_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_traffic_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 30 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days. | [optional] 
 **device_type** | **str**| Filter the data by device type: &#39;combined&#39;, &#39;wireless&#39;, &#39;switch&#39; or &#39;appliance&#39;. Defaults to &#39;combined&#39;. When using &#39;combined&#39;, for each rule the data will come from the device type with the most usage. | [optional] 

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

# **get_network_wireless_air_marshal_0**
> List[object] get_network_wireless_air_marshal_0(network_id, t0=t0, timespan=timespan)

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)

    try:
        # List Air Marshal scan results from a network
        api_response = api_instance.get_network_wireless_air_marshal_0(network_id, t0=t0, timespan=timespan)
        print("The response of MonitorApi->get_network_wireless_air_marshal_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_air_marshal_0: %s\n" % e)
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

# **get_network_wireless_channel_utilization_history_0**
> List[GetNetworkWirelessChannelUtilizationHistory200ResponseInner] get_network_wireless_channel_utilization_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_channel_utilization_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band)
        print("The response of MonitorApi->get_network_wireless_channel_utilization_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_channel_utilization_history_0: %s\n" % e)
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

# **get_network_wireless_client_connection_stats_0**
> object get_network_wireless_client_connection_stats_0(network_id, client_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_client_connection_stats_0(network_id, client_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)
        print("The response of MonitorApi->get_network_wireless_client_connection_stats_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_client_connection_stats_0: %s\n" % e)
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

# **get_network_wireless_client_connectivity_events_0**
> List[object] get_network_wireless_client_connectivity_events_0(network_id, client_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan, types=types, included_severities=included_severities, band=band, ssid_number=ssid_number, device_serial=device_serial)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_client_connectivity_events_0(network_id, client_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan, types=types, included_severities=included_severities, band=band, ssid_number=ssid_number, device_serial=device_serial)
        print("The response of MonitorApi->get_network_wireless_client_connectivity_events_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_client_connectivity_events_0: %s\n" % e)
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

# **get_network_wireless_client_count_history_0**
> List[GetNetworkWirelessClientCountHistory200ResponseInner] get_network_wireless_client_count_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_client_count_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)
        print("The response of MonitorApi->get_network_wireless_client_count_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_client_count_history_0: %s\n" % e)
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

# **get_network_wireless_client_latency_history_0**
> List[object] get_network_wireless_client_latency_history_0(network_id, client_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 791 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 791 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400. (optional)

    try:
        # Return the latency history for a client
        api_response = api_instance.get_network_wireless_client_latency_history_0(network_id, client_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)
        print("The response of MonitorApi->get_network_wireless_client_latency_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_client_latency_history_0: %s\n" % e)
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

# **get_network_wireless_client_latency_stats_0**
> object get_network_wireless_client_latency_stats_0(network_id, client_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_client_latency_stats_0(network_id, client_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of MonitorApi->get_network_wireless_client_latency_stats_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_client_latency_stats_0: %s\n" % e)
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

# **get_network_wireless_clients_connection_stats_0**
> List[object] get_network_wireless_clients_connection_stats_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_clients_connection_stats_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)
        print("The response of MonitorApi->get_network_wireless_clients_connection_stats_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_clients_connection_stats_0: %s\n" % e)
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

# **get_network_wireless_clients_latency_stats_0**
> List[object] get_network_wireless_clients_latency_stats_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_clients_latency_stats_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of MonitorApi->get_network_wireless_clients_latency_stats_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_clients_latency_stats_0: %s\n" % e)
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

# **get_network_wireless_connection_stats_0**
> GetNetworkWirelessConnectionStats200Response get_network_wireless_connection_stats_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_connection_stats_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)
        print("The response of MonitorApi->get_network_wireless_connection_stats_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_connection_stats_0: %s\n" % e)
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

# **get_network_wireless_data_rate_history_0**
> List[GetNetworkWirelessDataRateHistory200ResponseInner] get_network_wireless_data_rate_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_data_rate_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)
        print("The response of MonitorApi->get_network_wireless_data_rate_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_data_rate_history_0: %s\n" % e)
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

# **get_network_wireless_devices_connection_stats_0**
> List[GetDeviceWirelessConnectionStats200Response] get_network_wireless_devices_connection_stats_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_devices_connection_stats_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag)
        print("The response of MonitorApi->get_network_wireless_devices_connection_stats_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_devices_connection_stats_0: %s\n" % e)
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

# **get_network_wireless_devices_latency_stats_0**
> List[object] get_network_wireless_devices_latency_stats_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_devices_latency_stats_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of MonitorApi->get_network_wireless_devices_latency_stats_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_devices_latency_stats_0: %s\n" % e)
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

# **get_network_wireless_failed_connections_0**
> List[GetNetworkWirelessFailedConnections200ResponseInner] get_network_wireless_failed_connections_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, serial=serial, client_id=client_id)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_failed_connections_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, serial=serial, client_id=client_id)
        print("The response of MonitorApi->get_network_wireless_failed_connections_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_failed_connections_0: %s\n" % e)
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

# **get_network_wireless_latency_history_0**
> List[GetNetworkWirelessLatencyHistory200ResponseInner] get_network_wireless_latency_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid, access_category=access_category)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_latency_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid, access_category=access_category)
        print("The response of MonitorApi->get_network_wireless_latency_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_latency_history_0: %s\n" % e)
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

# **get_network_wireless_latency_stats_0**
> object get_network_wireless_latency_stats_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_latency_stats_0(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of MonitorApi->get_network_wireless_latency_stats_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_latency_stats_0: %s\n" % e)
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

# **get_network_wireless_mesh_statuses_0**
> object get_network_wireless_mesh_statuses_0(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

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
    api_instance = openapi_client.MonitorApi(api_client)
    network_id = 'network_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 500. Default is 50. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # List wireless mesh statuses for repeaters
        api_response = api_instance.get_network_wireless_mesh_statuses_0(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of MonitorApi->get_network_wireless_mesh_statuses_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_mesh_statuses_0: %s\n" % e)
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

# **get_network_wireless_signal_quality_history_0**
> List[GetNetworkWirelessSignalQualityHistory200ResponseInner] get_network_wireless_signal_quality_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_signal_quality_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)
        print("The response of MonitorApi->get_network_wireless_signal_quality_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_signal_quality_history_0: %s\n" % e)
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

# **get_network_wireless_usage_history_0**
> List[GetNetworkWirelessUsageHistory200ResponseInner] get_network_wireless_usage_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_network_wireless_usage_history_0(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band, ssid=ssid)
        print("The response of MonitorApi->get_network_wireless_usage_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_network_wireless_usage_history_0: %s\n" % e)
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

# **get_organization_adaptive_policy_overview_0**
> GetOrganizationAdaptivePolicyOverview200Response get_organization_adaptive_policy_overview_0(organization_id)

Returns adaptive policy aggregate statistics for an organization

Returns adaptive policy aggregate statistics for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_adaptive_policy_overview200_response import GetOrganizationAdaptivePolicyOverview200Response
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns adaptive policy aggregate statistics for an organization
        api_response = api_instance.get_organization_adaptive_policy_overview_0(organization_id)
        print("The response of MonitorApi->get_organization_adaptive_policy_overview_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_adaptive_policy_overview_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationAdaptivePolicyOverview200Response**](GetOrganizationAdaptivePolicyOverview200Response.md)

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

# **get_organization_api_requests_0**
> List[GetOrganizationApiRequests200ResponseInner] get_organization_api_requests_0(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, admin_id=admin_id, path=path, method=method, response_code=response_code, source_ip=source_ip, user_agent=user_agent, version=version, operation_ids=operation_ids)

List the API requests made by an organization

List the API requests made by an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_api_requests200_response_inner import GetOrganizationApiRequests200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    admin_id = 'admin_id_example' # str | Filter the results by the ID of the admin who made the API requests (optional)
    path = 'path_example' # str | Filter the results by the path of the API requests (optional)
    method = 'method_example' # str | Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE') (optional)
    response_code = 56 # int | Filter the results by the response code of the API requests (optional)
    source_ip = 'source_ip_example' # str | Filter the results by the IP address of the originating API request (optional)
    user_agent = 'user_agent_example' # str | Filter the results by the user agent string of the API request (optional)
    version = 56 # int | Filter the results by the API version of the API request (optional)
    operation_ids = ['operation_ids_example'] # List[str] | Filter the results by one or more operation IDs for the API request (optional)

    try:
        # List the API requests made by an organization
        api_response = api_instance.get_organization_api_requests_0(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, admin_id=admin_id, path=path, method=method, response_code=response_code, source_ip=source_ip, user_agent=user_agent, version=version, operation_ids=operation_ids)
        print("The response of MonitorApi->get_organization_api_requests_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_api_requests_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **admin_id** | **str**| Filter the results by the ID of the admin who made the API requests | [optional] 
 **path** | **str**| Filter the results by the path of the API requests | [optional] 
 **method** | **str**| Filter the results by the method of the API requests (must be &#39;GET&#39;, &#39;PUT&#39;, &#39;POST&#39; or &#39;DELETE&#39;) | [optional] 
 **response_code** | **int**| Filter the results by the response code of the API requests | [optional] 
 **source_ip** | **str**| Filter the results by the IP address of the originating API request | [optional] 
 **user_agent** | **str**| Filter the results by the user agent string of the API request | [optional] 
 **version** | **int**| Filter the results by the API version of the API request | [optional] 
 **operation_ids** | [**List[str]**](str.md)| Filter the results by one or more operation IDs for the API request | [optional] 

### Return type

[**List[GetOrganizationApiRequests200ResponseInner]**](GetOrganizationApiRequests200ResponseInner.md)

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

# **get_organization_api_requests_overview_0**
> object get_organization_api_requests_overview_0(organization_id, t0=t0, t1=t1, timespan=timespan)

Return an aggregated overview of API requests data

Return an aggregated overview of API requests data

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. (optional)

    try:
        # Return an aggregated overview of API requests data
        api_response = api_instance.get_organization_api_requests_overview_0(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_organization_api_requests_overview_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_api_requests_overview_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. | [optional] 

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

# **get_organization_api_requests_overview_response_codes_by_interval_0**
> List[GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner] get_organization_api_requests_overview_response_codes_by_interval_0(organization_id, t0=t0, t1=t1, timespan=timespan, interval=interval, version=version, operation_ids=operation_ids, source_ips=source_ips, admin_ids=admin_ids, user_agent=user_agent)

Tracks organizations' API requests by response code across a given time period

Tracks organizations' API requests by response code across a given time period

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_api_requests_overview_response_codes_by_interval200_response_inner import GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. If interval is provided, the timespan will be autocalculated. (optional)
    interval = 56 # int | The time interval in seconds for returned data. The valid intervals are: 120, 3600, 14400, 21600. The default is 21600. Interval is calculated if time params are provided. (optional)
    version = 56 # int | Filter by API version of the endpoint. Allowable values are: [0, 1] (optional)
    operation_ids = ['operation_ids_example'] # List[str] | Filter by operation ID of the endpoint (optional)
    source_ips = ['source_ips_example'] # List[str] | Filter by source IP that made the API request (optional)
    admin_ids = ['admin_ids_example'] # List[str] | Filter by admin ID of user that made the API request (optional)
    user_agent = 'user_agent_example' # str | Filter by user agent string for API request. This will filter by a complete or partial match. (optional)

    try:
        # Tracks organizations' API requests by response code across a given time period
        api_response = api_instance.get_organization_api_requests_overview_response_codes_by_interval_0(organization_id, t0=t0, t1=t1, timespan=timespan, interval=interval, version=version, operation_ids=operation_ids, source_ips=source_ips, admin_ids=admin_ids, user_agent=user_agent)
        print("The response of MonitorApi->get_organization_api_requests_overview_response_codes_by_interval_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_api_requests_overview_response_codes_by_interval_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. If interval is provided, the timespan will be autocalculated. | [optional] 
 **interval** | **int**| The time interval in seconds for returned data. The valid intervals are: 120, 3600, 14400, 21600. The default is 21600. Interval is calculated if time params are provided. | [optional] 
 **version** | **int**| Filter by API version of the endpoint. Allowable values are: [0, 1] | [optional] 
 **operation_ids** | [**List[str]**](str.md)| Filter by operation ID of the endpoint | [optional] 
 **source_ips** | [**List[str]**](str.md)| Filter by source IP that made the API request | [optional] 
 **admin_ids** | [**List[str]**](str.md)| Filter by admin ID of user that made the API request | [optional] 
 **user_agent** | **str**| Filter by user agent string for API request. This will filter by a complete or partial match. | [optional] 

### Return type

[**List[GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner]**](GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner.md)

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

# **get_organization_appliance_security_events_0**
> List[object] get_organization_appliance_security_events_0(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)

List the security events for an organization

List the security events for an organization

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 365 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    sort_order = 'sort_order_example' # str | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. (optional)

    try:
        # List the security events for an organization
        api_response = api_instance.get_organization_appliance_security_events_0(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)
        print("The response of MonitorApi->get_organization_appliance_security_events_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_appliance_security_events_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sort_order** | **str**| Sorted order of security events based on event detection time. Order options are &#39;ascending&#39; or &#39;descending&#39;. Default is ascending order. | [optional] 

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

# **get_organization_appliance_uplink_statuses_0**
> List[object] get_organization_appliance_uplink_statuses_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)

List the uplink status of every Meraki MX and Z series appliances in the organization

List the uplink status of every Meraki MX and Z series appliances in the organization

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of network IDs. The returned devices will be filtered to only include these networks. (optional)
    serials = ['serials_example'] # List[str] | A list of serial numbers. The returned devices will be filtered to only include these serials. (optional)
    iccids = ['iccids_example'] # List[str] | A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. (optional)

    try:
        # List the uplink status of every Meraki MX and Z series appliances in the organization
        api_response = api_instance.get_organization_appliance_uplink_statuses_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)
        print("The response of MonitorApi->get_organization_appliance_uplink_statuses_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_appliance_uplink_statuses_0: %s\n" % e)
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

# **get_organization_appliance_vpn_stats_0**
> List[object] get_organization_appliance_vpn_stats_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, t0=t0, t1=t1, timespan=timespan)

Show VPN history stat for networks in an organization

Show VPN history stat for networks in an organization

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456 (optional)
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Show VPN history stat for networks in an organization
        api_response = api_instance.get_organization_appliance_vpn_stats_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_organization_appliance_vpn_stats_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_appliance_vpn_stats_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]&#x3D;N_12345678&amp;networkIds[]&#x3D;L_3456 | [optional] 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

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

# **get_organization_appliance_vpn_statuses_0**
> List[object] get_organization_appliance_vpn_statuses_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids)

Show VPN status for networks in an organization

Show VPN status for networks in an organization

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456 (optional)

    try:
        # Show VPN status for networks in an organization
        api_response = api_instance.get_organization_appliance_vpn_statuses_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids)
        print("The response of MonitorApi->get_organization_appliance_vpn_statuses_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_appliance_vpn_statuses_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]&#x3D;N_12345678&amp;networkIds[]&#x3D;L_3456 | [optional] 

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

# **get_organization_cellular_gateway_uplink_statuses_0**
> List[GetOrganizationCellularGatewayUplinkStatuses200ResponseInner] get_organization_cellular_gateway_uplink_statuses_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of network IDs. The returned devices will be filtered to only include these networks. (optional)
    serials = ['serials_example'] # List[str] | A list of serial numbers. The returned devices will be filtered to only include these serials. (optional)
    iccids = ['iccids_example'] # List[str] | A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. (optional)

    try:
        # List the uplink status of every Meraki MG cellular gateway in the organization
        api_response = api_instance.get_organization_cellular_gateway_uplink_statuses_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)
        print("The response of MonitorApi->get_organization_cellular_gateway_uplink_statuses_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_cellular_gateway_uplink_statuses_0: %s\n" % e)
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

# **get_organization_clients_bandwidth_usage_history_0**
> List[GetOrganizationClientsBandwidthUsageHistory200ResponseInner] get_organization_clients_bandwidth_usage_history_0(organization_id, t0=t0, t1=t1, timespan=timespan)

Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_clients_bandwidth_usage_history200_response_inner import GetOrganizationClientsBandwidthUsageHistory200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
        api_response = api_instance.get_organization_clients_bandwidth_usage_history_0(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_organization_clients_bandwidth_usage_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_clients_bandwidth_usage_history_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationClientsBandwidthUsageHistory200ResponseInner]**](GetOrganizationClientsBandwidthUsageHistory200ResponseInner.md)

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

# **get_organization_clients_overview_0**
> GetOrganizationClientsOverview200Response get_organization_clients_overview_0(organization_id, t0=t0, t1=t1, timespan=timespan)

Return summary information around client data usage (in mb) across the given organization.

Return summary information around client data usage (in mb) across the given organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_clients_overview200_response import GetOrganizationClientsOverview200Response
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return summary information around client data usage (in mb) across the given organization.
        api_response = api_instance.get_organization_clients_overview_0(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_organization_clients_overview_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_clients_overview_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**GetOrganizationClientsOverview200Response**](GetOrganizationClientsOverview200Response.md)

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

# **get_organization_configuration_changes_0**
> List[object] get_organization_configuration_changes_0(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_id=network_id, admin_id=admin_id)

View the Change Log for your organization

View the Change Log for your organization

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 365 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_id = 'network_id_example' # str | Filters on the given network (optional)
    admin_id = 'admin_id_example' # str | Filters on the given Admin (optional)

    try:
        # View the Change Log for your organization
        api_response = api_instance.get_organization_configuration_changes_0(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_id=network_id, admin_id=admin_id)
        print("The response of MonitorApi->get_organization_configuration_changes_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_configuration_changes_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_id** | **str**| Filters on the given network | [optional] 
 **admin_id** | **str**| Filters on the given Admin | [optional] 

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

# **get_organization_devices_availabilities_0**
> List[GetOrganizationDevicesAvailabilities200ResponseInner] get_organization_devices_availabilities_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_organization_devices_availabilities_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)
        print("The response of MonitorApi->get_organization_devices_availabilities_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_devices_availabilities_0: %s\n" % e)
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

# **get_organization_devices_power_modules_statuses_by_device_0**
> List[GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner] get_organization_devices_power_modules_statuses_by_device_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_organization_devices_power_modules_statuses_by_device_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)
        print("The response of MonitorApi->get_organization_devices_power_modules_statuses_by_device_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_devices_power_modules_statuses_by_device_0: %s\n" % e)
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

# **get_organization_devices_statuses_0**
> GetOrganizationDevicesStatuses200Response get_organization_devices_statuses_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, statuses=statuses, product_types=product_types, models=models, tags=tags, tags_filter_type=tags_filter_type)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_organization_devices_statuses_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, statuses=statuses, product_types=product_types, models=models, tags=tags, tags_filter_type=tags_filter_type)
        print("The response of MonitorApi->get_organization_devices_statuses_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_devices_statuses_0: %s\n" % e)
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

# **get_organization_devices_statuses_overview_0**
> GetOrganizationDevicesStatusesOverview200Response get_organization_devices_statuses_overview_0(organization_id, product_types=product_types, network_ids=network_ids)

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    product_types = ['product_types_example'] # List[str] | An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. (optional)
    network_ids = ['network_ids_example'] # List[str] | An optional parameter to filter device statuses by network. (optional)

    try:
        # Return an overview of current device statuses
        api_response = api_instance.get_organization_devices_statuses_overview_0(organization_id, product_types=product_types, network_ids=network_ids)
        print("The response of MonitorApi->get_organization_devices_statuses_overview_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_devices_statuses_overview_0: %s\n" % e)
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

# **get_organization_devices_uplinks_addresses_by_device_0**
> List[GetOrganizationDevicesUplinksAddressesByDevice200ResponseInner] get_organization_devices_uplinks_addresses_by_device_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)

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
    api_instance = openapi_client.MonitorApi(api_client)
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
        api_response = api_instance.get_organization_devices_uplinks_addresses_by_device_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)
        print("The response of MonitorApi->get_organization_devices_uplinks_addresses_by_device_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_devices_uplinks_addresses_by_device_0: %s\n" % e)
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

# **get_organization_devices_uplinks_loss_and_latency_0**
> List[GetOrganizationDevicesUplinksLossAndLatency200ResponseInner] get_organization_devices_uplinks_loss_and_latency_0(organization_id, t0=t0, t1=t1, timespan=timespan, uplink=uplink, ip=ip)

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 60 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes. (optional)
    uplink = 'uplink_example' # str | Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. (optional)
    ip = 'ip_example' # str | Optional filter for a specific destination IP. Default will return all destination IPs. (optional)

    try:
        # Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
        api_response = api_instance.get_organization_devices_uplinks_loss_and_latency_0(organization_id, t0=t0, t1=t1, timespan=timespan, uplink=uplink, ip=ip)
        print("The response of MonitorApi->get_organization_devices_uplinks_loss_and_latency_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_devices_uplinks_loss_and_latency_0: %s\n" % e)
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

# **get_organization_licenses_overview_0**
> object get_organization_licenses_overview_0(organization_id)

Return an overview of the license state for an organization

Return an overview of the license state for an organization

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return an overview of the license state for an organization
        api_response = api_instance.get_organization_licenses_overview_0(organization_id)
        print("The response of MonitorApi->get_organization_licenses_overview_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_licenses_overview_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

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

# **get_organization_openapi_spec_0**
> object get_organization_openapi_spec_0(organization_id)

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
        api_response = api_instance.get_organization_openapi_spec_0(organization_id)
        print("The response of MonitorApi->get_organization_openapi_spec_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_openapi_spec_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

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

# **get_organization_sensor_readings_history_0**
> List[GetOrganizationSensorReadingsHistory200ResponseInner] get_organization_sensor_readings_history_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan, network_ids=network_ids, serials=serials, metrics=metrics)

Return all reported readings from sensors in a given timespan, sorted by timestamp

Return all reported readings from sensors in a given timespan, sorted by timestamp

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_sensor_readings_history200_response_inner import GetOrganizationSensorReadingsHistory200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days and 6 hours from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter readings by network. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter readings by sensor. (optional)
    metrics = ['metrics_example'] # List[str] | Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved. Allowed values are battery, button, door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water. (optional)

    try:
        # Return all reported readings from sensors in a given timespan, sorted by timestamp
        api_response = api_instance.get_organization_sensor_readings_history_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan, network_ids=network_ids, serials=serials, metrics=metrics)
        print("The response of MonitorApi->get_organization_sensor_readings_history_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_sensor_readings_history_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days and 6 hours from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter readings by network. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter readings by sensor. | [optional] 
 **metrics** | [**List[str]**](str.md)| Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved. Allowed values are battery, button, door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water. | [optional] 

### Return type

[**List[GetOrganizationSensorReadingsHistory200ResponseInner]**](GetOrganizationSensorReadingsHistory200ResponseInner.md)

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

# **get_organization_sensor_readings_latest_0**
> List[GetOrganizationSensorReadingsLatest200ResponseInner] get_organization_sensor_readings_latest_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, metrics=metrics)

Return the latest available reading for each metric from each sensor, sorted by sensor serial

Return the latest available reading for each metric from each sensor, sorted by sensor serial

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_sensor_readings_latest200_response_inner import GetOrganizationSensorReadingsLatest200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 100. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter readings by network. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter readings by sensor. (optional)
    metrics = ['metrics_example'] # List[str] | Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved. Allowed values are battery, button, door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water. (optional)

    try:
        # Return the latest available reading for each metric from each sensor, sorted by sensor serial
        api_response = api_instance.get_organization_sensor_readings_latest_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, metrics=metrics)
        print("The response of MonitorApi->get_organization_sensor_readings_latest_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_sensor_readings_latest_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 100. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter readings by network. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter readings by sensor. | [optional] 
 **metrics** | [**List[str]**](str.md)| Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved. Allowed values are battery, button, door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water. | [optional] 

### Return type

[**List[GetOrganizationSensorReadingsLatest200ResponseInner]**](GetOrganizationSensorReadingsLatest200ResponseInner.md)

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

# **get_organization_summary_top_appliances_by_utilization_0**
> List[GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner] get_organization_summary_top_appliances_by_utilization_0(organization_id, t0=t0, t1=t1, timespan=timespan)

Return the top 10 appliances sorted by utilization over given time range.

Return the top 10 appliances sorted by utilization over given time range.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_appliances_by_utilization200_response_inner import GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return the top 10 appliances sorted by utilization over given time range.
        api_response = api_instance.get_organization_summary_top_appliances_by_utilization_0(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_organization_summary_top_appliances_by_utilization_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_summary_top_appliances_by_utilization_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner]**](GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner.md)

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

# **get_organization_summary_top_clients_by_usage_0**
> List[GetOrganizationSummaryTopClientsByUsage200ResponseInner] get_organization_summary_top_clients_by_usage_0(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_clients_by_usage200_response_inner import GetOrganizationSummaryTopClientsByUsage200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
        api_response = api_instance.get_organization_summary_top_clients_by_usage_0(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_organization_summary_top_clients_by_usage_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_summary_top_clients_by_usage_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopClientsByUsage200ResponseInner]**](GetOrganizationSummaryTopClientsByUsage200ResponseInner.md)

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

# **get_organization_summary_top_clients_manufacturers_by_usage_0**
> List[GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner] get_organization_summary_top_clients_manufacturers_by_usage_0(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_clients_manufacturers_by_usage200_response_inner import GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
        api_response = api_instance.get_organization_summary_top_clients_manufacturers_by_usage_0(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_organization_summary_top_clients_manufacturers_by_usage_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_summary_top_clients_manufacturers_by_usage_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner]**](GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner.md)

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

# **get_organization_summary_top_devices_by_usage_0**
> List[GetOrganizationSummaryTopDevicesByUsage200ResponseInner] get_organization_summary_top_devices_by_usage_0(organization_id, t0=t0, t1=t1, timespan=timespan)

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 devices sorted by data usage over given time range
        api_response = api_instance.get_organization_summary_top_devices_by_usage_0(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_organization_summary_top_devices_by_usage_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_summary_top_devices_by_usage_0: %s\n" % e)
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

# **get_organization_summary_top_devices_models_by_usage_0**
> List[GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner] get_organization_summary_top_devices_models_by_usage_0(organization_id, t0=t0, t1=t1, timespan=timespan)

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 device models sorted by data usage over given time range
        api_response = api_instance.get_organization_summary_top_devices_models_by_usage_0(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_organization_summary_top_devices_models_by_usage_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_summary_top_devices_models_by_usage_0: %s\n" % e)
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

# **get_organization_summary_top_ssids_by_usage_0**
> List[GetOrganizationSummaryTopSsidsByUsage200ResponseInner] get_organization_summary_top_ssids_by_usage_0(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top 10 ssids by data usage over given time range

Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_ssids_by_usage200_response_inner import GetOrganizationSummaryTopSsidsByUsage200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 ssids by data usage over given time range
        api_response = api_instance.get_organization_summary_top_ssids_by_usage_0(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_organization_summary_top_ssids_by_usage_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_summary_top_ssids_by_usage_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopSsidsByUsage200ResponseInner]**](GetOrganizationSummaryTopSsidsByUsage200ResponseInner.md)

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

# **get_organization_summary_top_switches_by_energy_usage_0**
> List[GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner] get_organization_summary_top_switches_by_energy_usage_0(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top 10 switches by energy usage over given time range

Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_switches_by_energy_usage200_response_inner import GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 switches by energy usage over given time range
        api_response = api_instance.get_organization_summary_top_switches_by_energy_usage_0(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of MonitorApi->get_organization_summary_top_switches_by_energy_usage_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_summary_top_switches_by_energy_usage_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner]**](GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner.md)

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

# **get_organization_uplinks_statuses_0**
> List[GetOrganizationUplinksStatuses200ResponseInner] get_organization_uplinks_statuses_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)

List the uplink status of every Meraki MX, MG and Z series devices in the organization

List the uplink status of every Meraki MX, MG and Z series devices in the organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_uplinks_statuses200_response_inner import GetOrganizationUplinksStatuses200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of network IDs. The returned devices will be filtered to only include these networks. (optional)
    serials = ['serials_example'] # List[str] | A list of serial numbers. The returned devices will be filtered to only include these serials. (optional)
    iccids = ['iccids_example'] # List[str] | A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. (optional)

    try:
        # List the uplink status of every Meraki MX, MG and Z series devices in the organization
        api_response = api_instance.get_organization_uplinks_statuses_0(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)
        print("The response of MonitorApi->get_organization_uplinks_statuses_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_uplinks_statuses_0: %s\n" % e)
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

[**List[GetOrganizationUplinksStatuses200ResponseInner]**](GetOrganizationUplinksStatuses200ResponseInner.md)

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

# **get_organization_webhooks_alert_types_0**
> List[object] get_organization_webhooks_alert_types_0(organization_id, product_type=product_type)

Return a list of alert types to be used with managing webhook alerts

Return a list of alert types to be used with managing webhook alerts

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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    product_type = 'product_type_example' # str | Filter sample alerts to a specific product type (optional)

    try:
        # Return a list of alert types to be used with managing webhook alerts
        api_response = api_instance.get_organization_webhooks_alert_types_0(organization_id, product_type=product_type)
        print("The response of MonitorApi->get_organization_webhooks_alert_types_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_webhooks_alert_types_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **product_type** | **str**| Filter sample alerts to a specific product type | [optional] 

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

# **get_organization_webhooks_logs_0**
> List[GetOrganizationWebhooksLogs200ResponseInner] get_organization_webhooks_logs_0(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, url=url)

Return the log of webhook POSTs sent

Return the log of webhook POSTs sent

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_webhooks_logs200_response_inner import GetOrganizationWebhooksLogs200ResponseInner
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
    api_instance = openapi_client.MonitorApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 90 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    url = 'url_example' # str | The URL the webhook was sent to (optional)

    try:
        # Return the log of webhook POSTs sent
        api_response = api_instance.get_organization_webhooks_logs_0(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, url=url)
        print("The response of MonitorApi->get_organization_webhooks_logs_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitorApi->get_organization_webhooks_logs_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 90 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **url** | **str**| The URL the webhook was sent to | [optional] 

### Return type

[**List[GetOrganizationWebhooksLogs200ResponseInner]**](GetOrganizationWebhooksLogs200ResponseInner.md)

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


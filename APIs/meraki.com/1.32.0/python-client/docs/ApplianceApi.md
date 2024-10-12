# openapi_client.ApplianceApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_device_appliance_vmx_authentication_token**](ApplianceApi.md#create_device_appliance_vmx_authentication_token) | **POST** /devices/{serial}/appliance/vmx/authenticationToken | Generate a new vMX authentication token
[**create_network_appliance_prefixes_delegated_static**](ApplianceApi.md#create_network_appliance_prefixes_delegated_static) | **POST** /networks/{networkId}/appliance/prefixes/delegated/statics | Add a static delegated prefix from a network
[**create_network_appliance_static_route**](ApplianceApi.md#create_network_appliance_static_route) | **POST** /networks/{networkId}/appliance/staticRoutes | Add a static route for an MX or teleworker network
[**create_network_appliance_traffic_shaping_custom_performance_class**](ApplianceApi.md#create_network_appliance_traffic_shaping_custom_performance_class) | **POST** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses | Add a custom performance class for an MX network
[**create_network_appliance_vlan**](ApplianceApi.md#create_network_appliance_vlan) | **POST** /networks/{networkId}/appliance/vlans | Add a VLAN
[**delete_network_appliance_prefixes_delegated_static**](ApplianceApi.md#delete_network_appliance_prefixes_delegated_static) | **DELETE** /networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId} | Delete a static delegated prefix from a network
[**delete_network_appliance_static_route**](ApplianceApi.md#delete_network_appliance_static_route) | **DELETE** /networks/{networkId}/appliance/staticRoutes/{staticRouteId} | Delete a static route from an MX or teleworker network
[**delete_network_appliance_traffic_shaping_custom_performance_class**](ApplianceApi.md#delete_network_appliance_traffic_shaping_custom_performance_class) | **DELETE** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Delete a custom performance class from an MX network
[**delete_network_appliance_vlan**](ApplianceApi.md#delete_network_appliance_vlan) | **DELETE** /networks/{networkId}/appliance/vlans/{vlanId} | Delete a VLAN from a network
[**get_device_appliance_dhcp_subnets**](ApplianceApi.md#get_device_appliance_dhcp_subnets) | **GET** /devices/{serial}/appliance/dhcp/subnets | Return the DHCP subnet information for an appliance
[**get_device_appliance_performance**](ApplianceApi.md#get_device_appliance_performance) | **GET** /devices/{serial}/appliance/performance | Return the performance score for a single MX
[**get_device_appliance_prefixes_delegated**](ApplianceApi.md#get_device_appliance_prefixes_delegated) | **GET** /devices/{serial}/appliance/prefixes/delegated | Return current delegated IPv6 prefixes on an appliance.
[**get_device_appliance_prefixes_delegated_vlan_assignments**](ApplianceApi.md#get_device_appliance_prefixes_delegated_vlan_assignments) | **GET** /devices/{serial}/appliance/prefixes/delegated/vlanAssignments | Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
[**get_device_appliance_uplinks_settings**](ApplianceApi.md#get_device_appliance_uplinks_settings) | **GET** /devices/{serial}/appliance/uplinks/settings | Return the uplink settings for an MX appliance
[**get_network_appliance_client_security_events**](ApplianceApi.md#get_network_appliance_client_security_events) | **GET** /networks/{networkId}/appliance/clients/{clientId}/security/events | List the security events for a client
[**get_network_appliance_connectivity_monitoring_destinations**](ApplianceApi.md#get_network_appliance_connectivity_monitoring_destinations) | **GET** /networks/{networkId}/appliance/connectivityMonitoringDestinations | Return the connectivity testing destinations for an MX network
[**get_network_appliance_content_filtering**](ApplianceApi.md#get_network_appliance_content_filtering) | **GET** /networks/{networkId}/appliance/contentFiltering | Return the content filtering settings for an MX network
[**get_network_appliance_content_filtering_categories**](ApplianceApi.md#get_network_appliance_content_filtering_categories) | **GET** /networks/{networkId}/appliance/contentFiltering/categories | List all available content filtering categories for an MX network
[**get_network_appliance_firewall_cellular_firewall_rules**](ApplianceApi.md#get_network_appliance_firewall_cellular_firewall_rules) | **GET** /networks/{networkId}/appliance/firewall/cellularFirewallRules | Return the cellular firewall rules for an MX network
[**get_network_appliance_firewall_firewalled_service**](ApplianceApi.md#get_network_appliance_firewall_firewalled_service) | **GET** /networks/{networkId}/appliance/firewall/firewalledServices/{service} | Return the accessibility settings of the given service (&#39;ICMP&#39;, &#39;web&#39;, or &#39;SNMP&#39;)
[**get_network_appliance_firewall_firewalled_services**](ApplianceApi.md#get_network_appliance_firewall_firewalled_services) | **GET** /networks/{networkId}/appliance/firewall/firewalledServices | List the appliance services and their accessibility rules
[**get_network_appliance_firewall_inbound_cellular_firewall_rules**](ApplianceApi.md#get_network_appliance_firewall_inbound_cellular_firewall_rules) | **GET** /networks/{networkId}/appliance/firewall/inboundCellularFirewallRules | Return the inbound cellular firewall rules for an MX network
[**get_network_appliance_firewall_inbound_firewall_rules**](ApplianceApi.md#get_network_appliance_firewall_inbound_firewall_rules) | **GET** /networks/{networkId}/appliance/firewall/inboundFirewallRules | Return the inbound firewall rules for an MX network
[**get_network_appliance_firewall_l3_firewall_rules**](ApplianceApi.md#get_network_appliance_firewall_l3_firewall_rules) | **GET** /networks/{networkId}/appliance/firewall/l3FirewallRules | Return the L3 firewall rules for an MX network
[**get_network_appliance_firewall_l7_firewall_rules**](ApplianceApi.md#get_network_appliance_firewall_l7_firewall_rules) | **GET** /networks/{networkId}/appliance/firewall/l7FirewallRules | List the MX L7 firewall rules for an MX network
[**get_network_appliance_firewall_l7_firewall_rules_application_categories**](ApplianceApi.md#get_network_appliance_firewall_l7_firewall_rules_application_categories) | **GET** /networks/{networkId}/appliance/firewall/l7FirewallRules/applicationCategories | Return the L7 firewall application categories and their associated applications for an MX network
[**get_network_appliance_firewall_one_to_many_nat_rules**](ApplianceApi.md#get_network_appliance_firewall_one_to_many_nat_rules) | **GET** /networks/{networkId}/appliance/firewall/oneToManyNatRules | Return the 1:Many NAT mapping rules for an MX network
[**get_network_appliance_firewall_one_to_one_nat_rules**](ApplianceApi.md#get_network_appliance_firewall_one_to_one_nat_rules) | **GET** /networks/{networkId}/appliance/firewall/oneToOneNatRules | Return the 1:1 NAT mapping rules for an MX network
[**get_network_appliance_firewall_port_forwarding_rules**](ApplianceApi.md#get_network_appliance_firewall_port_forwarding_rules) | **GET** /networks/{networkId}/appliance/firewall/portForwardingRules | Return the port forwarding rules for an MX network
[**get_network_appliance_firewall_settings**](ApplianceApi.md#get_network_appliance_firewall_settings) | **GET** /networks/{networkId}/appliance/firewall/settings | Return the firewall settings for this network
[**get_network_appliance_port**](ApplianceApi.md#get_network_appliance_port) | **GET** /networks/{networkId}/appliance/ports/{portId} | Return per-port VLAN settings for a single MX port.
[**get_network_appliance_ports**](ApplianceApi.md#get_network_appliance_ports) | **GET** /networks/{networkId}/appliance/ports | List per-port VLAN settings for all ports of a MX.
[**get_network_appliance_prefixes_delegated_static**](ApplianceApi.md#get_network_appliance_prefixes_delegated_static) | **GET** /networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId} | Return a static delegated prefix from a network
[**get_network_appliance_prefixes_delegated_statics**](ApplianceApi.md#get_network_appliance_prefixes_delegated_statics) | **GET** /networks/{networkId}/appliance/prefixes/delegated/statics | List static delegated prefixes for a network
[**get_network_appliance_security_events**](ApplianceApi.md#get_network_appliance_security_events) | **GET** /networks/{networkId}/appliance/security/events | List the security events for a network
[**get_network_appliance_security_intrusion**](ApplianceApi.md#get_network_appliance_security_intrusion) | **GET** /networks/{networkId}/appliance/security/intrusion | Returns all supported intrusion settings for an MX network
[**get_network_appliance_security_malware**](ApplianceApi.md#get_network_appliance_security_malware) | **GET** /networks/{networkId}/appliance/security/malware | Returns all supported malware settings for an MX network
[**get_network_appliance_settings**](ApplianceApi.md#get_network_appliance_settings) | **GET** /networks/{networkId}/appliance/settings | Return the appliance settings for a network
[**get_network_appliance_single_lan**](ApplianceApi.md#get_network_appliance_single_lan) | **GET** /networks/{networkId}/appliance/singleLan | Return single LAN configuration
[**get_network_appliance_ssid**](ApplianceApi.md#get_network_appliance_ssid) | **GET** /networks/{networkId}/appliance/ssids/{number} | Return a single MX SSID
[**get_network_appliance_ssids**](ApplianceApi.md#get_network_appliance_ssids) | **GET** /networks/{networkId}/appliance/ssids | List the MX SSIDs in a network
[**get_network_appliance_static_route**](ApplianceApi.md#get_network_appliance_static_route) | **GET** /networks/{networkId}/appliance/staticRoutes/{staticRouteId} | Return a static route for an MX or teleworker network
[**get_network_appliance_static_routes**](ApplianceApi.md#get_network_appliance_static_routes) | **GET** /networks/{networkId}/appliance/staticRoutes | List the static routes for an MX or teleworker network
[**get_network_appliance_traffic_shaping**](ApplianceApi.md#get_network_appliance_traffic_shaping) | **GET** /networks/{networkId}/appliance/trafficShaping | Display the traffic shaping settings for an MX network
[**get_network_appliance_traffic_shaping_custom_performance_class**](ApplianceApi.md#get_network_appliance_traffic_shaping_custom_performance_class) | **GET** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Return a custom performance class for an MX network
[**get_network_appliance_traffic_shaping_custom_performance_classes**](ApplianceApi.md#get_network_appliance_traffic_shaping_custom_performance_classes) | **GET** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses | List all custom performance classes for an MX network
[**get_network_appliance_traffic_shaping_rules**](ApplianceApi.md#get_network_appliance_traffic_shaping_rules) | **GET** /networks/{networkId}/appliance/trafficShaping/rules | Display the traffic shaping settings rules for an MX network
[**get_network_appliance_traffic_shaping_uplink_bandwidth**](ApplianceApi.md#get_network_appliance_traffic_shaping_uplink_bandwidth) | **GET** /networks/{networkId}/appliance/trafficShaping/uplinkBandwidth | Returns the uplink bandwidth limits for your MX network
[**get_network_appliance_traffic_shaping_uplink_selection**](ApplianceApi.md#get_network_appliance_traffic_shaping_uplink_selection) | **GET** /networks/{networkId}/appliance/trafficShaping/uplinkSelection | Show uplink selection settings for an MX network
[**get_network_appliance_uplinks_usage_history**](ApplianceApi.md#get_network_appliance_uplinks_usage_history) | **GET** /networks/{networkId}/appliance/uplinks/usageHistory | Get the sent and received bytes for each uplink of a network.
[**get_network_appliance_vlan**](ApplianceApi.md#get_network_appliance_vlan) | **GET** /networks/{networkId}/appliance/vlans/{vlanId} | Return a VLAN
[**get_network_appliance_vlans**](ApplianceApi.md#get_network_appliance_vlans) | **GET** /networks/{networkId}/appliance/vlans | List the VLANs for an MX network
[**get_network_appliance_vlans_settings**](ApplianceApi.md#get_network_appliance_vlans_settings) | **GET** /networks/{networkId}/appliance/vlans/settings | Returns the enabled status of VLANs for the network
[**get_network_appliance_vpn_bgp**](ApplianceApi.md#get_network_appliance_vpn_bgp) | **GET** /networks/{networkId}/appliance/vpn/bgp | Return a Hub BGP Configuration
[**get_network_appliance_vpn_site_to_site_vpn**](ApplianceApi.md#get_network_appliance_vpn_site_to_site_vpn) | **GET** /networks/{networkId}/appliance/vpn/siteToSiteVpn | Return the site-to-site VPN settings of a network
[**get_network_appliance_warm_spare**](ApplianceApi.md#get_network_appliance_warm_spare) | **GET** /networks/{networkId}/appliance/warmSpare | Return MX warm spare settings
[**get_organization_appliance_security_events**](ApplianceApi.md#get_organization_appliance_security_events) | **GET** /organizations/{organizationId}/appliance/security/events | List the security events for an organization
[**get_organization_appliance_security_intrusion**](ApplianceApi.md#get_organization_appliance_security_intrusion) | **GET** /organizations/{organizationId}/appliance/security/intrusion | Returns all supported intrusion settings for an organization
[**get_organization_appliance_uplink_statuses**](ApplianceApi.md#get_organization_appliance_uplink_statuses) | **GET** /organizations/{organizationId}/appliance/uplink/statuses | List the uplink status of every Meraki MX and Z series appliances in the organization
[**get_organization_appliance_vpn_stats**](ApplianceApi.md#get_organization_appliance_vpn_stats) | **GET** /organizations/{organizationId}/appliance/vpn/stats | Show VPN history stat for networks in an organization
[**get_organization_appliance_vpn_statuses**](ApplianceApi.md#get_organization_appliance_vpn_statuses) | **GET** /organizations/{organizationId}/appliance/vpn/statuses | Show VPN status for networks in an organization
[**get_organization_appliance_vpn_third_party_vpn_peers**](ApplianceApi.md#get_organization_appliance_vpn_third_party_vpn_peers) | **GET** /organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers | Return the third party VPN peers for an organization
[**get_organization_appliance_vpn_vpn_firewall_rules**](ApplianceApi.md#get_organization_appliance_vpn_vpn_firewall_rules) | **GET** /organizations/{organizationId}/appliance/vpn/vpnFirewallRules | Return the firewall rules for an organization&#39;s site-to-site VPN
[**swap_network_appliance_warm_spare**](ApplianceApi.md#swap_network_appliance_warm_spare) | **POST** /networks/{networkId}/appliance/warmSpare/swap | Swap MX primary and warm spare appliances
[**update_device_appliance_uplinks_settings**](ApplianceApi.md#update_device_appliance_uplinks_settings) | **PUT** /devices/{serial}/appliance/uplinks/settings | Update the uplink settings for an MX appliance
[**update_network_appliance_connectivity_monitoring_destinations**](ApplianceApi.md#update_network_appliance_connectivity_monitoring_destinations) | **PUT** /networks/{networkId}/appliance/connectivityMonitoringDestinations | Update the connectivity testing destinations for an MX network
[**update_network_appliance_content_filtering**](ApplianceApi.md#update_network_appliance_content_filtering) | **PUT** /networks/{networkId}/appliance/contentFiltering | Update the content filtering settings for an MX network
[**update_network_appliance_firewall_cellular_firewall_rules**](ApplianceApi.md#update_network_appliance_firewall_cellular_firewall_rules) | **PUT** /networks/{networkId}/appliance/firewall/cellularFirewallRules | Update the cellular firewall rules of an MX network
[**update_network_appliance_firewall_firewalled_service**](ApplianceApi.md#update_network_appliance_firewall_firewalled_service) | **PUT** /networks/{networkId}/appliance/firewall/firewalledServices/{service} | Updates the accessibility settings for the given service (&#39;ICMP&#39;, &#39;web&#39;, or &#39;SNMP&#39;)
[**update_network_appliance_firewall_inbound_cellular_firewall_rules**](ApplianceApi.md#update_network_appliance_firewall_inbound_cellular_firewall_rules) | **PUT** /networks/{networkId}/appliance/firewall/inboundCellularFirewallRules | Update the inbound cellular firewall rules of an MX network
[**update_network_appliance_firewall_inbound_firewall_rules**](ApplianceApi.md#update_network_appliance_firewall_inbound_firewall_rules) | **PUT** /networks/{networkId}/appliance/firewall/inboundFirewallRules | Update the inbound firewall rules of an MX network
[**update_network_appliance_firewall_l3_firewall_rules**](ApplianceApi.md#update_network_appliance_firewall_l3_firewall_rules) | **PUT** /networks/{networkId}/appliance/firewall/l3FirewallRules | Update the L3 firewall rules of an MX network
[**update_network_appliance_firewall_l7_firewall_rules**](ApplianceApi.md#update_network_appliance_firewall_l7_firewall_rules) | **PUT** /networks/{networkId}/appliance/firewall/l7FirewallRules | Update the MX L7 firewall rules for an MX network
[**update_network_appliance_firewall_one_to_many_nat_rules**](ApplianceApi.md#update_network_appliance_firewall_one_to_many_nat_rules) | **PUT** /networks/{networkId}/appliance/firewall/oneToManyNatRules | Set the 1:Many NAT mapping rules for an MX network
[**update_network_appliance_firewall_one_to_one_nat_rules**](ApplianceApi.md#update_network_appliance_firewall_one_to_one_nat_rules) | **PUT** /networks/{networkId}/appliance/firewall/oneToOneNatRules | Set the 1:1 NAT mapping rules for an MX network
[**update_network_appliance_firewall_port_forwarding_rules**](ApplianceApi.md#update_network_appliance_firewall_port_forwarding_rules) | **PUT** /networks/{networkId}/appliance/firewall/portForwardingRules | Update the port forwarding rules for an MX network
[**update_network_appliance_firewall_settings**](ApplianceApi.md#update_network_appliance_firewall_settings) | **PUT** /networks/{networkId}/appliance/firewall/settings | Update the firewall settings for this network
[**update_network_appliance_port**](ApplianceApi.md#update_network_appliance_port) | **PUT** /networks/{networkId}/appliance/ports/{portId} | Update the per-port VLAN settings for a single MX port.
[**update_network_appliance_prefixes_delegated_static**](ApplianceApi.md#update_network_appliance_prefixes_delegated_static) | **PUT** /networks/{networkId}/appliance/prefixes/delegated/statics/{staticDelegatedPrefixId} | Update a static delegated prefix from a network
[**update_network_appliance_security_intrusion**](ApplianceApi.md#update_network_appliance_security_intrusion) | **PUT** /networks/{networkId}/appliance/security/intrusion | Set the supported intrusion settings for an MX network
[**update_network_appliance_security_malware**](ApplianceApi.md#update_network_appliance_security_malware) | **PUT** /networks/{networkId}/appliance/security/malware | Set the supported malware settings for an MX network
[**update_network_appliance_settings**](ApplianceApi.md#update_network_appliance_settings) | **PUT** /networks/{networkId}/appliance/settings | Update the appliance settings for a network
[**update_network_appliance_single_lan**](ApplianceApi.md#update_network_appliance_single_lan) | **PUT** /networks/{networkId}/appliance/singleLan | Update single LAN configuration
[**update_network_appliance_ssid**](ApplianceApi.md#update_network_appliance_ssid) | **PUT** /networks/{networkId}/appliance/ssids/{number} | Update the attributes of an MX SSID
[**update_network_appliance_static_route**](ApplianceApi.md#update_network_appliance_static_route) | **PUT** /networks/{networkId}/appliance/staticRoutes/{staticRouteId} | Update a static route for an MX or teleworker network
[**update_network_appliance_traffic_shaping**](ApplianceApi.md#update_network_appliance_traffic_shaping) | **PUT** /networks/{networkId}/appliance/trafficShaping | Update the traffic shaping settings for an MX network
[**update_network_appliance_traffic_shaping_custom_performance_class**](ApplianceApi.md#update_network_appliance_traffic_shaping_custom_performance_class) | **PUT** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Update a custom performance class for an MX network
[**update_network_appliance_traffic_shaping_rules**](ApplianceApi.md#update_network_appliance_traffic_shaping_rules) | **PUT** /networks/{networkId}/appliance/trafficShaping/rules | Update the traffic shaping settings rules for an MX network
[**update_network_appliance_traffic_shaping_uplink_bandwidth**](ApplianceApi.md#update_network_appliance_traffic_shaping_uplink_bandwidth) | **PUT** /networks/{networkId}/appliance/trafficShaping/uplinkBandwidth | Updates the uplink bandwidth settings for your MX network.
[**update_network_appliance_traffic_shaping_uplink_selection**](ApplianceApi.md#update_network_appliance_traffic_shaping_uplink_selection) | **PUT** /networks/{networkId}/appliance/trafficShaping/uplinkSelection | Update uplink selection settings for an MX network
[**update_network_appliance_vlan**](ApplianceApi.md#update_network_appliance_vlan) | **PUT** /networks/{networkId}/appliance/vlans/{vlanId} | Update a VLAN
[**update_network_appliance_vlans_settings**](ApplianceApi.md#update_network_appliance_vlans_settings) | **PUT** /networks/{networkId}/appliance/vlans/settings | Enable/Disable VLANs for the given network
[**update_network_appliance_vpn_bgp**](ApplianceApi.md#update_network_appliance_vpn_bgp) | **PUT** /networks/{networkId}/appliance/vpn/bgp | Update a Hub BGP Configuration
[**update_network_appliance_vpn_site_to_site_vpn**](ApplianceApi.md#update_network_appliance_vpn_site_to_site_vpn) | **PUT** /networks/{networkId}/appliance/vpn/siteToSiteVpn | Update the site-to-site VPN settings of a network
[**update_network_appliance_warm_spare**](ApplianceApi.md#update_network_appliance_warm_spare) | **PUT** /networks/{networkId}/appliance/warmSpare | Update MX warm spare settings
[**update_organization_appliance_security_intrusion**](ApplianceApi.md#update_organization_appliance_security_intrusion) | **PUT** /organizations/{organizationId}/appliance/security/intrusion | Sets supported intrusion settings for an organization
[**update_organization_appliance_vpn_third_party_vpn_peers**](ApplianceApi.md#update_organization_appliance_vpn_third_party_vpn_peers) | **PUT** /organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers | Update the third party VPN peers for an organization
[**update_organization_appliance_vpn_vpn_firewall_rules**](ApplianceApi.md#update_organization_appliance_vpn_vpn_firewall_rules) | **PUT** /organizations/{organizationId}/appliance/vpn/vpnFirewallRules | Update the firewall rules of an organization&#39;s site-to-site VPN


# **create_device_appliance_vmx_authentication_token**
> CreateDeviceApplianceVmxAuthenticationToken201Response create_device_appliance_vmx_authentication_token(serial)

Generate a new vMX authentication token

Generate a new vMX authentication token

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_device_appliance_vmx_authentication_token201_response import CreateDeviceApplianceVmxAuthenticationToken201Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Generate a new vMX authentication token
        api_response = api_instance.create_device_appliance_vmx_authentication_token(serial)
        print("The response of ApplianceApi->create_device_appliance_vmx_authentication_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->create_device_appliance_vmx_authentication_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

[**CreateDeviceApplianceVmxAuthenticationToken201Response**](CreateDeviceApplianceVmxAuthenticationToken201Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_appliance_prefixes_delegated_static**
> object create_network_appliance_prefixes_delegated_static(network_id, create_network_appliance_prefixes_delegated_static_request)

Add a static delegated prefix from a network

Add a static delegated prefix from a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_appliance_prefixes_delegated_static_request import CreateNetworkAppliancePrefixesDelegatedStaticRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_appliance_prefixes_delegated_static_request = openapi_client.CreateNetworkAppliancePrefixesDelegatedStaticRequest() # CreateNetworkAppliancePrefixesDelegatedStaticRequest | 

    try:
        # Add a static delegated prefix from a network
        api_response = api_instance.create_network_appliance_prefixes_delegated_static(network_id, create_network_appliance_prefixes_delegated_static_request)
        print("The response of ApplianceApi->create_network_appliance_prefixes_delegated_static:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->create_network_appliance_prefixes_delegated_static: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_appliance_prefixes_delegated_static_request** | [**CreateNetworkAppliancePrefixesDelegatedStaticRequest**](CreateNetworkAppliancePrefixesDelegatedStaticRequest.md)|  | 

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

# **create_network_appliance_static_route**
> object create_network_appliance_static_route(network_id, create_network_appliance_static_route_request)

Add a static route for an MX or teleworker network

Add a static route for an MX or teleworker network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_appliance_static_route_request import CreateNetworkApplianceStaticRouteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_appliance_static_route_request = openapi_client.CreateNetworkApplianceStaticRouteRequest() # CreateNetworkApplianceStaticRouteRequest | 

    try:
        # Add a static route for an MX or teleworker network
        api_response = api_instance.create_network_appliance_static_route(network_id, create_network_appliance_static_route_request)
        print("The response of ApplianceApi->create_network_appliance_static_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->create_network_appliance_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_appliance_static_route_request** | [**CreateNetworkApplianceStaticRouteRequest**](CreateNetworkApplianceStaticRouteRequest.md)|  | 

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

# **create_network_appliance_traffic_shaping_custom_performance_class**
> object create_network_appliance_traffic_shaping_custom_performance_class(network_id, create_network_appliance_traffic_shaping_custom_performance_class_request)

Add a custom performance class for an MX network

Add a custom performance class for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_appliance_traffic_shaping_custom_performance_class_request import CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_appliance_traffic_shaping_custom_performance_class_request = openapi_client.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest() # CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest | 

    try:
        # Add a custom performance class for an MX network
        api_response = api_instance.create_network_appliance_traffic_shaping_custom_performance_class(network_id, create_network_appliance_traffic_shaping_custom_performance_class_request)
        print("The response of ApplianceApi->create_network_appliance_traffic_shaping_custom_performance_class:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->create_network_appliance_traffic_shaping_custom_performance_class: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_appliance_traffic_shaping_custom_performance_class_request** | [**CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest**](CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.md)|  | 

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

# **create_network_appliance_vlan**
> CreateNetworkApplianceVlan201Response create_network_appliance_vlan(network_id, create_network_appliance_vlan_request)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_appliance_vlan_request = openapi_client.CreateNetworkApplianceVlanRequest() # CreateNetworkApplianceVlanRequest | 

    try:
        # Add a VLAN
        api_response = api_instance.create_network_appliance_vlan(network_id, create_network_appliance_vlan_request)
        print("The response of ApplianceApi->create_network_appliance_vlan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->create_network_appliance_vlan: %s\n" % e)
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

# **delete_network_appliance_prefixes_delegated_static**
> delete_network_appliance_prefixes_delegated_static(network_id, static_delegated_prefix_id)

Delete a static delegated prefix from a network

Delete a static delegated prefix from a network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    static_delegated_prefix_id = 'static_delegated_prefix_id_example' # str | 

    try:
        # Delete a static delegated prefix from a network
        api_instance.delete_network_appliance_prefixes_delegated_static(network_id, static_delegated_prefix_id)
    except Exception as e:
        print("Exception when calling ApplianceApi->delete_network_appliance_prefixes_delegated_static: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **static_delegated_prefix_id** | **str**|  | 

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

# **delete_network_appliance_static_route**
> delete_network_appliance_static_route(network_id, static_route_id)

Delete a static route from an MX or teleworker network

Delete a static route from an MX or teleworker network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Delete a static route from an MX or teleworker network
        api_instance.delete_network_appliance_static_route(network_id, static_route_id)
    except Exception as e:
        print("Exception when calling ApplianceApi->delete_network_appliance_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **static_route_id** | **str**|  | 

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

# **delete_network_appliance_traffic_shaping_custom_performance_class**
> delete_network_appliance_traffic_shaping_custom_performance_class(network_id, custom_performance_class_id)

Delete a custom performance class from an MX network

Delete a custom performance class from an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    custom_performance_class_id = 'custom_performance_class_id_example' # str | 

    try:
        # Delete a custom performance class from an MX network
        api_instance.delete_network_appliance_traffic_shaping_custom_performance_class(network_id, custom_performance_class_id)
    except Exception as e:
        print("Exception when calling ApplianceApi->delete_network_appliance_traffic_shaping_custom_performance_class: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **custom_performance_class_id** | **str**|  | 

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

# **delete_network_appliance_vlan**
> delete_network_appliance_vlan(network_id, vlan_id)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    vlan_id = 'vlan_id_example' # str | 

    try:
        # Delete a VLAN from a network
        api_instance.delete_network_appliance_vlan(network_id, vlan_id)
    except Exception as e:
        print("Exception when calling ApplianceApi->delete_network_appliance_vlan: %s\n" % e)
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

# **get_device_appliance_dhcp_subnets**
> List[object] get_device_appliance_dhcp_subnets(serial)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the DHCP subnet information for an appliance
        api_response = api_instance.get_device_appliance_dhcp_subnets(serial)
        print("The response of ApplianceApi->get_device_appliance_dhcp_subnets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_device_appliance_dhcp_subnets: %s\n" % e)
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

# **get_device_appliance_performance**
> object get_device_appliance_performance(serial)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the performance score for a single MX
        api_response = api_instance.get_device_appliance_performance(serial)
        print("The response of ApplianceApi->get_device_appliance_performance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_device_appliance_performance: %s\n" % e)
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

# **get_device_appliance_prefixes_delegated**
> List[object] get_device_appliance_prefixes_delegated(serial)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return current delegated IPv6 prefixes on an appliance.
        api_response = api_instance.get_device_appliance_prefixes_delegated(serial)
        print("The response of ApplianceApi->get_device_appliance_prefixes_delegated:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_device_appliance_prefixes_delegated: %s\n" % e)
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

# **get_device_appliance_prefixes_delegated_vlan_assignments**
> List[object] get_device_appliance_prefixes_delegated_vlan_assignments(serial)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
        api_response = api_instance.get_device_appliance_prefixes_delegated_vlan_assignments(serial)
        print("The response of ApplianceApi->get_device_appliance_prefixes_delegated_vlan_assignments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_device_appliance_prefixes_delegated_vlan_assignments: %s\n" % e)
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

# **get_device_appliance_uplinks_settings**
> GetDeviceApplianceUplinksSettings200Response get_device_appliance_uplinks_settings(serial)

Return the uplink settings for an MX appliance

Return the uplink settings for an MX appliance

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_appliance_uplinks_settings200_response import GetDeviceApplianceUplinksSettings200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return the uplink settings for an MX appliance
        api_response = api_instance.get_device_appliance_uplinks_settings(serial)
        print("The response of ApplianceApi->get_device_appliance_uplinks_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_device_appliance_uplinks_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

[**GetDeviceApplianceUplinksSettings200Response**](GetDeviceApplianceUplinksSettings200Response.md)

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

# **get_network_appliance_client_security_events**
> List[object] get_network_appliance_client_security_events(network_id, client_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)

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
    api_instance = openapi_client.ApplianceApi(api_client)
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
        api_response = api_instance.get_network_appliance_client_security_events(network_id, client_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)
        print("The response of ApplianceApi->get_network_appliance_client_security_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_client_security_events: %s\n" % e)
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

# **get_network_appliance_connectivity_monitoring_destinations**
> object get_network_appliance_connectivity_monitoring_destinations(network_id)

Return the connectivity testing destinations for an MX network

Return the connectivity testing destinations for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the connectivity testing destinations for an MX network
        api_response = api_instance.get_network_appliance_connectivity_monitoring_destinations(network_id)
        print("The response of ApplianceApi->get_network_appliance_connectivity_monitoring_destinations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_connectivity_monitoring_destinations: %s\n" % e)
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

# **get_network_appliance_content_filtering**
> object get_network_appliance_content_filtering(network_id)

Return the content filtering settings for an MX network

Return the content filtering settings for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the content filtering settings for an MX network
        api_response = api_instance.get_network_appliance_content_filtering(network_id)
        print("The response of ApplianceApi->get_network_appliance_content_filtering:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_content_filtering: %s\n" % e)
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

# **get_network_appliance_content_filtering_categories**
> object get_network_appliance_content_filtering_categories(network_id)

List all available content filtering categories for an MX network

List all available content filtering categories for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List all available content filtering categories for an MX network
        api_response = api_instance.get_network_appliance_content_filtering_categories(network_id)
        print("The response of ApplianceApi->get_network_appliance_content_filtering_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_content_filtering_categories: %s\n" % e)
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

# **get_network_appliance_firewall_cellular_firewall_rules**
> object get_network_appliance_firewall_cellular_firewall_rules(network_id)

Return the cellular firewall rules for an MX network

Return the cellular firewall rules for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the cellular firewall rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_cellular_firewall_rules(network_id)
        print("The response of ApplianceApi->get_network_appliance_firewall_cellular_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_firewall_cellular_firewall_rules: %s\n" % e)
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

# **get_network_appliance_firewall_firewalled_service**
> object get_network_appliance_firewall_firewalled_service(network_id, service)

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    service = 'service_example' # str | 

    try:
        # Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
        api_response = api_instance.get_network_appliance_firewall_firewalled_service(network_id, service)
        print("The response of ApplianceApi->get_network_appliance_firewall_firewalled_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_firewall_firewalled_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **service** | **str**|  | 

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

# **get_network_appliance_firewall_firewalled_services**
> List[object] get_network_appliance_firewall_firewalled_services(network_id)

List the appliance services and their accessibility rules

List the appliance services and their accessibility rules

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the appliance services and their accessibility rules
        api_response = api_instance.get_network_appliance_firewall_firewalled_services(network_id)
        print("The response of ApplianceApi->get_network_appliance_firewall_firewalled_services:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_firewall_firewalled_services: %s\n" % e)
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

# **get_network_appliance_firewall_inbound_cellular_firewall_rules**
> List[object] get_network_appliance_firewall_inbound_cellular_firewall_rules(network_id)

Return the inbound cellular firewall rules for an MX network

Return the inbound cellular firewall rules for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the inbound cellular firewall rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_inbound_cellular_firewall_rules(network_id)
        print("The response of ApplianceApi->get_network_appliance_firewall_inbound_cellular_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_firewall_inbound_cellular_firewall_rules: %s\n" % e)
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

# **get_network_appliance_firewall_inbound_firewall_rules**
> object get_network_appliance_firewall_inbound_firewall_rules(network_id)

Return the inbound firewall rules for an MX network

Return the inbound firewall rules for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the inbound firewall rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_inbound_firewall_rules(network_id)
        print("The response of ApplianceApi->get_network_appliance_firewall_inbound_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_firewall_inbound_firewall_rules: %s\n" % e)
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

# **get_network_appliance_firewall_l3_firewall_rules**
> object get_network_appliance_firewall_l3_firewall_rules(network_id)

Return the L3 firewall rules for an MX network

Return the L3 firewall rules for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the L3 firewall rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_l3_firewall_rules(network_id)
        print("The response of ApplianceApi->get_network_appliance_firewall_l3_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_firewall_l3_firewall_rules: %s\n" % e)
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

# **get_network_appliance_firewall_l7_firewall_rules**
> object get_network_appliance_firewall_l7_firewall_rules(network_id)

List the MX L7 firewall rules for an MX network

List the MX L7 firewall rules for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the MX L7 firewall rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_l7_firewall_rules(network_id)
        print("The response of ApplianceApi->get_network_appliance_firewall_l7_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_firewall_l7_firewall_rules: %s\n" % e)
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

# **get_network_appliance_firewall_l7_firewall_rules_application_categories**
> object get_network_appliance_firewall_l7_firewall_rules_application_categories(network_id)

Return the L7 firewall application categories and their associated applications for an MX network

Return the L7 firewall application categories and their associated applications for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the L7 firewall application categories and their associated applications for an MX network
        api_response = api_instance.get_network_appliance_firewall_l7_firewall_rules_application_categories(network_id)
        print("The response of ApplianceApi->get_network_appliance_firewall_l7_firewall_rules_application_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_firewall_l7_firewall_rules_application_categories: %s\n" % e)
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

# **get_network_appliance_firewall_one_to_many_nat_rules**
> object get_network_appliance_firewall_one_to_many_nat_rules(network_id)

Return the 1:Many NAT mapping rules for an MX network

Return the 1:Many NAT mapping rules for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the 1:Many NAT mapping rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_one_to_many_nat_rules(network_id)
        print("The response of ApplianceApi->get_network_appliance_firewall_one_to_many_nat_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_firewall_one_to_many_nat_rules: %s\n" % e)
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

# **get_network_appliance_firewall_one_to_one_nat_rules**
> object get_network_appliance_firewall_one_to_one_nat_rules(network_id)

Return the 1:1 NAT mapping rules for an MX network

Return the 1:1 NAT mapping rules for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the 1:1 NAT mapping rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_one_to_one_nat_rules(network_id)
        print("The response of ApplianceApi->get_network_appliance_firewall_one_to_one_nat_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_firewall_one_to_one_nat_rules: %s\n" % e)
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

# **get_network_appliance_firewall_port_forwarding_rules**
> object get_network_appliance_firewall_port_forwarding_rules(network_id)

Return the port forwarding rules for an MX network

Return the port forwarding rules for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the port forwarding rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_port_forwarding_rules(network_id)
        print("The response of ApplianceApi->get_network_appliance_firewall_port_forwarding_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_firewall_port_forwarding_rules: %s\n" % e)
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

# **get_network_appliance_firewall_settings**
> object get_network_appliance_firewall_settings(network_id)

Return the firewall settings for this network

Return the firewall settings for this network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the firewall settings for this network
        api_response = api_instance.get_network_appliance_firewall_settings(network_id)
        print("The response of ApplianceApi->get_network_appliance_firewall_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_firewall_settings: %s\n" % e)
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

# **get_network_appliance_port**
> GetNetworkAppliancePorts200ResponseInner get_network_appliance_port(network_id, port_id)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    port_id = 'port_id_example' # str | 

    try:
        # Return per-port VLAN settings for a single MX port.
        api_response = api_instance.get_network_appliance_port(network_id, port_id)
        print("The response of ApplianceApi->get_network_appliance_port:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_port: %s\n" % e)
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

# **get_network_appliance_ports**
> List[GetNetworkAppliancePorts200ResponseInner] get_network_appliance_ports(network_id)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List per-port VLAN settings for all ports of a MX.
        api_response = api_instance.get_network_appliance_ports(network_id)
        print("The response of ApplianceApi->get_network_appliance_ports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_ports: %s\n" % e)
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

# **get_network_appliance_prefixes_delegated_static**
> GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner get_network_appliance_prefixes_delegated_static(network_id, static_delegated_prefix_id)

Return a static delegated prefix from a network

Return a static delegated prefix from a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_prefixes_delegated_statics200_response_inner import GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    static_delegated_prefix_id = 'static_delegated_prefix_id_example' # str | 

    try:
        # Return a static delegated prefix from a network
        api_response = api_instance.get_network_appliance_prefixes_delegated_static(network_id, static_delegated_prefix_id)
        print("The response of ApplianceApi->get_network_appliance_prefixes_delegated_static:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_prefixes_delegated_static: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **static_delegated_prefix_id** | **str**|  | 

### Return type

[**GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner**](GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner.md)

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

# **get_network_appliance_prefixes_delegated_statics**
> List[GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner] get_network_appliance_prefixes_delegated_statics(network_id)

List static delegated prefixes for a network

List static delegated prefixes for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_prefixes_delegated_statics200_response_inner import GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List static delegated prefixes for a network
        api_response = api_instance.get_network_appliance_prefixes_delegated_statics(network_id)
        print("The response of ApplianceApi->get_network_appliance_prefixes_delegated_statics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_prefixes_delegated_statics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner]**](GetNetworkAppliancePrefixesDelegatedStatics200ResponseInner.md)

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

# **get_network_appliance_security_events**
> List[object] get_network_appliance_security_events(network_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)

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
    api_instance = openapi_client.ApplianceApi(api_client)
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
        api_response = api_instance.get_network_appliance_security_events(network_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)
        print("The response of ApplianceApi->get_network_appliance_security_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_security_events: %s\n" % e)
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

# **get_network_appliance_security_intrusion**
> object get_network_appliance_security_intrusion(network_id)

Returns all supported intrusion settings for an MX network

Returns all supported intrusion settings for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns all supported intrusion settings for an MX network
        api_response = api_instance.get_network_appliance_security_intrusion(network_id)
        print("The response of ApplianceApi->get_network_appliance_security_intrusion:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_security_intrusion: %s\n" % e)
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

# **get_network_appliance_security_malware**
> object get_network_appliance_security_malware(network_id)

Returns all supported malware settings for an MX network

Returns all supported malware settings for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns all supported malware settings for an MX network
        api_response = api_instance.get_network_appliance_security_malware(network_id)
        print("The response of ApplianceApi->get_network_appliance_security_malware:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_security_malware: %s\n" % e)
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

# **get_network_appliance_settings**
> GetNetworkApplianceSettings200Response get_network_appliance_settings(network_id)

Return the appliance settings for a network

Return the appliance settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_settings200_response import GetNetworkApplianceSettings200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the appliance settings for a network
        api_response = api_instance.get_network_appliance_settings(network_id)
        print("The response of ApplianceApi->get_network_appliance_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkApplianceSettings200Response**](GetNetworkApplianceSettings200Response.md)

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

# **get_network_appliance_single_lan**
> GetNetworkApplianceSingleLan200Response get_network_appliance_single_lan(network_id)

Return single LAN configuration

Return single LAN configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_single_lan200_response import GetNetworkApplianceSingleLan200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return single LAN configuration
        api_response = api_instance.get_network_appliance_single_lan(network_id)
        print("The response of ApplianceApi->get_network_appliance_single_lan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_single_lan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkApplianceSingleLan200Response**](GetNetworkApplianceSingleLan200Response.md)

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

# **get_network_appliance_ssid**
> GetNetworkApplianceSsids200ResponseInner get_network_appliance_ssid(network_id, number)

Return a single MX SSID

Return a single MX SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_ssids200_response_inner import GetNetworkApplianceSsids200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return a single MX SSID
        api_response = api_instance.get_network_appliance_ssid(network_id, number)
        print("The response of ApplianceApi->get_network_appliance_ssid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_ssid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

### Return type

[**GetNetworkApplianceSsids200ResponseInner**](GetNetworkApplianceSsids200ResponseInner.md)

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

# **get_network_appliance_ssids**
> List[GetNetworkApplianceSsids200ResponseInner] get_network_appliance_ssids(network_id)

List the MX SSIDs in a network

List the MX SSIDs in a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_ssids200_response_inner import GetNetworkApplianceSsids200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the MX SSIDs in a network
        api_response = api_instance.get_network_appliance_ssids(network_id)
        print("The response of ApplianceApi->get_network_appliance_ssids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_ssids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkApplianceSsids200ResponseInner]**](GetNetworkApplianceSsids200ResponseInner.md)

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

# **get_network_appliance_static_route**
> object get_network_appliance_static_route(network_id, static_route_id)

Return a static route for an MX or teleworker network

Return a static route for an MX or teleworker network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Return a static route for an MX or teleworker network
        api_response = api_instance.get_network_appliance_static_route(network_id, static_route_id)
        print("The response of ApplianceApi->get_network_appliance_static_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **static_route_id** | **str**|  | 

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

# **get_network_appliance_static_routes**
> List[object] get_network_appliance_static_routes(network_id)

List the static routes for an MX or teleworker network

List the static routes for an MX or teleworker network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the static routes for an MX or teleworker network
        api_response = api_instance.get_network_appliance_static_routes(network_id)
        print("The response of ApplianceApi->get_network_appliance_static_routes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_static_routes: %s\n" % e)
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

# **get_network_appliance_traffic_shaping**
> object get_network_appliance_traffic_shaping(network_id)

Display the traffic shaping settings for an MX network

Display the traffic shaping settings for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Display the traffic shaping settings for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping(network_id)
        print("The response of ApplianceApi->get_network_appliance_traffic_shaping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_traffic_shaping: %s\n" % e)
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

# **get_network_appliance_traffic_shaping_custom_performance_class**
> object get_network_appliance_traffic_shaping_custom_performance_class(network_id, custom_performance_class_id)

Return a custom performance class for an MX network

Return a custom performance class for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    custom_performance_class_id = 'custom_performance_class_id_example' # str | 

    try:
        # Return a custom performance class for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_custom_performance_class(network_id, custom_performance_class_id)
        print("The response of ApplianceApi->get_network_appliance_traffic_shaping_custom_performance_class:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_traffic_shaping_custom_performance_class: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **custom_performance_class_id** | **str**|  | 

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

# **get_network_appliance_traffic_shaping_custom_performance_classes**
> List[object] get_network_appliance_traffic_shaping_custom_performance_classes(network_id)

List all custom performance classes for an MX network

List all custom performance classes for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List all custom performance classes for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_custom_performance_classes(network_id)
        print("The response of ApplianceApi->get_network_appliance_traffic_shaping_custom_performance_classes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_traffic_shaping_custom_performance_classes: %s\n" % e)
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

# **get_network_appliance_traffic_shaping_rules**
> object get_network_appliance_traffic_shaping_rules(network_id)

Display the traffic shaping settings rules for an MX network

Display the traffic shaping settings rules for an MX network

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Display the traffic shaping settings rules for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_rules(network_id)
        print("The response of ApplianceApi->get_network_appliance_traffic_shaping_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_traffic_shaping_rules: %s\n" % e)
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

# **get_network_appliance_traffic_shaping_uplink_bandwidth**
> GetNetworkApplianceTrafficShapingUplinkBandwidth200Response get_network_appliance_traffic_shaping_uplink_bandwidth(network_id)

Returns the uplink bandwidth limits for your MX network

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_bandwidth200_response import GetNetworkApplianceTrafficShapingUplinkBandwidth200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the uplink bandwidth limits for your MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_uplink_bandwidth(network_id)
        print("The response of ApplianceApi->get_network_appliance_traffic_shaping_uplink_bandwidth:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_traffic_shaping_uplink_bandwidth: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkApplianceTrafficShapingUplinkBandwidth200Response**](GetNetworkApplianceTrafficShapingUplinkBandwidth200Response.md)

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

# **get_network_appliance_traffic_shaping_uplink_selection**
> GetNetworkApplianceTrafficShapingUplinkSelection200Response get_network_appliance_traffic_shaping_uplink_selection(network_id)

Show uplink selection settings for an MX network

Show uplink selection settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_selection200_response import GetNetworkApplianceTrafficShapingUplinkSelection200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Show uplink selection settings for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_uplink_selection(network_id)
        print("The response of ApplianceApi->get_network_appliance_traffic_shaping_uplink_selection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_traffic_shaping_uplink_selection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkApplianceTrafficShapingUplinkSelection200Response**](GetNetworkApplianceTrafficShapingUplinkSelection200Response.md)

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

# **get_network_appliance_uplinks_usage_history**
> List[object] get_network_appliance_uplinks_usage_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 10 minutes. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 60, 300, 600, 1800, 3600, 86400. The default is 60. (optional)

    try:
        # Get the sent and received bytes for each uplink of a network.
        api_response = api_instance.get_network_appliance_uplinks_usage_history(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)
        print("The response of ApplianceApi->get_network_appliance_uplinks_usage_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_uplinks_usage_history: %s\n" % e)
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

# **get_network_appliance_vlan**
> GetNetworkApplianceVlans200ResponseInner get_network_appliance_vlan(network_id, vlan_id)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    vlan_id = 'vlan_id_example' # str | 

    try:
        # Return a VLAN
        api_response = api_instance.get_network_appliance_vlan(network_id, vlan_id)
        print("The response of ApplianceApi->get_network_appliance_vlan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_vlan: %s\n" % e)
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

# **get_network_appliance_vlans**
> List[GetNetworkApplianceVlans200ResponseInner] get_network_appliance_vlans(network_id)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the VLANs for an MX network
        api_response = api_instance.get_network_appliance_vlans(network_id)
        print("The response of ApplianceApi->get_network_appliance_vlans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_vlans: %s\n" % e)
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

# **get_network_appliance_vlans_settings**
> object get_network_appliance_vlans_settings(network_id)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the enabled status of VLANs for the network
        api_response = api_instance.get_network_appliance_vlans_settings(network_id)
        print("The response of ApplianceApi->get_network_appliance_vlans_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_vlans_settings: %s\n" % e)
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

# **get_network_appliance_vpn_bgp**
> object get_network_appliance_vpn_bgp(network_id)

Return a Hub BGP Configuration

Return a Hub BGP Configuration

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return a Hub BGP Configuration
        api_response = api_instance.get_network_appliance_vpn_bgp(network_id)
        print("The response of ApplianceApi->get_network_appliance_vpn_bgp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_vpn_bgp: %s\n" % e)
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

# **get_network_appliance_vpn_site_to_site_vpn**
> GetNetworkApplianceVpnSiteToSiteVpn200Response get_network_appliance_vpn_site_to_site_vpn(network_id)

Return the site-to-site VPN settings of a network

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_vpn_site_to_site_vpn200_response import GetNetworkApplianceVpnSiteToSiteVpn200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the site-to-site VPN settings of a network
        api_response = api_instance.get_network_appliance_vpn_site_to_site_vpn(network_id)
        print("The response of ApplianceApi->get_network_appliance_vpn_site_to_site_vpn:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_vpn_site_to_site_vpn: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkApplianceVpnSiteToSiteVpn200Response**](GetNetworkApplianceVpnSiteToSiteVpn200Response.md)

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

# **get_network_appliance_warm_spare**
> object get_network_appliance_warm_spare(network_id)

Return MX warm spare settings

Return MX warm spare settings

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return MX warm spare settings
        api_response = api_instance.get_network_appliance_warm_spare(network_id)
        print("The response of ApplianceApi->get_network_appliance_warm_spare:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_network_appliance_warm_spare: %s\n" % e)
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

# **get_organization_appliance_security_events**
> List[object] get_organization_appliance_security_events(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)

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
    api_instance = openapi_client.ApplianceApi(api_client)
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
        api_response = api_instance.get_organization_appliance_security_events(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)
        print("The response of ApplianceApi->get_organization_appliance_security_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_organization_appliance_security_events: %s\n" % e)
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

# **get_organization_appliance_security_intrusion**
> object get_organization_appliance_security_intrusion(organization_id)

Returns all supported intrusion settings for an organization

Returns all supported intrusion settings for an organization

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
    api_instance = openapi_client.ApplianceApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns all supported intrusion settings for an organization
        api_response = api_instance.get_organization_appliance_security_intrusion(organization_id)
        print("The response of ApplianceApi->get_organization_appliance_security_intrusion:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_organization_appliance_security_intrusion: %s\n" % e)
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

# **get_organization_appliance_uplink_statuses**
> List[object] get_organization_appliance_uplink_statuses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of network IDs. The returned devices will be filtered to only include these networks. (optional)
    serials = ['serials_example'] # List[str] | A list of serial numbers. The returned devices will be filtered to only include these serials. (optional)
    iccids = ['iccids_example'] # List[str] | A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. (optional)

    try:
        # List the uplink status of every Meraki MX and Z series appliances in the organization
        api_response = api_instance.get_organization_appliance_uplink_statuses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)
        print("The response of ApplianceApi->get_organization_appliance_uplink_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_organization_appliance_uplink_statuses: %s\n" % e)
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

# **get_organization_appliance_vpn_stats**
> List[object] get_organization_appliance_vpn_stats(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, t0=t0, t1=t1, timespan=timespan)

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
    api_instance = openapi_client.ApplianceApi(api_client)
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
        api_response = api_instance.get_organization_appliance_vpn_stats(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, t0=t0, t1=t1, timespan=timespan)
        print("The response of ApplianceApi->get_organization_appliance_vpn_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_organization_appliance_vpn_stats: %s\n" % e)
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

# **get_organization_appliance_vpn_statuses**
> List[object] get_organization_appliance_vpn_statuses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456 (optional)

    try:
        # Show VPN status for networks in an organization
        api_response = api_instance.get_organization_appliance_vpn_statuses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids)
        print("The response of ApplianceApi->get_organization_appliance_vpn_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_organization_appliance_vpn_statuses: %s\n" % e)
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

# **get_organization_appliance_vpn_third_party_vpn_peers**
> GetOrganizationApplianceVpnThirdPartyVPNPeers200Response get_organization_appliance_vpn_third_party_vpn_peers(organization_id)

Return the third party VPN peers for an organization

Return the third party VPN peers for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_appliance_vpn_third_party_vpn_peers200_response import GetOrganizationApplianceVpnThirdPartyVPNPeers200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the third party VPN peers for an organization
        api_response = api_instance.get_organization_appliance_vpn_third_party_vpn_peers(organization_id)
        print("The response of ApplianceApi->get_organization_appliance_vpn_third_party_vpn_peers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_organization_appliance_vpn_third_party_vpn_peers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationApplianceVpnThirdPartyVPNPeers200Response**](GetOrganizationApplianceVpnThirdPartyVPNPeers200Response.md)

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

# **get_organization_appliance_vpn_vpn_firewall_rules**
> object get_organization_appliance_vpn_vpn_firewall_rules(organization_id)

Return the firewall rules for an organization's site-to-site VPN

Return the firewall rules for an organization's site-to-site VPN

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
    api_instance = openapi_client.ApplianceApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the firewall rules for an organization's site-to-site VPN
        api_response = api_instance.get_organization_appliance_vpn_vpn_firewall_rules(organization_id)
        print("The response of ApplianceApi->get_organization_appliance_vpn_vpn_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->get_organization_appliance_vpn_vpn_firewall_rules: %s\n" % e)
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

# **swap_network_appliance_warm_spare**
> object swap_network_appliance_warm_spare(network_id)

Swap MX primary and warm spare appliances

Swap MX primary and warm spare appliances

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Swap MX primary and warm spare appliances
        api_response = api_instance.swap_network_appliance_warm_spare(network_id)
        print("The response of ApplianceApi->swap_network_appliance_warm_spare:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->swap_network_appliance_warm_spare: %s\n" % e)
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

# **update_device_appliance_uplinks_settings**
> GetDeviceApplianceUplinksSettings200Response update_device_appliance_uplinks_settings(serial, update_device_appliance_uplinks_settings_request)

Update the uplink settings for an MX appliance

Update the uplink settings for an MX appliance

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_appliance_uplinks_settings200_response import GetDeviceApplianceUplinksSettings200Response
from openapi_client.models.update_device_appliance_uplinks_settings_request import UpdateDeviceApplianceUplinksSettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    serial = 'serial_example' # str | 
    update_device_appliance_uplinks_settings_request = openapi_client.UpdateDeviceApplianceUplinksSettingsRequest() # UpdateDeviceApplianceUplinksSettingsRequest | 

    try:
        # Update the uplink settings for an MX appliance
        api_response = api_instance.update_device_appliance_uplinks_settings(serial, update_device_appliance_uplinks_settings_request)
        print("The response of ApplianceApi->update_device_appliance_uplinks_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_device_appliance_uplinks_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_appliance_uplinks_settings_request** | [**UpdateDeviceApplianceUplinksSettingsRequest**](UpdateDeviceApplianceUplinksSettingsRequest.md)|  | 

### Return type

[**GetDeviceApplianceUplinksSettings200Response**](GetDeviceApplianceUplinksSettings200Response.md)

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

# **update_network_appliance_connectivity_monitoring_destinations**
> object update_network_appliance_connectivity_monitoring_destinations(network_id, update_network_appliance_connectivity_monitoring_destinations_request=update_network_appliance_connectivity_monitoring_destinations_request)

Update the connectivity testing destinations for an MX network

Update the connectivity testing destinations for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_connectivity_monitoring_destinations_request import UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_connectivity_monitoring_destinations_request = openapi_client.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest() # UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest |  (optional)

    try:
        # Update the connectivity testing destinations for an MX network
        api_response = api_instance.update_network_appliance_connectivity_monitoring_destinations(network_id, update_network_appliance_connectivity_monitoring_destinations_request=update_network_appliance_connectivity_monitoring_destinations_request)
        print("The response of ApplianceApi->update_network_appliance_connectivity_monitoring_destinations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_connectivity_monitoring_destinations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_connectivity_monitoring_destinations_request** | [**UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest**](UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest.md)|  | [optional] 

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

# **update_network_appliance_content_filtering**
> object update_network_appliance_content_filtering(network_id, update_network_appliance_content_filtering_request=update_network_appliance_content_filtering_request)

Update the content filtering settings for an MX network

Update the content filtering settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_content_filtering_request import UpdateNetworkApplianceContentFilteringRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_content_filtering_request = openapi_client.UpdateNetworkApplianceContentFilteringRequest() # UpdateNetworkApplianceContentFilteringRequest |  (optional)

    try:
        # Update the content filtering settings for an MX network
        api_response = api_instance.update_network_appliance_content_filtering(network_id, update_network_appliance_content_filtering_request=update_network_appliance_content_filtering_request)
        print("The response of ApplianceApi->update_network_appliance_content_filtering:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_content_filtering: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_content_filtering_request** | [**UpdateNetworkApplianceContentFilteringRequest**](UpdateNetworkApplianceContentFilteringRequest.md)|  | [optional] 

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

# **update_network_appliance_firewall_cellular_firewall_rules**
> object update_network_appliance_firewall_cellular_firewall_rules(network_id, update_network_appliance_firewall_cellular_firewall_rules_request=update_network_appliance_firewall_cellular_firewall_rules_request)

Update the cellular firewall rules of an MX network

Update the cellular firewall rules of an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_cellular_firewall_rules_request import UpdateNetworkApplianceFirewallCellularFirewallRulesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_cellular_firewall_rules_request = openapi_client.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest() # UpdateNetworkApplianceFirewallCellularFirewallRulesRequest |  (optional)

    try:
        # Update the cellular firewall rules of an MX network
        api_response = api_instance.update_network_appliance_firewall_cellular_firewall_rules(network_id, update_network_appliance_firewall_cellular_firewall_rules_request=update_network_appliance_firewall_cellular_firewall_rules_request)
        print("The response of ApplianceApi->update_network_appliance_firewall_cellular_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_firewall_cellular_firewall_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_cellular_firewall_rules_request** | [**UpdateNetworkApplianceFirewallCellularFirewallRulesRequest**](UpdateNetworkApplianceFirewallCellularFirewallRulesRequest.md)|  | [optional] 

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

# **update_network_appliance_firewall_firewalled_service**
> object update_network_appliance_firewall_firewalled_service(network_id, service, update_network_appliance_firewall_firewalled_service_request)

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_firewalled_service_request import UpdateNetworkApplianceFirewallFirewalledServiceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    service = 'service_example' # str | 
    update_network_appliance_firewall_firewalled_service_request = openapi_client.UpdateNetworkApplianceFirewallFirewalledServiceRequest() # UpdateNetworkApplianceFirewallFirewalledServiceRequest | 

    try:
        # Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
        api_response = api_instance.update_network_appliance_firewall_firewalled_service(network_id, service, update_network_appliance_firewall_firewalled_service_request)
        print("The response of ApplianceApi->update_network_appliance_firewall_firewalled_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_firewall_firewalled_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **service** | **str**|  | 
 **update_network_appliance_firewall_firewalled_service_request** | [**UpdateNetworkApplianceFirewallFirewalledServiceRequest**](UpdateNetworkApplianceFirewallFirewalledServiceRequest.md)|  | 

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

# **update_network_appliance_firewall_inbound_cellular_firewall_rules**
> List[object] update_network_appliance_firewall_inbound_cellular_firewall_rules(network_id, update_network_appliance_firewall_cellular_firewall_rules_request=update_network_appliance_firewall_cellular_firewall_rules_request)

Update the inbound cellular firewall rules of an MX network

Update the inbound cellular firewall rules of an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_cellular_firewall_rules_request import UpdateNetworkApplianceFirewallCellularFirewallRulesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_cellular_firewall_rules_request = openapi_client.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest() # UpdateNetworkApplianceFirewallCellularFirewallRulesRequest |  (optional)

    try:
        # Update the inbound cellular firewall rules of an MX network
        api_response = api_instance.update_network_appliance_firewall_inbound_cellular_firewall_rules(network_id, update_network_appliance_firewall_cellular_firewall_rules_request=update_network_appliance_firewall_cellular_firewall_rules_request)
        print("The response of ApplianceApi->update_network_appliance_firewall_inbound_cellular_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_firewall_inbound_cellular_firewall_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_cellular_firewall_rules_request** | [**UpdateNetworkApplianceFirewallCellularFirewallRulesRequest**](UpdateNetworkApplianceFirewallCellularFirewallRulesRequest.md)|  | [optional] 

### Return type

**List[object]**

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

# **update_network_appliance_firewall_inbound_firewall_rules**
> object update_network_appliance_firewall_inbound_firewall_rules(network_id, update_network_appliance_firewall_inbound_firewall_rules_request=update_network_appliance_firewall_inbound_firewall_rules_request)

Update the inbound firewall rules of an MX network

Update the inbound firewall rules of an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_inbound_firewall_rules_request import UpdateNetworkApplianceFirewallInboundFirewallRulesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_inbound_firewall_rules_request = openapi_client.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest() # UpdateNetworkApplianceFirewallInboundFirewallRulesRequest |  (optional)

    try:
        # Update the inbound firewall rules of an MX network
        api_response = api_instance.update_network_appliance_firewall_inbound_firewall_rules(network_id, update_network_appliance_firewall_inbound_firewall_rules_request=update_network_appliance_firewall_inbound_firewall_rules_request)
        print("The response of ApplianceApi->update_network_appliance_firewall_inbound_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_firewall_inbound_firewall_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_inbound_firewall_rules_request** | [**UpdateNetworkApplianceFirewallInboundFirewallRulesRequest**](UpdateNetworkApplianceFirewallInboundFirewallRulesRequest.md)|  | [optional] 

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

# **update_network_appliance_firewall_l3_firewall_rules**
> object update_network_appliance_firewall_l3_firewall_rules(network_id, update_network_appliance_firewall_inbound_firewall_rules_request=update_network_appliance_firewall_inbound_firewall_rules_request)

Update the L3 firewall rules of an MX network

Update the L3 firewall rules of an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_inbound_firewall_rules_request import UpdateNetworkApplianceFirewallInboundFirewallRulesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_inbound_firewall_rules_request = openapi_client.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest() # UpdateNetworkApplianceFirewallInboundFirewallRulesRequest |  (optional)

    try:
        # Update the L3 firewall rules of an MX network
        api_response = api_instance.update_network_appliance_firewall_l3_firewall_rules(network_id, update_network_appliance_firewall_inbound_firewall_rules_request=update_network_appliance_firewall_inbound_firewall_rules_request)
        print("The response of ApplianceApi->update_network_appliance_firewall_l3_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_firewall_l3_firewall_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_inbound_firewall_rules_request** | [**UpdateNetworkApplianceFirewallInboundFirewallRulesRequest**](UpdateNetworkApplianceFirewallInboundFirewallRulesRequest.md)|  | [optional] 

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

# **update_network_appliance_firewall_l7_firewall_rules**
> object update_network_appliance_firewall_l7_firewall_rules(network_id, update_network_appliance_firewall_l7_firewall_rules_request=update_network_appliance_firewall_l7_firewall_rules_request)

Update the MX L7 firewall rules for an MX network

Update the MX L7 firewall rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_l7_firewall_rules_request import UpdateNetworkApplianceFirewallL7FirewallRulesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_l7_firewall_rules_request = openapi_client.UpdateNetworkApplianceFirewallL7FirewallRulesRequest() # UpdateNetworkApplianceFirewallL7FirewallRulesRequest |  (optional)

    try:
        # Update the MX L7 firewall rules for an MX network
        api_response = api_instance.update_network_appliance_firewall_l7_firewall_rules(network_id, update_network_appliance_firewall_l7_firewall_rules_request=update_network_appliance_firewall_l7_firewall_rules_request)
        print("The response of ApplianceApi->update_network_appliance_firewall_l7_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_firewall_l7_firewall_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_l7_firewall_rules_request** | [**UpdateNetworkApplianceFirewallL7FirewallRulesRequest**](UpdateNetworkApplianceFirewallL7FirewallRulesRequest.md)|  | [optional] 

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

# **update_network_appliance_firewall_one_to_many_nat_rules**
> object update_network_appliance_firewall_one_to_many_nat_rules(network_id, update_network_appliance_firewall_one_to_many_nat_rules_request)

Set the 1:Many NAT mapping rules for an MX network

Set the 1:Many NAT mapping rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_one_to_many_nat_rules_request import UpdateNetworkApplianceFirewallOneToManyNatRulesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_one_to_many_nat_rules_request = openapi_client.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest() # UpdateNetworkApplianceFirewallOneToManyNatRulesRequest | 

    try:
        # Set the 1:Many NAT mapping rules for an MX network
        api_response = api_instance.update_network_appliance_firewall_one_to_many_nat_rules(network_id, update_network_appliance_firewall_one_to_many_nat_rules_request)
        print("The response of ApplianceApi->update_network_appliance_firewall_one_to_many_nat_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_firewall_one_to_many_nat_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_one_to_many_nat_rules_request** | [**UpdateNetworkApplianceFirewallOneToManyNatRulesRequest**](UpdateNetworkApplianceFirewallOneToManyNatRulesRequest.md)|  | 

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

# **update_network_appliance_firewall_one_to_one_nat_rules**
> object update_network_appliance_firewall_one_to_one_nat_rules(network_id, update_network_appliance_firewall_one_to_one_nat_rules_request)

Set the 1:1 NAT mapping rules for an MX network

Set the 1:1 NAT mapping rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_one_to_one_nat_rules_request import UpdateNetworkApplianceFirewallOneToOneNatRulesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_one_to_one_nat_rules_request = openapi_client.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest() # UpdateNetworkApplianceFirewallOneToOneNatRulesRequest | 

    try:
        # Set the 1:1 NAT mapping rules for an MX network
        api_response = api_instance.update_network_appliance_firewall_one_to_one_nat_rules(network_id, update_network_appliance_firewall_one_to_one_nat_rules_request)
        print("The response of ApplianceApi->update_network_appliance_firewall_one_to_one_nat_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_firewall_one_to_one_nat_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_one_to_one_nat_rules_request** | [**UpdateNetworkApplianceFirewallOneToOneNatRulesRequest**](UpdateNetworkApplianceFirewallOneToOneNatRulesRequest.md)|  | 

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

# **update_network_appliance_firewall_port_forwarding_rules**
> object update_network_appliance_firewall_port_forwarding_rules(network_id, update_network_appliance_firewall_port_forwarding_rules_request)

Update the port forwarding rules for an MX network

Update the port forwarding rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_port_forwarding_rules_request import UpdateNetworkApplianceFirewallPortForwardingRulesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_port_forwarding_rules_request = openapi_client.UpdateNetworkApplianceFirewallPortForwardingRulesRequest() # UpdateNetworkApplianceFirewallPortForwardingRulesRequest | 

    try:
        # Update the port forwarding rules for an MX network
        api_response = api_instance.update_network_appliance_firewall_port_forwarding_rules(network_id, update_network_appliance_firewall_port_forwarding_rules_request)
        print("The response of ApplianceApi->update_network_appliance_firewall_port_forwarding_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_firewall_port_forwarding_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_port_forwarding_rules_request** | [**UpdateNetworkApplianceFirewallPortForwardingRulesRequest**](UpdateNetworkApplianceFirewallPortForwardingRulesRequest.md)|  | 

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

# **update_network_appliance_firewall_settings**
> object update_network_appliance_firewall_settings(network_id, update_network_appliance_firewall_settings_request=update_network_appliance_firewall_settings_request)

Update the firewall settings for this network

Update the firewall settings for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_settings_request import UpdateNetworkApplianceFirewallSettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_settings_request = openapi_client.UpdateNetworkApplianceFirewallSettingsRequest() # UpdateNetworkApplianceFirewallSettingsRequest |  (optional)

    try:
        # Update the firewall settings for this network
        api_response = api_instance.update_network_appliance_firewall_settings(network_id, update_network_appliance_firewall_settings_request=update_network_appliance_firewall_settings_request)
        print("The response of ApplianceApi->update_network_appliance_firewall_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_firewall_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_settings_request** | [**UpdateNetworkApplianceFirewallSettingsRequest**](UpdateNetworkApplianceFirewallSettingsRequest.md)|  | [optional] 

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

# **update_network_appliance_port**
> GetNetworkAppliancePorts200ResponseInner update_network_appliance_port(network_id, port_id, update_network_appliance_port_request=update_network_appliance_port_request)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    port_id = 'port_id_example' # str | 
    update_network_appliance_port_request = openapi_client.UpdateNetworkAppliancePortRequest() # UpdateNetworkAppliancePortRequest |  (optional)

    try:
        # Update the per-port VLAN settings for a single MX port.
        api_response = api_instance.update_network_appliance_port(network_id, port_id, update_network_appliance_port_request=update_network_appliance_port_request)
        print("The response of ApplianceApi->update_network_appliance_port:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_port: %s\n" % e)
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

# **update_network_appliance_prefixes_delegated_static**
> object update_network_appliance_prefixes_delegated_static(network_id, static_delegated_prefix_id, update_network_appliance_prefixes_delegated_static_request=update_network_appliance_prefixes_delegated_static_request)

Update a static delegated prefix from a network

Update a static delegated prefix from a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_prefixes_delegated_static_request import UpdateNetworkAppliancePrefixesDelegatedStaticRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    static_delegated_prefix_id = 'static_delegated_prefix_id_example' # str | 
    update_network_appliance_prefixes_delegated_static_request = openapi_client.UpdateNetworkAppliancePrefixesDelegatedStaticRequest() # UpdateNetworkAppliancePrefixesDelegatedStaticRequest |  (optional)

    try:
        # Update a static delegated prefix from a network
        api_response = api_instance.update_network_appliance_prefixes_delegated_static(network_id, static_delegated_prefix_id, update_network_appliance_prefixes_delegated_static_request=update_network_appliance_prefixes_delegated_static_request)
        print("The response of ApplianceApi->update_network_appliance_prefixes_delegated_static:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_prefixes_delegated_static: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **static_delegated_prefix_id** | **str**|  | 
 **update_network_appliance_prefixes_delegated_static_request** | [**UpdateNetworkAppliancePrefixesDelegatedStaticRequest**](UpdateNetworkAppliancePrefixesDelegatedStaticRequest.md)|  | [optional] 

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

# **update_network_appliance_security_intrusion**
> object update_network_appliance_security_intrusion(network_id, update_network_appliance_security_intrusion_request=update_network_appliance_security_intrusion_request)

Set the supported intrusion settings for an MX network

Set the supported intrusion settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_security_intrusion_request import UpdateNetworkApplianceSecurityIntrusionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_security_intrusion_request = openapi_client.UpdateNetworkApplianceSecurityIntrusionRequest() # UpdateNetworkApplianceSecurityIntrusionRequest |  (optional)

    try:
        # Set the supported intrusion settings for an MX network
        api_response = api_instance.update_network_appliance_security_intrusion(network_id, update_network_appliance_security_intrusion_request=update_network_appliance_security_intrusion_request)
        print("The response of ApplianceApi->update_network_appliance_security_intrusion:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_security_intrusion: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_security_intrusion_request** | [**UpdateNetworkApplianceSecurityIntrusionRequest**](UpdateNetworkApplianceSecurityIntrusionRequest.md)|  | [optional] 

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

# **update_network_appliance_security_malware**
> object update_network_appliance_security_malware(network_id, update_network_appliance_security_malware_request)

Set the supported malware settings for an MX network

Set the supported malware settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_security_malware_request import UpdateNetworkApplianceSecurityMalwareRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_security_malware_request = openapi_client.UpdateNetworkApplianceSecurityMalwareRequest() # UpdateNetworkApplianceSecurityMalwareRequest | 

    try:
        # Set the supported malware settings for an MX network
        api_response = api_instance.update_network_appliance_security_malware(network_id, update_network_appliance_security_malware_request)
        print("The response of ApplianceApi->update_network_appliance_security_malware:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_security_malware: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_security_malware_request** | [**UpdateNetworkApplianceSecurityMalwareRequest**](UpdateNetworkApplianceSecurityMalwareRequest.md)|  | 

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

# **update_network_appliance_settings**
> GetNetworkApplianceSettings200Response update_network_appliance_settings(network_id, update_network_appliance_settings_request=update_network_appliance_settings_request)

Update the appliance settings for a network

Update the appliance settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_settings200_response import GetNetworkApplianceSettings200Response
from openapi_client.models.update_network_appliance_settings_request import UpdateNetworkApplianceSettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_settings_request = openapi_client.UpdateNetworkApplianceSettingsRequest() # UpdateNetworkApplianceSettingsRequest |  (optional)

    try:
        # Update the appliance settings for a network
        api_response = api_instance.update_network_appliance_settings(network_id, update_network_appliance_settings_request=update_network_appliance_settings_request)
        print("The response of ApplianceApi->update_network_appliance_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_settings_request** | [**UpdateNetworkApplianceSettingsRequest**](UpdateNetworkApplianceSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkApplianceSettings200Response**](GetNetworkApplianceSettings200Response.md)

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

# **update_network_appliance_single_lan**
> GetNetworkApplianceSingleLan200Response update_network_appliance_single_lan(network_id, update_network_appliance_single_lan_request=update_network_appliance_single_lan_request)

Update single LAN configuration

Update single LAN configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_single_lan200_response import GetNetworkApplianceSingleLan200Response
from openapi_client.models.update_network_appliance_single_lan_request import UpdateNetworkApplianceSingleLanRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_single_lan_request = openapi_client.UpdateNetworkApplianceSingleLanRequest() # UpdateNetworkApplianceSingleLanRequest |  (optional)

    try:
        # Update single LAN configuration
        api_response = api_instance.update_network_appliance_single_lan(network_id, update_network_appliance_single_lan_request=update_network_appliance_single_lan_request)
        print("The response of ApplianceApi->update_network_appliance_single_lan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_single_lan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_single_lan_request** | [**UpdateNetworkApplianceSingleLanRequest**](UpdateNetworkApplianceSingleLanRequest.md)|  | [optional] 

### Return type

[**GetNetworkApplianceSingleLan200Response**](GetNetworkApplianceSingleLan200Response.md)

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

# **update_network_appliance_ssid**
> GetNetworkApplianceSsids200ResponseInner update_network_appliance_ssid(network_id, number, update_network_appliance_ssid_request=update_network_appliance_ssid_request)

Update the attributes of an MX SSID

Update the attributes of an MX SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_ssids200_response_inner import GetNetworkApplianceSsids200ResponseInner
from openapi_client.models.update_network_appliance_ssid_request import UpdateNetworkApplianceSsidRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_appliance_ssid_request = openapi_client.UpdateNetworkApplianceSsidRequest() # UpdateNetworkApplianceSsidRequest |  (optional)

    try:
        # Update the attributes of an MX SSID
        api_response = api_instance.update_network_appliance_ssid(network_id, number, update_network_appliance_ssid_request=update_network_appliance_ssid_request)
        print("The response of ApplianceApi->update_network_appliance_ssid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_ssid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_appliance_ssid_request** | [**UpdateNetworkApplianceSsidRequest**](UpdateNetworkApplianceSsidRequest.md)|  | [optional] 

### Return type

[**GetNetworkApplianceSsids200ResponseInner**](GetNetworkApplianceSsids200ResponseInner.md)

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

# **update_network_appliance_static_route**
> object update_network_appliance_static_route(network_id, static_route_id, update_network_appliance_static_route_request=update_network_appliance_static_route_request)

Update a static route for an MX or teleworker network

Update a static route for an MX or teleworker network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_static_route_request import UpdateNetworkApplianceStaticRouteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 
    update_network_appliance_static_route_request = openapi_client.UpdateNetworkApplianceStaticRouteRequest() # UpdateNetworkApplianceStaticRouteRequest |  (optional)

    try:
        # Update a static route for an MX or teleworker network
        api_response = api_instance.update_network_appliance_static_route(network_id, static_route_id, update_network_appliance_static_route_request=update_network_appliance_static_route_request)
        print("The response of ApplianceApi->update_network_appliance_static_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **static_route_id** | **str**|  | 
 **update_network_appliance_static_route_request** | [**UpdateNetworkApplianceStaticRouteRequest**](UpdateNetworkApplianceStaticRouteRequest.md)|  | [optional] 

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

# **update_network_appliance_traffic_shaping**
> object update_network_appliance_traffic_shaping(network_id, update_network_appliance_traffic_shaping_request=update_network_appliance_traffic_shaping_request)

Update the traffic shaping settings for an MX network

Update the traffic shaping settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_traffic_shaping_request import UpdateNetworkApplianceTrafficShapingRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_traffic_shaping_request = openapi_client.UpdateNetworkApplianceTrafficShapingRequest() # UpdateNetworkApplianceTrafficShapingRequest |  (optional)

    try:
        # Update the traffic shaping settings for an MX network
        api_response = api_instance.update_network_appliance_traffic_shaping(network_id, update_network_appliance_traffic_shaping_request=update_network_appliance_traffic_shaping_request)
        print("The response of ApplianceApi->update_network_appliance_traffic_shaping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_traffic_shaping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_traffic_shaping_request** | [**UpdateNetworkApplianceTrafficShapingRequest**](UpdateNetworkApplianceTrafficShapingRequest.md)|  | [optional] 

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

# **update_network_appliance_traffic_shaping_custom_performance_class**
> object update_network_appliance_traffic_shaping_custom_performance_class(network_id, custom_performance_class_id, update_network_appliance_traffic_shaping_custom_performance_class_request=update_network_appliance_traffic_shaping_custom_performance_class_request)

Update a custom performance class for an MX network

Update a custom performance class for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_traffic_shaping_custom_performance_class_request import UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    custom_performance_class_id = 'custom_performance_class_id_example' # str | 
    update_network_appliance_traffic_shaping_custom_performance_class_request = openapi_client.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest() # UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest |  (optional)

    try:
        # Update a custom performance class for an MX network
        api_response = api_instance.update_network_appliance_traffic_shaping_custom_performance_class(network_id, custom_performance_class_id, update_network_appliance_traffic_shaping_custom_performance_class_request=update_network_appliance_traffic_shaping_custom_performance_class_request)
        print("The response of ApplianceApi->update_network_appliance_traffic_shaping_custom_performance_class:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_traffic_shaping_custom_performance_class: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **custom_performance_class_id** | **str**|  | 
 **update_network_appliance_traffic_shaping_custom_performance_class_request** | [**UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest**](UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.md)|  | [optional] 

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

# **update_network_appliance_traffic_shaping_rules**
> object update_network_appliance_traffic_shaping_rules(network_id, update_network_appliance_traffic_shaping_rules_request=update_network_appliance_traffic_shaping_rules_request)

Update the traffic shaping settings rules for an MX network

Update the traffic shaping settings rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_traffic_shaping_rules_request import UpdateNetworkApplianceTrafficShapingRulesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_traffic_shaping_rules_request = openapi_client.UpdateNetworkApplianceTrafficShapingRulesRequest() # UpdateNetworkApplianceTrafficShapingRulesRequest |  (optional)

    try:
        # Update the traffic shaping settings rules for an MX network
        api_response = api_instance.update_network_appliance_traffic_shaping_rules(network_id, update_network_appliance_traffic_shaping_rules_request=update_network_appliance_traffic_shaping_rules_request)
        print("The response of ApplianceApi->update_network_appliance_traffic_shaping_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_traffic_shaping_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_traffic_shaping_rules_request** | [**UpdateNetworkApplianceTrafficShapingRulesRequest**](UpdateNetworkApplianceTrafficShapingRulesRequest.md)|  | [optional] 

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

# **update_network_appliance_traffic_shaping_uplink_bandwidth**
> object update_network_appliance_traffic_shaping_uplink_bandwidth(network_id, update_network_appliance_traffic_shaping_uplink_bandwidth_request=update_network_appliance_traffic_shaping_uplink_bandwidth_request)

Updates the uplink bandwidth settings for your MX network.

Updates the uplink bandwidth settings for your MX network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_bandwidth_request import UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_traffic_shaping_uplink_bandwidth_request = openapi_client.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest() # UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest |  (optional)

    try:
        # Updates the uplink bandwidth settings for your MX network.
        api_response = api_instance.update_network_appliance_traffic_shaping_uplink_bandwidth(network_id, update_network_appliance_traffic_shaping_uplink_bandwidth_request=update_network_appliance_traffic_shaping_uplink_bandwidth_request)
        print("The response of ApplianceApi->update_network_appliance_traffic_shaping_uplink_bandwidth:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_traffic_shaping_uplink_bandwidth: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_traffic_shaping_uplink_bandwidth_request** | [**UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest**](UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest.md)|  | [optional] 

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

# **update_network_appliance_traffic_shaping_uplink_selection**
> GetNetworkApplianceTrafficShapingUplinkSelection200Response update_network_appliance_traffic_shaping_uplink_selection(network_id, update_network_appliance_traffic_shaping_uplink_selection_request=update_network_appliance_traffic_shaping_uplink_selection_request)

Update uplink selection settings for an MX network

Update uplink selection settings for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_selection200_response import GetNetworkApplianceTrafficShapingUplinkSelection200Response
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_selection_request import UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_traffic_shaping_uplink_selection_request = openapi_client.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest() # UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest |  (optional)

    try:
        # Update uplink selection settings for an MX network
        api_response = api_instance.update_network_appliance_traffic_shaping_uplink_selection(network_id, update_network_appliance_traffic_shaping_uplink_selection_request=update_network_appliance_traffic_shaping_uplink_selection_request)
        print("The response of ApplianceApi->update_network_appliance_traffic_shaping_uplink_selection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_traffic_shaping_uplink_selection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_traffic_shaping_uplink_selection_request** | [**UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest**](UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest.md)|  | [optional] 

### Return type

[**GetNetworkApplianceTrafficShapingUplinkSelection200Response**](GetNetworkApplianceTrafficShapingUplinkSelection200Response.md)

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

# **update_network_appliance_vlan**
> GetNetworkApplianceVlans200ResponseInner update_network_appliance_vlan(network_id, vlan_id, update_network_appliance_vlan_request=update_network_appliance_vlan_request)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    vlan_id = 'vlan_id_example' # str | 
    update_network_appliance_vlan_request = openapi_client.UpdateNetworkApplianceVlanRequest() # UpdateNetworkApplianceVlanRequest |  (optional)

    try:
        # Update a VLAN
        api_response = api_instance.update_network_appliance_vlan(network_id, vlan_id, update_network_appliance_vlan_request=update_network_appliance_vlan_request)
        print("The response of ApplianceApi->update_network_appliance_vlan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_vlan: %s\n" % e)
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

# **update_network_appliance_vlans_settings**
> object update_network_appliance_vlans_settings(network_id, update_network_appliance_vlans_settings_request=update_network_appliance_vlans_settings_request)

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
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_vlans_settings_request = openapi_client.UpdateNetworkApplianceVlansSettingsRequest() # UpdateNetworkApplianceVlansSettingsRequest |  (optional)

    try:
        # Enable/Disable VLANs for the given network
        api_response = api_instance.update_network_appliance_vlans_settings(network_id, update_network_appliance_vlans_settings_request=update_network_appliance_vlans_settings_request)
        print("The response of ApplianceApi->update_network_appliance_vlans_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_vlans_settings: %s\n" % e)
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

# **update_network_appliance_vpn_bgp**
> object update_network_appliance_vpn_bgp(network_id, update_network_appliance_vpn_bgp_request)

Update a Hub BGP Configuration

Update a Hub BGP Configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_vpn_bgp_request import UpdateNetworkApplianceVpnBgpRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_vpn_bgp_request = openapi_client.UpdateNetworkApplianceVpnBgpRequest() # UpdateNetworkApplianceVpnBgpRequest | 

    try:
        # Update a Hub BGP Configuration
        api_response = api_instance.update_network_appliance_vpn_bgp(network_id, update_network_appliance_vpn_bgp_request)
        print("The response of ApplianceApi->update_network_appliance_vpn_bgp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_vpn_bgp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_vpn_bgp_request** | [**UpdateNetworkApplianceVpnBgpRequest**](UpdateNetworkApplianceVpnBgpRequest.md)|  | 

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

# **update_network_appliance_vpn_site_to_site_vpn**
> GetNetworkApplianceVpnSiteToSiteVpn200Response update_network_appliance_vpn_site_to_site_vpn(network_id, update_network_appliance_vpn_site_to_site_vpn_request)

Update the site-to-site VPN settings of a network

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_vpn_site_to_site_vpn200_response import GetNetworkApplianceVpnSiteToSiteVpn200Response
from openapi_client.models.update_network_appliance_vpn_site_to_site_vpn_request import UpdateNetworkApplianceVpnSiteToSiteVpnRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_vpn_site_to_site_vpn_request = openapi_client.UpdateNetworkApplianceVpnSiteToSiteVpnRequest() # UpdateNetworkApplianceVpnSiteToSiteVpnRequest | 

    try:
        # Update the site-to-site VPN settings of a network
        api_response = api_instance.update_network_appliance_vpn_site_to_site_vpn(network_id, update_network_appliance_vpn_site_to_site_vpn_request)
        print("The response of ApplianceApi->update_network_appliance_vpn_site_to_site_vpn:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_vpn_site_to_site_vpn: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_vpn_site_to_site_vpn_request** | [**UpdateNetworkApplianceVpnSiteToSiteVpnRequest**](UpdateNetworkApplianceVpnSiteToSiteVpnRequest.md)|  | 

### Return type

[**GetNetworkApplianceVpnSiteToSiteVpn200Response**](GetNetworkApplianceVpnSiteToSiteVpn200Response.md)

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

# **update_network_appliance_warm_spare**
> object update_network_appliance_warm_spare(network_id, update_network_appliance_warm_spare_request)

Update MX warm spare settings

Update MX warm spare settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_warm_spare_request import UpdateNetworkApplianceWarmSpareRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_warm_spare_request = openapi_client.UpdateNetworkApplianceWarmSpareRequest() # UpdateNetworkApplianceWarmSpareRequest | 

    try:
        # Update MX warm spare settings
        api_response = api_instance.update_network_appliance_warm_spare(network_id, update_network_appliance_warm_spare_request)
        print("The response of ApplianceApi->update_network_appliance_warm_spare:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_network_appliance_warm_spare: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_warm_spare_request** | [**UpdateNetworkApplianceWarmSpareRequest**](UpdateNetworkApplianceWarmSpareRequest.md)|  | 

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

# **update_organization_appliance_security_intrusion**
> object update_organization_appliance_security_intrusion(organization_id, update_organization_appliance_security_intrusion_request)

Sets supported intrusion settings for an organization

Sets supported intrusion settings for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_appliance_security_intrusion_request import UpdateOrganizationApplianceSecurityIntrusionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_appliance_security_intrusion_request = openapi_client.UpdateOrganizationApplianceSecurityIntrusionRequest() # UpdateOrganizationApplianceSecurityIntrusionRequest | 

    try:
        # Sets supported intrusion settings for an organization
        api_response = api_instance.update_organization_appliance_security_intrusion(organization_id, update_organization_appliance_security_intrusion_request)
        print("The response of ApplianceApi->update_organization_appliance_security_intrusion:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_organization_appliance_security_intrusion: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_appliance_security_intrusion_request** | [**UpdateOrganizationApplianceSecurityIntrusionRequest**](UpdateOrganizationApplianceSecurityIntrusionRequest.md)|  | 

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

# **update_organization_appliance_vpn_third_party_vpn_peers**
> GetOrganizationApplianceVpnThirdPartyVPNPeers200Response update_organization_appliance_vpn_third_party_vpn_peers(organization_id, update_organization_appliance_vpn_third_party_vpn_peers_request)

Update the third party VPN peers for an organization

Update the third party VPN peers for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_appliance_vpn_third_party_vpn_peers200_response import GetOrganizationApplianceVpnThirdPartyVPNPeers200Response
from openapi_client.models.update_organization_appliance_vpn_third_party_vpn_peers_request import UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_appliance_vpn_third_party_vpn_peers_request = openapi_client.UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest() # UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest | 

    try:
        # Update the third party VPN peers for an organization
        api_response = api_instance.update_organization_appliance_vpn_third_party_vpn_peers(organization_id, update_organization_appliance_vpn_third_party_vpn_peers_request)
        print("The response of ApplianceApi->update_organization_appliance_vpn_third_party_vpn_peers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_organization_appliance_vpn_third_party_vpn_peers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_appliance_vpn_third_party_vpn_peers_request** | [**UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest**](UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest.md)|  | 

### Return type

[**GetOrganizationApplianceVpnThirdPartyVPNPeers200Response**](GetOrganizationApplianceVpnThirdPartyVPNPeers200Response.md)

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

# **update_organization_appliance_vpn_vpn_firewall_rules**
> object update_organization_appliance_vpn_vpn_firewall_rules(organization_id, update_organization_appliance_vpn_vpn_firewall_rules_request=update_organization_appliance_vpn_vpn_firewall_rules_request)

Update the firewall rules of an organization's site-to-site VPN

Update the firewall rules of an organization's site-to-site VPN

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_appliance_vpn_vpn_firewall_rules_request import UpdateOrganizationApplianceVpnVpnFirewallRulesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_appliance_vpn_vpn_firewall_rules_request = openapi_client.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest() # UpdateOrganizationApplianceVpnVpnFirewallRulesRequest |  (optional)

    try:
        # Update the firewall rules of an organization's site-to-site VPN
        api_response = api_instance.update_organization_appliance_vpn_vpn_firewall_rules(organization_id, update_organization_appliance_vpn_vpn_firewall_rules_request=update_organization_appliance_vpn_vpn_firewall_rules_request)
        print("The response of ApplianceApi->update_organization_appliance_vpn_vpn_firewall_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceApi->update_organization_appliance_vpn_vpn_firewall_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_appliance_vpn_vpn_firewall_rules_request** | [**UpdateOrganizationApplianceVpnVpnFirewallRulesRequest**](UpdateOrganizationApplianceVpnVpnFirewallRulesRequest.md)|  | [optional] 

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


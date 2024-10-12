# UpdateNetworkWirelessSsidRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_directory** | [**UpdateNetworkWirelessSsidRequestActiveDirectory**](UpdateNetworkWirelessSsidRequestActiveDirectory.md) |  | [optional] 
**adult_content_filtering_enabled** | **bool** | Boolean indicating whether or not adult content will be blocked | [optional] 
**ap_tags_and_vlan_ids** | [**List[UpdateNetworkWirelessSsidRequestApTagsAndVlanIdsInner]**](UpdateNetworkWirelessSsidRequestApTagsAndVlanIdsInner.md) | The list of tags and VLAN IDs used for VLAN tagging. This param is only valid when the ipAssignmentMode is &#39;Bridge mode&#39; or &#39;Layer 3 roaming&#39; | [optional] 
**auth_mode** | **str** | The association control method for the SSID (&#39;open&#39;, &#39;open-enhanced&#39;, &#39;psk&#39;, &#39;open-with-radius&#39;, &#39;open-with-nac&#39;, &#39;8021x-meraki&#39;, &#39;8021x-nac&#39;, &#39;8021x-radius&#39;, &#39;8021x-google&#39;, &#39;8021x-localradius&#39;, &#39;ipsk-with-radius&#39; or &#39;ipsk-without-radius&#39;) | [optional] 
**availability_tags** | **List[str]** | Accepts a list of tags for this SSID. If availableOnAllAps is false, then the SSID will only be broadcast by APs with tags matching any of the tags in this list. | [optional] 
**available_on_all_aps** | **bool** | Boolean indicating whether all APs should broadcast the SSID or if it should be restricted to APs matching any availability tags. Can only be false if the SSID has availability tags. | [optional] 
**band_selection** | **str** | The client-serving radio frequencies of this SSID in the default indoor RF profile. (&#39;Dual band operation&#39;, &#39;5 GHz band only&#39; or &#39;Dual band operation with Band Steering&#39;) | [optional] 
**concentrator_network_id** | **str** | The concentrator to use when the ipAssignmentMode is &#39;Layer 3 roaming with a concentrator&#39; or &#39;VPN&#39;. | [optional] 
**default_vlan_id** | **int** | The default VLAN ID used for &#39;all other APs&#39;. This param is only valid when the ipAssignmentMode is &#39;Bridge mode&#39; or &#39;Layer 3 roaming&#39; | [optional] 
**disassociate_clients_on_vpn_failover** | **bool** | Disassociate clients when &#39;VPN&#39; concentrator failover occurs in order to trigger clients to re-associate and generate new DHCP requests. This param is only valid if ipAssignmentMode is &#39;VPN&#39;. | [optional] 
**dns_rewrite** | [**UpdateNetworkWirelessSsidRequestDnsRewrite**](UpdateNetworkWirelessSsidRequestDnsRewrite.md) |  | [optional] 
**dot11r** | [**UpdateNetworkWirelessSsidRequestDot11r**](UpdateNetworkWirelessSsidRequestDot11r.md) |  | [optional] 
**dot11w** | [**UpdateNetworkWirelessSsidRequestDot11w**](UpdateNetworkWirelessSsidRequestDot11w.md) |  | [optional] 
**enabled** | **bool** | Whether or not the SSID is enabled | [optional] 
**encryption_mode** | **str** | The psk encryption mode for the SSID (&#39;wep&#39; or &#39;wpa&#39;). This param is only valid if the authMode is &#39;psk&#39; | [optional] 
**enterprise_admin_access** | **str** | Whether or not an SSID is accessible by &#39;enterprise&#39; administrators (&#39;access disabled&#39; or &#39;access enabled&#39;) | [optional] 
**gre** | [**UpdateNetworkWirelessSsidRequestGre**](UpdateNetworkWirelessSsidRequestGre.md) |  | [optional] 
**ip_assignment_mode** | **str** | The client IP assignment mode (&#39;NAT mode&#39;, &#39;Bridge mode&#39;, &#39;Layer 3 roaming&#39;, &#39;Ethernet over GRE&#39;, &#39;Layer 3 roaming with a concentrator&#39; or &#39;VPN&#39;) | [optional] 
**lan_isolation_enabled** | **bool** | Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is &#39;Bridge mode&#39;. | [optional] 
**ldap** | [**UpdateNetworkWirelessSsidRequestLdap**](UpdateNetworkWirelessSsidRequestLdap.md) |  | [optional] 
**local_radius** | [**UpdateNetworkWirelessSsidRequestLocalRadius**](UpdateNetworkWirelessSsidRequestLocalRadius.md) |  | [optional] 
**mandatory_dhcp_enabled** | **bool** | If true, Mandatory DHCP will enforce that clients connecting to this SSID must use the IP address assigned by the DHCP server. Clients who use a static IP address won&#39;t be able to associate. | [optional] 
**min_bitrate** | **float** | The minimum bitrate in Mbps of this SSID in the default indoor RF profile. (&#39;1&#39;, &#39;2&#39;, &#39;5.5&#39;, &#39;6&#39;, &#39;9&#39;, &#39;11&#39;, &#39;12&#39;, &#39;18&#39;, &#39;24&#39;, &#39;36&#39;, &#39;48&#39; or &#39;54&#39;) | [optional] 
**name** | **str** | The name of the SSID | [optional] 
**oauth** | [**UpdateNetworkWirelessSsidRequestOauth**](UpdateNetworkWirelessSsidRequestOauth.md) |  | [optional] 
**per_client_bandwidth_limit_down** | **int** | The download bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**per_client_bandwidth_limit_up** | **int** | The upload bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**per_ssid_bandwidth_limit_down** | **int** | The total download bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**per_ssid_bandwidth_limit_up** | **int** | The total upload bandwidth limit in Kbps. (0 represents no limit.) | [optional] 
**psk** | **str** | The passkey for the SSID. This param is only valid if the authMode is &#39;psk&#39; | [optional] 
**radius_accounting_enabled** | **bool** | Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is &#39;open-with-radius&#39;, &#39;8021x-radius&#39; or &#39;ipsk-with-radius&#39; | [optional] 
**radius_accounting_interim_interval** | **int** | The interval (in seconds) in which accounting information is updated and sent to the RADIUS accounting server. | [optional] 
**radius_accounting_servers** | [**List[UpdateNetworkWirelessSsidRequestRadiusAccountingServersInner]**](UpdateNetworkWirelessSsidRequestRadiusAccountingServersInner.md) | The RADIUS accounting 802.1X servers to be used for authentication. This param is only valid if the authMode is &#39;open-with-radius&#39;, &#39;8021x-radius&#39; or &#39;ipsk-with-radius&#39; and radiusAccountingEnabled is &#39;true&#39; | [optional] 
**radius_attribute_for_group_policies** | **str** | Specify the RADIUS attribute used to look up group policies (&#39;Filter-Id&#39;, &#39;Reply-Message&#39;, &#39;Airespace-ACL-Name&#39; or &#39;Aruba-User-Role&#39;). Access points must receive this attribute in the RADIUS Access-Accept message | [optional] 
**radius_authentication_nas_id** | **str** | The template of the NAS identifier to be used for RADIUS authentication (ex. $NODE_MAC$:$VAP_NUM$). | [optional] 
**radius_called_station_id** | **str** | The template of the called station identifier to be used for RADIUS (ex. $NODE_MAC$:$VAP_NUM$). | [optional] 
**radius_coa_enabled** | **bool** | If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server. | [optional] 
**radius_failover_policy** | **str** | This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable (&#39;Deny access&#39; or &#39;Allow access&#39;) | [optional] 
**radius_fallback_enabled** | **bool** | Whether or not higher priority RADIUS servers should be retried after 60 seconds. | [optional] 
**radius_guest_vlan_enabled** | **bool** | Whether or not RADIUS Guest VLAN is enabled. This param is only valid if the authMode is &#39;open-with-radius&#39; and addressing mode is not set to &#39;isolated&#39; or &#39;nat&#39; mode | [optional] 
**radius_guest_vlan_id** | **int** | VLAN ID of the RADIUS Guest VLAN. This param is only valid if the authMode is &#39;open-with-radius&#39; and addressing mode is not set to &#39;isolated&#39; or &#39;nat&#39; mode | [optional] 
**radius_load_balancing_policy** | **str** | This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts (&#39;Strict priority order&#39; or &#39;Round robin&#39;) | [optional] 
**radius_override** | **bool** | If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is &#39;NAT mode&#39;. | [optional] 
**radius_proxy_enabled** | **bool** | If true, Meraki devices will proxy RADIUS messages through the Meraki cloud to the configured RADIUS auth and accounting servers. | [optional] 
**radius_server_attempts_limit** | **int** | The maximum number of transmit attempts after which a RADIUS server is failed over (must be between 1-5). | [optional] 
**radius_server_timeout** | **int** | The amount of time for which a RADIUS client waits for a reply from the RADIUS server (must be between 1-10 seconds). | [optional] 
**radius_servers** | [**List[UpdateNetworkWirelessSsidRequestRadiusServersInner]**](UpdateNetworkWirelessSsidRequestRadiusServersInner.md) | The RADIUS 802.1X servers to be used for authentication. This param is only valid if the authMode is &#39;open-with-radius&#39;, &#39;8021x-radius&#39; or &#39;ipsk-with-radius&#39; | [optional] 
**radius_testing_enabled** | **bool** | If true, Meraki devices will periodically send Access-Request messages to configured RADIUS servers using identity &#39;meraki_8021x_test&#39; to ensure that the RADIUS servers are reachable. | [optional] 
**secondary_concentrator_network_id** | **str** | The secondary concentrator to use when the ipAssignmentMode is &#39;VPN&#39;. If configured, the APs will switch to using this concentrator if the primary concentrator is unreachable. This param is optional. (&#39;disabled&#39; represents no secondary concentrator.) | [optional] 
**speed_burst** | [**UpdateNetworkWirelessSsidRequestSpeedBurst**](UpdateNetworkWirelessSsidRequestSpeedBurst.md) |  | [optional] 
**splash_guest_sponsor_domains** | **List[str]** | Array of valid sponsor email domains for sponsored guest splash type. | [optional] 
**splash_page** | **str** | The type of splash page for the SSID (&#39;None&#39;, &#39;Click-through splash page&#39;, &#39;Billing&#39;, &#39;Password-protected with Meraki RADIUS&#39;, &#39;Password-protected with custom RADIUS&#39;, &#39;Password-protected with Active Directory&#39;, &#39;Password-protected with LDAP&#39;, &#39;SMS authentication&#39;, &#39;Systems Manager Sentry&#39;, &#39;Facebook Wi-Fi&#39;, &#39;Google OAuth&#39;, &#39;Sponsored guest&#39;, &#39;Cisco ISE&#39; or &#39;Google Apps domain&#39;). This attribute is not supported for template children. | [optional] 
**use_vlan_tagging** | **bool** | Whether or not traffic should be directed to use specific VLANs. This param is only valid if the ipAssignmentMode is &#39;Bridge mode&#39; or &#39;Layer 3 roaming&#39; | [optional] 
**visible** | **bool** | Boolean indicating whether APs should advertise or hide this SSID. APs will only broadcast this SSID if set to true | [optional] 
**vlan_id** | **int** | The VLAN ID used for VLAN tagging. This param is only valid when the ipAssignmentMode is &#39;Layer 3 roaming with a concentrator&#39; or &#39;VPN&#39; | [optional] 
**walled_garden_enabled** | **bool** | Allow access to a configurable list of IP ranges, which users may access prior to sign-on. | [optional] 
**walled_garden_ranges** | **List[str]** | Specify your walled garden by entering an array of addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. &#39;192.168.1.1/24&#39;, &#39;192.168.37.10/32&#39;, &#39;www.yahoo.com&#39;, &#39;*.google.com&#39;]). Meraki&#39;s splash page is automatically included in your walled garden. | [optional] 
**wpa_encryption_mode** | **str** | The types of WPA encryption. (&#39;WPA1 only&#39;, &#39;WPA1 and WPA2&#39;, &#39;WPA2 only&#39;, &#39;WPA3 Transition Mode&#39;, &#39;WPA3 only&#39; or &#39;WPA3 192-bit Security&#39;) | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request import UpdateNetworkWirelessSsidRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequest from a JSON string
update_network_wireless_ssid_request_instance = UpdateNetworkWirelessSsidRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequest.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_dict = update_network_wireless_ssid_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequest from a dict
update_network_wireless_ssid_request_from_dict = UpdateNetworkWirelessSsidRequest.from_dict(update_network_wireless_ssid_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



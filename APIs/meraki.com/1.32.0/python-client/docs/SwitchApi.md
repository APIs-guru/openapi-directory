# openapi_client.SwitchApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_network_switch_stack**](SwitchApi.md#add_network_switch_stack) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/add | Add a switch to a stack
[**clone_organization_switch_devices**](SwitchApi.md#clone_organization_switch_devices) | **POST** /organizations/{organizationId}/switch/devices/clone | Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
[**create_device_switch_routing_interface**](SwitchApi.md#create_device_switch_routing_interface) | **POST** /devices/{serial}/switch/routing/interfaces | Create a layer 3 interface for a switch
[**create_device_switch_routing_static_route**](SwitchApi.md#create_device_switch_routing_static_route) | **POST** /devices/{serial}/switch/routing/staticRoutes | Create a layer 3 static route for a switch
[**create_network_switch_access_policy**](SwitchApi.md#create_network_switch_access_policy) | **POST** /networks/{networkId}/switch/accessPolicies | Create an access policy for a switch network
[**create_network_switch_dhcp_server_policy_arp_inspection_trusted_server**](SwitchApi.md#create_network_switch_dhcp_server_policy_arp_inspection_trusted_server) | **POST** /networks/{networkId}/switch/dhcpServerPolicy/arpInspection/trustedServers | Add a server to be trusted by Dynamic ARP Inspection on this network
[**create_network_switch_link_aggregation**](SwitchApi.md#create_network_switch_link_aggregation) | **POST** /networks/{networkId}/switch/linkAggregations | Create a link aggregation group
[**create_network_switch_port_schedule**](SwitchApi.md#create_network_switch_port_schedule) | **POST** /networks/{networkId}/switch/portSchedules | Add a switch port schedule
[**create_network_switch_qos_rule**](SwitchApi.md#create_network_switch_qos_rule) | **POST** /networks/{networkId}/switch/qosRules | Add a quality of service rule
[**create_network_switch_routing_multicast_rendezvous_point**](SwitchApi.md#create_network_switch_routing_multicast_rendezvous_point) | **POST** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | Create a multicast rendezvous point
[**create_network_switch_stack**](SwitchApi.md#create_network_switch_stack) | **POST** /networks/{networkId}/switch/stacks | Create a stack
[**create_network_switch_stack_routing_interface**](SwitchApi.md#create_network_switch_stack_routing_interface) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | Create a layer 3 interface for a switch stack
[**create_network_switch_stack_routing_static_route**](SwitchApi.md#create_network_switch_stack_routing_static_route) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | Create a layer 3 static route for a switch stack
[**cycle_device_switch_ports**](SwitchApi.md#cycle_device_switch_ports) | **POST** /devices/{serial}/switch/ports/cycle | Cycle a set of switch ports
[**delete_device_switch_routing_interface**](SwitchApi.md#delete_device_switch_routing_interface) | **DELETE** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Delete a layer 3 interface from the switch
[**delete_device_switch_routing_static_route**](SwitchApi.md#delete_device_switch_routing_static_route) | **DELETE** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch
[**delete_network_switch_access_policy**](SwitchApi.md#delete_network_switch_access_policy) | **DELETE** /networks/{networkId}/switch/accessPolicies/{accessPolicyNumber} | Delete an access policy for a switch network
[**delete_network_switch_dhcp_server_policy_arp_inspection_trusted_server**](SwitchApi.md#delete_network_switch_dhcp_server_policy_arp_inspection_trusted_server) | **DELETE** /networks/{networkId}/switch/dhcpServerPolicy/arpInspection/trustedServers/{trustedServerId} | Remove a server from being trusted by Dynamic ARP Inspection on this network
[**delete_network_switch_link_aggregation**](SwitchApi.md#delete_network_switch_link_aggregation) | **DELETE** /networks/{networkId}/switch/linkAggregations/{linkAggregationId} | Split a link aggregation group into separate ports
[**delete_network_switch_port_schedule**](SwitchApi.md#delete_network_switch_port_schedule) | **DELETE** /networks/{networkId}/switch/portSchedules/{portScheduleId} | Delete a switch port schedule
[**delete_network_switch_qos_rule**](SwitchApi.md#delete_network_switch_qos_rule) | **DELETE** /networks/{networkId}/switch/qosRules/{qosRuleId} | Delete a quality of service rule
[**delete_network_switch_routing_multicast_rendezvous_point**](SwitchApi.md#delete_network_switch_routing_multicast_rendezvous_point) | **DELETE** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Delete a multicast rendezvous point
[**delete_network_switch_stack**](SwitchApi.md#delete_network_switch_stack) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId} | Delete a stack
[**delete_network_switch_stack_routing_interface**](SwitchApi.md#delete_network_switch_stack_routing_interface) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Delete a layer 3 interface from a switch stack
[**delete_network_switch_stack_routing_static_route**](SwitchApi.md#delete_network_switch_stack_routing_static_route) | **DELETE** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Delete a layer 3 static route for a switch stack
[**get_device_switch_port**](SwitchApi.md#get_device_switch_port) | **GET** /devices/{serial}/switch/ports/{portId} | Return a switch port
[**get_device_switch_ports**](SwitchApi.md#get_device_switch_ports) | **GET** /devices/{serial}/switch/ports | List the switch ports for a switch
[**get_device_switch_ports_statuses**](SwitchApi.md#get_device_switch_ports_statuses) | **GET** /devices/{serial}/switch/ports/statuses | Return the status for all the ports of a switch
[**get_device_switch_ports_statuses_packets**](SwitchApi.md#get_device_switch_ports_statuses_packets) | **GET** /devices/{serial}/switch/ports/statuses/packets | Return the packet counters for all the ports of a switch
[**get_device_switch_routing_interface**](SwitchApi.md#get_device_switch_routing_interface) | **GET** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Return a layer 3 interface for a switch
[**get_device_switch_routing_interface_dhcp**](SwitchApi.md#get_device_switch_routing_interface_dhcp) | **GET** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch
[**get_device_switch_routing_interfaces**](SwitchApi.md#get_device_switch_routing_interfaces) | **GET** /devices/{serial}/switch/routing/interfaces | List layer 3 interfaces for a switch
[**get_device_switch_routing_static_route**](SwitchApi.md#get_device_switch_routing_static_route) | **GET** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch
[**get_device_switch_routing_static_routes**](SwitchApi.md#get_device_switch_routing_static_routes) | **GET** /devices/{serial}/switch/routing/staticRoutes | List layer 3 static routes for a switch
[**get_device_switch_warm_spare**](SwitchApi.md#get_device_switch_warm_spare) | **GET** /devices/{serial}/switch/warmSpare | Return warm spare configuration for a switch
[**get_network_switch_access_control_lists**](SwitchApi.md#get_network_switch_access_control_lists) | **GET** /networks/{networkId}/switch/accessControlLists | Return the access control lists for a MS network
[**get_network_switch_access_policies**](SwitchApi.md#get_network_switch_access_policies) | **GET** /networks/{networkId}/switch/accessPolicies | List the access policies for a switch network
[**get_network_switch_access_policy**](SwitchApi.md#get_network_switch_access_policy) | **GET** /networks/{networkId}/switch/accessPolicies/{accessPolicyNumber} | Return a specific access policy for a switch network
[**get_network_switch_alternate_management_interface**](SwitchApi.md#get_network_switch_alternate_management_interface) | **GET** /networks/{networkId}/switch/alternateManagementInterface | Return the switch alternate management interface for the network
[**get_network_switch_dhcp_server_policy**](SwitchApi.md#get_network_switch_dhcp_server_policy) | **GET** /networks/{networkId}/switch/dhcpServerPolicy | Return the DHCP server settings
[**get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers**](SwitchApi.md#get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers) | **GET** /networks/{networkId}/switch/dhcpServerPolicy/arpInspection/trustedServers | Return the list of servers trusted by Dynamic ARP Inspection on this network
[**get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device**](SwitchApi.md#get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device) | **GET** /networks/{networkId}/switch/dhcpServerPolicy/arpInspection/warnings/byDevice | Return the devices that have a Dynamic ARP Inspection warning and their warnings
[**get_network_switch_dhcp_v4_servers_seen**](SwitchApi.md#get_network_switch_dhcp_v4_servers_seen) | **GET** /networks/{networkId}/switch/dhcp/v4/servers/seen | Return the network&#39;s DHCPv4 servers seen within the selected timeframe (default 1 day)
[**get_network_switch_dscp_to_cos_mappings**](SwitchApi.md#get_network_switch_dscp_to_cos_mappings) | **GET** /networks/{networkId}/switch/dscpToCosMappings | Return the DSCP to CoS mappings
[**get_network_switch_link_aggregations**](SwitchApi.md#get_network_switch_link_aggregations) | **GET** /networks/{networkId}/switch/linkAggregations | List link aggregation groups
[**get_network_switch_mtu**](SwitchApi.md#get_network_switch_mtu) | **GET** /networks/{networkId}/switch/mtu | Return the MTU configuration
[**get_network_switch_port_schedules**](SwitchApi.md#get_network_switch_port_schedules) | **GET** /networks/{networkId}/switch/portSchedules | List switch port schedules
[**get_network_switch_qos_rule**](SwitchApi.md#get_network_switch_qos_rule) | **GET** /networks/{networkId}/switch/qosRules/{qosRuleId} | Return a quality of service rule
[**get_network_switch_qos_rules**](SwitchApi.md#get_network_switch_qos_rules) | **GET** /networks/{networkId}/switch/qosRules | List quality of service rules
[**get_network_switch_qos_rules_order**](SwitchApi.md#get_network_switch_qos_rules_order) | **GET** /networks/{networkId}/switch/qosRules/order | Return the quality of service rule IDs by order in which they will be processed by the switch
[**get_network_switch_routing_multicast**](SwitchApi.md#get_network_switch_routing_multicast) | **GET** /networks/{networkId}/switch/routing/multicast | Return multicast settings for a network
[**get_network_switch_routing_multicast_rendezvous_point**](SwitchApi.md#get_network_switch_routing_multicast_rendezvous_point) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Return a multicast rendezvous point
[**get_network_switch_routing_multicast_rendezvous_points**](SwitchApi.md#get_network_switch_routing_multicast_rendezvous_points) | **GET** /networks/{networkId}/switch/routing/multicast/rendezvousPoints | List multicast rendezvous points
[**get_network_switch_routing_ospf**](SwitchApi.md#get_network_switch_routing_ospf) | **GET** /networks/{networkId}/switch/routing/ospf | Return layer 3 OSPF routing configuration
[**get_network_switch_settings**](SwitchApi.md#get_network_switch_settings) | **GET** /networks/{networkId}/switch/settings | Returns the switch network settings
[**get_network_switch_stack**](SwitchApi.md#get_network_switch_stack) | **GET** /networks/{networkId}/switch/stacks/{switchStackId} | Show a switch stack
[**get_network_switch_stack_routing_interface**](SwitchApi.md#get_network_switch_stack_routing_interface) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Return a layer 3 interface from a switch stack
[**get_network_switch_stack_routing_interface_dhcp**](SwitchApi.md#get_network_switch_stack_routing_interface_dhcp) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Return a layer 3 interface DHCP configuration for a switch stack
[**get_network_switch_stack_routing_interfaces**](SwitchApi.md#get_network_switch_stack_routing_interfaces) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces | List layer 3 interfaces for a switch stack
[**get_network_switch_stack_routing_static_route**](SwitchApi.md#get_network_switch_stack_routing_static_route) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Return a layer 3 static route for a switch stack
[**get_network_switch_stack_routing_static_routes**](SwitchApi.md#get_network_switch_stack_routing_static_routes) | **GET** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes | List layer 3 static routes for a switch stack
[**get_network_switch_stacks**](SwitchApi.md#get_network_switch_stacks) | **GET** /networks/{networkId}/switch/stacks | List the switch stacks in a network
[**get_network_switch_storm_control**](SwitchApi.md#get_network_switch_storm_control) | **GET** /networks/{networkId}/switch/stormControl | Return the storm control configuration for a switch network
[**get_network_switch_stp**](SwitchApi.md#get_network_switch_stp) | **GET** /networks/{networkId}/switch/stp | Returns STP settings
[**get_organization_config_template_switch_profile_port**](SwitchApi.md#get_organization_config_template_switch_profile_port) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Return a switch profile port
[**get_organization_config_template_switch_profile_ports**](SwitchApi.md#get_organization_config_template_switch_profile_ports) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports | Return all the ports of a switch profile
[**get_organization_config_template_switch_profiles**](SwitchApi.md#get_organization_config_template_switch_profiles) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles | List the switch profiles for your switch template configuration
[**get_organization_switch_ports_by_switch**](SwitchApi.md#get_organization_switch_ports_by_switch) | **GET** /organizations/{organizationId}/switch/ports/bySwitch | List the switchports in an organization by switch
[**remove_network_switch_stack**](SwitchApi.md#remove_network_switch_stack) | **POST** /networks/{networkId}/switch/stacks/{switchStackId}/remove | Remove a switch from a stack
[**update_device_switch_port**](SwitchApi.md#update_device_switch_port) | **PUT** /devices/{serial}/switch/ports/{portId} | Update a switch port
[**update_device_switch_routing_interface**](SwitchApi.md#update_device_switch_routing_interface) | **PUT** /devices/{serial}/switch/routing/interfaces/{interfaceId} | Update a layer 3 interface for a switch
[**update_device_switch_routing_interface_dhcp**](SwitchApi.md#update_device_switch_routing_interface_dhcp) | **PUT** /devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch
[**update_device_switch_routing_static_route**](SwitchApi.md#update_device_switch_routing_static_route) | **PUT** /devices/{serial}/switch/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch
[**update_device_switch_warm_spare**](SwitchApi.md#update_device_switch_warm_spare) | **PUT** /devices/{serial}/switch/warmSpare | Update warm spare configuration for a switch
[**update_network_switch_access_control_lists**](SwitchApi.md#update_network_switch_access_control_lists) | **PUT** /networks/{networkId}/switch/accessControlLists | Update the access control lists for a MS network
[**update_network_switch_access_policy**](SwitchApi.md#update_network_switch_access_policy) | **PUT** /networks/{networkId}/switch/accessPolicies/{accessPolicyNumber} | Update an access policy for a switch network
[**update_network_switch_alternate_management_interface**](SwitchApi.md#update_network_switch_alternate_management_interface) | **PUT** /networks/{networkId}/switch/alternateManagementInterface | Update the switch alternate management interface for the network
[**update_network_switch_dhcp_server_policy**](SwitchApi.md#update_network_switch_dhcp_server_policy) | **PUT** /networks/{networkId}/switch/dhcpServerPolicy | Update the DHCP server settings
[**update_network_switch_dhcp_server_policy_arp_inspection_trusted_server**](SwitchApi.md#update_network_switch_dhcp_server_policy_arp_inspection_trusted_server) | **PUT** /networks/{networkId}/switch/dhcpServerPolicy/arpInspection/trustedServers/{trustedServerId} | Update a server that is trusted by Dynamic ARP Inspection on this network
[**update_network_switch_dscp_to_cos_mappings**](SwitchApi.md#update_network_switch_dscp_to_cos_mappings) | **PUT** /networks/{networkId}/switch/dscpToCosMappings | Update the DSCP to CoS mappings
[**update_network_switch_link_aggregation**](SwitchApi.md#update_network_switch_link_aggregation) | **PUT** /networks/{networkId}/switch/linkAggregations/{linkAggregationId} | Update a link aggregation group
[**update_network_switch_mtu**](SwitchApi.md#update_network_switch_mtu) | **PUT** /networks/{networkId}/switch/mtu | Update the MTU configuration
[**update_network_switch_port_schedule**](SwitchApi.md#update_network_switch_port_schedule) | **PUT** /networks/{networkId}/switch/portSchedules/{portScheduleId} | Update a switch port schedule
[**update_network_switch_qos_rule**](SwitchApi.md#update_network_switch_qos_rule) | **PUT** /networks/{networkId}/switch/qosRules/{qosRuleId} | Update a quality of service rule
[**update_network_switch_qos_rules_order**](SwitchApi.md#update_network_switch_qos_rules_order) | **PUT** /networks/{networkId}/switch/qosRules/order | Update the order in which the rules should be processed by the switch
[**update_network_switch_routing_multicast**](SwitchApi.md#update_network_switch_routing_multicast) | **PUT** /networks/{networkId}/switch/routing/multicast | Update multicast settings for a network
[**update_network_switch_routing_multicast_rendezvous_point**](SwitchApi.md#update_network_switch_routing_multicast_rendezvous_point) | **PUT** /networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId} | Update a multicast rendezvous point
[**update_network_switch_routing_ospf**](SwitchApi.md#update_network_switch_routing_ospf) | **PUT** /networks/{networkId}/switch/routing/ospf | Update layer 3 OSPF routing configuration
[**update_network_switch_settings**](SwitchApi.md#update_network_switch_settings) | **PUT** /networks/{networkId}/switch/settings | Update switch network settings
[**update_network_switch_stack_routing_interface**](SwitchApi.md#update_network_switch_stack_routing_interface) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId} | Update a layer 3 interface for a switch stack
[**update_network_switch_stack_routing_interface_dhcp**](SwitchApi.md#update_network_switch_stack_routing_interface_dhcp) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp | Update a layer 3 interface DHCP configuration for a switch stack
[**update_network_switch_stack_routing_static_route**](SwitchApi.md#update_network_switch_stack_routing_static_route) | **PUT** /networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId} | Update a layer 3 static route for a switch stack
[**update_network_switch_storm_control**](SwitchApi.md#update_network_switch_storm_control) | **PUT** /networks/{networkId}/switch/stormControl | Update the storm control configuration for a switch network
[**update_network_switch_stp**](SwitchApi.md#update_network_switch_stp) | **PUT** /networks/{networkId}/switch/stp | Updates STP settings
[**update_organization_config_template_switch_profile_port**](SwitchApi.md#update_organization_config_template_switch_profile_port) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Update a switch profile port


# **add_network_switch_stack**
> object add_network_switch_stack(network_id, switch_stack_id, add_network_switch_stack_request)

Add a switch to a stack

Add a switch to a stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.add_network_switch_stack_request import AddNetworkSwitchStackRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    add_network_switch_stack_request = openapi_client.AddNetworkSwitchStackRequest() # AddNetworkSwitchStackRequest | 

    try:
        # Add a switch to a stack
        api_response = api_instance.add_network_switch_stack(network_id, switch_stack_id, add_network_switch_stack_request)
        print("The response of SwitchApi->add_network_switch_stack:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->add_network_switch_stack: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **add_network_switch_stack_request** | [**AddNetworkSwitchStackRequest**](AddNetworkSwitchStackRequest.md)|  | 

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

# **clone_organization_switch_devices**
> object clone_organization_switch_devices(organization_id, clone_organization_switch_devices_request)

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
    api_instance = openapi_client.SwitchApi(api_client)
    organization_id = 'organization_id_example' # str | 
    clone_organization_switch_devices_request = openapi_client.CloneOrganizationSwitchDevicesRequest() # CloneOrganizationSwitchDevicesRequest | 

    try:
        # Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
        api_response = api_instance.clone_organization_switch_devices(organization_id, clone_organization_switch_devices_request)
        print("The response of SwitchApi->clone_organization_switch_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->clone_organization_switch_devices: %s\n" % e)
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

# **create_device_switch_routing_interface**
> GetDeviceSwitchRoutingInterfaces200ResponseInner create_device_switch_routing_interface(serial, create_device_switch_routing_interface_request=create_device_switch_routing_interface_request)

Create a layer 3 interface for a switch

Create a layer 3 interface for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_device_switch_routing_interface_request import CreateDeviceSwitchRoutingInterfaceRequest
from openapi_client.models.get_device_switch_routing_interfaces200_response_inner import GetDeviceSwitchRoutingInterfaces200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    create_device_switch_routing_interface_request = openapi_client.CreateDeviceSwitchRoutingInterfaceRequest() # CreateDeviceSwitchRoutingInterfaceRequest |  (optional)

    try:
        # Create a layer 3 interface for a switch
        api_response = api_instance.create_device_switch_routing_interface(serial, create_device_switch_routing_interface_request=create_device_switch_routing_interface_request)
        print("The response of SwitchApi->create_device_switch_routing_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->create_device_switch_routing_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **create_device_switch_routing_interface_request** | [**CreateDeviceSwitchRoutingInterfaceRequest**](CreateDeviceSwitchRoutingInterfaceRequest.md)|  | [optional] 

### Return type

[**GetDeviceSwitchRoutingInterfaces200ResponseInner**](GetDeviceSwitchRoutingInterfaces200ResponseInner.md)

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

# **create_device_switch_routing_static_route**
> object create_device_switch_routing_static_route(serial, create_device_switch_routing_static_route_request)

Create a layer 3 static route for a switch

Create a layer 3 static route for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_device_switch_routing_static_route_request import CreateDeviceSwitchRoutingStaticRouteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    create_device_switch_routing_static_route_request = openapi_client.CreateDeviceSwitchRoutingStaticRouteRequest() # CreateDeviceSwitchRoutingStaticRouteRequest | 

    try:
        # Create a layer 3 static route for a switch
        api_response = api_instance.create_device_switch_routing_static_route(serial, create_device_switch_routing_static_route_request)
        print("The response of SwitchApi->create_device_switch_routing_static_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->create_device_switch_routing_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **create_device_switch_routing_static_route_request** | [**CreateDeviceSwitchRoutingStaticRouteRequest**](CreateDeviceSwitchRoutingStaticRouteRequest.md)|  | 

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

# **create_network_switch_access_policy**
> GetNetworkSwitchAccessPolicies200ResponseInner create_network_switch_access_policy(network_id, create_network_switch_access_policy_request)

Create an access policy for a switch network

Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_access_policy_request import CreateNetworkSwitchAccessPolicyRequest
from openapi_client.models.get_network_switch_access_policies200_response_inner import GetNetworkSwitchAccessPolicies200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_access_policy_request = openapi_client.CreateNetworkSwitchAccessPolicyRequest() # CreateNetworkSwitchAccessPolicyRequest | 

    try:
        # Create an access policy for a switch network
        api_response = api_instance.create_network_switch_access_policy(network_id, create_network_switch_access_policy_request)
        print("The response of SwitchApi->create_network_switch_access_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->create_network_switch_access_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_access_policy_request** | [**CreateNetworkSwitchAccessPolicyRequest**](CreateNetworkSwitchAccessPolicyRequest.md)|  | 

### Return type

[**GetNetworkSwitchAccessPolicies200ResponseInner**](GetNetworkSwitchAccessPolicies200ResponseInner.md)

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

# **create_network_switch_dhcp_server_policy_arp_inspection_trusted_server**
> GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner create_network_switch_dhcp_server_policy_arp_inspection_trusted_server(network_id, create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request)

Add a server to be trusted by Dynamic ARP Inspection on this network

Add a server to be trusted by Dynamic ARP Inspection on this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request import CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest
from openapi_client.models.get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers200_response_inner import GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request = openapi_client.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest() # CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest | 

    try:
        # Add a server to be trusted by Dynamic ARP Inspection on this network
        api_response = api_instance.create_network_switch_dhcp_server_policy_arp_inspection_trusted_server(network_id, create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request)
        print("The response of SwitchApi->create_network_switch_dhcp_server_policy_arp_inspection_trusted_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->create_network_switch_dhcp_server_policy_arp_inspection_trusted_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request** | [**CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest**](CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest.md)|  | 

### Return type

[**GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner**](GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner.md)

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

# **create_network_switch_link_aggregation**
> object create_network_switch_link_aggregation(network_id, create_network_switch_link_aggregation_request=create_network_switch_link_aggregation_request)

Create a link aggregation group

Create a link aggregation group

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_link_aggregation_request import CreateNetworkSwitchLinkAggregationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_link_aggregation_request = openapi_client.CreateNetworkSwitchLinkAggregationRequest() # CreateNetworkSwitchLinkAggregationRequest |  (optional)

    try:
        # Create a link aggregation group
        api_response = api_instance.create_network_switch_link_aggregation(network_id, create_network_switch_link_aggregation_request=create_network_switch_link_aggregation_request)
        print("The response of SwitchApi->create_network_switch_link_aggregation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->create_network_switch_link_aggregation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_link_aggregation_request** | [**CreateNetworkSwitchLinkAggregationRequest**](CreateNetworkSwitchLinkAggregationRequest.md)|  | [optional] 

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

# **create_network_switch_port_schedule**
> object create_network_switch_port_schedule(network_id, create_network_switch_port_schedule_request)

Add a switch port schedule

Add a switch port schedule

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_port_schedule_request import CreateNetworkSwitchPortScheduleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_port_schedule_request = openapi_client.CreateNetworkSwitchPortScheduleRequest() # CreateNetworkSwitchPortScheduleRequest | 

    try:
        # Add a switch port schedule
        api_response = api_instance.create_network_switch_port_schedule(network_id, create_network_switch_port_schedule_request)
        print("The response of SwitchApi->create_network_switch_port_schedule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->create_network_switch_port_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_port_schedule_request** | [**CreateNetworkSwitchPortScheduleRequest**](CreateNetworkSwitchPortScheduleRequest.md)|  | 

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

# **create_network_switch_qos_rule**
> object create_network_switch_qos_rule(network_id, create_network_switch_qos_rule_request)

Add a quality of service rule

Add a quality of service rule

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_qos_rule_request import CreateNetworkSwitchQosRuleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_qos_rule_request = openapi_client.CreateNetworkSwitchQosRuleRequest() # CreateNetworkSwitchQosRuleRequest | 

    try:
        # Add a quality of service rule
        api_response = api_instance.create_network_switch_qos_rule(network_id, create_network_switch_qos_rule_request)
        print("The response of SwitchApi->create_network_switch_qos_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->create_network_switch_qos_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_qos_rule_request** | [**CreateNetworkSwitchQosRuleRequest**](CreateNetworkSwitchQosRuleRequest.md)|  | 

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

# **create_network_switch_routing_multicast_rendezvous_point**
> object create_network_switch_routing_multicast_rendezvous_point(network_id, create_network_switch_routing_multicast_rendezvous_point_request)

Create a multicast rendezvous point

Create a multicast rendezvous point

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_routing_multicast_rendezvous_point_request import CreateNetworkSwitchRoutingMulticastRendezvousPointRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_routing_multicast_rendezvous_point_request = openapi_client.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest() # CreateNetworkSwitchRoutingMulticastRendezvousPointRequest | 

    try:
        # Create a multicast rendezvous point
        api_response = api_instance.create_network_switch_routing_multicast_rendezvous_point(network_id, create_network_switch_routing_multicast_rendezvous_point_request)
        print("The response of SwitchApi->create_network_switch_routing_multicast_rendezvous_point:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->create_network_switch_routing_multicast_rendezvous_point: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_routing_multicast_rendezvous_point_request** | [**CreateNetworkSwitchRoutingMulticastRendezvousPointRequest**](CreateNetworkSwitchRoutingMulticastRendezvousPointRequest.md)|  | 

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

# **create_network_switch_stack**
> object create_network_switch_stack(network_id, create_network_switch_stack_request)

Create a stack

Create a stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_stack_request import CreateNetworkSwitchStackRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_stack_request = openapi_client.CreateNetworkSwitchStackRequest() # CreateNetworkSwitchStackRequest | 

    try:
        # Create a stack
        api_response = api_instance.create_network_switch_stack(network_id, create_network_switch_stack_request)
        print("The response of SwitchApi->create_network_switch_stack:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->create_network_switch_stack: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_stack_request** | [**CreateNetworkSwitchStackRequest**](CreateNetworkSwitchStackRequest.md)|  | 

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

# **create_network_switch_stack_routing_interface**
> object create_network_switch_stack_routing_interface(network_id, switch_stack_id, create_network_switch_stack_routing_interface_request)

Create a layer 3 interface for a switch stack

Create a layer 3 interface for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_stack_routing_interface_request import CreateNetworkSwitchStackRoutingInterfaceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    create_network_switch_stack_routing_interface_request = openapi_client.CreateNetworkSwitchStackRoutingInterfaceRequest() # CreateNetworkSwitchStackRoutingInterfaceRequest | 

    try:
        # Create a layer 3 interface for a switch stack
        api_response = api_instance.create_network_switch_stack_routing_interface(network_id, switch_stack_id, create_network_switch_stack_routing_interface_request)
        print("The response of SwitchApi->create_network_switch_stack_routing_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->create_network_switch_stack_routing_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **create_network_switch_stack_routing_interface_request** | [**CreateNetworkSwitchStackRoutingInterfaceRequest**](CreateNetworkSwitchStackRoutingInterfaceRequest.md)|  | 

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

# **create_network_switch_stack_routing_static_route**
> object create_network_switch_stack_routing_static_route(network_id, switch_stack_id, create_device_switch_routing_static_route_request)

Create a layer 3 static route for a switch stack

Create a layer 3 static route for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_device_switch_routing_static_route_request import CreateDeviceSwitchRoutingStaticRouteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    create_device_switch_routing_static_route_request = openapi_client.CreateDeviceSwitchRoutingStaticRouteRequest() # CreateDeviceSwitchRoutingStaticRouteRequest | 

    try:
        # Create a layer 3 static route for a switch stack
        api_response = api_instance.create_network_switch_stack_routing_static_route(network_id, switch_stack_id, create_device_switch_routing_static_route_request)
        print("The response of SwitchApi->create_network_switch_stack_routing_static_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->create_network_switch_stack_routing_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **create_device_switch_routing_static_route_request** | [**CreateDeviceSwitchRoutingStaticRouteRequest**](CreateDeviceSwitchRoutingStaticRouteRequest.md)|  | 

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

# **cycle_device_switch_ports**
> object cycle_device_switch_ports(serial, cycle_device_switch_ports_request)

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
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    cycle_device_switch_ports_request = openapi_client.CycleDeviceSwitchPortsRequest() # CycleDeviceSwitchPortsRequest | 

    try:
        # Cycle a set of switch ports
        api_response = api_instance.cycle_device_switch_ports(serial, cycle_device_switch_ports_request)
        print("The response of SwitchApi->cycle_device_switch_ports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->cycle_device_switch_ports: %s\n" % e)
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

# **delete_device_switch_routing_interface**
> delete_device_switch_routing_interface(serial, interface_id)

Delete a layer 3 interface from the switch

Delete a layer 3 interface from the switch

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
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Delete a layer 3 interface from the switch
        api_instance.delete_device_switch_routing_interface(serial, interface_id)
    except Exception as e:
        print("Exception when calling SwitchApi->delete_device_switch_routing_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **interface_id** | **str**|  | 

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

# **delete_device_switch_routing_static_route**
> delete_device_switch_routing_static_route(serial, static_route_id)

Delete a layer 3 static route for a switch

Delete a layer 3 static route for a switch

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
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Delete a layer 3 static route for a switch
        api_instance.delete_device_switch_routing_static_route(serial, static_route_id)
    except Exception as e:
        print("Exception when calling SwitchApi->delete_device_switch_routing_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
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

# **delete_network_switch_access_policy**
> delete_network_switch_access_policy(network_id, access_policy_number)

Delete an access policy for a switch network

Delete an access policy for a switch network

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    access_policy_number = 'access_policy_number_example' # str | 

    try:
        # Delete an access policy for a switch network
        api_instance.delete_network_switch_access_policy(network_id, access_policy_number)
    except Exception as e:
        print("Exception when calling SwitchApi->delete_network_switch_access_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **access_policy_number** | **str**|  | 

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

# **delete_network_switch_dhcp_server_policy_arp_inspection_trusted_server**
> delete_network_switch_dhcp_server_policy_arp_inspection_trusted_server(network_id, trusted_server_id)

Remove a server from being trusted by Dynamic ARP Inspection on this network

Remove a server from being trusted by Dynamic ARP Inspection on this network

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    trusted_server_id = 'trusted_server_id_example' # str | 

    try:
        # Remove a server from being trusted by Dynamic ARP Inspection on this network
        api_instance.delete_network_switch_dhcp_server_policy_arp_inspection_trusted_server(network_id, trusted_server_id)
    except Exception as e:
        print("Exception when calling SwitchApi->delete_network_switch_dhcp_server_policy_arp_inspection_trusted_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **trusted_server_id** | **str**|  | 

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

# **delete_network_switch_link_aggregation**
> delete_network_switch_link_aggregation(network_id, link_aggregation_id)

Split a link aggregation group into separate ports

Split a link aggregation group into separate ports

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    link_aggregation_id = 'link_aggregation_id_example' # str | 

    try:
        # Split a link aggregation group into separate ports
        api_instance.delete_network_switch_link_aggregation(network_id, link_aggregation_id)
    except Exception as e:
        print("Exception when calling SwitchApi->delete_network_switch_link_aggregation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **link_aggregation_id** | **str**|  | 

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

# **delete_network_switch_port_schedule**
> delete_network_switch_port_schedule(network_id, port_schedule_id)

Delete a switch port schedule

Delete a switch port schedule

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    port_schedule_id = 'port_schedule_id_example' # str | 

    try:
        # Delete a switch port schedule
        api_instance.delete_network_switch_port_schedule(network_id, port_schedule_id)
    except Exception as e:
        print("Exception when calling SwitchApi->delete_network_switch_port_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **port_schedule_id** | **str**|  | 

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

# **delete_network_switch_qos_rule**
> delete_network_switch_qos_rule(network_id, qos_rule_id)

Delete a quality of service rule

Delete a quality of service rule

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    qos_rule_id = 'qos_rule_id_example' # str | 

    try:
        # Delete a quality of service rule
        api_instance.delete_network_switch_qos_rule(network_id, qos_rule_id)
    except Exception as e:
        print("Exception when calling SwitchApi->delete_network_switch_qos_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **qos_rule_id** | **str**|  | 

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

# **delete_network_switch_routing_multicast_rendezvous_point**
> delete_network_switch_routing_multicast_rendezvous_point(network_id, rendezvous_point_id)

Delete a multicast rendezvous point

Delete a multicast rendezvous point

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    rendezvous_point_id = 'rendezvous_point_id_example' # str | 

    try:
        # Delete a multicast rendezvous point
        api_instance.delete_network_switch_routing_multicast_rendezvous_point(network_id, rendezvous_point_id)
    except Exception as e:
        print("Exception when calling SwitchApi->delete_network_switch_routing_multicast_rendezvous_point: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rendezvous_point_id** | **str**|  | 

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

# **delete_network_switch_stack**
> delete_network_switch_stack(network_id, switch_stack_id)

Delete a stack

Delete a stack

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 

    try:
        # Delete a stack
        api_instance.delete_network_switch_stack(network_id, switch_stack_id)
    except Exception as e:
        print("Exception when calling SwitchApi->delete_network_switch_stack: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 

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

# **delete_network_switch_stack_routing_interface**
> delete_network_switch_stack_routing_interface(network_id, switch_stack_id, interface_id)

Delete a layer 3 interface from a switch stack

Delete a layer 3 interface from a switch stack

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Delete a layer 3 interface from a switch stack
        api_instance.delete_network_switch_stack_routing_interface(network_id, switch_stack_id, interface_id)
    except Exception as e:
        print("Exception when calling SwitchApi->delete_network_switch_stack_routing_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **interface_id** | **str**|  | 

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

# **delete_network_switch_stack_routing_static_route**
> delete_network_switch_stack_routing_static_route(network_id, switch_stack_id, static_route_id)

Delete a layer 3 static route for a switch stack

Delete a layer 3 static route for a switch stack

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Delete a layer 3 static route for a switch stack
        api_instance.delete_network_switch_stack_routing_static_route(network_id, switch_stack_id, static_route_id)
    except Exception as e:
        print("Exception when calling SwitchApi->delete_network_switch_stack_routing_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
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

# **get_device_switch_port**
> GetDeviceSwitchPorts200ResponseInner get_device_switch_port(serial, port_id)

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
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    port_id = 'port_id_example' # str | 

    try:
        # Return a switch port
        api_response = api_instance.get_device_switch_port(serial, port_id)
        print("The response of SwitchApi->get_device_switch_port:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_device_switch_port: %s\n" % e)
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

# **get_device_switch_ports**
> List[GetDeviceSwitchPorts200ResponseInner] get_device_switch_ports(serial)

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
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # List the switch ports for a switch
        api_response = api_instance.get_device_switch_ports(serial)
        print("The response of SwitchApi->get_device_switch_ports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_device_switch_ports: %s\n" % e)
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

# **get_device_switch_ports_statuses**
> List[GetDeviceSwitchPortsStatuses200ResponseInner] get_device_switch_ports_statuses(serial, t0=t0, timespan=timespan)

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
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return the status for all the ports of a switch
        api_response = api_instance.get_device_switch_ports_statuses(serial, t0=t0, timespan=timespan)
        print("The response of SwitchApi->get_device_switch_ports_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_device_switch_ports_statuses: %s\n" % e)
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

# **get_device_switch_ports_statuses_packets**
> List[object] get_device_switch_ports_statuses_packets(serial, t0=t0, timespan=timespan)

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
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 1 day from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day. (optional)

    try:
        # Return the packet counters for all the ports of a switch
        api_response = api_instance.get_device_switch_ports_statuses_packets(serial, t0=t0, timespan=timespan)
        print("The response of SwitchApi->get_device_switch_ports_statuses_packets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_device_switch_ports_statuses_packets: %s\n" % e)
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

# **get_device_switch_routing_interface**
> GetDeviceSwitchRoutingInterfaces200ResponseInner get_device_switch_routing_interface(serial, interface_id)

Return a layer 3 interface for a switch

Return a layer 3 interface for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_switch_routing_interfaces200_response_inner import GetDeviceSwitchRoutingInterfaces200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Return a layer 3 interface for a switch
        api_response = api_instance.get_device_switch_routing_interface(serial, interface_id)
        print("The response of SwitchApi->get_device_switch_routing_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_device_switch_routing_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **interface_id** | **str**|  | 

### Return type

[**GetDeviceSwitchRoutingInterfaces200ResponseInner**](GetDeviceSwitchRoutingInterfaces200ResponseInner.md)

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

# **get_device_switch_routing_interface_dhcp**
> object get_device_switch_routing_interface_dhcp(serial, interface_id)

Return a layer 3 interface DHCP configuration for a switch

Return a layer 3 interface DHCP configuration for a switch

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
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Return a layer 3 interface DHCP configuration for a switch
        api_response = api_instance.get_device_switch_routing_interface_dhcp(serial, interface_id)
        print("The response of SwitchApi->get_device_switch_routing_interface_dhcp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_device_switch_routing_interface_dhcp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **interface_id** | **str**|  | 

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

# **get_device_switch_routing_interfaces**
> List[GetDeviceSwitchRoutingInterfaces200ResponseInner] get_device_switch_routing_interfaces(serial)

List layer 3 interfaces for a switch

List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_switch_routing_interfaces200_response_inner import GetDeviceSwitchRoutingInterfaces200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # List layer 3 interfaces for a switch
        api_response = api_instance.get_device_switch_routing_interfaces(serial)
        print("The response of SwitchApi->get_device_switch_routing_interfaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_device_switch_routing_interfaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

[**List[GetDeviceSwitchRoutingInterfaces200ResponseInner]**](GetDeviceSwitchRoutingInterfaces200ResponseInner.md)

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

# **get_device_switch_routing_static_route**
> GetDeviceSwitchRoutingStaticRoute200Response get_device_switch_routing_static_route(serial, static_route_id)

Return a layer 3 static route for a switch

Return a layer 3 static route for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_device_switch_routing_static_route200_response import GetDeviceSwitchRoutingStaticRoute200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Return a layer 3 static route for a switch
        api_response = api_instance.get_device_switch_routing_static_route(serial, static_route_id)
        print("The response of SwitchApi->get_device_switch_routing_static_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_device_switch_routing_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **static_route_id** | **str**|  | 

### Return type

[**GetDeviceSwitchRoutingStaticRoute200Response**](GetDeviceSwitchRoutingStaticRoute200Response.md)

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

# **get_device_switch_routing_static_routes**
> List[object] get_device_switch_routing_static_routes(serial)

List layer 3 static routes for a switch

List layer 3 static routes for a switch

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
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # List layer 3 static routes for a switch
        api_response = api_instance.get_device_switch_routing_static_routes(serial)
        print("The response of SwitchApi->get_device_switch_routing_static_routes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_device_switch_routing_static_routes: %s\n" % e)
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

# **get_device_switch_warm_spare**
> object get_device_switch_warm_spare(serial)

Return warm spare configuration for a switch

Return warm spare configuration for a switch

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
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return warm spare configuration for a switch
        api_response = api_instance.get_device_switch_warm_spare(serial)
        print("The response of SwitchApi->get_device_switch_warm_spare:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_device_switch_warm_spare: %s\n" % e)
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

# **get_network_switch_access_control_lists**
> GetNetworkSwitchAccessControlLists200Response get_network_switch_access_control_lists(network_id)

Return the access control lists for a MS network

Return the access control lists for a MS network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_access_control_lists200_response import GetNetworkSwitchAccessControlLists200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the access control lists for a MS network
        api_response = api_instance.get_network_switch_access_control_lists(network_id)
        print("The response of SwitchApi->get_network_switch_access_control_lists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_access_control_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSwitchAccessControlLists200Response**](GetNetworkSwitchAccessControlLists200Response.md)

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

# **get_network_switch_access_policies**
> List[GetNetworkSwitchAccessPolicies200ResponseInner] get_network_switch_access_policies(network_id)

List the access policies for a switch network

List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_access_policies200_response_inner import GetNetworkSwitchAccessPolicies200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the access policies for a switch network
        api_response = api_instance.get_network_switch_access_policies(network_id)
        print("The response of SwitchApi->get_network_switch_access_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_access_policies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkSwitchAccessPolicies200ResponseInner]**](GetNetworkSwitchAccessPolicies200ResponseInner.md)

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

# **get_network_switch_access_policy**
> GetNetworkSwitchAccessPolicies200ResponseInner get_network_switch_access_policy(network_id, access_policy_number)

Return a specific access policy for a switch network

Return a specific access policy for a switch network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_access_policies200_response_inner import GetNetworkSwitchAccessPolicies200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    access_policy_number = 'access_policy_number_example' # str | 

    try:
        # Return a specific access policy for a switch network
        api_response = api_instance.get_network_switch_access_policy(network_id, access_policy_number)
        print("The response of SwitchApi->get_network_switch_access_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_access_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **access_policy_number** | **str**|  | 

### Return type

[**GetNetworkSwitchAccessPolicies200ResponseInner**](GetNetworkSwitchAccessPolicies200ResponseInner.md)

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

# **get_network_switch_alternate_management_interface**
> object get_network_switch_alternate_management_interface(network_id)

Return the switch alternate management interface for the network

Return the switch alternate management interface for the network

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the switch alternate management interface for the network
        api_response = api_instance.get_network_switch_alternate_management_interface(network_id)
        print("The response of SwitchApi->get_network_switch_alternate_management_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_alternate_management_interface: %s\n" % e)
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

# **get_network_switch_dhcp_server_policy**
> object get_network_switch_dhcp_server_policy(network_id)

Return the DHCP server settings

Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the DHCP server settings
        api_response = api_instance.get_network_switch_dhcp_server_policy(network_id)
        print("The response of SwitchApi->get_network_switch_dhcp_server_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_dhcp_server_policy: %s\n" % e)
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

# **get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers**
> List[GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner] get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return the list of servers trusted by Dynamic ARP Inspection on this network

Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers200_response_inner import GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return the list of servers trusted by Dynamic ARP Inspection on this network
        api_response = api_instance.get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of SwitchApi->get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner]**](GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner.md)

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

# **get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device**
> List[GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ResponseInner] get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return the devices that have a Dynamic ARP Inspection warning and their warnings

Return the devices that have a Dynamic ARP Inspection warning and their warnings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device200_response_inner import GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return the devices that have a Dynamic ARP Inspection warning and their warnings
        api_response = api_instance.get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of SwitchApi->get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_dhcp_server_policy_arp_inspection_warnings_by_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ResponseInner]**](GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ResponseInner.md)

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

# **get_network_switch_dhcp_v4_servers_seen**
> List[GetNetworkSwitchDhcpV4ServersSeen200ResponseInner] get_network_switch_dhcp_v4_servers_seen(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_dhcp_v4_servers_seen200_response_inner import GetNetworkSwitchDhcpV4ServersSeen200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
        api_response = api_instance.get_network_switch_dhcp_v4_servers_seen(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of SwitchApi->get_network_switch_dhcp_v4_servers_seen:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_dhcp_v4_servers_seen: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkSwitchDhcpV4ServersSeen200ResponseInner]**](GetNetworkSwitchDhcpV4ServersSeen200ResponseInner.md)

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

# **get_network_switch_dscp_to_cos_mappings**
> object get_network_switch_dscp_to_cos_mappings(network_id)

Return the DSCP to CoS mappings

Return the DSCP to CoS mappings

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the DSCP to CoS mappings
        api_response = api_instance.get_network_switch_dscp_to_cos_mappings(network_id)
        print("The response of SwitchApi->get_network_switch_dscp_to_cos_mappings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_dscp_to_cos_mappings: %s\n" % e)
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

# **get_network_switch_link_aggregations**
> List[object] get_network_switch_link_aggregations(network_id)

List link aggregation groups

List link aggregation groups

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List link aggregation groups
        api_response = api_instance.get_network_switch_link_aggregations(network_id)
        print("The response of SwitchApi->get_network_switch_link_aggregations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_link_aggregations: %s\n" % e)
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

# **get_network_switch_mtu**
> GetNetworkSwitchMtu200Response get_network_switch_mtu(network_id)

Return the MTU configuration

Return the MTU configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_mtu200_response import GetNetworkSwitchMtu200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the MTU configuration
        api_response = api_instance.get_network_switch_mtu(network_id)
        print("The response of SwitchApi->get_network_switch_mtu:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_mtu: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSwitchMtu200Response**](GetNetworkSwitchMtu200Response.md)

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

# **get_network_switch_port_schedules**
> List[object] get_network_switch_port_schedules(network_id)

List switch port schedules

List switch port schedules

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List switch port schedules
        api_response = api_instance.get_network_switch_port_schedules(network_id)
        print("The response of SwitchApi->get_network_switch_port_schedules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_port_schedules: %s\n" % e)
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

# **get_network_switch_qos_rule**
> object get_network_switch_qos_rule(network_id, qos_rule_id)

Return a quality of service rule

Return a quality of service rule

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    qos_rule_id = 'qos_rule_id_example' # str | 

    try:
        # Return a quality of service rule
        api_response = api_instance.get_network_switch_qos_rule(network_id, qos_rule_id)
        print("The response of SwitchApi->get_network_switch_qos_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_qos_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **qos_rule_id** | **str**|  | 

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

# **get_network_switch_qos_rules**
> List[object] get_network_switch_qos_rules(network_id)

List quality of service rules

List quality of service rules

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List quality of service rules
        api_response = api_instance.get_network_switch_qos_rules(network_id)
        print("The response of SwitchApi->get_network_switch_qos_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_qos_rules: %s\n" % e)
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

# **get_network_switch_qos_rules_order**
> object get_network_switch_qos_rules_order(network_id)

Return the quality of service rule IDs by order in which they will be processed by the switch

Return the quality of service rule IDs by order in which they will be processed by the switch

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the quality of service rule IDs by order in which they will be processed by the switch
        api_response = api_instance.get_network_switch_qos_rules_order(network_id)
        print("The response of SwitchApi->get_network_switch_qos_rules_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_qos_rules_order: %s\n" % e)
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

# **get_network_switch_routing_multicast**
> object get_network_switch_routing_multicast(network_id)

Return multicast settings for a network

Return multicast settings for a network

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return multicast settings for a network
        api_response = api_instance.get_network_switch_routing_multicast(network_id)
        print("The response of SwitchApi->get_network_switch_routing_multicast:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_routing_multicast: %s\n" % e)
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

# **get_network_switch_routing_multicast_rendezvous_point**
> object get_network_switch_routing_multicast_rendezvous_point(network_id, rendezvous_point_id)

Return a multicast rendezvous point

Return a multicast rendezvous point

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    rendezvous_point_id = 'rendezvous_point_id_example' # str | 

    try:
        # Return a multicast rendezvous point
        api_response = api_instance.get_network_switch_routing_multicast_rendezvous_point(network_id, rendezvous_point_id)
        print("The response of SwitchApi->get_network_switch_routing_multicast_rendezvous_point:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_routing_multicast_rendezvous_point: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rendezvous_point_id** | **str**|  | 

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

# **get_network_switch_routing_multicast_rendezvous_points**
> List[List[object]] get_network_switch_routing_multicast_rendezvous_points(network_id)

List multicast rendezvous points

List multicast rendezvous points

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List multicast rendezvous points
        api_response = api_instance.get_network_switch_routing_multicast_rendezvous_points(network_id)
        print("The response of SwitchApi->get_network_switch_routing_multicast_rendezvous_points:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_routing_multicast_rendezvous_points: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**List[List[object]]**

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

# **get_network_switch_routing_ospf**
> object get_network_switch_routing_ospf(network_id)

Return layer 3 OSPF routing configuration

Return layer 3 OSPF routing configuration

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return layer 3 OSPF routing configuration
        api_response = api_instance.get_network_switch_routing_ospf(network_id)
        print("The response of SwitchApi->get_network_switch_routing_ospf:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_routing_ospf: %s\n" % e)
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

# **get_network_switch_settings**
> GetNetworkSwitchSettings200Response get_network_switch_settings(network_id)

Returns the switch network settings

Returns the switch network settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_settings200_response import GetNetworkSwitchSettings200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the switch network settings
        api_response = api_instance.get_network_switch_settings(network_id)
        print("The response of SwitchApi->get_network_switch_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSwitchSettings200Response**](GetNetworkSwitchSettings200Response.md)

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

# **get_network_switch_stack**
> GetNetworkSwitchStack200Response get_network_switch_stack(network_id, switch_stack_id)

Show a switch stack

Show a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_stack200_response import GetNetworkSwitchStack200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 

    try:
        # Show a switch stack
        api_response = api_instance.get_network_switch_stack(network_id, switch_stack_id)
        print("The response of SwitchApi->get_network_switch_stack:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_stack: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 

### Return type

[**GetNetworkSwitchStack200Response**](GetNetworkSwitchStack200Response.md)

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

# **get_network_switch_stack_routing_interface**
> object get_network_switch_stack_routing_interface(network_id, switch_stack_id, interface_id)

Return a layer 3 interface from a switch stack

Return a layer 3 interface from a switch stack

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Return a layer 3 interface from a switch stack
        api_response = api_instance.get_network_switch_stack_routing_interface(network_id, switch_stack_id, interface_id)
        print("The response of SwitchApi->get_network_switch_stack_routing_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_stack_routing_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **interface_id** | **str**|  | 

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

# **get_network_switch_stack_routing_interface_dhcp**
> object get_network_switch_stack_routing_interface_dhcp(network_id, switch_stack_id, interface_id)

Return a layer 3 interface DHCP configuration for a switch stack

Return a layer 3 interface DHCP configuration for a switch stack

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 

    try:
        # Return a layer 3 interface DHCP configuration for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_interface_dhcp(network_id, switch_stack_id, interface_id)
        print("The response of SwitchApi->get_network_switch_stack_routing_interface_dhcp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_stack_routing_interface_dhcp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **interface_id** | **str**|  | 

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

# **get_network_switch_stack_routing_interfaces**
> List[object] get_network_switch_stack_routing_interfaces(network_id, switch_stack_id)

List layer 3 interfaces for a switch stack

List layer 3 interfaces for a switch stack

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 

    try:
        # List layer 3 interfaces for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_interfaces(network_id, switch_stack_id)
        print("The response of SwitchApi->get_network_switch_stack_routing_interfaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_stack_routing_interfaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 

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

# **get_network_switch_stack_routing_static_route**
> object get_network_switch_stack_routing_static_route(network_id, switch_stack_id, static_route_id)

Return a layer 3 static route for a switch stack

Return a layer 3 static route for a switch stack

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 

    try:
        # Return a layer 3 static route for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_static_route(network_id, switch_stack_id, static_route_id)
        print("The response of SwitchApi->get_network_switch_stack_routing_static_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_stack_routing_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
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

# **get_network_switch_stack_routing_static_routes**
> List[object] get_network_switch_stack_routing_static_routes(network_id, switch_stack_id)

List layer 3 static routes for a switch stack

List layer 3 static routes for a switch stack

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 

    try:
        # List layer 3 static routes for a switch stack
        api_response = api_instance.get_network_switch_stack_routing_static_routes(network_id, switch_stack_id)
        print("The response of SwitchApi->get_network_switch_stack_routing_static_routes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_stack_routing_static_routes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 

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

# **get_network_switch_stacks**
> List[object] get_network_switch_stacks(network_id)

List the switch stacks in a network

List the switch stacks in a network

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the switch stacks in a network
        api_response = api_instance.get_network_switch_stacks(network_id)
        print("The response of SwitchApi->get_network_switch_stacks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_stacks: %s\n" % e)
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

# **get_network_switch_storm_control**
> GetNetworkSwitchStormControl200Response get_network_switch_storm_control(network_id)

Return the storm control configuration for a switch network

Return the storm control configuration for a switch network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_storm_control200_response import GetNetworkSwitchStormControl200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the storm control configuration for a switch network
        api_response = api_instance.get_network_switch_storm_control(network_id)
        print("The response of SwitchApi->get_network_switch_storm_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_storm_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSwitchStormControl200Response**](GetNetworkSwitchStormControl200Response.md)

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

# **get_network_switch_stp**
> object get_network_switch_stp(network_id)

Returns STP settings

Returns STP settings

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
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns STP settings
        api_response = api_instance.get_network_switch_stp(network_id)
        print("The response of SwitchApi->get_network_switch_stp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_network_switch_stp: %s\n" % e)
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

# **get_organization_config_template_switch_profile_port**
> GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner get_organization_config_template_switch_profile_port(organization_id, config_template_id, profile_id, port_id)

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
    api_instance = openapi_client.SwitchApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    profile_id = 'profile_id_example' # str | 
    port_id = 'port_id_example' # str | 

    try:
        # Return a switch profile port
        api_response = api_instance.get_organization_config_template_switch_profile_port(organization_id, config_template_id, profile_id, port_id)
        print("The response of SwitchApi->get_organization_config_template_switch_profile_port:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_organization_config_template_switch_profile_port: %s\n" % e)
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

# **get_organization_config_template_switch_profile_ports**
> List[GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner] get_organization_config_template_switch_profile_ports(organization_id, config_template_id, profile_id)

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
    api_instance = openapi_client.SwitchApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    profile_id = 'profile_id_example' # str | 

    try:
        # Return all the ports of a switch profile
        api_response = api_instance.get_organization_config_template_switch_profile_ports(organization_id, config_template_id, profile_id)
        print("The response of SwitchApi->get_organization_config_template_switch_profile_ports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_organization_config_template_switch_profile_ports: %s\n" % e)
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

# **get_organization_config_template_switch_profiles**
> GetOrganizationConfigTemplateSwitchProfiles200Response get_organization_config_template_switch_profiles(organization_id, config_template_id)

List the switch profiles for your switch template configuration

List the switch profiles for your switch template configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_config_template_switch_profiles200_response import GetOrganizationConfigTemplateSwitchProfiles200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 

    try:
        # List the switch profiles for your switch template configuration
        api_response = api_instance.get_organization_config_template_switch_profiles(organization_id, config_template_id)
        print("The response of SwitchApi->get_organization_config_template_switch_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_organization_config_template_switch_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 

### Return type

[**GetOrganizationConfigTemplateSwitchProfiles200Response**](GetOrganizationConfigTemplateSwitchProfiles200Response.md)

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

# **get_organization_switch_ports_by_switch**
> List[GetOrganizationSwitchPortsBySwitch200ResponseInner] get_organization_switch_ports_by_switch(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, port_profile_ids=port_profile_ids, name=name, mac=mac, macs=macs, serial=serial, serials=serials, configuration_updated_after=configuration_updated_after)

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
    api_instance = openapi_client.SwitchApi(api_client)
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
        api_response = api_instance.get_organization_switch_ports_by_switch(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, port_profile_ids=port_profile_ids, name=name, mac=mac, macs=macs, serial=serial, serials=serials, configuration_updated_after=configuration_updated_after)
        print("The response of SwitchApi->get_organization_switch_ports_by_switch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->get_organization_switch_ports_by_switch: %s\n" % e)
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

# **remove_network_switch_stack**
> object remove_network_switch_stack(network_id, switch_stack_id, remove_network_switch_stack_request)

Remove a switch from a stack

Remove a switch from a stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.remove_network_switch_stack_request import RemoveNetworkSwitchStackRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    remove_network_switch_stack_request = openapi_client.RemoveNetworkSwitchStackRequest() # RemoveNetworkSwitchStackRequest | 

    try:
        # Remove a switch from a stack
        api_response = api_instance.remove_network_switch_stack(network_id, switch_stack_id, remove_network_switch_stack_request)
        print("The response of SwitchApi->remove_network_switch_stack:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->remove_network_switch_stack: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **remove_network_switch_stack_request** | [**RemoveNetworkSwitchStackRequest**](RemoveNetworkSwitchStackRequest.md)|  | 

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

# **update_device_switch_port**
> GetDeviceSwitchPorts200ResponseInner update_device_switch_port(serial, port_id, update_device_switch_port_request=update_device_switch_port_request)

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
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    port_id = 'port_id_example' # str | 
    update_device_switch_port_request = openapi_client.UpdateDeviceSwitchPortRequest() # UpdateDeviceSwitchPortRequest |  (optional)

    try:
        # Update a switch port
        api_response = api_instance.update_device_switch_port(serial, port_id, update_device_switch_port_request=update_device_switch_port_request)
        print("The response of SwitchApi->update_device_switch_port:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_device_switch_port: %s\n" % e)
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

# **update_device_switch_routing_interface**
> GetDeviceSwitchRoutingInterfaces200ResponseInner update_device_switch_routing_interface(serial, interface_id, create_device_switch_routing_interface_request=create_device_switch_routing_interface_request)

Update a layer 3 interface for a switch

Update a layer 3 interface for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_device_switch_routing_interface_request import CreateDeviceSwitchRoutingInterfaceRequest
from openapi_client.models.get_device_switch_routing_interfaces200_response_inner import GetDeviceSwitchRoutingInterfaces200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    interface_id = 'interface_id_example' # str | 
    create_device_switch_routing_interface_request = openapi_client.CreateDeviceSwitchRoutingInterfaceRequest() # CreateDeviceSwitchRoutingInterfaceRequest |  (optional)

    try:
        # Update a layer 3 interface for a switch
        api_response = api_instance.update_device_switch_routing_interface(serial, interface_id, create_device_switch_routing_interface_request=create_device_switch_routing_interface_request)
        print("The response of SwitchApi->update_device_switch_routing_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_device_switch_routing_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **interface_id** | **str**|  | 
 **create_device_switch_routing_interface_request** | [**CreateDeviceSwitchRoutingInterfaceRequest**](CreateDeviceSwitchRoutingInterfaceRequest.md)|  | [optional] 

### Return type

[**GetDeviceSwitchRoutingInterfaces200ResponseInner**](GetDeviceSwitchRoutingInterfaces200ResponseInner.md)

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

# **update_device_switch_routing_interface_dhcp**
> object update_device_switch_routing_interface_dhcp(serial, interface_id, update_device_switch_routing_interface_dhcp_request=update_device_switch_routing_interface_dhcp_request)

Update a layer 3 interface DHCP configuration for a switch

Update a layer 3 interface DHCP configuration for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_switch_routing_interface_dhcp_request import UpdateDeviceSwitchRoutingInterfaceDhcpRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    interface_id = 'interface_id_example' # str | 
    update_device_switch_routing_interface_dhcp_request = openapi_client.UpdateDeviceSwitchRoutingInterfaceDhcpRequest() # UpdateDeviceSwitchRoutingInterfaceDhcpRequest |  (optional)

    try:
        # Update a layer 3 interface DHCP configuration for a switch
        api_response = api_instance.update_device_switch_routing_interface_dhcp(serial, interface_id, update_device_switch_routing_interface_dhcp_request=update_device_switch_routing_interface_dhcp_request)
        print("The response of SwitchApi->update_device_switch_routing_interface_dhcp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_device_switch_routing_interface_dhcp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **interface_id** | **str**|  | 
 **update_device_switch_routing_interface_dhcp_request** | [**UpdateDeviceSwitchRoutingInterfaceDhcpRequest**](UpdateDeviceSwitchRoutingInterfaceDhcpRequest.md)|  | [optional] 

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

# **update_device_switch_routing_static_route**
> object update_device_switch_routing_static_route(serial, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)

Update a layer 3 static route for a switch

Update a layer 3 static route for a switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_switch_routing_static_route_request import UpdateDeviceSwitchRoutingStaticRouteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    static_route_id = 'static_route_id_example' # str | 
    update_device_switch_routing_static_route_request = openapi_client.UpdateDeviceSwitchRoutingStaticRouteRequest() # UpdateDeviceSwitchRoutingStaticRouteRequest |  (optional)

    try:
        # Update a layer 3 static route for a switch
        api_response = api_instance.update_device_switch_routing_static_route(serial, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)
        print("The response of SwitchApi->update_device_switch_routing_static_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_device_switch_routing_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **static_route_id** | **str**|  | 
 **update_device_switch_routing_static_route_request** | [**UpdateDeviceSwitchRoutingStaticRouteRequest**](UpdateDeviceSwitchRoutingStaticRouteRequest.md)|  | [optional] 

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

# **update_device_switch_warm_spare**
> object update_device_switch_warm_spare(serial, update_device_switch_warm_spare_request)

Update warm spare configuration for a switch

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_switch_warm_spare_request import UpdateDeviceSwitchWarmSpareRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    serial = 'serial_example' # str | 
    update_device_switch_warm_spare_request = openapi_client.UpdateDeviceSwitchWarmSpareRequest() # UpdateDeviceSwitchWarmSpareRequest | 

    try:
        # Update warm spare configuration for a switch
        api_response = api_instance.update_device_switch_warm_spare(serial, update_device_switch_warm_spare_request)
        print("The response of SwitchApi->update_device_switch_warm_spare:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_device_switch_warm_spare: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_switch_warm_spare_request** | [**UpdateDeviceSwitchWarmSpareRequest**](UpdateDeviceSwitchWarmSpareRequest.md)|  | 

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

# **update_network_switch_access_control_lists**
> GetNetworkSwitchAccessControlLists200Response update_network_switch_access_control_lists(network_id, update_network_switch_access_control_lists_request)

Update the access control lists for a MS network

Update the access control lists for a MS network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_access_control_lists200_response import GetNetworkSwitchAccessControlLists200Response
from openapi_client.models.update_network_switch_access_control_lists_request import UpdateNetworkSwitchAccessControlListsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_access_control_lists_request = openapi_client.UpdateNetworkSwitchAccessControlListsRequest() # UpdateNetworkSwitchAccessControlListsRequest | 

    try:
        # Update the access control lists for a MS network
        api_response = api_instance.update_network_switch_access_control_lists(network_id, update_network_switch_access_control_lists_request)
        print("The response of SwitchApi->update_network_switch_access_control_lists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_access_control_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_access_control_lists_request** | [**UpdateNetworkSwitchAccessControlListsRequest**](UpdateNetworkSwitchAccessControlListsRequest.md)|  | 

### Return type

[**GetNetworkSwitchAccessControlLists200Response**](GetNetworkSwitchAccessControlLists200Response.md)

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

# **update_network_switch_access_policy**
> GetNetworkSwitchAccessPolicies200ResponseInner update_network_switch_access_policy(network_id, access_policy_number, update_network_switch_access_policy_request=update_network_switch_access_policy_request)

Update an access policy for a switch network

Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_access_policies200_response_inner import GetNetworkSwitchAccessPolicies200ResponseInner
from openapi_client.models.update_network_switch_access_policy_request import UpdateNetworkSwitchAccessPolicyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    access_policy_number = 'access_policy_number_example' # str | 
    update_network_switch_access_policy_request = openapi_client.UpdateNetworkSwitchAccessPolicyRequest() # UpdateNetworkSwitchAccessPolicyRequest |  (optional)

    try:
        # Update an access policy for a switch network
        api_response = api_instance.update_network_switch_access_policy(network_id, access_policy_number, update_network_switch_access_policy_request=update_network_switch_access_policy_request)
        print("The response of SwitchApi->update_network_switch_access_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_access_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **access_policy_number** | **str**|  | 
 **update_network_switch_access_policy_request** | [**UpdateNetworkSwitchAccessPolicyRequest**](UpdateNetworkSwitchAccessPolicyRequest.md)|  | [optional] 

### Return type

[**GetNetworkSwitchAccessPolicies200ResponseInner**](GetNetworkSwitchAccessPolicies200ResponseInner.md)

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

# **update_network_switch_alternate_management_interface**
> object update_network_switch_alternate_management_interface(network_id, update_network_switch_alternate_management_interface_request=update_network_switch_alternate_management_interface_request)

Update the switch alternate management interface for the network

Update the switch alternate management interface for the network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_alternate_management_interface_request import UpdateNetworkSwitchAlternateManagementInterfaceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_alternate_management_interface_request = openapi_client.UpdateNetworkSwitchAlternateManagementInterfaceRequest() # UpdateNetworkSwitchAlternateManagementInterfaceRequest |  (optional)

    try:
        # Update the switch alternate management interface for the network
        api_response = api_instance.update_network_switch_alternate_management_interface(network_id, update_network_switch_alternate_management_interface_request=update_network_switch_alternate_management_interface_request)
        print("The response of SwitchApi->update_network_switch_alternate_management_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_alternate_management_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_alternate_management_interface_request** | [**UpdateNetworkSwitchAlternateManagementInterfaceRequest**](UpdateNetworkSwitchAlternateManagementInterfaceRequest.md)|  | [optional] 

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

# **update_network_switch_dhcp_server_policy**
> object update_network_switch_dhcp_server_policy(network_id, update_network_switch_dhcp_server_policy_request=update_network_switch_dhcp_server_policy_request)

Update the DHCP server settings

Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_dhcp_server_policy_request import UpdateNetworkSwitchDhcpServerPolicyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_dhcp_server_policy_request = openapi_client.UpdateNetworkSwitchDhcpServerPolicyRequest() # UpdateNetworkSwitchDhcpServerPolicyRequest |  (optional)

    try:
        # Update the DHCP server settings
        api_response = api_instance.update_network_switch_dhcp_server_policy(network_id, update_network_switch_dhcp_server_policy_request=update_network_switch_dhcp_server_policy_request)
        print("The response of SwitchApi->update_network_switch_dhcp_server_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_dhcp_server_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_dhcp_server_policy_request** | [**UpdateNetworkSwitchDhcpServerPolicyRequest**](UpdateNetworkSwitchDhcpServerPolicyRequest.md)|  | [optional] 

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

# **update_network_switch_dhcp_server_policy_arp_inspection_trusted_server**
> GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner update_network_switch_dhcp_server_policy_arp_inspection_trusted_server(network_id, trusted_server_id, update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request=update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request)

Update a server that is trusted by Dynamic ARP Inspection on this network

Update a server that is trusted by Dynamic ARP Inspection on this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_dhcp_server_policy_arp_inspection_trusted_servers200_response_inner import GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner
from openapi_client.models.update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request import UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    trusted_server_id = 'trusted_server_id_example' # str | 
    update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request = openapi_client.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest() # UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest |  (optional)

    try:
        # Update a server that is trusted by Dynamic ARP Inspection on this network
        api_response = api_instance.update_network_switch_dhcp_server_policy_arp_inspection_trusted_server(network_id, trusted_server_id, update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request=update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request)
        print("The response of SwitchApi->update_network_switch_dhcp_server_policy_arp_inspection_trusted_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_dhcp_server_policy_arp_inspection_trusted_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **trusted_server_id** | **str**|  | 
 **update_network_switch_dhcp_server_policy_arp_inspection_trusted_server_request** | [**UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest**](UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest.md)|  | [optional] 

### Return type

[**GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner**](GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ResponseInner.md)

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

# **update_network_switch_dscp_to_cos_mappings**
> object update_network_switch_dscp_to_cos_mappings(network_id, update_network_switch_dscp_to_cos_mappings_request)

Update the DSCP to CoS mappings

Update the DSCP to CoS mappings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_dscp_to_cos_mappings_request import UpdateNetworkSwitchDscpToCosMappingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_dscp_to_cos_mappings_request = openapi_client.UpdateNetworkSwitchDscpToCosMappingsRequest() # UpdateNetworkSwitchDscpToCosMappingsRequest | 

    try:
        # Update the DSCP to CoS mappings
        api_response = api_instance.update_network_switch_dscp_to_cos_mappings(network_id, update_network_switch_dscp_to_cos_mappings_request)
        print("The response of SwitchApi->update_network_switch_dscp_to_cos_mappings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_dscp_to_cos_mappings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_dscp_to_cos_mappings_request** | [**UpdateNetworkSwitchDscpToCosMappingsRequest**](UpdateNetworkSwitchDscpToCosMappingsRequest.md)|  | 

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

# **update_network_switch_link_aggregation**
> object update_network_switch_link_aggregation(network_id, link_aggregation_id, update_network_switch_link_aggregation_request=update_network_switch_link_aggregation_request)

Update a link aggregation group

Update a link aggregation group

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_link_aggregation_request import UpdateNetworkSwitchLinkAggregationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    link_aggregation_id = 'link_aggregation_id_example' # str | 
    update_network_switch_link_aggregation_request = openapi_client.UpdateNetworkSwitchLinkAggregationRequest() # UpdateNetworkSwitchLinkAggregationRequest |  (optional)

    try:
        # Update a link aggregation group
        api_response = api_instance.update_network_switch_link_aggregation(network_id, link_aggregation_id, update_network_switch_link_aggregation_request=update_network_switch_link_aggregation_request)
        print("The response of SwitchApi->update_network_switch_link_aggregation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_link_aggregation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **link_aggregation_id** | **str**|  | 
 **update_network_switch_link_aggregation_request** | [**UpdateNetworkSwitchLinkAggregationRequest**](UpdateNetworkSwitchLinkAggregationRequest.md)|  | [optional] 

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

# **update_network_switch_mtu**
> object update_network_switch_mtu(network_id, update_network_switch_mtu_request=update_network_switch_mtu_request)

Update the MTU configuration

Update the MTU configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_mtu_request import UpdateNetworkSwitchMtuRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_mtu_request = openapi_client.UpdateNetworkSwitchMtuRequest() # UpdateNetworkSwitchMtuRequest |  (optional)

    try:
        # Update the MTU configuration
        api_response = api_instance.update_network_switch_mtu(network_id, update_network_switch_mtu_request=update_network_switch_mtu_request)
        print("The response of SwitchApi->update_network_switch_mtu:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_mtu: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_mtu_request** | [**UpdateNetworkSwitchMtuRequest**](UpdateNetworkSwitchMtuRequest.md)|  | [optional] 

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

# **update_network_switch_port_schedule**
> object update_network_switch_port_schedule(network_id, port_schedule_id, update_network_switch_port_schedule_request=update_network_switch_port_schedule_request)

Update a switch port schedule

Update a switch port schedule

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_port_schedule_request import UpdateNetworkSwitchPortScheduleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    port_schedule_id = 'port_schedule_id_example' # str | 
    update_network_switch_port_schedule_request = openapi_client.UpdateNetworkSwitchPortScheduleRequest() # UpdateNetworkSwitchPortScheduleRequest |  (optional)

    try:
        # Update a switch port schedule
        api_response = api_instance.update_network_switch_port_schedule(network_id, port_schedule_id, update_network_switch_port_schedule_request=update_network_switch_port_schedule_request)
        print("The response of SwitchApi->update_network_switch_port_schedule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_port_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **port_schedule_id** | **str**|  | 
 **update_network_switch_port_schedule_request** | [**UpdateNetworkSwitchPortScheduleRequest**](UpdateNetworkSwitchPortScheduleRequest.md)|  | [optional] 

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

# **update_network_switch_qos_rule**
> object update_network_switch_qos_rule(network_id, qos_rule_id, update_network_switch_qos_rule_request=update_network_switch_qos_rule_request)

Update a quality of service rule

Update a quality of service rule

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_qos_rule_request import UpdateNetworkSwitchQosRuleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    qos_rule_id = 'qos_rule_id_example' # str | 
    update_network_switch_qos_rule_request = openapi_client.UpdateNetworkSwitchQosRuleRequest() # UpdateNetworkSwitchQosRuleRequest |  (optional)

    try:
        # Update a quality of service rule
        api_response = api_instance.update_network_switch_qos_rule(network_id, qos_rule_id, update_network_switch_qos_rule_request=update_network_switch_qos_rule_request)
        print("The response of SwitchApi->update_network_switch_qos_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_qos_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **qos_rule_id** | **str**|  | 
 **update_network_switch_qos_rule_request** | [**UpdateNetworkSwitchQosRuleRequest**](UpdateNetworkSwitchQosRuleRequest.md)|  | [optional] 

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

# **update_network_switch_qos_rules_order**
> object update_network_switch_qos_rules_order(network_id, update_network_switch_qos_rules_order_request)

Update the order in which the rules should be processed by the switch

Update the order in which the rules should be processed by the switch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_qos_rules_order_request import UpdateNetworkSwitchQosRulesOrderRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_qos_rules_order_request = openapi_client.UpdateNetworkSwitchQosRulesOrderRequest() # UpdateNetworkSwitchQosRulesOrderRequest | 

    try:
        # Update the order in which the rules should be processed by the switch
        api_response = api_instance.update_network_switch_qos_rules_order(network_id, update_network_switch_qos_rules_order_request)
        print("The response of SwitchApi->update_network_switch_qos_rules_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_qos_rules_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_qos_rules_order_request** | [**UpdateNetworkSwitchQosRulesOrderRequest**](UpdateNetworkSwitchQosRulesOrderRequest.md)|  | 

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

# **update_network_switch_routing_multicast**
> object update_network_switch_routing_multicast(network_id, update_network_switch_routing_multicast_request=update_network_switch_routing_multicast_request)

Update multicast settings for a network

Update multicast settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_routing_multicast_request import UpdateNetworkSwitchRoutingMulticastRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_routing_multicast_request = openapi_client.UpdateNetworkSwitchRoutingMulticastRequest() # UpdateNetworkSwitchRoutingMulticastRequest |  (optional)

    try:
        # Update multicast settings for a network
        api_response = api_instance.update_network_switch_routing_multicast(network_id, update_network_switch_routing_multicast_request=update_network_switch_routing_multicast_request)
        print("The response of SwitchApi->update_network_switch_routing_multicast:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_routing_multicast: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_routing_multicast_request** | [**UpdateNetworkSwitchRoutingMulticastRequest**](UpdateNetworkSwitchRoutingMulticastRequest.md)|  | [optional] 

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

# **update_network_switch_routing_multicast_rendezvous_point**
> object update_network_switch_routing_multicast_rendezvous_point(network_id, rendezvous_point_id, update_network_switch_routing_multicast_rendezvous_point_request)

Update a multicast rendezvous point

Update a multicast rendezvous point

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_routing_multicast_rendezvous_point_request import UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    rendezvous_point_id = 'rendezvous_point_id_example' # str | 
    update_network_switch_routing_multicast_rendezvous_point_request = openapi_client.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest() # UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest | 

    try:
        # Update a multicast rendezvous point
        api_response = api_instance.update_network_switch_routing_multicast_rendezvous_point(network_id, rendezvous_point_id, update_network_switch_routing_multicast_rendezvous_point_request)
        print("The response of SwitchApi->update_network_switch_routing_multicast_rendezvous_point:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_routing_multicast_rendezvous_point: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rendezvous_point_id** | **str**|  | 
 **update_network_switch_routing_multicast_rendezvous_point_request** | [**UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest**](UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest.md)|  | 

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

# **update_network_switch_routing_ospf**
> object update_network_switch_routing_ospf(network_id, update_network_switch_routing_ospf_request=update_network_switch_routing_ospf_request)

Update layer 3 OSPF routing configuration

Update layer 3 OSPF routing configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_routing_ospf_request import UpdateNetworkSwitchRoutingOspfRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_routing_ospf_request = openapi_client.UpdateNetworkSwitchRoutingOspfRequest() # UpdateNetworkSwitchRoutingOspfRequest |  (optional)

    try:
        # Update layer 3 OSPF routing configuration
        api_response = api_instance.update_network_switch_routing_ospf(network_id, update_network_switch_routing_ospf_request=update_network_switch_routing_ospf_request)
        print("The response of SwitchApi->update_network_switch_routing_ospf:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_routing_ospf: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_routing_ospf_request** | [**UpdateNetworkSwitchRoutingOspfRequest**](UpdateNetworkSwitchRoutingOspfRequest.md)|  | [optional] 

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

# **update_network_switch_settings**
> GetNetworkSwitchSettings200Response update_network_switch_settings(network_id, update_network_switch_settings_request=update_network_switch_settings_request)

Update switch network settings

Update switch network settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_switch_settings200_response import GetNetworkSwitchSettings200Response
from openapi_client.models.update_network_switch_settings_request import UpdateNetworkSwitchSettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_settings_request = openapi_client.UpdateNetworkSwitchSettingsRequest() # UpdateNetworkSwitchSettingsRequest |  (optional)

    try:
        # Update switch network settings
        api_response = api_instance.update_network_switch_settings(network_id, update_network_switch_settings_request=update_network_switch_settings_request)
        print("The response of SwitchApi->update_network_switch_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_settings_request** | [**UpdateNetworkSwitchSettingsRequest**](UpdateNetworkSwitchSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkSwitchSettings200Response**](GetNetworkSwitchSettings200Response.md)

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

# **update_network_switch_stack_routing_interface**
> object update_network_switch_stack_routing_interface(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_request=update_network_switch_stack_routing_interface_request)

Update a layer 3 interface for a switch stack

Update a layer 3 interface for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_stack_routing_interface_request import UpdateNetworkSwitchStackRoutingInterfaceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 
    update_network_switch_stack_routing_interface_request = openapi_client.UpdateNetworkSwitchStackRoutingInterfaceRequest() # UpdateNetworkSwitchStackRoutingInterfaceRequest |  (optional)

    try:
        # Update a layer 3 interface for a switch stack
        api_response = api_instance.update_network_switch_stack_routing_interface(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_request=update_network_switch_stack_routing_interface_request)
        print("The response of SwitchApi->update_network_switch_stack_routing_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_stack_routing_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **interface_id** | **str**|  | 
 **update_network_switch_stack_routing_interface_request** | [**UpdateNetworkSwitchStackRoutingInterfaceRequest**](UpdateNetworkSwitchStackRoutingInterfaceRequest.md)|  | [optional] 

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

# **update_network_switch_stack_routing_interface_dhcp**
> object update_network_switch_stack_routing_interface_dhcp(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_dhcp_request=update_network_switch_stack_routing_interface_dhcp_request)

Update a layer 3 interface DHCP configuration for a switch stack

Update a layer 3 interface DHCP configuration for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_stack_routing_interface_dhcp_request import UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    interface_id = 'interface_id_example' # str | 
    update_network_switch_stack_routing_interface_dhcp_request = openapi_client.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest() # UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest |  (optional)

    try:
        # Update a layer 3 interface DHCP configuration for a switch stack
        api_response = api_instance.update_network_switch_stack_routing_interface_dhcp(network_id, switch_stack_id, interface_id, update_network_switch_stack_routing_interface_dhcp_request=update_network_switch_stack_routing_interface_dhcp_request)
        print("The response of SwitchApi->update_network_switch_stack_routing_interface_dhcp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_stack_routing_interface_dhcp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **interface_id** | **str**|  | 
 **update_network_switch_stack_routing_interface_dhcp_request** | [**UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest**](UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest.md)|  | [optional] 

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

# **update_network_switch_stack_routing_static_route**
> object update_network_switch_stack_routing_static_route(network_id, switch_stack_id, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)

Update a layer 3 static route for a switch stack

Update a layer 3 static route for a switch stack

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_switch_routing_static_route_request import UpdateDeviceSwitchRoutingStaticRouteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    switch_stack_id = 'switch_stack_id_example' # str | 
    static_route_id = 'static_route_id_example' # str | 
    update_device_switch_routing_static_route_request = openapi_client.UpdateDeviceSwitchRoutingStaticRouteRequest() # UpdateDeviceSwitchRoutingStaticRouteRequest |  (optional)

    try:
        # Update a layer 3 static route for a switch stack
        api_response = api_instance.update_network_switch_stack_routing_static_route(network_id, switch_stack_id, static_route_id, update_device_switch_routing_static_route_request=update_device_switch_routing_static_route_request)
        print("The response of SwitchApi->update_network_switch_stack_routing_static_route:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_stack_routing_static_route: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **switch_stack_id** | **str**|  | 
 **static_route_id** | **str**|  | 
 **update_device_switch_routing_static_route_request** | [**UpdateDeviceSwitchRoutingStaticRouteRequest**](UpdateDeviceSwitchRoutingStaticRouteRequest.md)|  | [optional] 

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

# **update_network_switch_storm_control**
> object update_network_switch_storm_control(network_id, update_network_switch_storm_control_request=update_network_switch_storm_control_request)

Update the storm control configuration for a switch network

Update the storm control configuration for a switch network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_storm_control_request import UpdateNetworkSwitchStormControlRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_storm_control_request = openapi_client.UpdateNetworkSwitchStormControlRequest() # UpdateNetworkSwitchStormControlRequest |  (optional)

    try:
        # Update the storm control configuration for a switch network
        api_response = api_instance.update_network_switch_storm_control(network_id, update_network_switch_storm_control_request=update_network_switch_storm_control_request)
        print("The response of SwitchApi->update_network_switch_storm_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_storm_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_storm_control_request** | [**UpdateNetworkSwitchStormControlRequest**](UpdateNetworkSwitchStormControlRequest.md)|  | [optional] 

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

# **update_network_switch_stp**
> object update_network_switch_stp(network_id, update_network_switch_stp_request=update_network_switch_stp_request)

Updates STP settings

Updates STP settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_stp_request import UpdateNetworkSwitchStpRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwitchApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_switch_stp_request = openapi_client.UpdateNetworkSwitchStpRequest() # UpdateNetworkSwitchStpRequest |  (optional)

    try:
        # Updates STP settings
        api_response = api_instance.update_network_switch_stp(network_id, update_network_switch_stp_request=update_network_switch_stp_request)
        print("The response of SwitchApi->update_network_switch_stp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_network_switch_stp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_switch_stp_request** | [**UpdateNetworkSwitchStpRequest**](UpdateNetworkSwitchStpRequest.md)|  | [optional] 

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

# **update_organization_config_template_switch_profile_port**
> GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner update_organization_config_template_switch_profile_port(organization_id, config_template_id, profile_id, port_id, update_organization_config_template_switch_profile_port_request=update_organization_config_template_switch_profile_port_request)

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
    api_instance = openapi_client.SwitchApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    profile_id = 'profile_id_example' # str | 
    port_id = 'port_id_example' # str | 
    update_organization_config_template_switch_profile_port_request = openapi_client.UpdateOrganizationConfigTemplateSwitchProfilePortRequest() # UpdateOrganizationConfigTemplateSwitchProfilePortRequest |  (optional)

    try:
        # Update a switch profile port
        api_response = api_instance.update_organization_config_template_switch_profile_port(organization_id, config_template_id, profile_id, port_id, update_organization_config_template_switch_profile_port_request=update_organization_config_template_switch_profile_port_request)
        print("The response of SwitchApi->update_organization_config_template_switch_profile_port:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwitchApi->update_organization_config_template_switch_profile_port: %s\n" % e)
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


# GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_policy_number** | **int** | The number of a custom access policy to configure on the switch profile port. Only applicable when &#39;accessPolicyType&#39; is &#39;Custom access policy&#39;. | [optional] 
**access_policy_type** | **str** | The type of the access policy of the switch profile port. Only applicable to access ports. Can be one of &#39;Open&#39;, &#39;Custom access policy&#39;, &#39;MAC allow list&#39; or &#39;Sticky MAC allow list&#39;. | [optional] 
**allowed_vlans** | **str** | The VLANs allowed on the switch profile port. Only applicable to trunk ports. | [optional] 
**dai_trusted** | **bool** | If true, ARP packets for this port will be considered trusted, and Dynamic ARP Inspection will allow the traffic. | [optional] 
**enabled** | **bool** | The status of the switch profile port. | [optional] 
**flexible_stacking_enabled** | **bool** | For supported switches (e.g. MS420/MS425), whether or not the port has flexible stacking enabled. | [optional] 
**isolation_enabled** | **bool** | The isolation status of the switch profile port. | [optional] 
**link_negotiation** | **str** | The link speed for the switch profile port. | [optional] 
**link_negotiation_capabilities** | **List[str]** | Available link speeds for the switch profile port. | [optional] 
**mac_allow_list** | **List[str]** | Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when &#39;accessPolicyType&#39; is &#39;MAC allow list&#39;. | [optional] 
**name** | **str** | The name of the switch profile port. | [optional] 
**poe_enabled** | **bool** | The PoE status of the switch profile port. | [optional] 
**port_id** | **str** | The identifier of the switch profile port. | [optional] 
**port_schedule_id** | **str** | The ID of the port schedule. A value of null will clear the port schedule. | [optional] 
**profile** | [**GetDeviceSwitchPorts200ResponseInnerProfile**](GetDeviceSwitchPorts200ResponseInnerProfile.md) |  | [optional] 
**rstp_enabled** | **bool** | The rapid spanning tree protocol status. | [optional] 
**sticky_mac_allow_list** | **List[str]** | The initial list of MAC addresses for sticky Mac allow list. Only applicable when &#39;accessPolicyType&#39; is &#39;Sticky MAC allow list&#39;. | [optional] 
**sticky_mac_allow_list_limit** | **int** | The maximum number of MAC addresses for sticky MAC allow list. Only applicable when &#39;accessPolicyType&#39; is &#39;Sticky MAC allow list&#39;. | [optional] 
**storm_control_enabled** | **bool** | The storm control status of the switch profile port. | [optional] 
**stp_guard** | **str** | The state of the STP guard (&#39;disabled&#39;, &#39;root guard&#39;, &#39;bpdu guard&#39; or &#39;loop guard&#39;). | [optional] 
**tags** | **List[str]** | The list of tags of the switch profile port. | [optional] 
**type** | **str** | The type of the switch profile port (&#39;trunk&#39; or &#39;access&#39;). | [optional] 
**udld** | **str** | The action to take when Unidirectional Link is detected (Alert only, Enforce). Default configuration is Alert only. | [optional] 
**vlan** | **int** | The VLAN of the switch profile port. A null value will clear the value set for trunk ports. | [optional] 
**voice_vlan** | **int** | The voice VLAN of the switch profile port. Only applicable to access ports. | [optional] 

## Example

```python
from openapi_client.models.get_organization_config_template_switch_profile_ports200_response_inner import GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner from a JSON string
get_organization_config_template_switch_profile_ports200_response_inner_instance = GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner.to_json())

# convert the object into a dict
get_organization_config_template_switch_profile_ports200_response_inner_dict = get_organization_config_template_switch_profile_ports200_response_inner_instance.to_dict()
# create an instance of GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner from a dict
get_organization_config_template_switch_profile_ports200_response_inner_from_dict = GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner.from_dict(get_organization_config_template_switch_profile_ports200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



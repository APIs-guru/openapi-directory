# GetOrganizationSwitchPortsBySwitch200ResponseInnerPortsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_policy_type** | **str** | The type of the access policy of the switch port. Only applicable to access ports. Can be one of &#39;Open&#39;, &#39;Custom access policy&#39;, &#39;MAC allow list&#39; or &#39;Sticky MAC allow list&#39;. | [optional] 
**allowed_vlans** | **str** | The VLANs allowed on the switch port. Only applicable to trunk ports. | [optional] 
**enabled** | **bool** | The status of the switch port. | [optional] 
**link_negotiation** | **str** | The link speed for the switch port. | [optional] 
**name** | **str** | The name of the switch port. | [optional] 
**poe_enabled** | **bool** | The PoE status of the switch port. | [optional] 
**port_id** | **str** | The identifier of the switch port. | [optional] 
**rstp_enabled** | **bool** | The rapid spanning tree protocol status. | [optional] 
**sticky_mac_allow_list** | **List[str]** | The initial list of MAC addresses for sticky Mac allow list. Only applicable when &#39;accessPolicyType&#39; is &#39;Sticky MAC allow list&#39;. | [optional] 
**sticky_mac_allow_list_limit** | **int** | The maximum number of MAC addresses for sticky MAC allow list. Only applicable when &#39;accessPolicyType&#39; is &#39;Sticky MAC allow list&#39;. | [optional] 
**stp_guard** | **str** | The state of the STP guard (&#39;disabled&#39;, &#39;root guard&#39;, &#39;bpdu guard&#39; or &#39;loop guard&#39;). | [optional] 
**tags** | **List[str]** | The list of tags of the switch port. | [optional] 
**type** | **str** | The type of the switch port (&#39;trunk&#39; or &#39;access&#39;). | [optional] 
**vlan** | **int** | The VLAN of the switch port. A null value will clear the value set for trunk ports. | [optional] 
**voice_vlan** | **int** | The voice VLAN of the switch port. Only applicable to access ports. | [optional] 

## Example

```python
from openapi_client.models.get_organization_switch_ports_by_switch200_response_inner_ports_inner import GetOrganizationSwitchPortsBySwitch200ResponseInnerPortsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSwitchPortsBySwitch200ResponseInnerPortsInner from a JSON string
get_organization_switch_ports_by_switch200_response_inner_ports_inner_instance = GetOrganizationSwitchPortsBySwitch200ResponseInnerPortsInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSwitchPortsBySwitch200ResponseInnerPortsInner.to_json())

# convert the object into a dict
get_organization_switch_ports_by_switch200_response_inner_ports_inner_dict = get_organization_switch_ports_by_switch200_response_inner_ports_inner_instance.to_dict()
# create an instance of GetOrganizationSwitchPortsBySwitch200ResponseInnerPortsInner from a dict
get_organization_switch_ports_by_switch200_response_inner_ports_inner_from_dict = GetOrganizationSwitchPortsBySwitch200ResponseInnerPortsInner.from_dict(get_organization_switch_ports_by_switch200_response_inner_ports_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



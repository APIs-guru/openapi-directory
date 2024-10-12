# GetOrganizationSwitchPortsBySwitch200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mac** | **str** | MAC address of the switch | [optional] 
**model** | **str** | Model of the switch | [optional] 
**name** | **str** | Name of the switch | [optional] 
**network** | [**GetOrganizationSwitchPortsBySwitch200ResponseInnerNetwork**](GetOrganizationSwitchPortsBySwitch200ResponseInnerNetwork.md) |  | [optional] 
**ports** | [**List[GetOrganizationSwitchPortsBySwitch200ResponseInnerPortsInner]**](GetOrganizationSwitchPortsBySwitch200ResponseInnerPortsInner.md) | Ports belonging to the switch | [optional] 
**serial** | **str** | Serial of the switch | [optional] 

## Example

```python
from openapi_client.models.get_organization_switch_ports_by_switch200_response_inner import GetOrganizationSwitchPortsBySwitch200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSwitchPortsBySwitch200ResponseInner from a JSON string
get_organization_switch_ports_by_switch200_response_inner_instance = GetOrganizationSwitchPortsBySwitch200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSwitchPortsBySwitch200ResponseInner.to_json())

# convert the object into a dict
get_organization_switch_ports_by_switch200_response_inner_dict = get_organization_switch_ports_by_switch200_response_inner_instance.to_dict()
# create an instance of GetOrganizationSwitchPortsBySwitch200ResponseInner from a dict
get_organization_switch_ports_by_switch200_response_inner_from_dict = GetOrganizationSwitchPortsBySwitch200ResponseInner.from_dict(get_organization_switch_ports_by_switch200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



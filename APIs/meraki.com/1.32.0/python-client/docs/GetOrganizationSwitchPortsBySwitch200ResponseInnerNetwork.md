# GetOrganizationSwitchPortsBySwitch200ResponseInnerNetwork

The network that the switch belongs to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the network | [optional] 
**name** | **str** | Name of the network | [optional] 

## Example

```python
from openapi_client.models.get_organization_switch_ports_by_switch200_response_inner_network import GetOrganizationSwitchPortsBySwitch200ResponseInnerNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSwitchPortsBySwitch200ResponseInnerNetwork from a JSON string
get_organization_switch_ports_by_switch200_response_inner_network_instance = GetOrganizationSwitchPortsBySwitch200ResponseInnerNetwork.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSwitchPortsBySwitch200ResponseInnerNetwork.to_json())

# convert the object into a dict
get_organization_switch_ports_by_switch200_response_inner_network_dict = get_organization_switch_ports_by_switch200_response_inner_network_instance.to_dict()
# create an instance of GetOrganizationSwitchPortsBySwitch200ResponseInnerNetwork from a dict
get_organization_switch_ports_by_switch200_response_inner_network_from_dict = GetOrganizationSwitchPortsBySwitch200ResponseInnerNetwork.from_dict(get_organization_switch_ports_by_switch200_response_inner_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



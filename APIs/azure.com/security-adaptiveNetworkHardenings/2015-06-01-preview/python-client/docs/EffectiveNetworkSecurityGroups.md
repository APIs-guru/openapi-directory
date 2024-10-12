# EffectiveNetworkSecurityGroups

Describes the Network Security Groups effective on a network interface

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_interface** | **str** | The Azure resource ID of the network interface | [optional] 
**network_security_groups** | **List[str]** | The Network Security Groups effective on the network interface | [optional] 

## Example

```python
from openapi_client.models.effective_network_security_groups import EffectiveNetworkSecurityGroups

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveNetworkSecurityGroups from a JSON string
effective_network_security_groups_instance = EffectiveNetworkSecurityGroups.from_json(json)
# print the JSON string representation of the object
print(EffectiveNetworkSecurityGroups.to_json())

# convert the object into a dict
effective_network_security_groups_dict = effective_network_security_groups_instance.to_dict()
# create an instance of EffectiveNetworkSecurityGroups from a dict
effective_network_security_groups_from_dict = EffectiveNetworkSecurityGroups.from_dict(effective_network_security_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



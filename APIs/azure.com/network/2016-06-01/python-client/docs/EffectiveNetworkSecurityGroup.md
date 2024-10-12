# EffectiveNetworkSecurityGroup

Effective NetworkSecurityGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**association** | [**EffectiveNetworkSecurityGroupAssociation**](EffectiveNetworkSecurityGroupAssociation.md) |  | [optional] 
**effective_security_rules** | [**List[EffectiveNetworkSecurityRule]**](EffectiveNetworkSecurityRule.md) | Gets collection of effective security rules | [optional] 
**network_security_group** | [**SubResource**](SubResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.effective_network_security_group import EffectiveNetworkSecurityGroup

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveNetworkSecurityGroup from a JSON string
effective_network_security_group_instance = EffectiveNetworkSecurityGroup.from_json(json)
# print the JSON string representation of the object
print(EffectiveNetworkSecurityGroup.to_json())

# convert the object into a dict
effective_network_security_group_dict = effective_network_security_group_instance.to_dict()
# create an instance of EffectiveNetworkSecurityGroup from a dict
effective_network_security_group_from_dict = EffectiveNetworkSecurityGroup.from_dict(effective_network_security_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



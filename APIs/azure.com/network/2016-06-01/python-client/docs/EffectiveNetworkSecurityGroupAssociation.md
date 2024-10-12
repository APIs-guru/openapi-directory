# EffectiveNetworkSecurityGroupAssociation

Effective NetworkSecurityGroup association

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_interface** | [**SubResource**](SubResource.md) |  | [optional] 
**subnet** | [**SubResource**](SubResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.effective_network_security_group_association import EffectiveNetworkSecurityGroupAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveNetworkSecurityGroupAssociation from a JSON string
effective_network_security_group_association_instance = EffectiveNetworkSecurityGroupAssociation.from_json(json)
# print the JSON string representation of the object
print(EffectiveNetworkSecurityGroupAssociation.to_json())

# convert the object into a dict
effective_network_security_group_association_dict = effective_network_security_group_association_instance.to_dict()
# create an instance of EffectiveNetworkSecurityGroupAssociation from a dict
effective_network_security_group_association_from_dict = EffectiveNetworkSecurityGroupAssociation.from_dict(effective_network_security_group_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



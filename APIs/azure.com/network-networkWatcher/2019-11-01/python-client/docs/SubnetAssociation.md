# SubnetAssociation

Subnet and it's custom security rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Subnet ID. | [optional] [readonly] 
**security_rules** | [**List[NetworkInterfaceAssociationSecurityRulesInner]**](NetworkInterfaceAssociationSecurityRulesInner.md) | Collection of custom security rules. | [optional] 

## Example

```python
from openapi_client.models.subnet_association import SubnetAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of SubnetAssociation from a JSON string
subnet_association_instance = SubnetAssociation.from_json(json)
# print the JSON string representation of the object
print(SubnetAssociation.to_json())

# convert the object into a dict
subnet_association_dict = subnet_association_instance.to_dict()
# create an instance of SubnetAssociation from a dict
subnet_association_from_dict = SubnetAssociation.from_dict(subnet_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AliasType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The alias name. | [optional] 
**paths** | [**List[AliasPathType]**](AliasPathType.md) | The paths for an alias. | [optional] 

## Example

```python
from openapi_client.models.alias_type import AliasType

# TODO update the JSON string below
json = "{}"
# create an instance of AliasType from a JSON string
alias_type_instance = AliasType.from_json(json)
# print the JSON string representation of the object
print(AliasType.to_json())

# convert the object into a dict
alias_type_dict = alias_type_instance.to_dict()
# create an instance of AliasType from a dict
alias_type_from_dict = AliasType.from_dict(alias_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



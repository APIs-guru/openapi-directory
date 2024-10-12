# AliasPathType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_versions** | **List[str]** | The api versions. | [optional] 
**path** | **str** | The path of an alias. | [optional] 

## Example

```python
from openapi_client.models.alias_path_type import AliasPathType

# TODO update the JSON string below
json = "{}"
# create an instance of AliasPathType from a JSON string
alias_path_type_instance = AliasPathType.from_json(json)
# print the JSON string representation of the object
print(AliasPathType.to_json())

# convert the object into a dict
alias_path_type_dict = alias_path_type_instance.to_dict()
# create an instance of AliasPathType from a dict
alias_path_type_from_dict = AliasPathType.from_dict(alias_path_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ModeValueInfo

Nested parameter definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interface_string** | **str** | The interface string name for the nested parameter. | [optional] 
**parameters** | [**List[ModuleAssetParameter]**](ModuleAssetParameter.md) | The definition of the parameter. | [optional] 

## Example

```python
from openapi_client.models.mode_value_info import ModeValueInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ModeValueInfo from a JSON string
mode_value_info_instance = ModeValueInfo.from_json(json)
# print the JSON string representation of the object
print(ModeValueInfo.to_json())

# convert the object into a dict
mode_value_info_dict = mode_value_info_instance.to_dict()
# create an instance of ModeValueInfo from a dict
mode_value_info_from_dict = ModeValueInfo.from_dict(mode_value_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



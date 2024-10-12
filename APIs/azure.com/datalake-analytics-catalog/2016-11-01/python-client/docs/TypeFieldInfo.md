# TypeFieldInfo

A Data Lake Analytics catalog type field information item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of the field associated with this type. | [optional] 
**type** | **str** | the type of the field. | [optional] 

## Example

```python
from openapi_client.models.type_field_info import TypeFieldInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TypeFieldInfo from a JSON string
type_field_info_instance = TypeFieldInfo.from_json(json)
# print the JSON string representation of the object
print(TypeFieldInfo.to_json())

# convert the object into a dict
type_field_info_dict = type_field_info_instance.to_dict()
# create an instance of TypeFieldInfo from a dict
type_field_info_from_dict = TypeFieldInfo.from_dict(type_field_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



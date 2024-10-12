# TypeFieldListResult

The response model for the list fields operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[TypeField]**](TypeField.md) | Gets or sets a list of fields. | [optional] 

## Example

```python
from openapi_client.models.type_field_list_result import TypeFieldListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TypeFieldListResult from a JSON string
type_field_list_result_instance = TypeFieldListResult.from_json(json)
# print the JSON string representation of the object
print(TypeFieldListResult.to_json())

# convert the object into a dict
type_field_list_result_dict = type_field_list_result_instance.to_dict()
# create an instance of TypeFieldListResult from a dict
type_field_list_result_from_dict = TypeFieldListResult.from_dict(type_field_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



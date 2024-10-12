# FieldValueChange

Change to a Field value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The human-readable display name for this field. | [optional] 
**field_id** | **str** | The ID of this field. Field IDs are unique within a Label. | [optional] 
**new_value** | [**FieldValue**](FieldValue.md) |  | [optional] 
**old_value** | [**FieldValue**](FieldValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.field_value_change import FieldValueChange

# TODO update the JSON string below
json = "{}"
# create an instance of FieldValueChange from a JSON string
field_value_change_instance = FieldValueChange.from_json(json)
# print the JSON string representation of the object
print(FieldValueChange.to_json())

# convert the object into a dict
field_value_change_dict = field_value_change_instance.to_dict()
# create an instance of FieldValueChange from a dict
field_value_change_from_dict = FieldValueChange.from_dict(field_value_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



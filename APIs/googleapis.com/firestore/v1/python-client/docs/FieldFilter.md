# FieldFilter

A filter on a specific field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | [**FieldReference**](FieldReference.md) |  | [optional] 
**op** | **str** | The operator to filter by. | [optional] 
**value** | [**Value**](Value.md) |  | [optional] 

## Example

```python
from openapi_client.models.field_filter import FieldFilter

# TODO update the JSON string below
json = "{}"
# create an instance of FieldFilter from a JSON string
field_filter_instance = FieldFilter.from_json(json)
# print the JSON string representation of the object
print(FieldFilter.to_json())

# convert the object into a dict
field_filter_dict = field_filter_instance.to_dict()
# create an instance of FieldFilter from a dict
field_filter_from_dict = FieldFilter.from_dict(field_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# FieldUpdateOperation

Details of an operation to perform on a field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add** | **object** | The value to add to the field. | [optional] 
**copy** | **object** | The field value to copy from another issue. | [optional] 
**edit** | **object** | The value to edit in the field. | [optional] 
**remove** | **object** | The value to removed from the field. | [optional] 
**set** | **object** | The value to set in the field. | [optional] 

## Example

```python
from openapi_client.models.field_update_operation import FieldUpdateOperation

# TODO update the JSON string below
json = "{}"
# create an instance of FieldUpdateOperation from a JSON string
field_update_operation_instance = FieldUpdateOperation.from_json(json)
# print the JSON string representation of the object
print(FieldUpdateOperation.to_json())

# convert the object into a dict
field_update_operation_dict = field_update_operation_instance.to_dict()
# create an instance of FieldUpdateOperation from a dict
field_update_operation_from_dict = FieldUpdateOperation.from_dict(field_update_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



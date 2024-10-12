# FieldTransform

Describes the difference between two Streams.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_field** | [**FieldAdd**](FieldAdd.md) |  | [optional] 
**breaking** | **bool** |  | 
**field_name** | **List[str]** | A field name is a list of strings that form the path to the field. | 
**remove_field** | [**FieldRemove**](FieldRemove.md) |  | [optional] 
**transform_type** | **str** |  | 
**update_field_schema** | [**FieldSchemaUpdate**](FieldSchemaUpdate.md) |  | [optional] 

## Example

```python
from openapi_client.models.field_transform import FieldTransform

# TODO update the JSON string below
json = "{}"
# create an instance of FieldTransform from a JSON string
field_transform_instance = FieldTransform.from_json(json)
# print the JSON string representation of the object
print(FieldTransform.to_json())

# convert the object into a dict
field_transform_dict = field_transform_instance.to_dict()
# create an instance of FieldTransform from a dict
field_transform_from_dict = FieldTransform.from_dict(field_transform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



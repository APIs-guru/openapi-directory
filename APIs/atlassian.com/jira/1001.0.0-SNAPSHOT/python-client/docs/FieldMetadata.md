# FieldMetadata

The metadata describing an issue field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | **List[object]** | The list of values allowed in the field. | [optional] [readonly] 
**auto_complete_url** | **str** | The URL that can be used to automatically complete the field. | [optional] [readonly] 
**configuration** | **Dict[str, object]** | The configuration properties. | [optional] [readonly] 
**default_value** | **object** | The default value of the field. | [optional] [readonly] 
**has_default_value** | **bool** | Whether the field has a default value. | [optional] [readonly] 
**key** | **str** | The key of the field. | [readonly] 
**name** | **str** | The name of the field. | [readonly] 
**operations** | **List[str]** | The list of operations that can be performed on the field. | [readonly] 
**required** | **bool** | Whether the field is required. | [readonly] 
**var_schema** | [**JsonTypeBean**](JsonTypeBean.md) | The data type of the field. | [readonly] 

## Example

```python
from openapi_client.models.field_metadata import FieldMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of FieldMetadata from a JSON string
field_metadata_instance = FieldMetadata.from_json(json)
# print the JSON string representation of the object
print(FieldMetadata.to_json())

# convert the object into a dict
field_metadata_dict = field_metadata_instance.to_dict()
# create an instance of FieldMetadata from a dict
field_metadata_from_dict = FieldMetadata.from_dict(field_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ModelField

A single field of a message type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardinality** | **str** | The field cardinality. | [optional] 
**default_value** | **str** | The string value of the default value of this field. Proto2 syntax only. | [optional] 
**json_name** | **str** | The field JSON name. | [optional] 
**kind** | **str** | The field type. | [optional] 
**name** | **str** | The field name. | [optional] 
**number** | **int** | The field number. | [optional] 
**oneof_index** | **int** | The index of the field type in &#x60;Type.oneofs&#x60;, for message or enumeration types. The first type has index 1; zero means the type is not in the list. | [optional] 
**options** | [**List[Option]**](Option.md) | The protocol buffer options. | [optional] 
**packed** | **bool** | Whether to use alternative packed wire representation. | [optional] 
**type_url** | **str** | The field type URL, without the scheme, for message or enumeration types. Example: &#x60;\&quot;type.googleapis.com/google.protobuf.Timestamp\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.model_field import ModelField

# TODO update the JSON string below
json = "{}"
# create an instance of ModelField from a JSON string
model_field_instance = ModelField.from_json(json)
# print the JSON string representation of the object
print(ModelField.to_json())

# convert the object into a dict
model_field_dict = model_field_instance.to_dict()
# create an instance of ModelField from a dict
model_field_from_dict = ModelField.from_dict(model_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



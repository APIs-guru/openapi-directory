# ModelField

A (sub) field of a type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_occurs** | **int** | The maximum number of times this field can be repeated. 0 or -1 means unbounded. | [optional] 
**min_occurs** | **int** | The minimum number of times this field must be present/repeated. | [optional] 
**name** | **str** | The name of the field. For example, \&quot;PID-1\&quot; or just \&quot;1\&quot;. | [optional] 
**table** | **str** | The HL7v2 table this field refers to. For example, PID-15 (Patient&#39;s Primary Language) usually refers to table \&quot;0296\&quot;. | [optional] 
**type** | **str** | The type of this field. A Type with this name must be defined in an Hl7TypesConfig. | [optional] 

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



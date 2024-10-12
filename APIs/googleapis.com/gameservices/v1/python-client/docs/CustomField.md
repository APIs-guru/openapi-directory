# CustomField

Custom fields. These can be used to create a counter with arbitrary field/value pairs. See: go/rpcsp-custom-fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name is the field name. | [optional] 
**value** | **str** | Value is the field value. It is important that in contrast to the CounterOptions.field, the value here is a constant that is not derived from the IAMContext. | [optional] 

## Example

```python
from openapi_client.models.custom_field import CustomField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomField from a JSON string
custom_field_instance = CustomField.from_json(json)
# print the JSON string representation of the object
print(CustomField.to_json())

# convert the object into a dict
custom_field_dict = custom_field_instance.to_dict()
# create an instance of CustomField from a dict
custom_field_from_dict = CustomField.from_dict(custom_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



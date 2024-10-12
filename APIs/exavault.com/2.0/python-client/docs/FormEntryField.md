# FormEntryField

Attributes of the form including its included fields and css styles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Field name | [optional] 
**order** | **int** | Field order in the form | [optional] 
**value** | **str** | Field value | [optional] 

## Example

```python
from openapi_client.models.form_entry_field import FormEntryField

# TODO update the JSON string below
json = "{}"
# create an instance of FormEntryField from a JSON string
form_entry_field_instance = FormEntryField.from_json(json)
# print the JSON string representation of the object
print(FormEntryField.to_json())

# convert the object into a dict
form_entry_field_dict = form_entry_field_instance.to_dict()
# create an instance of FormEntryField from a dict
form_entry_field_from_dict = FormEntryField.from_dict(form_entry_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



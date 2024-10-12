# FormEntryAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | Timestamp of the submission | [optional] 
**fields** | [**List[FormEntryField]**](FormEntryField.md) |  | [optional] 
**modified** | **datetime** | Timestamp of the field modified date | [optional] 
**paths** | **List[str]** | Full paths to files associated with the form submission | [optional] 
**status** | **str** | Form entry status | [optional] 

## Example

```python
from openapi_client.models.form_entry_attributes import FormEntryAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of FormEntryAttributes from a JSON string
form_entry_attributes_instance = FormEntryAttributes.from_json(json)
# print the JSON string representation of the object
print(FormEntryAttributes.to_json())

# convert the object into a dict
form_entry_attributes_dict = form_entry_attributes_instance.to_dict()
# create an instance of FormEntryAttributes from a dict
form_entry_attributes_from_dict = FormEntryAttributes.from_dict(form_entry_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



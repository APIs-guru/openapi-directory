# FormEntry

Contains the data submitted for a form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**FormEntryAttributes**](FormEntryAttributes.md) |  | [optional] 
**id** | **int** | Form entry id | [optional] 
**type** | **str** | Type of item. \&quot;formEntry\&quot; | [optional] 

## Example

```python
from openapi_client.models.form_entry import FormEntry

# TODO update the JSON string below
json = "{}"
# create an instance of FormEntry from a JSON string
form_entry_instance = FormEntry.from_json(json)
# print the JSON string representation of the object
print(FormEntry.to_json())

# convert the object into a dict
form_entry_dict = form_entry_instance.to_dict()
# create an instance of FormEntry from a dict
form_entry_from_dict = FormEntry.from_dict(form_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



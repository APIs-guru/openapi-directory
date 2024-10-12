# FormFieldSettings

Advanced field settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Secondary description of field. | [optional] 
**is_required** | **bool** | Whether this field must be completed before form can be submitted | [optional] 
**sender_email** | **bool** |  | [optional] 
**use_as_folder_name** | **bool** | Whether to place submitted files into a subfolder named the contents of this field. Only takes effect when the &#x60;fileDropCreateFolders&#x60; parameter on the receive folder is &#x60;true&#x60;. &#x60;isRequired&#x60; must be set to &#x60;true&#x60; if this setting is &#x60;true&#x60;. | [optional] 
**width** | **float** | How much of the available width the field should occupy | [optional] 

## Example

```python
from openapi_client.models.form_field_settings import FormFieldSettings

# TODO update the JSON string below
json = "{}"
# create an instance of FormFieldSettings from a JSON string
form_field_settings_instance = FormFieldSettings.from_json(json)
# print the JSON string representation of the object
print(FormFieldSettings.to_json())

# convert the object into a dict
form_field_settings_dict = form_field_settings_instance.to_dict()
# create an instance of FormFieldSettings from a dict
form_field_settings_from_dict = FormFieldSettings.from_dict(form_field_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



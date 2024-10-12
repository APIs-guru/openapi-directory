# MailExportOptions

Options for Gmail exports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_format** | **str** | The file format for exported messages. | [optional] 
**export_linked_drive_files** | **bool** | Optional. To enable exporting linked Drive files, set to **true**. | [optional] 
**show_confidential_mode_content** | **bool** | To export confidential mode content, set to **true**. | [optional] 
**use_new_export** | **bool** | To use the new export system, set to **true**. | [optional] 

## Example

```python
from openapi_client.models.mail_export_options import MailExportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of MailExportOptions from a JSON string
mail_export_options_instance = MailExportOptions.from_json(json)
# print the JSON string representation of the object
print(MailExportOptions.to_json())

# convert the object into a dict
mail_export_options_dict = mail_export_options_instance.to_dict()
# create an instance of MailExportOptions from a dict
mail_export_options_from_dict = MailExportOptions.from_dict(mail_export_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



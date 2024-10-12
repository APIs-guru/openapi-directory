# FormFieldUploadAreaSettings

Advanced field settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_types** | **str** | File types that can be uploaded. Comma-delimited string of MIME file types. | [optional] 

## Example

```python
from openapi_client.models.form_field_upload_area_settings import FormFieldUploadAreaSettings

# TODO update the JSON string below
json = "{}"
# create an instance of FormFieldUploadAreaSettings from a JSON string
form_field_upload_area_settings_instance = FormFieldUploadAreaSettings.from_json(json)
# print the JSON string representation of the object
print(FormFieldUploadAreaSettings.to_json())

# convert the object into a dict
form_field_upload_area_settings_dict = form_field_upload_area_settings_instance.to_dict()
# create an instance of FormFieldUploadAreaSettings from a dict
form_field_upload_area_settings_from_dict = FormFieldUploadAreaSettings.from_dict(form_field_upload_area_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



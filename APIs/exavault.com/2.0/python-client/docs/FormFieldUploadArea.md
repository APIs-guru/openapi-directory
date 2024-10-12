# FormFieldUploadArea


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | ID of the form field.  | [optional] 
**name** | **str** | Label of the field (not used). | [optional] 
**order** | **int** | Order that field appears on the form, starting from 0 | [optional] 
**settings** | [**FormFieldUploadAreaSettings**](FormFieldUploadAreaSettings.md) |  | [optional] 
**type** | **str** | Type is upload_area. | [optional] 

## Example

```python
from openapi_client.models.form_field_upload_area import FormFieldUploadArea

# TODO update the JSON string below
json = "{}"
# create an instance of FormFieldUploadArea from a JSON string
form_field_upload_area_instance = FormFieldUploadArea.from_json(json)
# print the JSON string representation of the object
print(FormFieldUploadArea.to_json())

# convert the object into a dict
form_field_upload_area_dict = form_field_upload_area_instance.to_dict()
# create an instance of FormFieldUploadArea from a dict
form_field_upload_area_from_dict = FormFieldUploadArea.from_dict(form_field_upload_area_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GetImageUploadUrlInput

Input type for getting image upload url.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_type** | **str** | Type of entity. Can be Profile or Interaction. | [optional] 
**entity_type_name** | **str** | Name of the entity type. | [optional] 
**relative_path** | **str** | Relative path of the image. | [optional] 

## Example

```python
from openapi_client.models.get_image_upload_url_input import GetImageUploadUrlInput

# TODO update the JSON string below
json = "{}"
# create an instance of GetImageUploadUrlInput from a JSON string
get_image_upload_url_input_instance = GetImageUploadUrlInput.from_json(json)
# print the JSON string representation of the object
print(GetImageUploadUrlInput.to_json())

# convert the object into a dict
get_image_upload_url_input_dict = get_image_upload_url_input_instance.to_dict()
# create an instance of GetImageUploadUrlInput from a dict
get_image_upload_url_input_from_dict = GetImageUploadUrlInput.from_dict(get_image_upload_url_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



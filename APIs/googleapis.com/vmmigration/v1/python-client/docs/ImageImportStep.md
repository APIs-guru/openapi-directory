# ImageImportStep

ImageImportStep holds information about the image import step progress.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adapting_os** | **object** | AdaptingOSStep contains specific step details. | [optional] 
**creating_image** | **object** | CreatingImageStep contains specific step details. | [optional] 
**end_time** | **str** | Output only. The time the step has ended. | [optional] [readonly] 
**initializing** | **object** | InitializingImageImportStep contains specific step details. | [optional] 
**loading_source_files** | **object** | LoadingImageSourceFilesStep contains specific step details. | [optional] 
**start_time** | **str** | Output only. The time the step has started. | [optional] [readonly] 

## Example

```python
from openapi_client.models.image_import_step import ImageImportStep

# TODO update the JSON string below
json = "{}"
# create an instance of ImageImportStep from a JSON string
image_import_step_instance = ImageImportStep.from_json(json)
# print the JSON string representation of the object
print(ImageImportStep.to_json())

# convert the object into a dict
image_import_step_dict = image_import_step_instance.to_dict()
# create an instance of ImageImportStep from a dict
image_import_step_from_dict = ImageImportStep.from_dict(image_import_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



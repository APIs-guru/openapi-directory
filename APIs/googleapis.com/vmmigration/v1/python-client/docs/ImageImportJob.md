# ImageImportJob

ImageImportJob describes the progress and result of an image import.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_storage_uri** | **str** | Output only. The path to the Cloud Storage file from which the image should be imported. | [optional] [readonly] 
**create_time** | **str** | Output only. The time the image import was created (as an API call, not when it was actually created in the target). | [optional] [readonly] 
**created_resources** | **List[str]** | Output only. The resource paths of the resources created by the image import job. | [optional] [readonly] 
**disk_image_target_details** | [**DiskImageTargetDetails**](DiskImageTargetDetails.md) |  | [optional] 
**end_time** | **str** | Output only. The time the image import was ended. | [optional] [readonly] 
**errors** | [**List[Status]**](Status.md) | Output only. Provides details on the error that led to the image import state in case of an error. | [optional] [readonly] 
**name** | **str** | Output only. The resource path of the ImageImportJob. | [optional] [readonly] 
**state** | **str** | Output only. The state of the image import. | [optional] [readonly] 
**steps** | [**List[ImageImportStep]**](ImageImportStep.md) | Output only. The image import steps list representing its progress. | [optional] [readonly] 
**warnings** | [**List[MigrationWarning]**](MigrationWarning.md) | Output only. Warnings that occurred during the image import. | [optional] [readonly] 

## Example

```python
from openapi_client.models.image_import_job import ImageImportJob

# TODO update the JSON string below
json = "{}"
# create an instance of ImageImportJob from a JSON string
image_import_job_instance = ImageImportJob.from_json(json)
# print the JSON string representation of the object
print(ImageImportJob.to_json())

# convert the object into a dict
image_import_job_dict = image_import_job_instance.to_dict()
# create an instance of ImageImportJob from a dict
image_import_job_from_dict = ImageImportJob.from_dict(image_import_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ImageImport

ImageImport describes the configuration of the image import to run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_storage_uri** | **str** | Immutable. The path to the Cloud Storage file from which the image should be imported. | [optional] 
**create_time** | **str** | Output only. The time the image import was created. | [optional] [readonly] 
**disk_image_target_defaults** | [**DiskImageTargetDetails**](DiskImageTargetDetails.md) |  | [optional] 
**encryption** | [**Encryption**](Encryption.md) |  | [optional] 
**name** | **str** | Output only. The resource path of the ImageImport. | [optional] [readonly] 
**recent_image_import_jobs** | [**List[ImageImportJob]**](ImageImportJob.md) | Output only. The result of the most recent runs for this ImageImport. All jobs for this ImageImport can be listed via ListImageImportJobs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.image_import import ImageImport

# TODO update the JSON string below
json = "{}"
# create an instance of ImageImport from a JSON string
image_import_instance = ImageImport.from_json(json)
# print the JSON string representation of the object
print(ImageImport.to_json())

# convert the object into a dict
image_import_dict = image_import_instance.to_dict()
# create an instance of ImageImport from a dict
image_import_from_dict = ImageImport.from_dict(image_import_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



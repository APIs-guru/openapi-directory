# DiskImageTargetDetails

The target details of the image resource that will be created by the import job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_licenses** | **List[str]** | Optional. Additional licenses to assign to the image. | [optional] 
**data_disk_image_import** | **object** | Mentions that the image import is not using OS adaptation process. | [optional] 
**description** | **str** | Optional. An optional description of the image. | [optional] 
**encryption** | [**Encryption**](Encryption.md) |  | [optional] 
**family_name** | **str** | Optional. The name of the image family to which the new image belongs. | [optional] 
**image_name** | **str** | Required. The name of the image to be created. | [optional] 
**labels** | **Dict[str, str]** | Optional. A map of labels to associate with the image. | [optional] 
**os_adaptation_parameters** | [**ImageImportOsAdaptationParameters**](ImageImportOsAdaptationParameters.md) |  | [optional] 
**single_region_storage** | **bool** | Optional. Set to true to set the image storageLocations to the single region of the import job. When false, the closest multi-region is selected. | [optional] 
**target_project** | **str** | Required. Reference to the TargetProject resource that represents the target project in which the imported image will be created. | [optional] 

## Example

```python
from openapi_client.models.disk_image_target_details import DiskImageTargetDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DiskImageTargetDetails from a JSON string
disk_image_target_details_instance = DiskImageTargetDetails.from_json(json)
# print the JSON string representation of the object
print(DiskImageTargetDetails.to_json())

# convert the object into a dict
disk_image_target_details_dict = disk_image_target_details_instance.to_dict()
# create an instance of DiskImageTargetDetails from a dict
disk_image_target_details_from_dict = DiskImageTargetDetails.from_dict(disk_image_target_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



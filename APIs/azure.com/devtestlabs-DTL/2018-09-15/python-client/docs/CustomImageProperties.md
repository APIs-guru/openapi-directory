# CustomImageProperties

Properties of a custom image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | The author of the custom image. | [optional] 
**creation_date** | **datetime** | The creation date of the custom image. | [optional] [readonly] 
**custom_image_plan** | [**CustomImagePropertiesFromPlan**](CustomImagePropertiesFromPlan.md) |  | [optional] 
**data_disk_storage_info** | [**List[DataDiskStorageTypeInfo]**](DataDiskStorageTypeInfo.md) | Storage information about the data disks present in the custom image | [optional] 
**description** | **str** | The description of the custom image. | [optional] 
**is_plan_authorized** | **bool** | Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment | [optional] 
**managed_image_id** | **str** | The Managed Image Id backing the custom image. | [optional] 
**managed_snapshot_id** | **str** | The Managed Snapshot Id backing the custom image. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] [readonly] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] [readonly] 
**vhd** | [**CustomImagePropertiesCustom**](CustomImagePropertiesCustom.md) |  | [optional] 
**vm** | [**CustomImagePropertiesFromVm**](CustomImagePropertiesFromVm.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_image_properties import CustomImageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CustomImageProperties from a JSON string
custom_image_properties_instance = CustomImageProperties.from_json(json)
# print the JSON string representation of the object
print(CustomImageProperties.to_json())

# convert the object into a dict
custom_image_properties_dict = custom_image_properties_instance.to_dict()
# create an instance of CustomImageProperties from a dict
custom_image_properties_from_dict = CustomImageProperties.from_dict(custom_image_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



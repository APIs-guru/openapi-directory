# CustomImagePropertiesFragment

Properties of a custom image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | The author of the custom image. | [optional] 
**custom_image_plan** | [**CustomImagePropertiesFromPlanFragment**](CustomImagePropertiesFromPlanFragment.md) |  | [optional] 
**data_disk_storage_info** | [**List[DataDiskStorageTypeInfoFragment]**](DataDiskStorageTypeInfoFragment.md) | Storage information about the data disks present in the custom image | [optional] 
**description** | **str** | The description of the custom image. | [optional] 
**is_plan_authorized** | **bool** | Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment | [optional] 
**managed_image_id** | **str** | The Managed Image Id backing the custom image. | [optional] 
**managed_snapshot_id** | **str** | The Managed Snapshot Id backing the custom image. | [optional] 
**vhd** | [**CustomImagePropertiesCustomFragment**](CustomImagePropertiesCustomFragment.md) |  | [optional] 
**vm** | [**CustomImagePropertiesFromVmFragment**](CustomImagePropertiesFromVmFragment.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_image_properties_fragment import CustomImagePropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of CustomImagePropertiesFragment from a JSON string
custom_image_properties_fragment_instance = CustomImagePropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(CustomImagePropertiesFragment.to_json())

# convert the object into a dict
custom_image_properties_fragment_dict = custom_image_properties_fragment_instance.to_dict()
# create an instance of CustomImagePropertiesFragment from a dict
custom_image_properties_fragment_from_dict = CustomImagePropertiesFragment.from_dict(custom_image_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



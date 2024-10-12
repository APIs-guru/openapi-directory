# PlatformImageProperties

Properties of platform image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disks** | [**List[DataDisk]**](DataDisk.md) | Data disks used by the platform image. | [optional] 
**details** | [**ImageDetails**](ImageDetails.md) |  | [optional] 
**os_disk** | [**OsDisk**](OsDisk.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] 

## Example

```python
from openapi_client.models.platform_image_properties import PlatformImageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformImageProperties from a JSON string
platform_image_properties_instance = PlatformImageProperties.from_json(json)
# print the JSON string representation of the object
print(PlatformImageProperties.to_json())

# convert the object into a dict
platform_image_properties_dict = platform_image_properties_instance.to_dict()
# create an instance of PlatformImageProperties from a dict
platform_image_properties_from_dict = PlatformImageProperties.from_dict(platform_image_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



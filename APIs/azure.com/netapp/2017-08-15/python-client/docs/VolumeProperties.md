# VolumeProperties

Volume properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_token** | **str** | A unique file path for the volume. Used when creating mount targets | 
**export_policy** | [**VolumePatchPropertiesExportPolicy**](VolumePatchPropertiesExportPolicy.md) |  | [optional] 
**file_system_id** | **str** | Unique FileSystem Identifier. | [optional] [readonly] 
**provisioning_state** | **str** | Azure lifecycle management | [optional] [readonly] 
**service_level** | **str** | The service level of the file system | [default to 'Premium']
**subnet_id** | **str** | The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes | [optional] 
**usage_threshold** | **int** | Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. | [optional] [default to 107374182400]

## Example

```python
from openapi_client.models.volume_properties import VolumeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeProperties from a JSON string
volume_properties_instance = VolumeProperties.from_json(json)
# print the JSON string representation of the object
print(VolumeProperties.to_json())

# convert the object into a dict
volume_properties_dict = volume_properties_instance.to_dict()
# create an instance of VolumeProperties from a dict
volume_properties_from_dict = VolumeProperties.from_dict(volume_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



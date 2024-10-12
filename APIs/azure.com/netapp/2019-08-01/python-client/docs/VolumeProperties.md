# VolumeProperties

Volume properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baremetal_tenant_id** | **str** | Unique Baremetal Tenant Identifier. | [optional] [readonly] 
**creation_token** | **str** | A unique file path for the volume. Used when creating mount targets | 
**data_protection** | [**DataProtection**](DataProtection.md) |  | [optional] 
**export_policy** | [**ExportPolicy**](ExportPolicy.md) |  | [optional] 
**file_system_id** | **str** | Unique FileSystem Identifier. | [optional] [readonly] 
**mount_targets** | [**List[MountTargetList]**](MountTargetList.md) | List of mount targets | [optional] 
**protocol_types** | **List[str]** | Set of protocol types | [optional] 
**provisioning_state** | **str** | Azure lifecycle management | [optional] [readonly] 
**service_level** | **str** | The service level of the file system | [optional] [default to 'Premium']
**snapshot_id** | **str** | UUID v4 or resource identifier used to identify the Snapshot. | [optional] 
**subnet_id** | **str** | The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes | 
**usage_threshold** | **int** | Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes. | [default to 107374182400]
**volume_type** | **str** | What type of volume is this | [optional] 

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



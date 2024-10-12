# VolumeConfig

Configuration parameters for a new volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A transient unique identifier to identify a volume within an ProvisioningConfig request. | [optional] 
**location** | **str** | Location where to deploy the volume. | [optional] 
**lun_ranges** | [**List[LunRange]**](LunRange.md) | LUN ranges to be configured. Set only when protocol is PROTOCOL_FC. | [optional] 
**machine_ids** | **List[str]** | Machine ids connected to this volume. Set only when protocol is PROTOCOL_FC. | [optional] 
**nfs_exports** | [**List[NfsExport]**](NfsExport.md) | NFS exports. Set only when protocol is PROTOCOL_NFS. | [optional] 
**protocol** | **str** | Volume protocol. | [optional] 
**size_gb** | **int** | The requested size of this volume, in GB. This will be updated in a later iteration with a generic size field. | [optional] 
**snapshots_enabled** | **bool** | Whether snapshots should be enabled. | [optional] 
**type** | **str** | The type of this Volume. | [optional] 
**user_note** | **str** | User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617). | [optional] 

## Example

```python
from openapi_client.models.volume_config import VolumeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeConfig from a JSON string
volume_config_instance = VolumeConfig.from_json(json)
# print the JSON string representation of the object
print(VolumeConfig.to_json())

# convert the object into a dict
volume_config_dict = volume_config_instance.to_dict()
# create an instance of VolumeConfig from a dict
volume_config_from_dict = VolumeConfig.from_dict(volume_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



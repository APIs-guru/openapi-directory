# VolumeConfig

Configuration parameters for a new volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcp_service** | **str** | The GCP service of the storage volume. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning. | [optional] 
**id** | **str** | A transient unique identifier to identify a volume within an ProvisioningConfig request. | [optional] 
**lun_ranges** | [**List[LunRange]**](LunRange.md) | LUN ranges to be configured. Set only when protocol is PROTOCOL_FC. | [optional] 
**machine_ids** | **List[str]** | Machine ids connected to this volume. Set only when protocol is PROTOCOL_FC. | [optional] 
**name** | **str** | Output only. The name of the volume config. | [optional] [readonly] 
**nfs_exports** | [**List[NfsExport]**](NfsExport.md) | NFS exports. Set only when protocol is PROTOCOL_NFS. | [optional] 
**performance_tier** | **str** | Performance tier of the Volume. Default is SHARED. | [optional] 
**protocol** | **str** | Volume protocol. | [optional] 
**size_gb** | **int** | The requested size of this volume, in GB. | [optional] 
**snapshots_enabled** | **bool** | Whether snapshots should be enabled. | [optional] 
**type** | **str** | The type of this Volume. | [optional] 
**user_note** | **str** | User note field, it can be used by customers to add additional information for the BMS Ops team . | [optional] 

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



# VolumeFailoverMetadata

The metadata of a volume that has valid cloud snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_created_date** | **datetime** | The date at which the snapshot was taken. | [optional] 
**backup_element_id** | **str** | The path ID of the backup-element for this volume, inside the backup set. | [optional] 
**backup_id** | **str** | The path ID of the backup set. | [optional] 
**backup_policy_id** | **str** | The path ID of the backup policy using which the snapshot was taken. | [optional] 
**size_in_bytes** | **int** | The size of the volume in bytes at the time the snapshot was taken. | [optional] 
**volume_id** | **str** | The path ID of the volume. | [optional] 
**volume_type** | **str** | The type of the volume. | [optional] 

## Example

```python
from openapi_client.models.volume_failover_metadata import VolumeFailoverMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeFailoverMetadata from a JSON string
volume_failover_metadata_instance = VolumeFailoverMetadata.from_json(json)
# print the JSON string representation of the object
print(VolumeFailoverMetadata.to_json())

# convert the object into a dict
volume_failover_metadata_dict = volume_failover_metadata_instance.to_dict()
# create an instance of VolumeFailoverMetadata from a dict
volume_failover_metadata_from_dict = VolumeFailoverMetadata.from_dict(volume_failover_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



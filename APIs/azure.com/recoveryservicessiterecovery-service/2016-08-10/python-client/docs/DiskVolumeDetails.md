# DiskVolumeDetails

Volume details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The volume label. | [optional] 
**name** | **str** | The volume name. | [optional] 

## Example

```python
from openapi_client.models.disk_volume_details import DiskVolumeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DiskVolumeDetails from a JSON string
disk_volume_details_instance = DiskVolumeDetails.from_json(json)
# print the JSON string representation of the object
print(DiskVolumeDetails.to_json())

# convert the object into a dict
disk_volume_details_dict = disk_volume_details_instance.to_dict()
# create an instance of DiskVolumeDetails from a dict
disk_volume_details_from_dict = DiskVolumeDetails.from_dict(disk_volume_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



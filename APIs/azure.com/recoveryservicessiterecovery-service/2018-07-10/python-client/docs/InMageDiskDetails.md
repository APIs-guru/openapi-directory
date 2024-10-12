# InMageDiskDetails

VMware/Physical specific Disk Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_configuration** | **str** | Whether disk is dynamic disk or basic disk. | [optional] 
**disk_id** | **str** | The disk Id. | [optional] 
**disk_name** | **str** | The disk name. | [optional] 
**disk_size_in_mb** | **str** | The disk size in MB. | [optional] 
**disk_type** | **str** | Whether disk is system disk or data disk. | [optional] 
**volume_list** | [**List[DiskVolumeDetails]**](DiskVolumeDetails.md) | Volumes of the disk. | [optional] 

## Example

```python
from openapi_client.models.in_mage_disk_details import InMageDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InMageDiskDetails from a JSON string
in_mage_disk_details_instance = InMageDiskDetails.from_json(json)
# print the JSON string representation of the object
print(InMageDiskDetails.to_json())

# convert the object into a dict
in_mage_disk_details_dict = in_mage_disk_details_instance.to_dict()
# create an instance of InMageDiskDetails from a dict
in_mage_disk_details_from_dict = InMageDiskDetails.from_dict(in_mage_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



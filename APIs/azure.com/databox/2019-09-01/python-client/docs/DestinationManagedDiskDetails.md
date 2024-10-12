# DestinationManagedDiskDetails

Details for the destination compute disks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_group_id** | **str** | Destination Resource Group Id where the Compute disks should be created. | 
**staging_storage_account_id** | **str** | Arm Id of the storage account that can be used to copy the vhd for staging. | 

## Example

```python
from openapi_client.models.destination_managed_disk_details import DestinationManagedDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationManagedDiskDetails from a JSON string
destination_managed_disk_details_instance = DestinationManagedDiskDetails.from_json(json)
# print the JSON string representation of the object
print(DestinationManagedDiskDetails.to_json())

# convert the object into a dict
destination_managed_disk_details_dict = destination_managed_disk_details_instance.to_dict()
# create an instance of DestinationManagedDiskDetails from a dict
destination_managed_disk_details_from_dict = DestinationManagedDiskDetails.from_dict(destination_managed_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



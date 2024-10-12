# MachineDiskDetails

Details of machine disks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disks** | [**DiskEntryList**](DiskEntryList.md) |  | [optional] 
**total_capacity_bytes** | **str** | Disk total Capacity. | [optional] 
**total_free_bytes** | **str** | Total disk free space. | [optional] 

## Example

```python
from openapi_client.models.machine_disk_details import MachineDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MachineDiskDetails from a JSON string
machine_disk_details_instance = MachineDiskDetails.from_json(json)
# print the JSON string representation of the object
print(MachineDiskDetails.to_json())

# convert the object into a dict
machine_disk_details_dict = machine_disk_details_instance.to_dict()
# create an instance of MachineDiskDetails from a dict
machine_disk_details_from_dict = MachineDiskDetails.from_dict(machine_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



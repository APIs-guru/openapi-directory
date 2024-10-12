# DiskSecret

Contains all the secrets of a Disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bit_locker_key** | **str** | Bit Locker key of the disk which can be used to unlock the disk to copy data. | [optional] [readonly] 
**disk_serial_number** | **str** | Serial number of the assigned disk. | [optional] [readonly] 

## Example

```python
from openapi_client.models.disk_secret import DiskSecret

# TODO update the JSON string below
json = "{}"
# create an instance of DiskSecret from a JSON string
disk_secret_instance = DiskSecret.from_json(json)
# print the JSON string representation of the object
print(DiskSecret.to_json())

# convert the object into a dict
disk_secret_dict = disk_secret_instance.to_dict()
# create an instance of DiskSecret from a dict
disk_secret_from_dict = DiskSecret.from_dict(disk_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



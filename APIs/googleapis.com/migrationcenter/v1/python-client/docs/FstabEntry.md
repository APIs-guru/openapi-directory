# FstabEntry

Single fstab entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **str** | The mount point for the filesystem. | [optional] 
**freq** | **int** | Used by dump to determine which filesystems need to be dumped. | [optional] 
**mntops** | **str** | Mount options associated with the filesystem. | [optional] 
**passno** | **int** | Used by the fsck(8) program to determine the order in which filesystem checks are done at reboot time. | [optional] 
**spec** | **str** | The block special device or remote filesystem to be mounted. | [optional] 
**vfstype** | **str** | The type of the filesystem. | [optional] 

## Example

```python
from openapi_client.models.fstab_entry import FstabEntry

# TODO update the JSON string below
json = "{}"
# create an instance of FstabEntry from a JSON string
fstab_entry_instance = FstabEntry.from_json(json)
# print the JSON string representation of the object
print(FstabEntry.to_json())

# convert the object into a dict
fstab_entry_dict = fstab_entry_instance.to_dict()
# create an instance of FstabEntry from a dict
fstab_entry_from_dict = FstabEntry.from_dict(fstab_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



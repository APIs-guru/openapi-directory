# StorageProfile

Specifies the storage settings for the HANA instance disks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nfs_ip_address** | **str** | IP Address to connect to storage. | [optional] [readonly] 
**os_disks** | [**List[Disk]**](Disk.md) | Specifies information about the operating system disk used by the hana instance. | [optional] 

## Example

```python
from openapi_client.models.storage_profile import StorageProfile

# TODO update the JSON string below
json = "{}"
# create an instance of StorageProfile from a JSON string
storage_profile_instance = StorageProfile.from_json(json)
# print the JSON string representation of the object
print(StorageProfile.to_json())

# convert the object into a dict
storage_profile_dict = storage_profile_instance.to_dict()
# create an instance of StorageProfile from a dict
storage_profile_from_dict = StorageProfile.from_dict(storage_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



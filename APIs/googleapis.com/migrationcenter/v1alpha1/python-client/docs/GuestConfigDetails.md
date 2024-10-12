# GuestConfigDetails

Guest OS config information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fstab** | [**FstabEntryList**](FstabEntryList.md) |  | [optional] 
**hosts** | [**HostsEntryList**](HostsEntryList.md) |  | [optional] 
**issue** | **str** | OS issue (typically /etc/issue in Linux). | [optional] 
**nfs_exports** | [**NfsExportList**](NfsExportList.md) |  | [optional] 
**selinux** | [**Selinux**](Selinux.md) |  | [optional] 

## Example

```python
from openapi_client.models.guest_config_details import GuestConfigDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GuestConfigDetails from a JSON string
guest_config_details_instance = GuestConfigDetails.from_json(json)
# print the JSON string representation of the object
print(GuestConfigDetails.to_json())

# convert the object into a dict
guest_config_details_dict = guest_config_details_instance.to_dict()
# create an instance of GuestConfigDetails from a dict
guest_config_details_from_dict = GuestConfigDetails.from_dict(guest_config_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



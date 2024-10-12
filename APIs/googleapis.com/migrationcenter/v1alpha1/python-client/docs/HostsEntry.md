# HostsEntry

Single /etc/hosts entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_names** | **List[str]** | List of host names / aliases. | [optional] 
**ip** | **str** | IP (raw, IPv4/6 agnostic). | [optional] 

## Example

```python
from openapi_client.models.hosts_entry import HostsEntry

# TODO update the JSON string below
json = "{}"
# create an instance of HostsEntry from a JSON string
hosts_entry_instance = HostsEntry.from_json(json)
# print the JSON string representation of the object
print(HostsEntry.to_json())

# convert the object into a dict
hosts_entry_dict = hosts_entry_instance.to_dict()
# create an instance of HostsEntry from a dict
hosts_entry_from_dict = HostsEntry.from_dict(hosts_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



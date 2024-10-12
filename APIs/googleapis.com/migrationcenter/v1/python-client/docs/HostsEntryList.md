# HostsEntryList

Hosts content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[HostsEntry]**](HostsEntry.md) | Hosts entries. | [optional] 

## Example

```python
from openapi_client.models.hosts_entry_list import HostsEntryList

# TODO update the JSON string below
json = "{}"
# create an instance of HostsEntryList from a JSON string
hosts_entry_list_instance = HostsEntryList.from_json(json)
# print the JSON string representation of the object
print(HostsEntryList.to_json())

# convert the object into a dict
hosts_entry_list_dict = hosts_entry_list_instance.to_dict()
# create an instance of HostsEntryList from a dict
hosts_entry_list_from_dict = HostsEntryList.from_dict(hosts_entry_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



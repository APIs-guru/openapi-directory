# ManagedNetworkGroupListResult

Result of the request to list Managed Network Groups. It contains a list of groups and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[ManagedNetworkGroup]**](ManagedNetworkGroup.md) | Gets a page of ManagedNetworkGroup | [optional] 

## Example

```python
from openapi_client.models.managed_network_group_list_result import ManagedNetworkGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedNetworkGroupListResult from a JSON string
managed_network_group_list_result_instance = ManagedNetworkGroupListResult.from_json(json)
# print the JSON string representation of the object
print(ManagedNetworkGroupListResult.to_json())

# convert the object into a dict
managed_network_group_list_result_dict = managed_network_group_list_result_instance.to_dict()
# create an instance of ManagedNetworkGroupListResult from a dict
managed_network_group_list_result_from_dict = ManagedNetworkGroupListResult.from_dict(managed_network_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



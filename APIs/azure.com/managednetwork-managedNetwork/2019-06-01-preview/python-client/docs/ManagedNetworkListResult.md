# ManagedNetworkListResult

Result of the request to list Managed Network. It contains a list of Managed Networks and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next page of results. | [optional] 
**value** | [**List[ManagedNetwork]**](ManagedNetwork.md) | Gets a page of ManagedNetworks | [optional] 

## Example

```python
from openapi_client.models.managed_network_list_result import ManagedNetworkListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedNetworkListResult from a JSON string
managed_network_list_result_instance = ManagedNetworkListResult.from_json(json)
# print the JSON string representation of the object
print(ManagedNetworkListResult.to_json())

# convert the object into a dict
managed_network_list_result_dict = managed_network_list_result_instance.to_dict()
# create an instance of ManagedNetworkListResult from a dict
managed_network_list_result_from_dict = ManagedNetworkListResult.from_dict(managed_network_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



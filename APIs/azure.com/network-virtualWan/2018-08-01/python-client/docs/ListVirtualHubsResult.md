# ListVirtualHubsResult

Result of the request to list VirtualHubs. It contains a list of VirtualHubs and a URL nextLink to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[VirtualHub]**](VirtualHub.md) | List of VirtualHubs. | [optional] 

## Example

```python
from openapi_client.models.list_virtual_hubs_result import ListVirtualHubsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListVirtualHubsResult from a JSON string
list_virtual_hubs_result_instance = ListVirtualHubsResult.from_json(json)
# print the JSON string representation of the object
print(ListVirtualHubsResult.to_json())

# convert the object into a dict
list_virtual_hubs_result_dict = list_virtual_hubs_result_instance.to_dict()
# create an instance of ListVirtualHubsResult from a dict
list_virtual_hubs_result_from_dict = ListVirtualHubsResult.from_dict(list_virtual_hubs_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ListVirtualWANsResult

Result of the request to list VirtualWANs. It contains a list of VirtualWANs and a URL nextLink to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[VirtualWAN]**](VirtualWAN.md) | List of VirtualWANs. | [optional] 

## Example

```python
from openapi_client.models.list_virtual_wans_result import ListVirtualWANsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListVirtualWANsResult from a JSON string
list_virtual_wans_result_instance = ListVirtualWANsResult.from_json(json)
# print the JSON string representation of the object
print(ListVirtualWANsResult.to_json())

# convert the object into a dict
list_virtual_wans_result_dict = list_virtual_wans_result_instance.to_dict()
# create an instance of ListVirtualWANsResult from a dict
list_virtual_wans_result_from_dict = ListVirtualWANsResult.from_dict(list_virtual_wans_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# LogicalNetworkList

A pageable list of logical networks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[LogicalNetwork]**](LogicalNetwork.md) | List of logical networks. | [optional] 

## Example

```python
from openapi_client.models.logical_network_list import LogicalNetworkList

# TODO update the JSON string below
json = "{}"
# create an instance of LogicalNetworkList from a JSON string
logical_network_list_instance = LogicalNetworkList.from_json(json)
# print the JSON string representation of the object
print(LogicalNetworkList.to_json())

# convert the object into a dict
logical_network_list_dict = logical_network_list_instance.to_dict()
# create an instance of LogicalNetworkList from a dict
logical_network_list_from_dict = LogicalNetworkList.from_dict(logical_network_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



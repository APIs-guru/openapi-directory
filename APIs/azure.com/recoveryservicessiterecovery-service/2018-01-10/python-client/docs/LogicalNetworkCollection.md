# LogicalNetworkCollection

List of logical networks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[LogicalNetwork]**](LogicalNetwork.md) | The Logical Networks list details. | [optional] 

## Example

```python
from openapi_client.models.logical_network_collection import LogicalNetworkCollection

# TODO update the JSON string below
json = "{}"
# create an instance of LogicalNetworkCollection from a JSON string
logical_network_collection_instance = LogicalNetworkCollection.from_json(json)
# print the JSON string representation of the object
print(LogicalNetworkCollection.to_json())

# convert the object into a dict
logical_network_collection_dict = logical_network_collection_instance.to_dict()
# create an instance of LogicalNetworkCollection from a dict
logical_network_collection_from_dict = LogicalNetworkCollection.from_dict(logical_network_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



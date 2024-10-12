# InboundReplicationNeighbors

The list of replication summary for the domain controller inbound neighbor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[InboundReplicationNeighbor]**](InboundReplicationNeighbor.md) | The details of inbound replication neighbors. | [optional] 

## Example

```python
from openapi_client.models.inbound_replication_neighbors import InboundReplicationNeighbors

# TODO update the JSON string below
json = "{}"
# create an instance of InboundReplicationNeighbors from a JSON string
inbound_replication_neighbors_instance = InboundReplicationNeighbors.from_json(json)
# print the JSON string representation of the object
print(InboundReplicationNeighbors.to_json())

# convert the object into a dict
inbound_replication_neighbors_dict = inbound_replication_neighbors_instance.to_dict()
# create an instance of InboundReplicationNeighbors from a dict
inbound_replication_neighbors_from_dict = InboundReplicationNeighbors.from_dict(inbound_replication_neighbors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



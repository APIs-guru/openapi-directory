# ConnectionStateSnapshotHopsInner

Information about a hop between the source and the destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The IP address of the hop. | [optional] [readonly] 
**id** | **str** | The ID of the hop. | [optional] [readonly] 
**issues** | [**List[ConnectionStateSnapshotHopsInnerIssuesInner]**](ConnectionStateSnapshotHopsInnerIssuesInner.md) | List of issues. | [optional] [readonly] 
**next_hop_ids** | **List[str]** | List of next hop identifiers. | [optional] [readonly] 
**resource_id** | **str** | The ID of the resource corresponding to this hop. | [optional] [readonly] 
**type** | **str** | The type of the hop. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_state_snapshot_hops_inner import ConnectionStateSnapshotHopsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionStateSnapshotHopsInner from a JSON string
connection_state_snapshot_hops_inner_instance = ConnectionStateSnapshotHopsInner.from_json(json)
# print the JSON string representation of the object
print(ConnectionStateSnapshotHopsInner.to_json())

# convert the object into a dict
connection_state_snapshot_hops_inner_dict = connection_state_snapshot_hops_inner_instance.to_dict()
# create an instance of ConnectionStateSnapshotHopsInner from a dict
connection_state_snapshot_hops_inner_from_dict = ConnectionStateSnapshotHopsInner.from_dict(connection_state_snapshot_hops_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



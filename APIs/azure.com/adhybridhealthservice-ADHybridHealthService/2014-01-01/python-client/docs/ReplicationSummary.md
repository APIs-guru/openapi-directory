# ReplicationSummary

The replication summary for a domain controller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | The domain name for a given domain controller. | [optional] 
**inbound_neighbor_collection** | [**List[InboundReplicationNeighbor]**](InboundReplicationNeighbor.md) | List of individual domain controller neighbor&#39;s inbound replication status. | [optional] 
**last_attempted_sync** | **datetime** | The last time when a sync was attempted for a given domain controller. | [optional] 
**last_successful_sync** | **datetime** | The time when the last successful sync happened for a given domain controller. | [optional] 
**site** | **str** | The site name for a given domain controller. | [optional] 
**status** | **int** | The health status for a domain controller. | [optional] 
**target_server** | **str** | The domain controller name. | [optional] 

## Example

```python
from openapi_client.models.replication_summary import ReplicationSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationSummary from a JSON string
replication_summary_instance = ReplicationSummary.from_json(json)
# print the JSON string representation of the object
print(ReplicationSummary.to_json())

# convert the object into a dict
replication_summary_dict = replication_summary_instance.to_dict()
# create an instance of ReplicationSummary from a dict
replication_summary_from_dict = ReplicationSummary.from_dict(replication_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



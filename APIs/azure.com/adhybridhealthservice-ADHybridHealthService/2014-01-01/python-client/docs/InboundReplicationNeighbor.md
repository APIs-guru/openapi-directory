# InboundReplicationNeighbor

The replication summary for the domain controller inbound neighbor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_info** | **str** | The additional details. | [optional] 
**consecutive_failure_count** | **int** | The number of consecutive failure counts. | [optional] 
**error_description** | **str** | The error description. | [optional] 
**error_title** | **str** | The error title. | [optional] 
**fix_details** | **str** | The details of the fix. | [optional] 
**fix_link** | **str** | The link for the fix of the error. | [optional] 
**last_attempted_sync** | **datetime** | The last time a sync was attempted on the domain controller. | [optional] 
**last_error_code** | **int** | The last error code. | [optional] 
**last_error_message** | **str** | The error message of the last error. | [optional] 
**last_successful_sync** | **datetime** | The last time when a successful sync happened. | [optional] 
**naming_context** | **str** | The naming context. | [optional] 
**source_domain_controller** | **str** | The name of the source domain controller. | [optional] 
**status** | **int** | The health status for the domain controller | [optional] 

## Example

```python
from openapi_client.models.inbound_replication_neighbor import InboundReplicationNeighbor

# TODO update the JSON string below
json = "{}"
# create an instance of InboundReplicationNeighbor from a JSON string
inbound_replication_neighbor_instance = InboundReplicationNeighbor.from_json(json)
# print the JSON string representation of the object
print(InboundReplicationNeighbor.to_json())

# convert the object into a dict
inbound_replication_neighbor_dict = inbound_replication_neighbor_instance.to_dict()
# create an instance of InboundReplicationNeighbor from a dict
inbound_replication_neighbor_from_dict = InboundReplicationNeighbor.from_dict(inbound_replication_neighbor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



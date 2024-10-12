# PartitionHealthState

Represents the health state of a partition, which contains the partition identifier and its aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition id is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the ids of its partitions would be different. | [optional] 

## Example

```python
from openapi_client.models.partition_health_state import PartitionHealthState

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionHealthState from a JSON string
partition_health_state_instance = PartitionHealthState.from_json(json)
# print the JSON string representation of the object
print(PartitionHealthState.to_json())

# convert the object into a dict
partition_health_state_dict = partition_health_state_instance.to_dict()
# create an instance of PartitionHealthState from a dict
partition_health_state_from_dict = PartitionHealthState.from_dict(partition_health_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



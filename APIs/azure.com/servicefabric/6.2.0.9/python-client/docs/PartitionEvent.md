# PartitionEvent

Represents the base for all Partition Events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | 

## Example

```python
from openapi_client.models.partition_event import PartitionEvent

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionEvent from a JSON string
partition_event_instance = PartitionEvent.from_json(json)
# print the JSON string representation of the object
print(PartitionEvent.to_json())

# convert the object into a dict
partition_event_dict = partition_event_instance.to_dict()
# create an instance of PartitionEvent from a dict
partition_event_from_dict = PartitionEvent.from_dict(partition_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



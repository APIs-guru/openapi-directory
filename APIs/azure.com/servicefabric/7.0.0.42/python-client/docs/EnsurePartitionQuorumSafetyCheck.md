# EnsurePartitionQuorumSafetyCheck

Safety check that ensures that a quorum of replicas are not lost for a partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.ensure_partition_quorum_safety_check import EnsurePartitionQuorumSafetyCheck

# TODO update the JSON string below
json = "{}"
# create an instance of EnsurePartitionQuorumSafetyCheck from a JSON string
ensure_partition_quorum_safety_check_instance = EnsurePartitionQuorumSafetyCheck.from_json(json)
# print the JSON string representation of the object
print(EnsurePartitionQuorumSafetyCheck.to_json())

# convert the object into a dict
ensure_partition_quorum_safety_check_dict = ensure_partition_quorum_safety_check_instance.to_dict()
# create an instance of EnsurePartitionQuorumSafetyCheck from a dict
ensure_partition_quorum_safety_check_from_dict = EnsurePartitionQuorumSafetyCheck.from_dict(ensure_partition_quorum_safety_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



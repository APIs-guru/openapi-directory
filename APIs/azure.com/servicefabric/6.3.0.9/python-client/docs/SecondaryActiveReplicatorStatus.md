# SecondaryActiveReplicatorStatus

Status of the secondary replicator when it is in active mode and is part of the replica set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.secondary_active_replicator_status import SecondaryActiveReplicatorStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SecondaryActiveReplicatorStatus from a JSON string
secondary_active_replicator_status_instance = SecondaryActiveReplicatorStatus.from_json(json)
# print the JSON string representation of the object
print(SecondaryActiveReplicatorStatus.to_json())

# convert the object into a dict
secondary_active_replicator_status_dict = secondary_active_replicator_status_instance.to_dict()
# create an instance of SecondaryActiveReplicatorStatus from a dict
secondary_active_replicator_status_from_dict = SecondaryActiveReplicatorStatus.from_dict(secondary_active_replicator_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ReplicatorStatus

Represents a base class for primary or secondary replicator status. Contains information about the service fabric replicator like the replication/copy queue utilization, last acknowledgement received timestamp, etc. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**ReplicaRole**](ReplicaRole.md) |  | 

## Example

```python
from openapi_client.models.replicator_status import ReplicatorStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicatorStatus from a JSON string
replicator_status_instance = ReplicatorStatus.from_json(json)
# print the JSON string representation of the object
print(ReplicatorStatus.to_json())

# convert the object into a dict
replicator_status_dict = replicator_status_instance.to_dict()
# create an instance of ReplicatorStatus from a dict
replicator_status_from_dict = ReplicatorStatus.from_dict(replicator_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



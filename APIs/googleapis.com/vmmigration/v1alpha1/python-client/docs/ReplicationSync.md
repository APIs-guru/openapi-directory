# ReplicationSync

ReplicationSync contain information about the last replica sync to the cloud.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_sync_time** | **str** | The most updated snapshot created time in the source that finished replication. | [optional] 

## Example

```python
from openapi_client.models.replication_sync import ReplicationSync

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationSync from a JSON string
replication_sync_instance = ReplicationSync.from_json(json)
# print the JSON string representation of the object
print(ReplicationSync.to_json())

# convert the object into a dict
replication_sync_dict = replication_sync_instance.to_dict()
# create an instance of ReplicationSync from a dict
replication_sync_from_dict = ReplicationSync.from_dict(replication_sync_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



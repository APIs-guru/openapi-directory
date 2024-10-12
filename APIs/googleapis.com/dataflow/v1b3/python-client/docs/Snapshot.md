# Snapshot

Represents a snapshot of a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | The time this snapshot was created. | [optional] 
**description** | **str** | User specified description of the snapshot. Maybe empty. | [optional] 
**disk_size_bytes** | **str** | The disk byte size of the snapshot. Only available for snapshots in READY state. | [optional] 
**id** | **str** | The unique ID of this snapshot. | [optional] 
**project_id** | **str** | The project this snapshot belongs to. | [optional] 
**pubsub_metadata** | [**List[PubsubSnapshotMetadata]**](PubsubSnapshotMetadata.md) | Pub/Sub snapshot metadata. | [optional] 
**region** | **str** | Cloud region where this snapshot lives in, e.g., \&quot;us-central1\&quot;. | [optional] 
**source_job_id** | **str** | The job this snapshot was created from. | [optional] 
**state** | **str** | State of the snapshot. | [optional] 
**ttl** | **str** | The time after which this snapshot will be automatically deleted. | [optional] 

## Example

```python
from openapi_client.models.snapshot import Snapshot

# TODO update the JSON string below
json = "{}"
# create an instance of Snapshot from a JSON string
snapshot_instance = Snapshot.from_json(json)
# print the JSON string representation of the object
print(Snapshot.to_json())

# convert the object into a dict
snapshot_dict = snapshot_instance.to_dict()
# create an instance of Snapshot from a dict
snapshot_from_dict = Snapshot.from_dict(snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SnapshotJobRequest

Request to create a snapshot of a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | User specified description of the snapshot. Maybe empty. | [optional] 
**location** | **str** | The location that contains this job. | [optional] 
**snapshot_sources** | **bool** | If true, perform snapshots for sources which support this. | [optional] 
**ttl** | **str** | TTL for the snapshot. | [optional] 

## Example

```python
from openapi_client.models.snapshot_job_request import SnapshotJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotJobRequest from a JSON string
snapshot_job_request_instance = SnapshotJobRequest.from_json(json)
# print the JSON string representation of the object
print(SnapshotJobRequest.to_json())

# convert the object into a dict
snapshot_job_request_dict = snapshot_job_request_instance.to_dict()
# create an instance of SnapshotJobRequest from a dict
snapshot_job_request_from_dict = SnapshotJobRequest.from_dict(snapshot_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



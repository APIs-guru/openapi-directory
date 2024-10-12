# SaveSnapshotRequest

Request to create a snapshot of a Cloud Composer environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshot_location** | **str** | Location in a Cloud Storage where the snapshot is going to be stored, e.g.: \&quot;gs://my-bucket/snapshots\&quot;. | [optional] 

## Example

```python
from openapi_client.models.save_snapshot_request import SaveSnapshotRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SaveSnapshotRequest from a JSON string
save_snapshot_request_instance = SaveSnapshotRequest.from_json(json)
# print the JSON string representation of the object
print(SaveSnapshotRequest.to_json())

# convert the object into a dict
save_snapshot_request_dict = save_snapshot_request_instance.to_dict()
# create an instance of SaveSnapshotRequest from a dict
save_snapshot_request_from_dict = SaveSnapshotRequest.from_dict(save_snapshot_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



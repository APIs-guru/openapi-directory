# SaveSnapshotResponse

Response to SaveSnapshotRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshot_path** | **str** | The fully-resolved Cloud Storage path of the created snapshot, e.g.: \&quot;gs://my-bucket/snapshots/project_location_environment_timestamp\&quot;. This field is populated only if the snapshot creation was successful. | [optional] 

## Example

```python
from openapi_client.models.save_snapshot_response import SaveSnapshotResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SaveSnapshotResponse from a JSON string
save_snapshot_response_instance = SaveSnapshotResponse.from_json(json)
# print the JSON string representation of the object
print(SaveSnapshotResponse.to_json())

# convert the object into a dict
save_snapshot_response_dict = save_snapshot_response_instance.to_dict()
# create an instance of SaveSnapshotResponse from a dict
save_snapshot_response_from_dict = SaveSnapshotResponse.from_dict(save_snapshot_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



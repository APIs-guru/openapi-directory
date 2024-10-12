# UpdateSnapshotRequest

Request for the UpdateSnapshot method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshot** | [**Snapshot**](Snapshot.md) |  | [optional] 
**update_mask** | **str** | Required. Indicates which fields in the provided snapshot to update. Must be specified and non-empty. | [optional] 

## Example

```python
from openapi_client.models.update_snapshot_request import UpdateSnapshotRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSnapshotRequest from a JSON string
update_snapshot_request_instance = UpdateSnapshotRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSnapshotRequest.to_json())

# convert the object into a dict
update_snapshot_request_dict = update_snapshot_request_instance.to_dict()
# create an instance of UpdateSnapshotRequest from a dict
update_snapshot_request_from_dict = UpdateSnapshotRequest.from_dict(update_snapshot_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



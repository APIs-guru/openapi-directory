# UpdateSnapshotRequest

Request body for updating a snapshot, with a combination of user defined apply scope and user specified data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_scope** | **List[str]** | Array of the target Face subscription ids for the snapshot, specified by the user who created the snapshot when calling Snapshot - Take. For each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it. | [optional] 
**user_data** | **str** | User specified data about the snapshot for any purpose. Length should not exceed 16KB. | [optional] 

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



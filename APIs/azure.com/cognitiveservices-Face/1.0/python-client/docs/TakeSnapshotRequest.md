# TakeSnapshotRequest

Request body for taking snapshot operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_scope** | **List[str]** | Array of the target Face subscription ids for the snapshot, specified by the user who created the snapshot when calling Snapshot - Take. For each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it. | 
**object_id** | **str** | User specified source object id to take snapshot from. | 
**type** | **str** | User specified type for the source object to take snapshot from. Currently FaceList, PersonGroup, LargeFaceList and LargePersonGroup are supported. | 
**user_data** | **str** | User specified data about the snapshot for any purpose. Length should not exceed 16KB. | [optional] 

## Example

```python
from openapi_client.models.take_snapshot_request import TakeSnapshotRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TakeSnapshotRequest from a JSON string
take_snapshot_request_instance = TakeSnapshotRequest.from_json(json)
# print the JSON string representation of the object
print(TakeSnapshotRequest.to_json())

# convert the object into a dict
take_snapshot_request_dict = take_snapshot_request_instance.to_dict()
# create an instance of TakeSnapshotRequest from a dict
take_snapshot_request_from_dict = TakeSnapshotRequest.from_dict(take_snapshot_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



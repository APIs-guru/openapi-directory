# ApplySnapshotRequest

Request body for applying snapshot operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | Snapshot applying mode. Currently only CreateNew is supported, which means the apply operation will fail if target subscription already contains an object of same type and using the same objectId. Users can specify the \&quot;objectId\&quot; in request body to avoid such conflicts. | [optional] [default to 'CreateNew']
**object_id** | **str** | User specified target object id to be created from the snapshot. | 

## Example

```python
from openapi_client.models.apply_snapshot_request import ApplySnapshotRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplySnapshotRequest from a JSON string
apply_snapshot_request_instance = ApplySnapshotRequest.from_json(json)
# print the JSON string representation of the object
print(ApplySnapshotRequest.to_json())

# convert the object into a dict
apply_snapshot_request_dict = apply_snapshot_request_instance.to_dict()
# create an instance of ApplySnapshotRequest from a dict
apply_snapshot_request_from_dict = ApplySnapshotRequest.from_dict(apply_snapshot_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



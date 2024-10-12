# SnapshotRestoreRequest

Details about app recovery operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | SnapshotRestoreRequest resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.snapshot_restore_request import SnapshotRestoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotRestoreRequest from a JSON string
snapshot_restore_request_instance = SnapshotRestoreRequest.from_json(json)
# print the JSON string representation of the object
print(SnapshotRestoreRequest.to_json())

# convert the object into a dict
snapshot_restore_request_dict = snapshot_restore_request_instance.to_dict()
# create an instance of SnapshotRestoreRequest from a dict
snapshot_restore_request_from_dict = SnapshotRestoreRequest.from_dict(snapshot_restore_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



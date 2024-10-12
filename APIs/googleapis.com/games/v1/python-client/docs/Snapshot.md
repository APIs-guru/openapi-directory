# Snapshot

An snapshot object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cover_image** | [**SnapshotImage**](SnapshotImage.md) |  | [optional] 
**description** | **str** | The description of this snapshot. | [optional] 
**drive_id** | **str** | The ID of the file underlying this snapshot in the Drive API. Only present if the snapshot is a view on a Drive file and the file is owned by the caller. | [optional] 
**duration_millis** | **str** | The duration associated with this snapshot, in millis. | [optional] 
**id** | **str** | The ID of the snapshot. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#snapshot&#x60;. | [optional] 
**last_modified_millis** | **str** | The timestamp (in millis since Unix epoch) of the last modification to this snapshot. | [optional] 
**progress_value** | **str** | The progress value (64-bit integer set by developer) associated with this snapshot. | [optional] 
**title** | **str** | The title of this snapshot. | [optional] 
**type** | **str** | The type of this snapshot. | [optional] 
**unique_name** | **str** | The unique name provided when the snapshot was created. | [optional] 

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



# Snapshot

A Filestore snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the snapshot was created. | [optional] [readonly] 
**description** | **str** | A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected. | [optional] 
**filesystem_used_bytes** | **str** | Output only. The amount of bytes needed to allocate a full copy of the snapshot content | [optional] [readonly] 
**labels** | **Dict[str, str]** | Resource labels to represent user provided metadata. | [optional] 
**name** | **str** | Output only. The resource name of the snapshot, in the format &#x60;projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}&#x60;. | [optional] [readonly] 
**state** | **str** | Output only. The snapshot state. | [optional] [readonly] 

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



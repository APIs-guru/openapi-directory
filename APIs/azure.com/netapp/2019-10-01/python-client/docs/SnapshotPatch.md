# SnapshotPatch

Snapshot patch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Tags are a list of key-value pairs that describe the resource | [optional] 

## Example

```python
from openapi_client.models.snapshot_patch import SnapshotPatch

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotPatch from a JSON string
snapshot_patch_instance = SnapshotPatch.from_json(json)
# print the JSON string representation of the object
print(SnapshotPatch.to_json())

# convert the object into a dict
snapshot_patch_dict = snapshot_patch_instance.to_dict()
# create an instance of SnapshotPatch from a dict
snapshot_patch_from_dict = SnapshotPatch.from_dict(snapshot_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



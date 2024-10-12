# SnapshotUpdate

Snapshot update resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiskUpdateProperties**](DiskUpdateProperties.md) |  | [optional] 
**sku** | [**SnapshotSku**](SnapshotSku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.snapshot_update import SnapshotUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotUpdate from a JSON string
snapshot_update_instance = SnapshotUpdate.from_json(json)
# print the JSON string representation of the object
print(SnapshotUpdate.to_json())

# convert the object into a dict
snapshot_update_dict = snapshot_update_instance.to_dict()
# create an instance of SnapshotUpdate from a dict
snapshot_update_from_dict = SnapshotUpdate.from_dict(snapshot_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



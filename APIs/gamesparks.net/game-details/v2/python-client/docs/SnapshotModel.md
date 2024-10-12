# SnapshotModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**index_progress** | **Dict[str, int]** |  | [optional] 
**published** | **bool** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.snapshot_model import SnapshotModel

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotModel from a JSON string
snapshot_model_instance = SnapshotModel.from_json(json)
# print the JSON string representation of the object
print(SnapshotModel.to_json())

# convert the object into a dict
snapshot_model_dict = snapshot_model_instance.to_dict()
# create an instance of SnapshotModel from a dict
snapshot_model_from_dict = SnapshotModel.from_dict(snapshot_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



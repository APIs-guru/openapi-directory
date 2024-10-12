# SnapshotScriptVersionModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_code_version** | **int** |  | [optional] 
**created_date** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**live** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.snapshot_script_version_model import SnapshotScriptVersionModel

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotScriptVersionModel from a JSON string
snapshot_script_version_model_instance = SnapshotScriptVersionModel.from_json(json)
# print the JSON string representation of the object
print(SnapshotScriptVersionModel.to_json())

# convert the object into a dict
snapshot_script_version_model_dict = snapshot_script_version_model_instance.to_dict()
# create an instance of SnapshotScriptVersionModel from a dict
snapshot_script_version_model_from_dict = SnapshotScriptVersionModel.from_dict(snapshot_script_version_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



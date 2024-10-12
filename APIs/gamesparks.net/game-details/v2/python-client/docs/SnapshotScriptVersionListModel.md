# SnapshotScriptVersionListModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script_versions** | [**List[SnapshotScriptVersionModel]**](SnapshotScriptVersionModel.md) |  | [optional] 

## Example

```python
from openapi_client.models.snapshot_script_version_list_model import SnapshotScriptVersionListModel

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotScriptVersionListModel from a JSON string
snapshot_script_version_list_model_instance = SnapshotScriptVersionListModel.from_json(json)
# print the JSON string representation of the object
print(SnapshotScriptVersionListModel.to_json())

# convert the object into a dict
snapshot_script_version_list_model_dict = snapshot_script_version_list_model_instance.to_dict()
# create an instance of SnapshotScriptVersionListModel from a dict
snapshot_script_version_list_model_from_dict = SnapshotScriptVersionListModel.from_dict(snapshot_script_version_list_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



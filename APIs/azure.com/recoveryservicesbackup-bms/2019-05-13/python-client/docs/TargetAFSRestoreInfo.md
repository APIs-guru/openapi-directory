# TargetAFSRestoreInfo

Target Azure File Share Info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | File share name | [optional] 
**target_resource_id** | **str** | Target file share resource ARM ID | [optional] 

## Example

```python
from openapi_client.models.target_afs_restore_info import TargetAFSRestoreInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TargetAFSRestoreInfo from a JSON string
target_afs_restore_info_instance = TargetAFSRestoreInfo.from_json(json)
# print the JSON string representation of the object
print(TargetAFSRestoreInfo.to_json())

# convert the object into a dict
target_afs_restore_info_dict = target_afs_restore_info_instance.to_dict()
# create an instance of TargetAFSRestoreInfo from a dict
target_afs_restore_info_from_dict = TargetAFSRestoreInfo.from_dict(target_afs_restore_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



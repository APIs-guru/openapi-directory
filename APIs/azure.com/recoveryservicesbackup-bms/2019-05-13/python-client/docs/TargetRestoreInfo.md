# TargetRestoreInfo

Details about target workload during restore operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_id** | **str** | Resource Id name of the container in which Target DataBase resides | [optional] 
**database_name** | **str** | Database name InstanceName/DataBaseName for SQL or System/DbName for SAP Hana | [optional] 
**overwrite_option** | **str** | Can Overwrite if Target DataBase already exists | [optional] 

## Example

```python
from openapi_client.models.target_restore_info import TargetRestoreInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TargetRestoreInfo from a JSON string
target_restore_info_instance = TargetRestoreInfo.from_json(json)
# print the JSON string representation of the object
print(TargetRestoreInfo.to_json())

# convert the object into a dict
target_restore_info_dict = target_restore_info_instance.to_dict()
# create an instance of TargetRestoreInfo from a dict
target_restore_info_from_dict = TargetRestoreInfo.from_dict(target_restore_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



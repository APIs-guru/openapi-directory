# RestoreInfo

Information about the database restore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_info** | [**BackupInfo**](BackupInfo.md) |  | [optional] 
**source_type** | **str** | The type of the restore source. | [optional] 

## Example

```python
from openapi_client.models.restore_info import RestoreInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreInfo from a JSON string
restore_info_instance = RestoreInfo.from_json(json)
# print the JSON string representation of the object
print(RestoreInfo.to_json())

# convert the object into a dict
restore_info_dict = restore_info_instance.to_dict()
# create an instance of RestoreInfo from a dict
restore_info_from_dict = RestoreInfo.from_dict(restore_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



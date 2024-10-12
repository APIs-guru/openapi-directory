# BackupEngineBaseResourceList

List of BackupEngineBase resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BackupEngineBaseResource]**](BackupEngineBaseResource.md) | List of resources. | [optional] 
**next_link** | **str** | The uri to fetch the next page of resources. Call ListNext() fetches next page of resources. | [optional] 

## Example

```python
from openapi_client.models.backup_engine_base_resource_list import BackupEngineBaseResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of BackupEngineBaseResourceList from a JSON string
backup_engine_base_resource_list_instance = BackupEngineBaseResourceList.from_json(json)
# print the JSON string representation of the object
print(BackupEngineBaseResourceList.to_json())

# convert the object into a dict
backup_engine_base_resource_list_dict = backup_engine_base_resource_list_instance.to_dict()
# create an instance of BackupEngineBaseResourceList from a dict
backup_engine_base_resource_list_from_dict = BackupEngineBaseResourceList.from_dict(backup_engine_base_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



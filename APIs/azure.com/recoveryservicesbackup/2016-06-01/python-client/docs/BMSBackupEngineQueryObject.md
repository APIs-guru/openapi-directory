# BMSBackupEngineQueryObject

The query parameters used to GET the list of backup engines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | The backup management type associated with the backup engine. | [optional] 

## Example

```python
from openapi_client.models.bms_backup_engine_query_object import BMSBackupEngineQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of BMSBackupEngineQueryObject from a JSON string
bms_backup_engine_query_object_instance = BMSBackupEngineQueryObject.from_json(json)
# print the JSON string representation of the object
print(BMSBackupEngineQueryObject.to_json())

# convert the object into a dict
bms_backup_engine_query_object_dict = bms_backup_engine_query_object_instance.to_dict()
# create an instance of BMSBackupEngineQueryObject from a dict
bms_backup_engine_query_object_from_dict = BMSBackupEngineQueryObject.from_dict(bms_backup_engine_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



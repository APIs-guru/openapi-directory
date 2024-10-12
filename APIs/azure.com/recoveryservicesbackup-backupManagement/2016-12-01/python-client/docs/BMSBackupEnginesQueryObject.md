# BMSBackupEnginesQueryObject

Query parameters to fetch list of backup engines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | Backup management type for the backup engine. | [optional] 
**expand** | **str** | Attribute to add extended info. | [optional] 
**friendly_name** | **str** | Friendly name of the backup engine. | [optional] 

## Example

```python
from openapi_client.models.bms_backup_engines_query_object import BMSBackupEnginesQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of BMSBackupEnginesQueryObject from a JSON string
bms_backup_engines_query_object_instance = BMSBackupEnginesQueryObject.from_json(json)
# print the JSON string representation of the object
print(BMSBackupEnginesQueryObject.to_json())

# convert the object into a dict
bms_backup_engines_query_object_dict = bms_backup_engines_query_object_instance.to_dict()
# create an instance of BMSBackupEnginesQueryObject from a dict
bms_backup_engines_query_object_from_dict = BMSBackupEnginesQueryObject.from_dict(bms_backup_engines_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



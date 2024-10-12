# BMSBackupSummariesQueryObject

Query parameters to fetch backup summaries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Backup management type for this container. | [optional] 

## Example

```python
from openapi_client.models.bms_backup_summaries_query_object import BMSBackupSummariesQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of BMSBackupSummariesQueryObject from a JSON string
bms_backup_summaries_query_object_instance = BMSBackupSummariesQueryObject.from_json(json)
# print the JSON string representation of the object
print(BMSBackupSummariesQueryObject.to_json())

# convert the object into a dict
bms_backup_summaries_query_object_dict = bms_backup_summaries_query_object_instance.to_dict()
# create an instance of BMSBackupSummariesQueryObject from a dict
bms_backup_summaries_query_object_from_dict = BMSBackupSummariesQueryObject.from_dict(bms_backup_summaries_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



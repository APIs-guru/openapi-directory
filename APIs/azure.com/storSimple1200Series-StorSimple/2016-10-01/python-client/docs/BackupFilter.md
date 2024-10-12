# BackupFilter

Backup OData filter class

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | Gets or sets CreatedTime | [optional] 
**initiated_by** | **str** | Gets or sets InitiatedBy | [optional] 

## Example

```python
from openapi_client.models.backup_filter import BackupFilter

# TODO update the JSON string below
json = "{}"
# create an instance of BackupFilter from a JSON string
backup_filter_instance = BackupFilter.from_json(json)
# print the JSON string representation of the object
print(BackupFilter.to_json())

# convert the object into a dict
backup_filter_dict = backup_filter_instance.to_dict()
# create an instance of BackupFilter from a dict
backup_filter_from_dict = BackupFilter.from_dict(backup_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



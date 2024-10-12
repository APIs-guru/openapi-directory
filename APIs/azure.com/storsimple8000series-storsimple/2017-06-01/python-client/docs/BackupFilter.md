# BackupFilter

The OData filters to be used for backups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_policy_id** | **str** | Specifies the backupPolicyId of the backups to be filtered. Only &#39;Equality&#39; operator is supported for this property. | [optional] 
**created_time** | **datetime** | Specifies the creation time of the backups to be filtered. Only &#39;Greater Than or Equal To&#39; and &#39;Lesser Than or Equal To&#39; operators are supported for this property. | [optional] 
**volume_id** | **str** | Specifies the volumeId of the backups to be filtered. Only &#39;Equality&#39; operator is supported for this property. | [optional] 

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



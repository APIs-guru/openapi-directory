# BackupEntity

Describes the Service Fabric entity that is configured for backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_kind** | [**BackupEntityKind**](BackupEntityKind.md) |  | 

## Example

```python
from openapi_client.models.backup_entity import BackupEntity

# TODO update the JSON string below
json = "{}"
# create an instance of BackupEntity from a JSON string
backup_entity_instance = BackupEntity.from_json(json)
# print the JSON string representation of the object
print(BackupEntity.to_json())

# convert the object into a dict
backup_entity_dict = backup_entity_instance.to_dict()
# create an instance of BackupEntity from a dict
backup_entity_from_dict = BackupEntity.from_dict(backup_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



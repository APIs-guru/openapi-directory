# ApplicationBackupEntity

Identifies the Service Fabric application which is being backed up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 

## Example

```python
from openapi_client.models.application_backup_entity import ApplicationBackupEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationBackupEntity from a JSON string
application_backup_entity_instance = ApplicationBackupEntity.from_json(json)
# print the JSON string representation of the object
print(ApplicationBackupEntity.to_json())

# convert the object into a dict
application_backup_entity_dict = application_backup_entity_instance.to_dict()
# create an instance of ApplicationBackupEntity from a dict
application_backup_entity_from_dict = ApplicationBackupEntity.from_dict(application_backup_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



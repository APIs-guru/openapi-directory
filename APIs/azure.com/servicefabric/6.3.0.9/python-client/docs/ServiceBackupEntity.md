# ServiceBackupEntity

Identifies the Service Fabric stateful service which is being backed up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 

## Example

```python
from openapi_client.models.service_backup_entity import ServiceBackupEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBackupEntity from a JSON string
service_backup_entity_instance = ServiceBackupEntity.from_json(json)
# print the JSON string representation of the object
print(ServiceBackupEntity.to_json())

# convert the object into a dict
service_backup_entity_dict = service_backup_entity_instance.to_dict()
# create an instance of ServiceBackupEntity from a dict
service_backup_entity_from_dict = ServiceBackupEntity.from_dict(service_backup_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



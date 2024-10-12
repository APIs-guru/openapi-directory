# Backup

The details of a backup resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the backup was started. | [optional] [readonly] 
**description** | **str** | The description of the backup. | [optional] 
**end_time** | **str** | Output only. The time when the backup finished creating. | [optional] [readonly] 
**name** | **str** | Immutable. The relative resource name of the backup, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id} | [optional] 
**restoring_services** | **List[str]** | Output only. Services that are restoring from the backup. | [optional] [readonly] 
**service_revision** | [**Service**](Service.md) |  | [optional] 
**state** | **str** | Output only. The current state of the backup. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup import Backup

# TODO update the JSON string below
json = "{}"
# create an instance of Backup from a JSON string
backup_instance = Backup.from_json(json)
# print the JSON string representation of the object
print(Backup.to_json())

# convert the object into a dict
backup_dict = backup_instance.to_dict()
# create an instance of Backup from a dict
backup_from_dict = Backup.from_dict(backup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



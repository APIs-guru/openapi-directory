# Backup

Represents a Managed Microsoft Identities backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the backups was created. | [optional] [readonly] 
**description** | **str** | Optional. A short description of the backup. | [optional] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user provided metadata. | [optional] 
**name** | **str** | Output only. The unique name of the Backup in the form of projects/{project_id}/locations/global/domains/{domain_name}/backups/{name} | [optional] [readonly] 
**state** | **str** | Output only. The current state of the backup. | [optional] [readonly] 
**status_message** | **str** | Output only. Additional information about the current status of this backup, if available. | [optional] [readonly] 
**type** | **str** | Output only. Indicates whether it’s an on-demand backup or scheduled. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time. | [optional] [readonly] 

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



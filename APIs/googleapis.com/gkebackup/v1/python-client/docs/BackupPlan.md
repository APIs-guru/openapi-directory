# BackupPlan

Defines the configuration and scheduling for a \"line\" of Backups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_config** | [**BackupConfig**](BackupConfig.md) |  | [optional] 
**backup_schedule** | [**Schedule**](Schedule.md) |  | [optional] 
**cluster** | **str** | Required. Immutable. The source cluster from which Backups will be created via this BackupPlan. Valid formats: - &#x60;projects/*/locations/*/clusters/*&#x60; - &#x60;projects/*/zones/*/clusters/*&#x60; | [optional] 
**create_time** | **str** | Output only. The timestamp when this BackupPlan resource was created. | [optional] [readonly] 
**deactivated** | **bool** | Optional. This flag indicates whether this BackupPlan has been deactivated. Setting this field to True locks the BackupPlan such that no further updates will be allowed (except deletes), including the deactivated field itself. It also prevents any new Backups from being created via this BackupPlan (including scheduled Backups). Default: False | [optional] 
**description** | **str** | Optional. User specified descriptive string for this BackupPlan. | [optional] 
**etag** | **str** | Output only. &#x60;etag&#x60; is used for optimistic concurrency control as a way to help prevent simultaneous updates of a backup plan from overwriting each other. It is strongly suggested that systems make use of the &#39;etag&#39; in the read-modify-write cycle to perform BackupPlan updates in order to avoid race conditions: An &#x60;etag&#x60; is returned in the response to &#x60;GetBackupPlan&#x60;, and systems are expected to put that etag in the request to &#x60;UpdateBackupPlan&#x60; or &#x60;DeleteBackupPlan&#x60; to ensure that their change will be applied to the same version of the resource. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. A set of custom labels supplied by user. | [optional] 
**name** | **str** | Output only. The full name of the BackupPlan resource. Format: &#x60;projects/*/locations/*/backupPlans/*&#x60; | [optional] [readonly] 
**protected_pod_count** | **int** | Output only. The number of Kubernetes Pods backed up in the last successful Backup created via this BackupPlan. | [optional] [readonly] 
**retention_policy** | [**RetentionPolicy**](RetentionPolicy.md) |  | [optional] 
**state** | **str** | Output only. State of the BackupPlan. This State field reflects the various stages a BackupPlan can be in during the Create operation. It will be set to \&quot;DEACTIVATED\&quot; if the BackupPlan is deactivated on an Update | [optional] [readonly] 
**state_reason** | **str** | Output only. Human-readable description of why BackupPlan is in the current &#x60;state&#x60; | [optional] [readonly] 
**uid** | **str** | Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when this BackupPlan resource was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_plan import BackupPlan

# TODO update the JSON string below
json = "{}"
# create an instance of BackupPlan from a JSON string
backup_plan_instance = BackupPlan.from_json(json)
# print the JSON string representation of the object
print(BackupPlan.to_json())

# convert the object into a dict
backup_plan_dict = backup_plan_instance.to_dict()
# create an instance of BackupPlan from a dict
backup_plan_from_dict = BackupPlan.from_dict(backup_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



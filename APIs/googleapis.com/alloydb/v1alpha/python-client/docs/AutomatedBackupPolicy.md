# AutomatedBackupPolicy

Message describing the user-specified automated backup policy. All fields in the automated backup policy are optional. Defaults for each field are provided if they are not set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_window** | **str** | The length of the time window during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed. The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it defaults to 1 hour. | [optional] 
**enabled** | **bool** | Whether automated automated backups are enabled. If not set, defaults to true. | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels to apply to backups created using this configuration. | [optional] 
**location** | **str** | The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster. If empty, defaults to the region of the cluster. | [optional] 
**quantity_based_retention** | [**QuantityBasedRetention**](QuantityBasedRetention.md) |  | [optional] 
**time_based_retention** | [**TimeBasedRetention**](TimeBasedRetention.md) |  | [optional] 
**weekly_schedule** | [**WeeklySchedule**](WeeklySchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.automated_backup_policy import AutomatedBackupPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AutomatedBackupPolicy from a JSON string
automated_backup_policy_instance = AutomatedBackupPolicy.from_json(json)
# print the JSON string representation of the object
print(AutomatedBackupPolicy.to_json())

# convert the object into a dict
automated_backup_policy_dict = automated_backup_policy_instance.to_dict()
# create an instance of AutomatedBackupPolicy from a dict
automated_backup_policy_from_dict = AutomatedBackupPolicy.from_dict(automated_backup_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



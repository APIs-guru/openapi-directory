# RetentionPolicy

RetentionPolicy defines a Backup retention policy for a BackupPlan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_delete_lock_days** | **int** | Optional. Minimum age for Backups created via this BackupPlan (in days). This field MUST be an integer value between 0-90 (inclusive). A Backup created under this BackupPlan will NOT be deletable until it reaches Backup&#39;s (create_time + backup_delete_lock_days). Updating this field of a BackupPlan does NOT affect existing Backups under it. Backups created AFTER a successful update will inherit the new value. Default: 0 (no delete blocking) | [optional] 
**backup_retain_days** | **int** | Optional. The default maximum age of a Backup created via this BackupPlan. This field MUST be an integer value &gt;&#x3D; 0 and &lt;&#x3D; 365. If specified, a Backup created under this BackupPlan will be automatically deleted after its age reaches (create_time + backup_retain_days). If not specified, Backups created under this BackupPlan will NOT be subject to automatic deletion. Updating this field does NOT affect existing Backups under it. Backups created AFTER a successful update will automatically pick up the new value. NOTE: backup_retain_days must be &gt;&#x3D; backup_delete_lock_days. If cron_schedule is defined, then this must be &lt;&#x3D; 360 * the creation interval. If rpo_config is defined, then this must be &lt;&#x3D; 360 * target_rpo_minutes / (1440minutes/day). Default: 0 (no automatic deletion) | [optional] 
**locked** | **bool** | Optional. This flag denotes whether the retention policy of this BackupPlan is locked. If set to True, no further update is allowed on this policy, including the &#x60;locked&#x60; field itself. Default: False | [optional] 

## Example

```python
from openapi_client.models.retention_policy import RetentionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of RetentionPolicy from a JSON string
retention_policy_instance = RetentionPolicy.from_json(json)
# print the JSON string representation of the object
print(RetentionPolicy.to_json())

# convert the object into a dict
retention_policy_dict = retention_policy_instance.to_dict()
# create an instance of RetentionPolicy from a dict
retention_policy_from_dict = RetentionPolicy.from_dict(retention_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



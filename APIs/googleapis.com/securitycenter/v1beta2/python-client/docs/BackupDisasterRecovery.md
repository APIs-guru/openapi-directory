# BackupDisasterRecovery

Information related to Google Cloud Backup and DR Service findings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliance** | **str** | The name of the Backup and DR appliance that captures, moves, and manages the lifecycle of backup data. For example, &#x60;backup-server-57137&#x60;. | [optional] 
**applications** | **List[str]** | The names of Backup and DR applications. An application is a VM, database, or file system on a managed host monitored by a backup and recovery appliance. For example, &#x60;centos7-01-vol00&#x60;, &#x60;centos7-01-vol01&#x60;, &#x60;centos7-01-vol02&#x60;. | [optional] 
**backup_create_time** | **str** | The timestamp at which the Backup and DR backup was created. | [optional] 
**backup_template** | **str** | The name of a Backup and DR template which comprises one or more backup policies. See the [Backup and DR documentation](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#temp) for more information. For example, &#x60;snap-ov&#x60;. | [optional] 
**backup_type** | **str** | The backup type of the Backup and DR image. For example, &#x60;Snapshot&#x60;, &#x60;Remote Snapshot&#x60;, &#x60;OnVault&#x60;. | [optional] 
**host** | **str** | The name of a Backup and DR host, which is managed by the backup and recovery appliance and known to the management console. The host can be of type Generic (for example, Compute Engine, SQL Server, Oracle DB, SMB file system, etc.), vCenter, or an ESX server. See the [Backup and DR documentation on hosts](https://cloud.google.com/backup-disaster-recovery/docs/configuration/manage-hosts-and-their-applications) for more information. For example, &#x60;centos7-01&#x60;. | [optional] 
**policies** | **List[str]** | The names of Backup and DR policies that are associated with a template and that define when to run a backup, how frequently to run a backup, and how long to retain the backup image. For example, &#x60;onvaults&#x60;. | [optional] 
**policy_options** | **List[str]** | The names of Backup and DR advanced policy options of a policy applying to an application. See the [Backup and DR documentation on policy options](https://cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings). For example, &#x60;skipofflineappsincongrp, nounmap&#x60;. | [optional] 
**profile** | **str** | The name of the Backup and DR resource profile that specifies the storage media for backups of application and VM data. See the [Backup and DR documentation on profiles](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#profile). For example, &#x60;GCP&#x60;. | [optional] 
**storage_pool** | **str** | The name of the Backup and DR storage pool that the backup and recovery appliance is storing data in. The storage pool could be of type Cloud, Primary, Snapshot, or OnVault. See the [Backup and DR documentation on storage pools](https://cloud.google.com/backup-disaster-recovery/docs/concepts/storage-pools). For example, &#x60;DiskPoolOne&#x60;. | [optional] 

## Example

```python
from openapi_client.models.backup_disaster_recovery import BackupDisasterRecovery

# TODO update the JSON string below
json = "{}"
# create an instance of BackupDisasterRecovery from a JSON string
backup_disaster_recovery_instance = BackupDisasterRecovery.from_json(json)
# print the JSON string representation of the object
print(BackupDisasterRecovery.to_json())

# convert the object into a dict
backup_disaster_recovery_dict = backup_disaster_recovery_instance.to_dict()
# create an instance of BackupDisasterRecovery from a dict
backup_disaster_recovery_from_dict = BackupDisasterRecovery.from_dict(backup_disaster_recovery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



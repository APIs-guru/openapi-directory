# Backup

Message describing Backup object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128 | [optional] 
**cluster_name** | **str** | Required. The full resource name of the backup source cluster (e.g., projects/{project}/locations/{region}/clusters/{cluster_id}). | [optional] 
**cluster_uid** | **str** | Output only. The system-generated UID of the cluster which was used to create this resource. | [optional] [readonly] 
**create_time** | **str** | Output only. Create time stamp | [optional] [readonly] 
**database_version** | **str** | Output only. The database engine major version of the cluster this backup was created from. Any restored cluster created from this backup will have the same database version. | [optional] [readonly] 
**delete_time** | **str** | Output only. Delete time stamp | [optional] [readonly] 
**description** | **str** | User-provided description of the backup. | [optional] 
**display_name** | **str** | User-settable and human-readable display name for the Backup. | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**encryption_info** | [**EncryptionInfo**](EncryptionInfo.md) |  | [optional] 
**etag** | **str** | For Resource freshness validation (https://google.aip.dev/154) | [optional] 
**expiry_quantity** | [**QuantityBasedExpiry**](QuantityBasedExpiry.md) |  | [optional] 
**expiry_time** | **str** | Output only. The time at which after the backup is eligible to be garbage collected. It is the duration specified by the backup&#39;s retention policy, added to the backup&#39;s create_time. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Labels as key value pairs | [optional] 
**name** | **str** | Output only. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backup_id} where the cluster and backup ID segments should satisfy the regex expression &#x60;[a-z]([a-z0-9-]{0,61}[a-z0-9])?&#x60;, e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122. The prefix of the backup resource name is the name of the parent resource: * projects/{project}/locations/{region} | [optional] [readonly] 
**reconciling** | **bool** | Output only. Reconciling (https://google.aip.dev/128#reconciliation), if true, indicates that the service is actively updating the resource. This can happen due to user-triggered updates or system actions like failover or maintenance. | [optional] [readonly] 
**satisfies_pzi** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**satisfies_pzs** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**size_bytes** | **str** | Output only. The size of the backup in bytes. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the backup. | [optional] [readonly] 
**type** | **str** | The backup type, which suggests the trigger for the backup. | [optional] 
**uid** | **str** | Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted. | [optional] [readonly] 
**update_time** | **str** | Output only. Update time stamp | [optional] [readonly] 

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



# BackupConfigurationInfo

Describes the backup configuration information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**BackupEntityKind**](BackupEntityKind.md) |  | 
**policy_inherited_from** | [**BackupPolicyScope**](BackupPolicyScope.md) |  | [optional] 
**policy_name** | **str** | The name of the backup policy which is applicable to this Service Fabric application or service or partition. | [optional] 
**suspension_info** | [**BackupSuspensionInfo**](BackupSuspensionInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.backup_configuration_info import BackupConfigurationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BackupConfigurationInfo from a JSON string
backup_configuration_info_instance = BackupConfigurationInfo.from_json(json)
# print the JSON string representation of the object
print(BackupConfigurationInfo.to_json())

# convert the object into a dict
backup_configuration_info_dict = backup_configuration_info_instance.to_dict()
# create an instance of BackupConfigurationInfo from a dict
backup_configuration_info_from_dict = BackupConfigurationInfo.from_dict(backup_configuration_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



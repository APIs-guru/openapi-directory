# ApplicationBackupConfigurationInfo

Backup configuration information for a specific Service Fabric application specifying what backup policy is being applied and suspend description, if any.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 

## Example

```python
from openapi_client.models.application_backup_configuration_info import ApplicationBackupConfigurationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationBackupConfigurationInfo from a JSON string
application_backup_configuration_info_instance = ApplicationBackupConfigurationInfo.from_json(json)
# print the JSON string representation of the object
print(ApplicationBackupConfigurationInfo.to_json())

# convert the object into a dict
application_backup_configuration_info_dict = application_backup_configuration_info_instance.to_dict()
# create an instance of ApplicationBackupConfigurationInfo from a dict
application_backup_configuration_info_from_dict = ApplicationBackupConfigurationInfo.from_dict(application_backup_configuration_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



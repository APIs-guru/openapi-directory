# ServiceBackupConfigurationInfo

Backup configuration information for a specific Service Fabric service specifying what backup policy is being applied and suspend description, if any.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 

## Example

```python
from openapi_client.models.service_backup_configuration_info import ServiceBackupConfigurationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBackupConfigurationInfo from a JSON string
service_backup_configuration_info_instance = ServiceBackupConfigurationInfo.from_json(json)
# print the JSON string representation of the object
print(ServiceBackupConfigurationInfo.to_json())

# convert the object into a dict
service_backup_configuration_info_dict = service_backup_configuration_info_instance.to_dict()
# create an instance of ServiceBackupConfigurationInfo from a dict
service_backup_configuration_info_from_dict = ServiceBackupConfigurationInfo.from_dict(service_backup_configuration_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



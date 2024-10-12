# ApiManagementServiceBackupRestoreParameters

Parameters supplied to the Backup/Restore of an API Management service operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **str** | Azure Cloud Storage account (used to place/retrieve the backup) access key. | 
**backup_name** | **str** | The name of the backup file to create. | 
**container_name** | **str** | Azure Cloud Storage blob container name used to place/retrieve the backup. | 
**storage_account** | **str** | Azure Cloud Storage account (used to place/retrieve the backup) name. | 

## Example

```python
from openapi_client.models.api_management_service_backup_restore_parameters import ApiManagementServiceBackupRestoreParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceBackupRestoreParameters from a JSON string
api_management_service_backup_restore_parameters_instance = ApiManagementServiceBackupRestoreParameters.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceBackupRestoreParameters.to_json())

# convert the object into a dict
api_management_service_backup_restore_parameters_dict = api_management_service_backup_restore_parameters_instance.to_dict()
# create an instance of ApiManagementServiceBackupRestoreParameters from a dict
api_management_service_backup_restore_parameters_from_dict = ApiManagementServiceBackupRestoreParameters.from_dict(api_management_service_backup_restore_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



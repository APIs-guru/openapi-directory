# SqlVirtualMachineProperties

The SQL virtual machine properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_backup_settings** | [**AutoBackupSettings**](AutoBackupSettings.md) |  | [optional] 
**auto_patching_settings** | [**AutoPatchingSettings**](AutoPatchingSettings.md) |  | [optional] 
**key_vault_credential_settings** | [**KeyVaultCredentialSettings**](KeyVaultCredentialSettings.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state to track the async operation status. | [optional] [readonly] 
**server_configurations_management_settings** | [**ServerConfigurationsManagementSettings**](ServerConfigurationsManagementSettings.md) |  | [optional] 
**sql_image_offer** | **str** | SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016. | [optional] 
**sql_image_sku** | **str** | SQL Server edition type. | [optional] 
**sql_management** | **str** | SQL Server Management type. | [optional] 
**sql_server_license_type** | **str** | SQL Server license type. | [optional] 
**sql_virtual_machine_group_resource_id** | **str** | ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part of. | [optional] 
**storage_configuration_settings** | [**StorageConfigurationSettings**](StorageConfigurationSettings.md) |  | [optional] 
**virtual_machine_resource_id** | **str** | ARM Resource id of underlying virtual machine created from SQL marketplace image. | [optional] 
**wsfc_domain_credentials** | [**WsfcDomainCredentials**](WsfcDomainCredentials.md) |  | [optional] 

## Example

```python
from openapi_client.models.sql_virtual_machine_properties import SqlVirtualMachineProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlVirtualMachineProperties from a JSON string
sql_virtual_machine_properties_instance = SqlVirtualMachineProperties.from_json(json)
# print the JSON string representation of the object
print(SqlVirtualMachineProperties.to_json())

# convert the object into a dict
sql_virtual_machine_properties_dict = sql_virtual_machine_properties_instance.to_dict()
# create an instance of SqlVirtualMachineProperties from a dict
sql_virtual_machine_properties_from_dict = SqlVirtualMachineProperties.from_dict(sql_virtual_machine_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



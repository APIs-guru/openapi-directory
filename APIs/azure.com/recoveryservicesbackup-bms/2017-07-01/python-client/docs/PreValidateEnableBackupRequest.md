# PreValidateEnableBackupRequest

Contract to validate if backup can be enabled on the given resource in a given vault and given configuration.  It will validate followings  1. Vault capacity  2. VM is already protected  3. Any VM related configuration passed in properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **str** | Configuration of VM if any needs to be validated like OS type etc | [optional] 
**resource_id** | **str** | ARM Virtual Machine Id | [optional] 
**resource_type** | **str** | ProtectedItem Type- VM, SqlDataBase, AzureFileShare etc | [optional] 
**vault_id** | **str** | ARM id of the Recovery Services Vault | [optional] 

## Example

```python
from openapi_client.models.pre_validate_enable_backup_request import PreValidateEnableBackupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PreValidateEnableBackupRequest from a JSON string
pre_validate_enable_backup_request_instance = PreValidateEnableBackupRequest.from_json(json)
# print the JSON string representation of the object
print(PreValidateEnableBackupRequest.to_json())

# convert the object into a dict
pre_validate_enable_backup_request_dict = pre_validate_enable_backup_request_instance.to_dict()
# create an instance of PreValidateEnableBackupRequest from a dict
pre_validate_enable_backup_request_from_dict = PreValidateEnableBackupRequest.from_dict(pre_validate_enable_backup_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



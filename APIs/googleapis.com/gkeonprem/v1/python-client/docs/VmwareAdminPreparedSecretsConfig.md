# VmwareAdminPreparedSecretsConfig

VmwareAdminPreparedSecretsConfig represents configuration for admin cluster prepared secrets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether prepared secrets is enabled. | [optional] 

## Example

```python
from openapi_client.models.vmware_admin_prepared_secrets_config import VmwareAdminPreparedSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAdminPreparedSecretsConfig from a JSON string
vmware_admin_prepared_secrets_config_instance = VmwareAdminPreparedSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAdminPreparedSecretsConfig.to_json())

# convert the object into a dict
vmware_admin_prepared_secrets_config_dict = vmware_admin_prepared_secrets_config_instance.to_dict()
# create an instance of VmwareAdminPreparedSecretsConfig from a dict
vmware_admin_prepared_secrets_config_from_dict = VmwareAdminPreparedSecretsConfig.from_dict(vmware_admin_prepared_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



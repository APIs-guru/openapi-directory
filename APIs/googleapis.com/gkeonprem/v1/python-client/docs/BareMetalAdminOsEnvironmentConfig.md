# BareMetalAdminOsEnvironmentConfig

Specifies operating system operation settings for cluster provisioning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_repo_excluded** | **bool** | Whether the package repo should be added when initializing bare metal machines. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_os_environment_config import BareMetalAdminOsEnvironmentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminOsEnvironmentConfig from a JSON string
bare_metal_admin_os_environment_config_instance = BareMetalAdminOsEnvironmentConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminOsEnvironmentConfig.to_json())

# convert the object into a dict
bare_metal_admin_os_environment_config_dict = bare_metal_admin_os_environment_config_instance.to_dict()
# create an instance of BareMetalAdminOsEnvironmentConfig from a dict
bare_metal_admin_os_environment_config_from_dict = BareMetalAdminOsEnvironmentConfig.from_dict(bare_metal_admin_os_environment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



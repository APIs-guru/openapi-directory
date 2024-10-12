# BareMetalOsEnvironmentConfig

Specifies operating system settings for cluster provisioning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_repo_excluded** | **bool** | Whether the package repo should not be included when initializing bare metal machines. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_os_environment_config import BareMetalOsEnvironmentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalOsEnvironmentConfig from a JSON string
bare_metal_os_environment_config_instance = BareMetalOsEnvironmentConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalOsEnvironmentConfig.to_json())

# convert the object into a dict
bare_metal_os_environment_config_dict = bare_metal_os_environment_config_instance.to_dict()
# create an instance of BareMetalOsEnvironmentConfig from a dict
bare_metal_os_environment_config_from_dict = BareMetalOsEnvironmentConfig.from_dict(bare_metal_os_environment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



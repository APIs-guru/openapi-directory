# ConfigManagementInstallError

Errors pertaining to the installation of ACM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | A string representing the user facing error message | [optional] 

## Example

```python
from openapi_client.models.config_management_install_error import ConfigManagementInstallError

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementInstallError from a JSON string
config_management_install_error_instance = ConfigManagementInstallError.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementInstallError.to_json())

# convert the object into a dict
config_management_install_error_dict = config_management_install_error_instance.to_dict()
# create an instance of ConfigManagementInstallError from a dict
config_management_install_error_from_dict = ConfigManagementInstallError.from_dict(config_management_install_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



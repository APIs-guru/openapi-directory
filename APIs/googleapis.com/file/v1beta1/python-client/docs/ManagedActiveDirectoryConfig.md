# ManagedActiveDirectoryConfig

ManagedActiveDirectoryConfig contains all the parameters for connecting to Managed Active Directory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computer** | **str** | The computer name is used as a prefix to the mount remote target. Example: if the computer_name is &#x60;my-computer&#x60;, the mount command will look like: &#x60;$mount -o vers&#x3D;4,sec&#x3D;krb5 my-computer.filestore.:&#x60;. | [optional] 
**domain** | **str** | Fully qualified domain name. | [optional] 

## Example

```python
from openapi_client.models.managed_active_directory_config import ManagedActiveDirectoryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedActiveDirectoryConfig from a JSON string
managed_active_directory_config_instance = ManagedActiveDirectoryConfig.from_json(json)
# print the JSON string representation of the object
print(ManagedActiveDirectoryConfig.to_json())

# convert the object into a dict
managed_active_directory_config_dict = managed_active_directory_config_instance.to_dict()
# create an instance of ManagedActiveDirectoryConfig from a dict
managed_active_directory_config_from_dict = ManagedActiveDirectoryConfig.from_dict(managed_active_directory_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



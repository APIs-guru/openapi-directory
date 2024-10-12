# DirectoryServicesConfig

Directory Services configuration for Kerberos-based authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_active_directory** | [**ManagedActiveDirectoryConfig**](ManagedActiveDirectoryConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.directory_services_config import DirectoryServicesConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryServicesConfig from a JSON string
directory_services_config_instance = DirectoryServicesConfig.from_json(json)
# print the JSON string representation of the object
print(DirectoryServicesConfig.to_json())

# convert the object into a dict
directory_services_config_dict = directory_services_config_instance.to_dict()
# create an instance of DirectoryServicesConfig from a dict
directory_services_config_from_dict = DirectoryServicesConfig.from_dict(directory_services_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



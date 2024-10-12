# RegistryProperties

The properties of a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_user_enabled** | **bool** | The value that indicates whether the admin user is enabled. This value is false by default. | [optional] [default to False]
**creation_date** | **datetime** | The creation date of the container registry in ISO8601 format. | [optional] [readonly] 
**login_server** | **str** | The URL that can be used to log into the container registry. | [optional] [readonly] 
**storage_account** | [**StorageAccountProperties**](StorageAccountProperties.md) |  | 

## Example

```python
from openapi_client.models.registry_properties import RegistryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryProperties from a JSON string
registry_properties_instance = RegistryProperties.from_json(json)
# print the JSON string representation of the object
print(RegistryProperties.to_json())

# convert the object into a dict
registry_properties_dict = registry_properties_instance.to_dict()
# create an instance of RegistryProperties from a dict
registry_properties_from_dict = RegistryProperties.from_dict(registry_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RegistryPassword

The login password for the container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The password name. | [optional] 
**value** | **str** | The password value. | [optional] 

## Example

```python
from openapi_client.models.registry_password import RegistryPassword

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryPassword from a JSON string
registry_password_instance = RegistryPassword.from_json(json)
# print the JSON string representation of the object
print(RegistryPassword.to_json())

# convert the object into a dict
registry_password_dict = registry_password_instance.to_dict()
# create an instance of RegistryPassword from a dict
registry_password_from_dict = RegistryPassword.from_dict(registry_password_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



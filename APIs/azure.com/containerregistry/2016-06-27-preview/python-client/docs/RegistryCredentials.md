# RegistryCredentials

The result of a request to get the administrator login credentials for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The administrator password. | [optional] 
**username** | **str** | The administrator username. | [optional] 

## Example

```python
from openapi_client.models.registry_credentials import RegistryCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryCredentials from a JSON string
registry_credentials_instance = RegistryCredentials.from_json(json)
# print the JSON string representation of the object
print(RegistryCredentials.to_json())

# convert the object into a dict
registry_credentials_dict = registry_credentials_instance.to_dict()
# create an instance of RegistryCredentials from a dict
registry_credentials_from_dict = RegistryCredentials.from_dict(registry_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



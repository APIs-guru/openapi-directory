# Credentials

The parameters that describes a set of credentials that will be used when a run is invoked.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_registries** | [**Dict[str, CustomRegistryCredentials]**](CustomRegistryCredentials.md) | Describes the credential parameters for accessing other custom registries. The key  for the dictionary item will be the registry login server (myregistry.azurecr.io) and  the value of the item will be the registry credentials for accessing the registry. | [optional] 
**source_registry** | [**SourceRegistryCredentials**](SourceRegistryCredentials.md) |  | [optional] 

## Example

```python
from openapi_client.models.credentials import Credentials

# TODO update the JSON string below
json = "{}"
# create an instance of Credentials from a JSON string
credentials_instance = Credentials.from_json(json)
# print the JSON string representation of the object
print(Credentials.to_json())

# convert the object into a dict
credentials_dict = credentials_instance.to_dict()
# create an instance of Credentials from a dict
credentials_from_dict = Credentials.from_dict(credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



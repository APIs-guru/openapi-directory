# CustomRegistryCredentials

Describes the credentials that will be used to access a custom registry during a run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | **str** | Indicates the managed identity assigned to the custom credential. If a user-assigned identity  this value is the Client ID. If a system-assigned identity, the value will be &#x60;system&#x60;. In  the case of a system-assigned identity, the Client ID will be determined by the runner. This  identity may be used to authenticate to key vault to retrieve credentials or it may be the only   source of authentication used for accessing the registry. | [optional] 
**password** | [**SecretObject**](SecretObject.md) |  | [optional] 
**user_name** | [**SecretObject**](SecretObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_registry_credentials import CustomRegistryCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of CustomRegistryCredentials from a JSON string
custom_registry_credentials_instance = CustomRegistryCredentials.from_json(json)
# print the JSON string representation of the object
print(CustomRegistryCredentials.to_json())

# convert the object into a dict
custom_registry_credentials_dict = custom_registry_credentials_instance.to_dict()
# create an instance of CustomRegistryCredentials from a dict
custom_registry_credentials_from_dict = CustomRegistryCredentials.from_dict(custom_registry_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



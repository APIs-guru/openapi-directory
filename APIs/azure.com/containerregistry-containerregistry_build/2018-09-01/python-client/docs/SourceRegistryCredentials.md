# SourceRegistryCredentials

Describes the credential parameters for accessing the source registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login_mode** | **str** | The authentication mode which determines the source registry login scope. The credentials for the source registry  will be generated using the given scope. These credentials will be used to login to  the source registry during the run. | [optional] 

## Example

```python
from openapi_client.models.source_registry_credentials import SourceRegistryCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of SourceRegistryCredentials from a JSON string
source_registry_credentials_instance = SourceRegistryCredentials.from_json(json)
# print the JSON string representation of the object
print(SourceRegistryCredentials.to_json())

# convert the object into a dict
source_registry_credentials_dict = source_registry_credentials_instance.to_dict()
# create an instance of SourceRegistryCredentials from a dict
source_registry_credentials_from_dict = SourceRegistryCredentials.from_dict(source_registry_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



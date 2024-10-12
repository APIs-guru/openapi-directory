# RegistryListCredentialsResult

The response from the ListCredentials operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**passwords** | [**List[RegistryPassword]**](RegistryPassword.md) | The list of passwords for a container registry. | [optional] 
**username** | **str** | The username for a container registry. | [optional] 

## Example

```python
from openapi_client.models.registry_list_credentials_result import RegistryListCredentialsResult

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryListCredentialsResult from a JSON string
registry_list_credentials_result_instance = RegistryListCredentialsResult.from_json(json)
# print the JSON string representation of the object
print(RegistryListCredentialsResult.to_json())

# convert the object into a dict
registry_list_credentials_result_dict = registry_list_credentials_result_instance.to_dict()
# create an instance of RegistryListCredentialsResult from a dict
registry_list_credentials_result_from_dict = RegistryListCredentialsResult.from_dict(registry_list_credentials_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



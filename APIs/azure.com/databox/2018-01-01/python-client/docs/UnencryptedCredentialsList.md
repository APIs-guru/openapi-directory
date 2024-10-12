# UnencryptedCredentialsList

List of unencrypted credentials for accessing device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for the next set of unencrypted credentials. | [optional] 
**value** | [**List[UnencryptedCredentials]**](UnencryptedCredentials.md) | List of unencrypted credentials. | [optional] 

## Example

```python
from openapi_client.models.unencrypted_credentials_list import UnencryptedCredentialsList

# TODO update the JSON string below
json = "{}"
# create an instance of UnencryptedCredentialsList from a JSON string
unencrypted_credentials_list_instance = UnencryptedCredentialsList.from_json(json)
# print the JSON string representation of the object
print(UnencryptedCredentialsList.to_json())

# convert the object into a dict
unencrypted_credentials_list_dict = unencrypted_credentials_list_instance.to_dict()
# create an instance of UnencryptedCredentialsList from a dict
unencrypted_credentials_list_from_dict = UnencryptedCredentialsList.from_dict(unencrypted_credentials_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



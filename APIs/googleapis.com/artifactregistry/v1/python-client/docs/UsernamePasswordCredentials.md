# UsernamePasswordCredentials

Username and password credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password_secret_version** | **str** | The Secret Manager key version that holds the password to access the remote repository. Must be in the format of &#x60;projects/{project}/secrets/{secret}/versions/{version}&#x60;. | [optional] 
**username** | **str** | The username to access the remote repository. | [optional] 

## Example

```python
from openapi_client.models.username_password_credentials import UsernamePasswordCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of UsernamePasswordCredentials from a JSON string
username_password_credentials_instance = UsernamePasswordCredentials.from_json(json)
# print the JSON string representation of the object
print(UsernamePasswordCredentials.to_json())

# convert the object into a dict
username_password_credentials_dict = username_password_credentials_instance.to_dict()
# create an instance of UsernamePasswordCredentials from a dict
username_password_credentials_from_dict = UsernamePasswordCredentials.from_dict(username_password_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



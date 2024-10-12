# TokenCredentialsProperties

The properties of the credentials that can be used for authenticating the token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificates** | [**List[TokenCertificate]**](TokenCertificate.md) |  | [optional] 
**passwords** | [**List[TokenPassword]**](TokenPassword.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_credentials_properties import TokenCredentialsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TokenCredentialsProperties from a JSON string
token_credentials_properties_instance = TokenCredentialsProperties.from_json(json)
# print the JSON string representation of the object
print(TokenCredentialsProperties.to_json())

# convert the object into a dict
token_credentials_properties_dict = token_credentials_properties_instance.to_dict()
# create an instance of TokenCredentialsProperties from a dict
token_credentials_properties_from_dict = TokenCredentialsProperties.from_dict(token_credentials_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



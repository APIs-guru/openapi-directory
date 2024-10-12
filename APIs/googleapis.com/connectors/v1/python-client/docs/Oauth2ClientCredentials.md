# Oauth2ClientCredentials

Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client identifier. | [optional] 
**client_secret** | [**Secret**](Secret.md) |  | [optional] 

## Example

```python
from openapi_client.models.oauth2_client_credentials import Oauth2ClientCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of Oauth2ClientCredentials from a JSON string
oauth2_client_credentials_instance = Oauth2ClientCredentials.from_json(json)
# print the JSON string representation of the object
print(Oauth2ClientCredentials.to_json())

# convert the object into a dict
oauth2_client_credentials_dict = oauth2_client_credentials_instance.to_dict()
# create an instance of Oauth2ClientCredentials from a dict
oauth2_client_credentials_from_dict = Oauth2ClientCredentials.from_dict(oauth2_client_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



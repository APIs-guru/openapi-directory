# AuthorizationCodeLink

This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client ID assigned to the Google Cloud Connectors OAuth app for the connector data source. | [optional] 
**enable_pkce** | **bool** | Whether to enable PKCE for the auth code flow. | [optional] 
**scopes** | **List[str]** | The scopes for which the user will authorize Google Cloud Connectors on the connector data source. | [optional] 
**uri** | **str** | The base URI the user must click to trigger the authorization code login flow. | [optional] 

## Example

```python
from openapi_client.models.authorization_code_link import AuthorizationCodeLink

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCodeLink from a JSON string
authorization_code_link_instance = AuthorizationCodeLink.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCodeLink.to_json())

# convert the object into a dict
authorization_code_link_dict = authorization_code_link_instance.to_dict()
# create an instance of AuthorizationCodeLink from a dict
authorization_code_link_from_dict = AuthorizationCodeLink.from_dict(authorization_code_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



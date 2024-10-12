# OauthRevokePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID, obtained during app registration | 
**client_secret** | **str** | Client secret, obtained during app registration | 
**token** | **str** | The previously obtained token, to be invalidated | 

## Example

```python
from openapi_client.models.oauth_revoke_post_request import OauthRevokePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OauthRevokePostRequest from a JSON string
oauth_revoke_post_request_instance = OauthRevokePostRequest.from_json(json)
# print the JSON string representation of the object
print(OauthRevokePostRequest.to_json())

# convert the object into a dict
oauth_revoke_post_request_dict = oauth_revoke_post_request_instance.to_dict()
# create an instance of OauthRevokePostRequest from a dict
oauth_revoke_post_request_from_dict = OauthRevokePostRequest.from_dict(oauth_revoke_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



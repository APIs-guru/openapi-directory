# OAuthToken

Contains information needed for generating an [OAuth token](https://developers.google.com/identity/protocols/OAuth2). This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **str** | OAuth scope to be used for generating OAuth access token. If not specified, \&quot;https://www.googleapis.com/auth/cloud-platform\&quot; will be used. | [optional] 
**service_account_email** | **str** | [Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating OAuth token. The service account must be within the same project as the queue. The caller must have iam.serviceAccounts.actAs permission for the service account. | [optional] 

## Example

```python
from openapi_client.models.o_auth_token import OAuthToken

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthToken from a JSON string
o_auth_token_instance = OAuthToken.from_json(json)
# print the JSON string representation of the object
print(OAuthToken.to_json())

# convert the object into a dict
o_auth_token_dict = o_auth_token_instance.to_dict()
# create an instance of OAuthToken from a dict
o_auth_token_from_dict = OAuthToken.from_dict(o_auth_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



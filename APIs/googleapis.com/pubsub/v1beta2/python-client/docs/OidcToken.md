# OidcToken

Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** | Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. The audience value is a single case-sensitive string. Having multiple values (array) for the audience field is not supported. More info about the OIDC JWT token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified, the Push endpoint URL will be used. | [optional] 
**service_account_email** | **str** | [Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating the OIDC token. The caller (for CreateSubscription, UpdateSubscription, and ModifyPushConfig RPCs) must have the iam.serviceAccounts.actAs permission for the service account. | [optional] 

## Example

```python
from openapi_client.models.oidc_token import OidcToken

# TODO update the JSON string below
json = "{}"
# create an instance of OidcToken from a JSON string
oidc_token_instance = OidcToken.from_json(json)
# print the JSON string representation of the object
print(OidcToken.to_json())

# convert the object into a dict
oidc_token_dict = oidc_token_instance.to_dict()
# create an instance of OidcToken from a dict
oidc_token_from_dict = OidcToken.from_dict(oidc_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



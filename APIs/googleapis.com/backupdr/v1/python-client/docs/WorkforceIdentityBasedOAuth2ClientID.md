# WorkforceIdentityBasedOAuth2ClientID

OAuth Client ID depending on the Workforce Identity i.e. either 1p or 3p,

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_party_oauth2_client_id** | **str** | Output only. First party OAuth Client ID for Google Identities. | [optional] [readonly] 
**third_party_oauth2_client_id** | **str** | Output only. Third party OAuth Client ID for External Identity Providers. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workforce_identity_based_o_auth2_client_id import WorkforceIdentityBasedOAuth2ClientID

# TODO update the JSON string below
json = "{}"
# create an instance of WorkforceIdentityBasedOAuth2ClientID from a JSON string
workforce_identity_based_o_auth2_client_id_instance = WorkforceIdentityBasedOAuth2ClientID.from_json(json)
# print the JSON string representation of the object
print(WorkforceIdentityBasedOAuth2ClientID.to_json())

# convert the object into a dict
workforce_identity_based_o_auth2_client_id_dict = workforce_identity_based_o_auth2_client_id_instance.to_dict()
# create an instance of WorkforceIdentityBasedOAuth2ClientID from a dict
workforce_identity_based_o_auth2_client_id_from_dict = WorkforceIdentityBasedOAuth2ClientID.from_dict(workforce_identity_based_o_auth2_client_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



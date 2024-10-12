# GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretValue

Representation of the value of the client secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plain_text** | **str** | Input only. The plain text of the client secret value. For security reasons, this field is only used for input and will never be populated in any response. | [optional] 
**thumbprint** | **str** | Output only. A thumbprint to represent the current client secret value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_iam_admin_v1_workforce_pool_provider_oidc_client_secret_value import GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretValue from a JSON string
google_iam_admin_v1_workforce_pool_provider_oidc_client_secret_value_instance = GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretValue.from_json(json)
# print the JSON string representation of the object
print(GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretValue.to_json())

# convert the object into a dict
google_iam_admin_v1_workforce_pool_provider_oidc_client_secret_value_dict = google_iam_admin_v1_workforce_pool_provider_oidc_client_secret_value_instance.to_dict()
# create an instance of GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretValue from a dict
google_iam_admin_v1_workforce_pool_provider_oidc_client_secret_value_from_dict = GoogleIamAdminV1WorkforcePoolProviderOidcClientSecretValue.from_dict(google_iam_admin_v1_workforce_pool_provider_oidc_client_secret_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



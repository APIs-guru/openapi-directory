# GoogleIamAdminV1WorkforcePoolProviderSaml

Represents a SAML identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idp_metadata_xml** | **str** | Required. SAML Identity provider configuration metadata xml doc. The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf). The max size of the acceptable xml document will be bounded to 128k characters. The metadata xml document should satisfy the following constraints: 1) Must contain an Identity Provider Entity ID. 2) Must contain at least one non-expired signing key certificate. 3) For each signing key: a) Valid from should be no more than 7 days from now. b) Valid to should be no more than 15 years in the future. 4) Up to 3 IdP signing keys are allowed in the metadata xml. When updating the provider&#39;s metadata xml, at least one non-expired signing key must overlap with the existing metadata. This requirement is skipped if there are no non-expired signing keys present in the existing metadata. | [optional] 

## Example

```python
from openapi_client.models.google_iam_admin_v1_workforce_pool_provider_saml import GoogleIamAdminV1WorkforcePoolProviderSaml

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamAdminV1WorkforcePoolProviderSaml from a JSON string
google_iam_admin_v1_workforce_pool_provider_saml_instance = GoogleIamAdminV1WorkforcePoolProviderSaml.from_json(json)
# print the JSON string representation of the object
print(GoogleIamAdminV1WorkforcePoolProviderSaml.to_json())

# convert the object into a dict
google_iam_admin_v1_workforce_pool_provider_saml_dict = google_iam_admin_v1_workforce_pool_provider_saml_instance.to_dict()
# create an instance of GoogleIamAdminV1WorkforcePoolProviderSaml from a dict
google_iam_admin_v1_workforce_pool_provider_saml_from_dict = GoogleIamAdminV1WorkforcePoolProviderSaml.from_dict(google_iam_admin_v1_workforce_pool_provider_saml_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



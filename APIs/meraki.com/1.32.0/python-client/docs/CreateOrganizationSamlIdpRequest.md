# CreateOrganizationSamlIdpRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slo_logout_url** | **str** | Dashboard will redirect users to this URL when they sign out. | [optional] 
**x509cert_sha1_fingerprint** | **str** | Fingerprint (SHA1) of the SAML certificate provided by your Identity Provider (IdP). This will be used for encryption / validation. | 

## Example

```python
from openapi_client.models.create_organization_saml_idp_request import CreateOrganizationSamlIdpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationSamlIdpRequest from a JSON string
create_organization_saml_idp_request_instance = CreateOrganizationSamlIdpRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationSamlIdpRequest.to_json())

# convert the object into a dict
create_organization_saml_idp_request_dict = create_organization_saml_idp_request_instance.to_dict()
# create an instance of CreateOrganizationSamlIdpRequest from a dict
create_organization_saml_idp_request_from_dict = CreateOrganizationSamlIdpRequest.from_dict(create_organization_saml_idp_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



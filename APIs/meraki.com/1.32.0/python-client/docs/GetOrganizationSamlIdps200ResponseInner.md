# GetOrganizationSamlIdps200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_url** | **str** | URL that is consuming SAML Identity Provider (IdP) | [optional] 
**idp_id** | **str** | ID associated with the SAML Identity Provider (IdP) | [optional] 
**slo_logout_url** | **str** | Dashboard will redirect users to this URL when they sign out. | [optional] 
**x509cert_sha1_fingerprint** | **str** | Fingerprint (SHA1) of the SAML certificate provided by your Identity Provider (IdP). This will be used for encryption / validation. | [optional] 

## Example

```python
from openapi_client.models.get_organization_saml_idps200_response_inner import GetOrganizationSamlIdps200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSamlIdps200ResponseInner from a JSON string
get_organization_saml_idps200_response_inner_instance = GetOrganizationSamlIdps200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSamlIdps200ResponseInner.to_json())

# convert the object into a dict
get_organization_saml_idps200_response_inner_dict = get_organization_saml_idps200_response_inner_instance.to_dict()
# create an instance of GetOrganizationSamlIdps200ResponseInner from a dict
get_organization_saml_idps200_response_inner_from_dict = GetOrganizationSamlIdps200ResponseInner.from_dict(get_organization_saml_idps200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



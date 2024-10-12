# Saml

Represents an SAML 2.0 identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idp_metadata_xml** | **str** | Required. SAML Identity provider configuration metadata xml doc. The xml document should comply with [SAML 2.0 specification](https://www.oasis-open.org/committees/download.php/56785/sstc-saml-metadata-errata-2.0-wd-05.pdf). The max size of the acceptable xml document will be bounded to 128k characters. The metadata xml document should satisfy the following constraints: 1) Must contain an Identity Provider Entity ID. 2) Must contain at least one non-expired signing key certificate. 3) For each signing key: a) Valid from should be no more than 7 days from now. b) Valid to should be no more than 15 years in the future. 4) Upto 3 IdP signing keys are allowed in the metadata xml. When updating the provider&#39;s metadata xml, at lease one non-expired signing key must overlap with the existing metadata. This requirement is skipped if there are no non-expired signing keys present in the existing metadata | [optional] 

## Example

```python
from openapi_client.models.saml import Saml

# TODO update the JSON string below
json = "{}"
# create an instance of Saml from a JSON string
saml_instance = Saml.from_json(json)
# print the JSON string representation of the object
print(Saml.to_json())

# convert the object into a dict
saml_dict = saml_instance.to_dict()
# create an instance of Saml from a dict
saml_from_dict = Saml.from_dict(saml_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



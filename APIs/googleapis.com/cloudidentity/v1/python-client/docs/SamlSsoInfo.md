# SamlSsoInfo

Details that are applicable when `sso_mode` == `SAML_SSO`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_saml_sso_profile** | **str** | Required. Name of the &#x60;InboundSamlSsoProfile&#x60; to use. Must be of the form &#x60;inboundSamlSsoProfiles/{inbound_saml_sso_profile}&#x60;.  | [optional] 

## Example

```python
from openapi_client.models.saml_sso_info import SamlSsoInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SamlSsoInfo from a JSON string
saml_sso_info_instance = SamlSsoInfo.from_json(json)
# print the JSON string representation of the object
print(SamlSsoInfo.to_json())

# convert the object into a dict
saml_sso_info_dict = saml_sso_info_instance.to_dict()
# create an instance of SamlSsoInfo from a dict
saml_sso_info_from_dict = SamlSsoInfo.from_dict(saml_sso_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



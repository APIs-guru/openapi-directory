# ListInboundSamlSsoProfilesResponse

Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_saml_sso_profiles** | [**List[InboundSamlSsoProfile]**](InboundSamlSsoProfile.md) | List of InboundSamlSsoProfiles. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_inbound_saml_sso_profiles_response import ListInboundSamlSsoProfilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInboundSamlSsoProfilesResponse from a JSON string
list_inbound_saml_sso_profiles_response_instance = ListInboundSamlSsoProfilesResponse.from_json(json)
# print the JSON string representation of the object
print(ListInboundSamlSsoProfilesResponse.to_json())

# convert the object into a dict
list_inbound_saml_sso_profiles_response_dict = list_inbound_saml_sso_profiles_response_instance.to_dict()
# create an instance of ListInboundSamlSsoProfilesResponse from a dict
list_inbound_saml_sso_profiles_response_from_dict = ListInboundSamlSsoProfilesResponse.from_dict(list_inbound_saml_sso_profiles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



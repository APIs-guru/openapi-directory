# SourceOauthConsentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**o_auth_input_configuration** | **object** | The values required to configure OAuth flows. The schema for this must match the &#x60;OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification&#x60; schema. | [optional] 
**redirect_url** | **str** | The url to redirect to after getting the user consent | 
**source_definition_id** | **str** |  | 
**source_id** | **str** |  | [optional] 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.source_oauth_consent_request import SourceOauthConsentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SourceOauthConsentRequest from a JSON string
source_oauth_consent_request_instance = SourceOauthConsentRequest.from_json(json)
# print the JSON string representation of the object
print(SourceOauthConsentRequest.to_json())

# convert the object into a dict
source_oauth_consent_request_dict = source_oauth_consent_request_instance.to_dict()
# create an instance of SourceOauthConsentRequest from a dict
source_oauth_consent_request_from_dict = SourceOauthConsentRequest.from_dict(source_oauth_consent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



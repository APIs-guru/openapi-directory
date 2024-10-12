# DestinationOauthConsentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_definition_id** | **str** |  | 
**destination_id** | **str** |  | [optional] 
**o_auth_input_configuration** | **object** | The values required to configure OAuth flows. The schema for this must match the &#x60;OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification&#x60; schema. | [optional] 
**redirect_url** | **str** | The url to redirect to after getting the user consent | 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.destination_oauth_consent_request import DestinationOauthConsentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationOauthConsentRequest from a JSON string
destination_oauth_consent_request_instance = DestinationOauthConsentRequest.from_json(json)
# print the JSON string representation of the object
print(DestinationOauthConsentRequest.to_json())

# convert the object into a dict
destination_oauth_consent_request_dict = destination_oauth_consent_request_instance.to_dict()
# create an instance of DestinationOauthConsentRequest from a dict
destination_oauth_consent_request_from_dict = DestinationOauthConsentRequest.from_dict(destination_oauth_consent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



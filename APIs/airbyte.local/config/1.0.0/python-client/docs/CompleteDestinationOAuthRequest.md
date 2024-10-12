# CompleteDestinationOAuthRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_definition_id** | **str** |  | 
**destination_id** | **str** |  | [optional] 
**o_auth_input_configuration** | **object** | The values required to configure OAuth flows. The schema for this must match the &#x60;OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification&#x60; schema. | [optional] 
**var_query_params** | **Dict[str, object]** | The query parameters present in the redirect URL after a user granted consent e.g auth code | [optional] 
**redirect_url** | **str** | When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given. | [optional] 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.complete_destination_o_auth_request import CompleteDestinationOAuthRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteDestinationOAuthRequest from a JSON string
complete_destination_o_auth_request_instance = CompleteDestinationOAuthRequest.from_json(json)
# print the JSON string representation of the object
print(CompleteDestinationOAuthRequest.to_json())

# convert the object into a dict
complete_destination_o_auth_request_dict = complete_destination_o_auth_request_instance.to_dict()
# create an instance of CompleteDestinationOAuthRequest from a dict
complete_destination_o_auth_request_from_dict = CompleteDestinationOAuthRequest.from_dict(complete_destination_o_auth_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



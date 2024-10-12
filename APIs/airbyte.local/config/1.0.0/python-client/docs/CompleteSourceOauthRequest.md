# CompleteSourceOauthRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**o_auth_input_configuration** | **object** | The values required to configure OAuth flows. The schema for this must match the &#x60;OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification&#x60; schema. | [optional] 
**var_query_params** | **Dict[str, object]** | The query parameters present in the redirect URL after a user granted consent e.g auth code | [optional] 
**redirect_url** | **str** | When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given. | [optional] 
**source_definition_id** | **str** |  | 
**source_id** | **str** |  | [optional] 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.complete_source_oauth_request import CompleteSourceOauthRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteSourceOauthRequest from a JSON string
complete_source_oauth_request_instance = CompleteSourceOauthRequest.from_json(json)
# print the JSON string representation of the object
print(CompleteSourceOauthRequest.to_json())

# convert the object into a dict
complete_source_oauth_request_dict = complete_source_oauth_request_instance.to_dict()
# create an instance of CompleteSourceOauthRequest from a dict
complete_source_oauth_request_from_dict = CompleteSourceOauthRequest.from_dict(complete_source_oauth_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



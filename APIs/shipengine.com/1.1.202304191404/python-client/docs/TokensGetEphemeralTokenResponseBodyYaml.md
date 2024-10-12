# TokensGetEphemeralTokenResponseBodyYaml


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirect_url** | **str** | The redirect url formatted with the requested token. | [optional] 
**token** | **str** | The requested token that expires in 10 seconds. | [optional] 

## Example

```python
from openapi_client.models.tokens_get_ephemeral_token_response_body_yaml import TokensGetEphemeralTokenResponseBodyYaml

# TODO update the JSON string below
json = "{}"
# create an instance of TokensGetEphemeralTokenResponseBodyYaml from a JSON string
tokens_get_ephemeral_token_response_body_yaml_instance = TokensGetEphemeralTokenResponseBodyYaml.from_json(json)
# print the JSON string representation of the object
print(TokensGetEphemeralTokenResponseBodyYaml.to_json())

# convert the object into a dict
tokens_get_ephemeral_token_response_body_yaml_dict = tokens_get_ephemeral_token_response_body_yaml_instance.to_dict()
# create an instance of TokensGetEphemeralTokenResponseBodyYaml from a dict
tokens_get_ephemeral_token_response_body_yaml_from_dict = TokensGetEphemeralTokenResponseBodyYaml.from_dict(tokens_get_ephemeral_token_response_body_yaml_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



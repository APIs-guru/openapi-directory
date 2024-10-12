# TokenUpdateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokens** | [**TokenUpdateTokens**](TokenUpdateTokens.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_update_response import TokenUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TokenUpdateResponse from a JSON string
token_update_response_instance = TokenUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(TokenUpdateResponse.to_json())

# convert the object into a dict
token_update_response_dict = token_update_response_instance.to_dict()
# create an instance of TokenUpdateResponse from a dict
token_update_response_from_dict = TokenUpdateResponse.from_dict(token_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



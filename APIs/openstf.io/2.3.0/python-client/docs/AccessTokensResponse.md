# AccessTokensResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokens** | **List[str]** |  | 

## Example

```python
from openapi_client.models.access_tokens_response import AccessTokensResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccessTokensResponse from a JSON string
access_tokens_response_instance = AccessTokensResponse.from_json(json)
# print the JSON string representation of the object
print(AccessTokensResponse.to_json())

# convert the object into a dict
access_tokens_response_dict = access_tokens_response_instance.to_dict()
# create an instance of AccessTokensResponse from a dict
access_tokens_response_from_dict = AccessTokensResponse.from_dict(access_tokens_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



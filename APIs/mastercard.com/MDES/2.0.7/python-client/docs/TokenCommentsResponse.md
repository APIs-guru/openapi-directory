# TokenCommentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | [**Comments**](Comments.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_comments_response import TokenCommentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TokenCommentsResponse from a JSON string
token_comments_response_instance = TokenCommentsResponse.from_json(json)
# print the JSON string representation of the object
print(TokenCommentsResponse.to_json())

# convert the object into a dict
token_comments_response_dict = token_comments_response_instance.to_dict()
# create an instance of TokenCommentsResponse from a dict
token_comments_response_from_dict = TokenCommentsResponse.from_dict(token_comments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



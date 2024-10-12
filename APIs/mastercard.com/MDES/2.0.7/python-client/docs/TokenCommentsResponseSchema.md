# TokenCommentsResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_comments_response** | [**TokenCommentsResponse**](TokenCommentsResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_comments_response_schema import TokenCommentsResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenCommentsResponseSchema from a JSON string
token_comments_response_schema_instance = TokenCommentsResponseSchema.from_json(json)
# print the JSON string representation of the object
print(TokenCommentsResponseSchema.to_json())

# convert the object into a dict
token_comments_response_schema_dict = token_comments_response_schema_instance.to_dict()
# create an instance of TokenCommentsResponseSchema from a dict
token_comments_response_schema_from_dict = TokenCommentsResponseSchema.from_dict(token_comments_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TokenCommentsRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_comments_request** | [**TokenCommentsRequest**](TokenCommentsRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_comments_request_schema import TokenCommentsRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenCommentsRequestSchema from a JSON string
token_comments_request_schema_instance = TokenCommentsRequestSchema.from_json(json)
# print the JSON string representation of the object
print(TokenCommentsRequestSchema.to_json())

# convert the object into a dict
token_comments_request_schema_dict = token_comments_request_schema_instance.to_dict()
# create an instance of TokenCommentsRequestSchema from a dict
token_comments_request_schema_from_dict = TokenCommentsRequestSchema.from_dict(token_comments_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



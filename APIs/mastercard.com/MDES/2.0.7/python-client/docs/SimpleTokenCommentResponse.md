# SimpleTokenCommentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment_id** | **str** | Identifier of the comment added. Only present when comment text was provided in the request. | [optional] 
**token_unique_reference** | **str** | Unique reference to the Token. | 

## Example

```python
from openapi_client.models.simple_token_comment_response import SimpleTokenCommentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleTokenCommentResponse from a JSON string
simple_token_comment_response_instance = SimpleTokenCommentResponse.from_json(json)
# print the JSON string representation of the object
print(SimpleTokenCommentResponse.to_json())

# convert the object into a dict
simple_token_comment_response_dict = simple_token_comment_response_instance.to_dict()
# create an instance of SimpleTokenCommentResponse from a dict
simple_token_comment_response_from_dict = SimpleTokenCommentResponse.from_dict(simple_token_comment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



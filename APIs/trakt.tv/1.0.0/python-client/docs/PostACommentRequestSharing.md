# PostACommentRequestSharing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**medium** | **bool** |  | [optional] 
**tumblr** | **bool** |  | [optional] 
**twitter** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.post_a_comment_request_sharing import PostACommentRequestSharing

# TODO update the JSON string below
json = "{}"
# create an instance of PostACommentRequestSharing from a JSON string
post_a_comment_request_sharing_instance = PostACommentRequestSharing.from_json(json)
# print the JSON string representation of the object
print(PostACommentRequestSharing.to_json())

# convert the object into a dict
post_a_comment_request_sharing_dict = post_a_comment_request_sharing_instance.to_dict()
# create an instance of PostACommentRequestSharing from a dict
post_a_comment_request_sharing_from_dict = PostACommentRequestSharing.from_dict(post_a_comment_request_sharing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



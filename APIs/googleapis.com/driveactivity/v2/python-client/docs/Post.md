# Post

A regular posted comment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subtype** | **str** | The sub-type of this event. | [optional] 

## Example

```python
from openapi_client.models.post import Post

# TODO update the JSON string below
json = "{}"
# create an instance of Post from a JSON string
post_instance = Post.from_json(json)
# print the JSON string representation of the object
print(Post.to_json())

# convert the object into a dict
post_dict = post_instance.to_dict()
# create an instance of Post from a dict
post_from_dict = Post.from_dict(post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



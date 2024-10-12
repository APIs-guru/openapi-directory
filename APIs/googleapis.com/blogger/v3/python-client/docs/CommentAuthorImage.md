# CommentAuthorImage

The creator's avatar.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The creator&#39;s avatar URL. | [optional] 

## Example

```python
from openapi_client.models.comment_author_image import CommentAuthorImage

# TODO update the JSON string below
json = "{}"
# create an instance of CommentAuthorImage from a JSON string
comment_author_image_instance = CommentAuthorImage.from_json(json)
# print the JSON string representation of the object
print(CommentAuthorImage.to_json())

# convert the object into a dict
comment_author_image_dict = comment_author_image_instance.to_dict()
# create an instance of CommentAuthorImage from a dict
comment_author_image_from_dict = CommentAuthorImage.from_dict(comment_author_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CommentActorImage

The image representation of this actor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URL of the actor&#39;s profile photo. To resize the image and crop it to a square, append the query string ?sz&#x3D;x, where x is the dimension in pixels of each side. | [optional] 

## Example

```python
from openapi_client.models.comment_actor_image import CommentActorImage

# TODO update the JSON string below
json = "{}"
# create an instance of CommentActorImage from a JSON string
comment_actor_image_instance = CommentActorImage.from_json(json)
# print the JSON string representation of the object
print(CommentActorImage.to_json())

# convert the object into a dict
comment_actor_image_dict = comment_actor_image_instance.to_dict()
# create an instance of CommentActorImage from a dict
comment_actor_image_from_dict = CommentActorImage.from_dict(comment_actor_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



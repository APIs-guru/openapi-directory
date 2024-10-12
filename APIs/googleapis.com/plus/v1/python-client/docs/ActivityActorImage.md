# ActivityActorImage

The image representation of the actor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URL of the actor&#39;s profile photo. To resize the image and crop it to a square, append the query string ?sz&#x3D;x, where x is the dimension in pixels of each side. | [optional] 

## Example

```python
from openapi_client.models.activity_actor_image import ActivityActorImage

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityActorImage from a JSON string
activity_actor_image_instance = ActivityActorImage.from_json(json)
# print the JSON string representation of the object
print(ActivityActorImage.to_json())

# convert the object into a dict
activity_actor_image_dict = activity_actor_image_instance.to_dict()
# create an instance of ActivityActorImage from a dict
activity_actor_image_from_dict = ActivityActorImage.from_dict(activity_actor_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



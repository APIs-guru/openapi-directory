# ActivityObjectActorImage

The image representation of the original actor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | A URL that points to a thumbnail photo of the original actor. | [optional] 

## Example

```python
from openapi_client.models.activity_object_actor_image import ActivityObjectActorImage

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityObjectActorImage from a JSON string
activity_object_actor_image_instance = ActivityObjectActorImage.from_json(json)
# print the JSON string representation of the object
print(ActivityObjectActorImage.to_json())

# convert the object into a dict
activity_object_actor_image_dict = activity_object_actor_image_instance.to_dict()
# create an instance of ActivityObjectActorImage from a dict
activity_object_actor_image_from_dict = ActivityObjectActorImage.from_dict(activity_object_actor_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



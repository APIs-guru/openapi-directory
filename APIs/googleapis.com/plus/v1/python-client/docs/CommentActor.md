# CommentActor

The person who posted this comment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_specific_actor_info** | [**ActivityActorClientSpecificActorInfo**](ActivityActorClientSpecificActorInfo.md) |  | [optional] 
**display_name** | **str** | The name of this actor, suitable for display. | [optional] 
**id** | **str** | The ID of the actor. | [optional] 
**image** | [**CommentActorImage**](CommentActorImage.md) |  | [optional] 
**url** | **str** | A link to the Person resource for this actor. | [optional] 
**verification** | [**ActivityActorVerification**](ActivityActorVerification.md) |  | [optional] 

## Example

```python
from openapi_client.models.comment_actor import CommentActor

# TODO update the JSON string below
json = "{}"
# create an instance of CommentActor from a JSON string
comment_actor_instance = CommentActor.from_json(json)
# print the JSON string representation of the object
print(CommentActor.to_json())

# convert the object into a dict
comment_actor_dict = comment_actor_instance.to_dict()
# create an instance of CommentActor from a dict
comment_actor_from_dict = CommentActor.from_dict(comment_actor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



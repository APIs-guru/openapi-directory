# ActivityActor

The person who performed this activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_specific_actor_info** | [**ActivityActorClientSpecificActorInfo**](ActivityActorClientSpecificActorInfo.md) |  | [optional] 
**display_name** | **str** | The name of the actor, suitable for display. | [optional] 
**id** | **str** | The ID of the actor&#39;s Person resource. | [optional] 
**image** | [**ActivityActorImage**](ActivityActorImage.md) |  | [optional] 
**name** | [**ActivityActorName**](ActivityActorName.md) |  | [optional] 
**url** | **str** | The link to the actor&#39;s Google profile. | [optional] 
**verification** | [**ActivityActorVerification**](ActivityActorVerification.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_actor import ActivityActor

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityActor from a JSON string
activity_actor_instance = ActivityActor.from_json(json)
# print the JSON string representation of the object
print(ActivityActor.to_json())

# convert the object into a dict
activity_actor_dict = activity_actor_instance.to_dict()
# create an instance of ActivityActor from a dict
activity_actor_from_dict = ActivityActor.from_dict(activity_actor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



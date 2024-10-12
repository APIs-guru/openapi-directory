# ActivityObjectActor

If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_specific_actor_info** | [**ActivityActorClientSpecificActorInfo**](ActivityActorClientSpecificActorInfo.md) |  | [optional] 
**display_name** | **str** | The original actor&#39;s name, which is suitable for display. | [optional] 
**id** | **str** | ID of the original actor. | [optional] 
**image** | [**ActivityObjectActorImage**](ActivityObjectActorImage.md) |  | [optional] 
**url** | **str** | A link to the original actor&#39;s Google profile. | [optional] 
**verification** | [**ActivityActorVerification**](ActivityActorVerification.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_object_actor import ActivityObjectActor

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityObjectActor from a JSON string
activity_object_actor_instance = ActivityObjectActor.from_json(json)
# print the JSON string representation of the object
print(ActivityObjectActor.to_json())

# convert the object into a dict
activity_object_actor_dict = activity_object_actor_instance.to_dict()
# create an instance of ActivityObjectActor from a dict
activity_object_actor_from_dict = ActivityObjectActor.from_dict(activity_object_actor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



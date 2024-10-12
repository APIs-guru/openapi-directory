# ActivityActor

User doing the action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caller_type** | **str** | The type of actor. | [optional] 
**email** | **str** | The primary email address of the actor. May be absent if there is no email address associated with the actor. | [optional] 
**key** | **str** | Only present when &#x60;callerType&#x60; is &#x60;KEY&#x60;. Can be the &#x60;consumer_key&#x60; of the requestor for OAuth 2LO API requests or an identifier for robot accounts. | [optional] 
**profile_id** | **str** | The unique Google Workspace profile ID of the actor. This value might be absent if the actor is not a Google Workspace user, or may be the number 105250506097979753968 which acts as a placeholder ID. | [optional] 

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



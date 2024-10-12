# ActivityActorClientSpecificActorInfo

Actor info specific to particular clients.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**youtube_actor_info** | [**ActivityActorClientSpecificActorInfoYoutubeActorInfo**](ActivityActorClientSpecificActorInfoYoutubeActorInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_actor_client_specific_actor_info import ActivityActorClientSpecificActorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityActorClientSpecificActorInfo from a JSON string
activity_actor_client_specific_actor_info_instance = ActivityActorClientSpecificActorInfo.from_json(json)
# print the JSON string representation of the object
print(ActivityActorClientSpecificActorInfo.to_json())

# convert the object into a dict
activity_actor_client_specific_actor_info_dict = activity_actor_client_specific_actor_info_instance.to_dict()
# create an instance of ActivityActorClientSpecificActorInfo from a dict
activity_actor_client_specific_actor_info_from_dict = ActivityActorClientSpecificActorInfo.from_dict(activity_actor_client_specific_actor_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



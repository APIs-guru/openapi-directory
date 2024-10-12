# ActivityActorVerification

Verification status of actor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_hoc_verified** | **str** | Verification for one-time or manual processes. | [optional] 

## Example

```python
from openapi_client.models.activity_actor_verification import ActivityActorVerification

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityActorVerification from a JSON string
activity_actor_verification_instance = ActivityActorVerification.from_json(json)
# print the JSON string representation of the object
print(ActivityActorVerification.to_json())

# convert the object into a dict
activity_actor_verification_dict = activity_actor_verification_instance.to_dict()
# create an instance of ActivityActorVerification from a dict
activity_actor_verification_from_dict = ActivityActorVerification.from_dict(activity_actor_verification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



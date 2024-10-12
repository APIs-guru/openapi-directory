# ActivityActorName

An object representation of the individual components of name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family_name** | **str** | The family name (\&quot;last name\&quot;) of the actor. | [optional] 
**given_name** | **str** | The given name (\&quot;first name\&quot;) of the actor. | [optional] 

## Example

```python
from openapi_client.models.activity_actor_name import ActivityActorName

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityActorName from a JSON string
activity_actor_name_instance = ActivityActorName.from_json(json)
# print the JSON string representation of the object
print(ActivityActorName.to_json())

# convert the object into a dict
activity_actor_name_dict = activity_actor_name_instance.to_dict()
# create an instance of ActivityActorName from a dict
activity_actor_name_from_dict = ActivityActorName.from_dict(activity_actor_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



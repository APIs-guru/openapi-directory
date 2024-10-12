# ActorPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** |  | [optional] 
**bio** | **str** |  | [optional] 
**birth_year** | **str** |  | [optional] 
**death_year** | **str** |  | [optional] 
**gender** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**popularity_index** | **str** |  | [optional] 
**profile_image** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.actor_post import ActorPost

# TODO update the JSON string below
json = "{}"
# create an instance of ActorPost from a JSON string
actor_post_instance = ActorPost.from_json(json)
# print the JSON string representation of the object
print(ActorPost.to_json())

# convert the object into a dict
actor_post_dict = actor_post_instance.to_dict()
# create an instance of ActorPost from a dict
actor_post_from_dict = ActorPost.from_dict(actor_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



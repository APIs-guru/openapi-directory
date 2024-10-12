# Actor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bio** | **str** |  | [optional] 
**birth_year** | **str** |  | [optional] 
**death_year** | **str** |  | [optional] 
**gender** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**popularity_index** | **str** |  | [optional] 
**profile_image** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.actor import Actor

# TODO update the JSON string below
json = "{}"
# create an instance of Actor from a JSON string
actor_instance = Actor.from_json(json)
# print the JSON string representation of the object
print(Actor.to_json())

# convert the object into a dict
actor_dict = actor_instance.to_dict()
# create an instance of Actor from a dict
actor_from_dict = Actor.from_dict(actor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



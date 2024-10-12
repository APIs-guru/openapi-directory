# TVShowActor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externals** | [**List[ExternalIDs]**](ExternalIDs.md) |  | [optional] 
**image** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**role** | **str** |  | [optional] 
**show_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tv_show_actor import TVShowActor

# TODO update the JSON string below
json = "{}"
# create an instance of TVShowActor from a JSON string
tv_show_actor_instance = TVShowActor.from_json(json)
# print the JSON string representation of the object
print(TVShowActor.to_json())

# convert the object into a dict
tv_show_actor_dict = tv_show_actor_instance.to_dict()
# create an instance of TVShowActor from a dict
tv_show_actor_from_dict = TVShowActor.from_dict(tv_show_actor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



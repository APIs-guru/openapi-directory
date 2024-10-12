# Episode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airdate** | **str** |  | [optional] 
**airtime** | **str** |  | [optional] 
**episode_no** | **str** |  | [optional] 
**externals** | [**List[ExternalIDs]**](ExternalIDs.md) |  | [optional] 
**image** | **str** |  | [optional] 
**season** | **str** |  | [optional] 
**synopsis** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.episode import Episode

# TODO update the JSON string below
json = "{}"
# create an instance of Episode from a JSON string
episode_instance = Episode.from_json(json)
# print the JSON string representation of the object
print(Episode.to_json())

# convert the object into a dict
episode_dict = episode_instance.to_dict()
# create an instance of Episode from a dict
episode_from_dict = Episode.from_dict(episode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



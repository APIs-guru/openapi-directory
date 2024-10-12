# SpacePinnedTopic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | **float** | The position of a pinned topic | [optional] 
**subject** | **str** | The subject of a pinned topic | [optional] 
**topic_id** | **str** | The id of a pinned topic | [optional] 

## Example

```python
from openapi_client.models.space_pinned_topic import SpacePinnedTopic

# TODO update the JSON string below
json = "{}"
# create an instance of SpacePinnedTopic from a JSON string
space_pinned_topic_instance = SpacePinnedTopic.from_json(json)
# print the JSON string representation of the object
print(SpacePinnedTopic.to_json())

# convert the object into a dict
space_pinned_topic_dict = space_pinned_topic_instance.to_dict()
# create an instance of SpacePinnedTopic from a dict
space_pinned_topic_from_dict = SpacePinnedTopic.from_dict(space_pinned_topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



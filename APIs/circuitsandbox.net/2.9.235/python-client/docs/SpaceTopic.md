# SpaceTopic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_content_creation_time** | **float** | The last time new content was created | [optional] 
**last_content_creator_id** | **str** | The Id of the last content creator | [optional] 
**number_of_replies** | **float** | The number of replies this topic has | [optional] 
**pinned** | **bool** | Is this topic pinned | [optional] 
**space_item** | [**SpaceItem**](SpaceItem.md) |  | [optional] 
**subject** | **str** | The subject of this topic | [optional] 
**tags** | **List[str]** | The tags  | [optional] 

## Example

```python
from openapi_client.models.space_topic import SpaceTopic

# TODO update the JSON string below
json = "{}"
# create an instance of SpaceTopic from a JSON string
space_topic_instance = SpaceTopic.from_json(json)
# print the JSON string representation of the object
print(SpaceTopic.to_json())

# convert the object into a dict
space_topic_dict = space_topic_instance.to_dict()
# create an instance of SpaceTopic from a dict
space_topic_from_dict = SpaceTopic.from_dict(space_topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



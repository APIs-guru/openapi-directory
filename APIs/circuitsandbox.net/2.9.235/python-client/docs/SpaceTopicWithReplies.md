# SpaceTopicWithReplies


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replies** | [**List[SpaceReply]**](SpaceReply.md) | A List holding the replies for a topic | [optional] 
**topic** | [**SpaceTopic**](SpaceTopic.md) |  | [optional] 

## Example

```python
from openapi_client.models.space_topic_with_replies import SpaceTopicWithReplies

# TODO update the JSON string below
json = "{}"
# create an instance of SpaceTopicWithReplies from a JSON string
space_topic_with_replies_instance = SpaceTopicWithReplies.from_json(json)
# print the JSON string representation of the object
print(SpaceTopicWithReplies.to_json())

# convert the object into a dict
space_topic_with_replies_dict = space_topic_with_replies_instance.to_dict()
# create an instance of SpaceTopicWithReplies from a dict
space_topic_with_replies_from_dict = SpaceTopicWithReplies.from_dict(space_topic_with_replies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



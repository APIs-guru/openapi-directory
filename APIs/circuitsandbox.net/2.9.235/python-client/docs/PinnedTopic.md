# PinnedTopic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_id** | **str** | \&quot;ID of the conversation\&quot; | [optional] 
**conversation_item_id** | **str** | \&quot;ID of the pinned topic\&quot; | [optional] 
**pinned_time** | **float** | \&quot;The exact moment the Pinning was happening\&quot; | [optional] 

## Example

```python
from openapi_client.models.pinned_topic import PinnedTopic

# TODO update the JSON string below
json = "{}"
# create an instance of PinnedTopic from a JSON string
pinned_topic_instance = PinnedTopic.from_json(json)
# print the JSON string representation of the object
print(PinnedTopic.to_json())

# convert the object into a dict
pinned_topic_dict = pinned_topic_instance.to_dict()
# create an instance of PinnedTopic from a dict
pinned_topic_from_dict = PinnedTopic.from_dict(pinned_topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



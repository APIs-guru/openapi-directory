# SBTopic

Description of topic resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SBTopicProperties**](SBTopicProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.sb_topic import SBTopic

# TODO update the JSON string below
json = "{}"
# create an instance of SBTopic from a JSON string
sb_topic_instance = SBTopic.from_json(json)
# print the JSON string representation of the object
print(SBTopic.to_json())

# convert the object into a dict
sb_topic_dict = sb_topic_instance.to_dict()
# create an instance of SBTopic from a dict
sb_topic_from_dict = SBTopic.from_dict(sb_topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



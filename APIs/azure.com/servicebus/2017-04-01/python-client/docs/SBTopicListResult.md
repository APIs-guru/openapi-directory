# SBTopicListResult

The response to the List Topics operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of topics. | [optional] 
**value** | [**List[SBTopic]**](SBTopic.md) | Result of the List Topics operation. | [optional] 

## Example

```python
from openapi_client.models.sb_topic_list_result import SBTopicListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SBTopicListResult from a JSON string
sb_topic_list_result_instance = SBTopicListResult.from_json(json)
# print the JSON string representation of the object
print(SBTopicListResult.to_json())

# convert the object into a dict
sb_topic_list_result_dict = sb_topic_list_result_instance.to_dict()
# create an instance of SBTopicListResult from a dict
sb_topic_list_result_from_dict = SBTopicListResult.from_dict(sb_topic_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



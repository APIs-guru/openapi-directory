# TopicListResult

The response to the List Topics operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of topics. | [optional] 
**value** | [**List[TopicResource]**](TopicResource.md) | Result of the List Topics operation. | [optional] 

## Example

```python
from openapi_client.models.topic_list_result import TopicListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TopicListResult from a JSON string
topic_list_result_instance = TopicListResult.from_json(json)
# print the JSON string representation of the object
print(TopicListResult.to_json())

# convert the object into a dict
topic_list_result_dict = topic_list_result_instance.to_dict()
# create an instance of TopicListResult from a dict
topic_list_result_from_dict = TopicListResult.from_dict(topic_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



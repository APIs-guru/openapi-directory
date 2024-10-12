# TopicsListResult

Result of the List Topics operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A link for the next page of topics | [optional] 
**value** | [**List[Topic]**](Topic.md) | A collection of Topics | [optional] 

## Example

```python
from openapi_client.models.topics_list_result import TopicsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TopicsListResult from a JSON string
topics_list_result_instance = TopicsListResult.from_json(json)
# print the JSON string representation of the object
print(TopicsListResult.to_json())

# convert the object into a dict
topics_list_result_dict = topics_list_result_instance.to_dict()
# create an instance of TopicsListResult from a dict
topics_list_result_from_dict = TopicsListResult.from_dict(topics_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



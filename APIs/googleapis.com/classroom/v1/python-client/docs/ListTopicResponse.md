# ListTopicResponse

Response when listing topics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token identifying the next page of results to return. If empty, no further results are available. | [optional] 
**topic** | [**List[Topic]**](Topic.md) | Topic items that match the request. | [optional] 

## Example

```python
from openapi_client.models.list_topic_response import ListTopicResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTopicResponse from a JSON string
list_topic_response_instance = ListTopicResponse.from_json(json)
# print the JSON string representation of the object
print(ListTopicResponse.to_json())

# convert the object into a dict
list_topic_response_dict = list_topic_response_instance.to_dict()
# create an instance of ListTopicResponse from a dict
list_topic_response_from_dict = ListTopicResponse.from_dict(list_topic_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ListTopicsResponse

Response for ListTopics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page of results. If this field is omitted, there are no more results. | [optional] 
**topics** | [**List[Topic]**](Topic.md) | The list of topic in the requested parent. The order of the topics is unspecified. | [optional] 

## Example

```python
from openapi_client.models.list_topics_response import ListTopicsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTopicsResponse from a JSON string
list_topics_response_instance = ListTopicsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTopicsResponse.to_json())

# convert the object into a dict
list_topics_response_dict = list_topics_response_instance.to_dict()
# create an instance of ListTopicsResponse from a dict
list_topics_response_from_dict = ListTopicsResponse.from_dict(list_topics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ListTopicsResponse

Response for the `ListTopics` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Optional. If not empty, indicates that there may be more topics that match the request; this value should be passed in a new &#x60;ListTopicsRequest&#x60;. | [optional] 
**topics** | [**List[Topic]**](Topic.md) | Optional. The resulting topics. | [optional] 

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



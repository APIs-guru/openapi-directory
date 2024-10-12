# TopicResponse

Response for the topic detection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Confidence for the detected topic | 
**id** | **str** | Unique identifier of the document | [optional] 
**labels** | [**List[Label]**](Label.md) | Probabilistic distribution over possible topic labels | 
**language** | **str** | The used language of the document | 
**text** | **str** | The raw text of the document which has been analysed | [optional] 
**topic** | **str** | Detected topic of the document | 

## Example

```python
from openapi_client.models.topic_response import TopicResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TopicResponse from a JSON string
topic_response_instance = TopicResponse.from_json(json)
# print the JSON string representation of the object
print(TopicResponse.to_json())

# convert the object into a dict
topic_response_dict = topic_response_instance.to_dict()
# create an instance of TopicResponse from a dict
topic_response_from_dict = TopicResponse.from_dict(topic_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



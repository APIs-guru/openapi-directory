# StreamSummaries


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[SummaryValue]**](SummaryValue.md) |  | [optional] 
**links** | [**StreamSummariesLinks**](StreamSummariesLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.stream_summaries import StreamSummaries

# TODO update the JSON string below
json = "{}"
# create an instance of StreamSummaries from a JSON string
stream_summaries_instance = StreamSummaries.from_json(json)
# print the JSON string representation of the object
print(StreamSummaries.to_json())

# convert the object into a dict
stream_summaries_dict = stream_summaries_instance.to_dict()
# create an instance of StreamSummaries from a dict
stream_summaries_from_dict = StreamSummaries.from_dict(stream_summaries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



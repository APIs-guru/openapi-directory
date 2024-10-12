# ListTraceSinksResponse

Result returned from `ListTraceSinks`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A paginated response where more pages might be available has &#x60;next_page_token&#x60; set. To get the next set of results, call the same method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 
**sinks** | [**List[TraceSink]**](TraceSink.md) | A list of sinks. | [optional] 

## Example

```python
from openapi_client.models.list_trace_sinks_response import ListTraceSinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTraceSinksResponse from a JSON string
list_trace_sinks_response_instance = ListTraceSinksResponse.from_json(json)
# print the JSON string representation of the object
print(ListTraceSinksResponse.to_json())

# convert the object into a dict
list_trace_sinks_response_dict = list_trace_sinks_response_instance.to_dict()
# create an instance of ListTraceSinksResponse from a dict
list_trace_sinks_response_from_dict = ListTraceSinksResponse.from_dict(list_trace_sinks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ListTracesResponse

The response message for the `ListTraces` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If defined, indicates that there are more traces that match the request and that this value should be passed to the next request to continue retrieving additional traces. | [optional] 
**traces** | [**List[Trace]**](Trace.md) | List of trace records as specified by the view parameter. | [optional] 

## Example

```python
from openapi_client.models.list_traces_response import ListTracesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTracesResponse from a JSON string
list_traces_response_instance = ListTracesResponse.from_json(json)
# print the JSON string representation of the object
print(ListTracesResponse.to_json())

# convert the object into a dict
list_traces_response_dict = list_traces_response_instance.to_dict()
# create an instance of ListTracesResponse from a dict
list_traces_response_from_dict = ListTracesResponse.from_dict(list_traces_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



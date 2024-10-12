# ListBreakpointsResponse

Response for listing breakpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breakpoints** | [**List[Breakpoint]**](Breakpoint.md) | List of breakpoints matching the request. The fields &#x60;id&#x60; and &#x60;location&#x60; are guaranteed to be set on each breakpoint. The fields: &#x60;stack_frames&#x60;, &#x60;evaluated_expressions&#x60; and &#x60;variable_table&#x60; are cleared on each breakpoint regardless of its status. | [optional] 
**next_wait_token** | **str** | A wait token that can be used in the next call to &#x60;list&#x60; (REST) or &#x60;ListBreakpoints&#x60; (RPC) to block until the list of breakpoints has changes. | [optional] 

## Example

```python
from openapi_client.models.list_breakpoints_response import ListBreakpointsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBreakpointsResponse from a JSON string
list_breakpoints_response_instance = ListBreakpointsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBreakpointsResponse.to_json())

# convert the object into a dict
list_breakpoints_response_dict = list_breakpoints_response_instance.to_dict()
# create an instance of ListBreakpointsResponse from a dict
list_breakpoints_response_from_dict = ListBreakpointsResponse.from_dict(list_breakpoints_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



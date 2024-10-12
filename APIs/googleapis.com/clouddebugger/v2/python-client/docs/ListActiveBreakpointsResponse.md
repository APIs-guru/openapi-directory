# ListActiveBreakpointsResponse

Response for listing active breakpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breakpoints** | [**List[Breakpoint]**](Breakpoint.md) | List of all active breakpoints. The fields &#x60;id&#x60; and &#x60;location&#x60; are guaranteed to be set on each breakpoint. | [optional] 
**next_wait_token** | **str** | A token that can be used in the next method call to block until the list of breakpoints changes. | [optional] 
**wait_expired** | **bool** | If set to &#x60;true&#x60;, indicates that there is no change to the list of active breakpoints and the server-selected timeout has expired. The &#x60;breakpoints&#x60; field would be empty and should be ignored. | [optional] 

## Example

```python
from openapi_client.models.list_active_breakpoints_response import ListActiveBreakpointsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListActiveBreakpointsResponse from a JSON string
list_active_breakpoints_response_instance = ListActiveBreakpointsResponse.from_json(json)
# print the JSON string representation of the object
print(ListActiveBreakpointsResponse.to_json())

# convert the object into a dict
list_active_breakpoints_response_dict = list_active_breakpoints_response_instance.to_dict()
# create an instance of ListActiveBreakpointsResponse from a dict
list_active_breakpoints_response_from_dict = ListActiveBreakpointsResponse.from_dict(list_active_breakpoints_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



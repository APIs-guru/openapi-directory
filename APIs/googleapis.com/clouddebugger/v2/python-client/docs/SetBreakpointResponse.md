# SetBreakpointResponse

Response for setting a breakpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breakpoint** | [**Breakpoint**](Breakpoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.set_breakpoint_response import SetBreakpointResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SetBreakpointResponse from a JSON string
set_breakpoint_response_instance = SetBreakpointResponse.from_json(json)
# print the JSON string representation of the object
print(SetBreakpointResponse.to_json())

# convert the object into a dict
set_breakpoint_response_dict = set_breakpoint_response_instance.to_dict()
# create an instance of SetBreakpointResponse from a dict
set_breakpoint_response_from_dict = SetBreakpointResponse.from_dict(set_breakpoint_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



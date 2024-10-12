# GetBreakpointResponse

Response for getting breakpoint information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breakpoint** | [**Breakpoint**](Breakpoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_breakpoint_response import GetBreakpointResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetBreakpointResponse from a JSON string
get_breakpoint_response_instance = GetBreakpointResponse.from_json(json)
# print the JSON string representation of the object
print(GetBreakpointResponse.to_json())

# convert the object into a dict
get_breakpoint_response_dict = get_breakpoint_response_instance.to_dict()
# create an instance of GetBreakpointResponse from a dict
get_breakpoint_response_from_dict = GetBreakpointResponse.from_dict(get_breakpoint_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



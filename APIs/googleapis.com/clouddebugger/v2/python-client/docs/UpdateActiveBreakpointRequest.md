# UpdateActiveBreakpointRequest

Request to update an active breakpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breakpoint** | [**Breakpoint**](Breakpoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_active_breakpoint_request import UpdateActiveBreakpointRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateActiveBreakpointRequest from a JSON string
update_active_breakpoint_request_instance = UpdateActiveBreakpointRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateActiveBreakpointRequest.to_json())

# convert the object into a dict
update_active_breakpoint_request_dict = update_active_breakpoint_request_instance.to_dict()
# create an instance of UpdateActiveBreakpointRequest from a dict
update_active_breakpoint_request_from_dict = UpdateActiveBreakpointRequest.from_dict(update_active_breakpoint_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RegisterDebuggeeResponse

Response for registering a debuggee.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **str** | A unique ID generated for the agent. Each RegisterDebuggee request will generate a new agent ID. | [optional] 
**debuggee** | [**Debuggee**](Debuggee.md) |  | [optional] 

## Example

```python
from openapi_client.models.register_debuggee_response import RegisterDebuggeeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterDebuggeeResponse from a JSON string
register_debuggee_response_instance = RegisterDebuggeeResponse.from_json(json)
# print the JSON string representation of the object
print(RegisterDebuggeeResponse.to_json())

# convert the object into a dict
register_debuggee_response_dict = register_debuggee_response_instance.to_dict()
# create an instance of RegisterDebuggeeResponse from a dict
register_debuggee_response_from_dict = RegisterDebuggeeResponse.from_dict(register_debuggee_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



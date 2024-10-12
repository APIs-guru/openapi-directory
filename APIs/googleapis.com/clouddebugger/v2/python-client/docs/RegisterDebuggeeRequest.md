# RegisterDebuggeeRequest

Request to register a debuggee.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debuggee** | [**Debuggee**](Debuggee.md) |  | [optional] 

## Example

```python
from openapi_client.models.register_debuggee_request import RegisterDebuggeeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterDebuggeeRequest from a JSON string
register_debuggee_request_instance = RegisterDebuggeeRequest.from_json(json)
# print the JSON string representation of the object
print(RegisterDebuggeeRequest.to_json())

# convert the object into a dict
register_debuggee_request_dict = register_debuggee_request_instance.to_dict()
# create an instance of RegisterDebuggeeRequest from a dict
register_debuggee_request_from_dict = RegisterDebuggeeRequest.from_dict(register_debuggee_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



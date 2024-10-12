# ProtocolExceptionInvocationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception** | [**ProtocolException**](ProtocolException.md) |  | 
**method** | **str** |  | 

## Example

```python
from openapi_client.models.protocol_exception_invocation_response import ProtocolExceptionInvocationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProtocolExceptionInvocationResponse from a JSON string
protocol_exception_invocation_response_instance = ProtocolExceptionInvocationResponse.from_json(json)
# print the JSON string representation of the object
print(ProtocolExceptionInvocationResponse.to_json())

# convert the object into a dict
protocol_exception_invocation_response_dict = protocol_exception_invocation_response_instance.to_dict()
# create an instance of ProtocolExceptionInvocationResponse from a dict
protocol_exception_invocation_response_from_dict = ProtocolExceptionInvocationResponse.from_dict(protocol_exception_invocation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



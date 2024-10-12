# InvocationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug** | **str** |  | [optional] 
**method** | **str** |  | 
**metrics** | [**ExecutionMetrics**](ExecutionMetrics.md) |  | [optional] 
**result** | **object** |  | 

## Example

```python
from openapi_client.models.invocation_response import InvocationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InvocationResponse from a JSON string
invocation_response_instance = InvocationResponse.from_json(json)
# print the JSON string representation of the object
print(InvocationResponse.to_json())

# convert the object into a dict
invocation_response_dict = invocation_response_instance.to_dict()
# create an instance of InvocationResponse from a dict
invocation_response_from_dict = InvocationResponse.from_dict(invocation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



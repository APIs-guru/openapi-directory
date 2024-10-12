# AddMediaIntentHandlingInvocationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** |  | 
**result** | **object** |  | 
**debug** | **str** |  | [optional] 
**metrics** | [**ExecutionMetrics**](ExecutionMetrics.md) |  | [optional] 
**exception** | [**ProtocolException**](ProtocolException.md) |  | 

## Example

```python
from openapi_client.models.add_media_intent_handling_invocation_response import AddMediaIntentHandlingInvocationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddMediaIntentHandlingInvocationResponse from a JSON string
add_media_intent_handling_invocation_response_instance = AddMediaIntentHandlingInvocationResponse.from_json(json)
# print the JSON string representation of the object
print(AddMediaIntentHandlingInvocationResponse.to_json())

# convert the object into a dict
add_media_intent_handling_invocation_response_dict = add_media_intent_handling_invocation_response_instance.to_dict()
# create an instance of AddMediaIntentHandlingInvocationResponse from a dict
add_media_intent_handling_invocation_response_from_dict = AddMediaIntentHandlingInvocationResponse.from_dict(add_media_intent_handling_invocation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



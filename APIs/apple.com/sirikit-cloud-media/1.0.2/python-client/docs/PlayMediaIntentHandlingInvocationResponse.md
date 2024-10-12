# PlayMediaIntentHandlingInvocationResponse


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
from openapi_client.models.play_media_intent_handling_invocation_response import PlayMediaIntentHandlingInvocationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlayMediaIntentHandlingInvocationResponse from a JSON string
play_media_intent_handling_invocation_response_instance = PlayMediaIntentHandlingInvocationResponse.from_json(json)
# print the JSON string representation of the object
print(PlayMediaIntentHandlingInvocationResponse.to_json())

# convert the object into a dict
play_media_intent_handling_invocation_response_dict = play_media_intent_handling_invocation_response_instance.to_dict()
# create an instance of PlayMediaIntentHandlingInvocationResponse from a dict
play_media_intent_handling_invocation_response_from_dict = PlayMediaIntentHandlingInvocationResponse.from_dict(play_media_intent_handling_invocation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



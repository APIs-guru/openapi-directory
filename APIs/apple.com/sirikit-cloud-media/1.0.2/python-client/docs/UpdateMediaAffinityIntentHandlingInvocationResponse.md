# UpdateMediaAffinityIntentHandlingInvocationResponse


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
from openapi_client.models.update_media_affinity_intent_handling_invocation_response import UpdateMediaAffinityIntentHandlingInvocationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMediaAffinityIntentHandlingInvocationResponse from a JSON string
update_media_affinity_intent_handling_invocation_response_instance = UpdateMediaAffinityIntentHandlingInvocationResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateMediaAffinityIntentHandlingInvocationResponse.to_json())

# convert the object into a dict
update_media_affinity_intent_handling_invocation_response_dict = update_media_affinity_intent_handling_invocation_response_instance.to_dict()
# create an instance of UpdateMediaAffinityIntentHandlingInvocationResponse from a dict
update_media_affinity_intent_handling_invocation_response_from_dict = UpdateMediaAffinityIntentHandlingInvocationResponse.from_dict(update_media_affinity_intent_handling_invocation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



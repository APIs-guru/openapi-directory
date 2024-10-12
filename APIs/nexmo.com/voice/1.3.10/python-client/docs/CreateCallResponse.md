# CreateCallResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_uuid** | **str** | The unique identifier for the conversation this call leg is part of. | [optional] 
**direction** | [**Direction**](Direction.md) |  | [optional] 
**status** | **str** | The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects) | [optional] 
**uuid** | **str** | The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls | [optional] 

## Example

```python
from openapi_client.models.create_call_response import CreateCallResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCallResponse from a JSON string
create_call_response_instance = CreateCallResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCallResponse.to_json())

# convert the object into a dict
create_call_response_dict = create_call_response_instance.to_dict()
# create an instance of CreateCallResponse from a dict
create_call_response_from_dict = CreateCallResponse.from_dict(create_call_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CreateCallRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ncco** | **List[object]** | The [Nexmo Call Control Object](/voice/voice-api/ncco-reference) to use for this call.  | 
**event_method** | **str** | The HTTP method used to send event information to &#x60;event_url&#x60;. | [optional] [default to 'POST']
**event_url** | **List[str]** | **Required** unless &#x60;event_url&#x60; is configured at the application level, see [Create an Application](/api/application.v2#createApplication)  The webhook endpoint where call progress events are sent to. For more information about the values sent, see [Event webhook](/voice/voice-api/webhook-reference#event-webhook).  | [optional] 
**var_from** | [**EndpointPhoneFrom**](EndpointPhoneFrom.md) |  | 
**length_timer** | **int** | Set the number of seconds that elapse before Vonage hangs up after the call state changes to answered. | [optional] [default to 7200]
**machine_detection** | **str** | Configure the behavior when Vonage detects that the call is answered by voicemail. If &#x60;continue&#x60;, Vonage sends an HTTP request to &#x60;event_url&#x60; with the Call event machine. If &#x60;hangup&#x60;, Vonage ends the call. | [optional] 
**random_from_number** | **bool** | Set to &#x60;true&#x60; to use random phone number as &#x60;from&#x60;. The number will be selected from the list of the numbers assigned to the current application. &#x60;random_from_number: true&#x60; cannot be used together with &#x60;from&#x60;. | [optional] [default to False]
**ringing_timer** | **int** | Set the number of seconds that elapse before Vonage hangs up after the call state changes to ‘ringing’. | [optional] [default to 60]
**to** | [**List[CreateCallRequestBaseToInner]**](CreateCallRequestBaseToInner.md) |  | 
**answer_method** | **str** | The HTTP method used to send event information to answer_url. | [optional] [default to 'GET']
**answer_url** | **List[str]** | The webhook endpoint where you provide the [Nexmo Call Control Object](/voice/voice-api/ncco-reference) that governs this call.  | 

## Example

```python
from openapi_client.models.create_call_request import CreateCallRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCallRequest from a JSON string
create_call_request_instance = CreateCallRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCallRequest.to_json())

# convert the object into a dict
create_call_request_dict = create_call_request_instance.to_dict()
# create an instance of CreateCallRequest from a dict
create_call_request_from_dict = CreateCallRequest.from_dict(create_call_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



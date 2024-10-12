# GetCallResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**GetCallResponseLinks**](GetCallResponseLinks.md) |  | [optional] 
**conversation_uuid** | **str** | The unique identifier for the conversation this call leg is part of. | [optional] 
**direction** | [**Direction**](Direction.md) |  | [optional] 
**duration** | **str** | The time elapsed for the call to take place in seconds. This is only sent if &#x60;status&#x60; is &#x60;completed&#x60;. | [optional] 
**end_time** | **str** | The time the call started in the following format: &#x60;YYYY-MM-DD HH:MM:SS&#x60;. For xample, &#x60;2020-01-01 12:00:00&#x60;. This is only sent if &#x60;status&#x60; is &#x60;completed&#x60;. | [optional] 
**var_from** | [**ModelFrom**](ModelFrom.md) |  | [optional] 
**network** | **str** | The Mobile Country Code Mobile Network Code ([MCCMNC](https://en.wikipedia.org/wiki/Mobile_country_code)) for the carrier network used to make this call. This is only sent if &#x60;status&#x60; is &#x60;completed&#x60;. | [optional] 
**price** | **str** | The total price charged for this call. This is only sent if &#x60;status&#x60; is &#x60;completed&#x60;. | [optional] 
**rate** | **str** | The price per minute for this call. This is only sent if &#x60;status&#x60; is &#x60;completed&#x60;. | [optional] 
**start_time** | **str** | The time the call started in the following format: &#x60;YYYY-MM-DD HH:MM:SS&#x60;. For example, &#x60;2020-01-01 12:00:00&#x60;. This is only sent if &#x60;status&#x60; is &#x60;completed&#x60;. | [optional] 
**status** | **str** | The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects) | [optional] 
**to** | [**To**](To.md) |  | [optional] 
**uuid** | **str** | The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls | [optional] 

## Example

```python
from openapi_client.models.get_call_response import GetCallResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCallResponse from a JSON string
get_call_response_instance = GetCallResponse.from_json(json)
# print the JSON string representation of the object
print(GetCallResponse.to_json())

# convert the object into a dict
get_call_response_dict = get_call_response_instance.to_dict()
# create an instance of GetCallResponse from a dict
get_call_response_from_dict = GetCallResponse.from_dict(get_call_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



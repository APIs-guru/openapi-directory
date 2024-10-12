# CreateCallRequestBaseToInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dtmf_answer** | **str** | Provide [DTMF digits](https://developer.nexmo.com/voice/voice-api/guides/dtmf) to send when the call is answered | [optional] 
**number** | **str** | The phone number to connect to | 
**type** | **str** | The type of connection. Must be &#x60;vbc&#x60; | 
**uri** | **str** |  | [optional] 
**content_type** | **str** |  | 
**headers** | [**EndpointWebsocketHeaders**](EndpointWebsocketHeaders.md) |  | [optional] 
**extension** | **str** |  | 

## Example

```python
from openapi_client.models.create_call_request_base_to_inner import CreateCallRequestBaseToInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCallRequestBaseToInner from a JSON string
create_call_request_base_to_inner_instance = CreateCallRequestBaseToInner.from_json(json)
# print the JSON string representation of the object
print(CreateCallRequestBaseToInner.to_json())

# convert the object into a dict
create_call_request_base_to_inner_dict = create_call_request_base_to_inner_instance.to_dict()
# create an instance of CreateCallRequestBaseToInner from a dict
create_call_request_base_to_inner_from_dict = CreateCallRequestBaseToInner.from_dict(create_call_request_base_to_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



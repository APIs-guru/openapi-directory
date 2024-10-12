# EndpointPhoneTo

Connect to a Phone (PSTN) number

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dtmf_answer** | **str** | Provide [DTMF digits](https://developer.nexmo.com/voice/voice-api/guides/dtmf) to send when the call is answered | [optional] 
**number** | **str** | The phone number to connect to | 
**type** | **str** | The type of connection. Must be &#x60;phone&#x60; | 

## Example

```python
from openapi_client.models.endpoint_phone_to import EndpointPhoneTo

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPhoneTo from a JSON string
endpoint_phone_to_instance = EndpointPhoneTo.from_json(json)
# print the JSON string representation of the object
print(EndpointPhoneTo.to_json())

# convert the object into a dict
endpoint_phone_to_dict = endpoint_phone_to_instance.to_dict()
# create an instance of EndpointPhoneTo from a dict
endpoint_phone_to_from_dict = EndpointPhoneTo.from_dict(endpoint_phone_to_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



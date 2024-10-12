# OptoutMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incoming_optout_messages** | [**List[IncomingOptoutMessage]**](IncomingOptoutMessage.md) | An array of ***incomingOptoutMessage*** objects containing properties of each opt-out message received.  | [optional] 
**status_code** | **int** | The http status code returned - reflected in the body for convenience | [optional] 
**time_stamp** | **str** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS | [optional] 
**version** | **str** | The current version of the API of the endpoint that was called | [optional] 

## Example

```python
from openapi_client.models.optout_message_response import OptoutMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OptoutMessageResponse from a JSON string
optout_message_response_instance = OptoutMessageResponse.from_json(json)
# print the JSON string representation of the object
print(OptoutMessageResponse.to_json())

# convert the object into a dict
optout_message_response_dict = optout_message_response_instance.to_dict()
# create an instance of OptoutMessageResponse from a dict
optout_message_response_from_dict = OptoutMessageResponse.from_dict(optout_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# MessageStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_statuses** | [**List[MessageStatus]**](MessageStatus.md) | An array of ***messageStatus*** objects detailing the delivery status of each message  | [optional] 
**status_code** | **int** | The http status code returned - reflected in the body for convenience | [optional] 
**time_stamp** | **str** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS | [optional] 
**version** | **str** | The current version of the API of the endpoint that was called | [optional] 

## Example

```python
from openapi_client.models.message_status_response import MessageStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MessageStatusResponse from a JSON string
message_status_response_instance = MessageStatusResponse.from_json(json)
# print the JSON string representation of the object
print(MessageStatusResponse.to_json())

# convert the object into a dict
message_status_response_dict = message_status_response_instance.to_dict()
# create an instance of MessageStatusResponse from a dict
message_status_response_from_dict = MessageStatusResponse.from_dict(message_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



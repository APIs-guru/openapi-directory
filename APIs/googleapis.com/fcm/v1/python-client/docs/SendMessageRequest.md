# SendMessageRequest

Request to send a message to specified target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | [**Message**](Message.md) |  | [optional] 
**validate_only** | **bool** | Flag for testing the request without actually delivering the message. | [optional] 

## Example

```python
from openapi_client.models.send_message_request import SendMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessageRequest from a JSON string
send_message_request_instance = SendMessageRequest.from_json(json)
# print the JSON string representation of the object
print(SendMessageRequest.to_json())

# convert the object into a dict
send_message_request_dict = send_message_request_instance.to_dict()
# create an instance of SendMessageRequest from a dict
send_message_request_from_dict = SendMessageRequest.from_dict(send_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



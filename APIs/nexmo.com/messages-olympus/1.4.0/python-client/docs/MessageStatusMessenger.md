# MessageStatusMessenger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**error** | [**MessageStatusBaseError**](MessageStatusBaseError.md) |  | [optional] 
**var_from** | **str** | The ID of the message sender  | 
**message_uuid** | **str** | The UUID of the message | 
**status** | **str** |  | 
**timestamp** | **str** | The datetime of when the event occurred, in &#x60;ISO 8601&#x60; format. | 
**to** | **str** | The ID of the message recipient  | 
**usage** | [**MessageStatusBaseUsage**](MessageStatusBaseUsage.md) |  | [optional] 
**channel** | **str** | The channel sending to. | 

## Example

```python
from openapi_client.models.message_status_messenger import MessageStatusMessenger

# TODO update the JSON string below
json = "{}"
# create an instance of MessageStatusMessenger from a JSON string
message_status_messenger_instance = MessageStatusMessenger.from_json(json)
# print the JSON string representation of the object
print(MessageStatusMessenger.to_json())

# convert the object into a dict
message_status_messenger_dict = message_status_messenger_instance.to_dict()
# create an instance of MessageStatusMessenger from a dict
message_status_messenger_from_dict = MessageStatusMessenger.from_dict(message_status_messenger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



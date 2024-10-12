# MessageStatus

The callbacks for the message status are the same as defined in the Messaging API. The only difference will be that dispatch_uuid and link will be appended.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**MessageStatusLinks**](MessageStatusLinks.md) |  | [optional] 
**error** | [**MessageStatusError**](MessageStatusError.md) |  | [optional] 
**var_from** | [**FromProperty**](FromProperty.md) |  | [optional] 
**message_uuid** | **str** |  | [optional] 
**status** | **str** | The status of the message. | [optional] 
**timestamp** | **str** | The datetime of when the event occurred. | [optional] 
**to** | [**ToProperty**](ToProperty.md) |  | [optional] 
**usage** | [**MessageStatusUsage**](MessageStatusUsage.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_status import MessageStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MessageStatus from a JSON string
message_status_instance = MessageStatus.from_json(json)
# print the JSON string representation of the object
print(MessageStatus.to_json())

# convert the object into a dict
message_status_dict = message_status_instance.to_dict()
# create an instance of MessageStatus from a dict
message_status_from_dict = MessageStatus.from_dict(message_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



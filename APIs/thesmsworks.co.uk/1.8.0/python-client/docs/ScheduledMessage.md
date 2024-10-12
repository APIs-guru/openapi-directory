# ScheduledMessage

the scheduled message content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Message to be sent to the recipient | [optional] 
**destination** | **str** | For single scheduled messages, the mobile number of the recipient | [optional] 
**destinations** | **List[str]** | For batch messages, the mobile numbers of each of the recipients | [optional] 
**schedule** | **str** | Date-time at which to send the batch. This is only used by the batch/schedule service. | [optional] 
**sender** | **str** | The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID&#39;s. No spaces or special characters. | [optional] 

## Example

```python
from openapi_client.models.scheduled_message import ScheduledMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledMessage from a JSON string
scheduled_message_instance = ScheduledMessage.from_json(json)
# print the JSON string representation of the object
print(ScheduledMessage.to_json())

# convert the object into a dict
scheduled_message_dict = scheduled_message_instance.to_dict()
# create an instance of ScheduledMessage from a dict
scheduled_message_from_dict = ScheduledMessage.from_dict(scheduled_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



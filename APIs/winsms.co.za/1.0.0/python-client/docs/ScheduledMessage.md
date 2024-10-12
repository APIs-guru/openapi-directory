# ScheduledMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_message_id** | **int** | The WinSMS API Message Id identifying the SMS message. | [optional] 
**credit_cost** | **float** | The number of credits deducted from your account for the SMS to this recipient.  This is the number of credits that will be refunded if you delete this scheduled message.  | [optional] 
**mobile_number** | **str** | The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format | [optional] 
**scheduled_send_time** | **str** | The date and time the message is scheduled to be delivered to the recipient, in the format YYYYMMDDHHmm. | [optional] 
**submit_time** | **str** | The date and time the message was originally submitted for scheduled delivery, in the format YYYYMMDDHHmm. | [optional] 

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



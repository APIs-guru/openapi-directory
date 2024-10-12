# MessageStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_message_id** | **int** | The WinSMS API Message Id identifying the SMS message. | [optional] 
**credit_cost** | **float** | The number of credits deducted from your account for the SMS to this recipient.   If delivery to the recipient is unsuccessful, under certain conditions, this may be 0.  | [optional] 
**mobile_number** | **str** | The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format | [optional] 
**status_delivered** | **bool** | A boolean value indicating whether an SMS message was successfully delivered to the recipient&#39;s mobile number | [optional] 
**status_error_code** | **str** | If the SMS message was successfully delivered, this value will be blank. If the ***statusDelivered*** value is false, this will contain a string indicating the current status of the SMS message. Possible values- | Value | Description | Type | |-------|-------------|------| | SENT| The message has been sent to the recipient, but no delivery report has been received | Temporary | | NOTFOUND | Either an incorrect MessageID was sent in the request, or the message was sent more than 90 days previously | Permanent | | INQUEUE | Message is queued for sending | Temporary | | SENDINGFAILED | The message was not transmitted, due to e.g. an invalid destination number or insufficient credits | Permanent | | FAILED | The message was sent but could not be delivered to the recipient due to e.g. no such subscriber, subscriber&#39;s phone offline | Permanent |  | [optional] 
**status_time** | **str** | The date and time of the last status update for this message, in the format YYYYMMDDHHmm.  If the message was delivered (**statusDelivered &#x3D; true**) then this is a final status time. If the message is still awaiting delivery, this time might change when updates are received.  | [optional] 

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



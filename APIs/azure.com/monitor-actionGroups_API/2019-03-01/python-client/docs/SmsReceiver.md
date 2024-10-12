# SmsReceiver

An SMS receiver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | The country code of the SMS receiver. | 
**name** | **str** | The name of the SMS receiver. Names must be unique across all receivers within an action group. | 
**phone_number** | **str** | The phone number of the SMS receiver. | 
**status** | [**ReceiverStatus**](ReceiverStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.sms_receiver import SmsReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of SmsReceiver from a JSON string
sms_receiver_instance = SmsReceiver.from_json(json)
# print the JSON string representation of the object
print(SmsReceiver.to_json())

# convert the object into a dict
sms_receiver_dict = sms_receiver_instance.to_dict()
# create an instance of SmsReceiver from a dict
sms_receiver_from_dict = SmsReceiver.from_dict(sms_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



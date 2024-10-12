# Message


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_ref** | **str** | **Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com) | [optional] 
**client_ref** | **str** | If a &#x60;client-ref&#x60; was included when sending the SMS, this field will be included and hold the value that was sent. | [optional] 
**message_id** | **str** | The ID of the message | [optional] 
**message_price** | **str** | The estimated cost of the message | [optional] 
**network** | **str** | The estimated ID of the network of the recipient | [optional] 
**remaining_balance** | **str** | Your estimated remaining balance | [optional] 
**status** | **str** | The status of the message. See [Troubleshooting Failed SMS](/messaging/sms/guides/troubleshooting-sms). | [optional] 
**to** | **str** | The number the message was sent to. Numbers are specified in E.164 format. | [optional] 

## Example

```python
from openapi_client.models.message import Message

# TODO update the JSON string below
json = "{}"
# create an instance of Message from a JSON string
message_instance = Message.from_json(json)
# print the JSON string representation of the object
print(Message.to_json())

# convert the object into a dict
message_dict = message_instance.to_dict()
# create an instance of Message from a dict
message_from_dict = Message.from_dict(message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



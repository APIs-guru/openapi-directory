# Message


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The message text. | 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**direction** | **str** | The direction of the message. | [optional] [readonly] 
**error** | [**Error**](Error.md) |  | [optional] 
**var_from** | **str** | The phone number that initiated the message. | 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**messaging_service_id** | **str** | The ID of the Messaging Service used with the message. In case of Plivo this links to the Powerpack ID. | [optional] 
**number_of_media_files** | **int** | The number of media files associated with the message. | [optional] [readonly] 
**number_of_units** | **int** | The number of units that make up the complete message. Messages can be split up due to the constraints of the message size. | [optional] [readonly] 
**price** | [**Price**](Price.md) |  | [optional] 
**reference** | **str** | A client reference. | [optional] 
**scheduled_at** | **datetime** | The scheduled date and time of the message. | [optional] 
**sent_at** | **datetime** | The date and time that the message was sent | [optional] [readonly] 
**status** | **str** | Status of the delivery of the message. | [optional] [readonly] 
**subject** | **str** |  | [optional] 
**to** | **str** | The phone number that received the message. | 
**type** | **str** | Set to sms for SMS messages and mms for MMS messages. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 
**webhook_url** | **str** | Define a webhook to receive delivery notifications. | [optional] 

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



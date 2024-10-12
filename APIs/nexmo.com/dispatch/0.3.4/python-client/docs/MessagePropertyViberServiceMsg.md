# MessagePropertyViberServiceMsg


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative and a targeted message - not promotional. By default Vonage sends the &#x60;transaction&#x60; category to Viber Business Messages. | [optional] 
**ttl** | **int** | Only valid for Viber Business Messages. Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message. | [optional] 

## Example

```python
from openapi_client.models.message_property_viber_service_msg import MessagePropertyViberServiceMsg

# TODO update the JSON string below
json = "{}"
# create an instance of MessagePropertyViberServiceMsg from a JSON string
message_property_viber_service_msg_instance = MessagePropertyViberServiceMsg.from_json(json)
# print the JSON string representation of the object
print(MessagePropertyViberServiceMsg.to_json())

# convert the object into a dict
message_property_viber_service_msg_dict = message_property_viber_service_msg_instance.to_dict()
# create an instance of MessagePropertyViberServiceMsg from a dict
message_property_viber_service_msg_from_dict = MessagePropertyViberServiceMsg.from_dict(message_property_viber_service_msg_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# MessagePropertyMessenger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy]( https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our &#x60;category&#x60; to their &#x60;messaging_type&#x60;. If &#x60;message_tag&#x60; is used, then an additional &#x60;tag&#x60; for that type is mandatory. By default Vonage sends the &#x60;response&#x60; category to Facebook Messenger. | [optional] 
**tag** | **str** | ‘A full list of the possible tags is available on [developers.facebook.com](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)&#39; | [optional] 

## Example

```python
from openapi_client.models.message_property_messenger import MessagePropertyMessenger

# TODO update the JSON string below
json = "{}"
# create an instance of MessagePropertyMessenger from a JSON string
message_property_messenger_instance = MessagePropertyMessenger.from_json(json)
# print the JSON string representation of the object
print(MessagePropertyMessenger.to_json())

# convert the object into a dict
message_property_messenger_dict = message_property_messenger_instance.to_dict()
# create an instance of MessagePropertyMessenger from a dict
message_property_messenger_from_dict = MessagePropertyMessenger.from_dict(message_property_messenger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ChannelOptionsMessengerMessenger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our &#x60;category&#x60; to their &#x60;messaging_type&#x60;. If &#x60;message_tag&#x60; is used, then an additional &#x60;tag&#x60; for that type is mandatory. By default Vonage sends the &#x60;response&#x60; category to Facebook Messenger. | [optional] 
**tag** | **str** | A tag describing the type and relevance of the 1:1 communication between your app and the end user. A full list of available tags is available [here](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags) | [optional] 

## Example

```python
from openapi_client.models.channel_options_messenger_messenger import ChannelOptionsMessengerMessenger

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelOptionsMessengerMessenger from a JSON string
channel_options_messenger_messenger_instance = ChannelOptionsMessengerMessenger.from_json(json)
# print the JSON string representation of the object
print(ChannelOptionsMessengerMessenger.to_json())

# convert the object into a dict
channel_options_messenger_messenger_dict = channel_options_messenger_messenger_instance.to_dict()
# create an instance of ChannelOptionsMessengerMessenger from a dict
channel_options_messenger_messenger_from_dict = ChannelOptionsMessengerMessenger.from_dict(channel_options_messenger_messenger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



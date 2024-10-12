# DeprecatedEvent

A Google Chat app interaction event. To learn about interaction events, see [Receive and respond to interactions with your Google Chat app](https://developers.google.com/chat/api/guides/message-formats). To learn about event types and for example event payloads, see [Types of Google Chat app interaction events](https://developers.google.com/chat/api/guides/message-formats/events).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**FormAction**](FormAction.md) |  | [optional] 
**common** | [**CommonEventObject**](CommonEventObject.md) |  | [optional] 
**config_complete_redirect_url** | **str** | The URL the Chat app should redirect the user to after they have completed an authorization or configuration flow outside of Google Chat. For more information, see [Connect a Chat app with other services &amp; tools](https://developers.google.com/chat/how-tos/connect-web-services-tools). | [optional] 
**dialog_event_type** | **str** | The type of [dialog](https://developers.google.com/chat/how-tos/dialogs) interaction event received. | [optional] 
**event_time** | **str** | The timestamp indicating when the interaction event occurred. | [optional] 
**is_dialog_event** | **bool** | For &#x60;CARD_CLICKED&#x60; interaction events, whether the user interacted with a [dialog](https://developers.google.com/chat/how-tos/dialogs). | [optional] 
**message** | [**Message**](Message.md) |  | [optional] 
**space** | [**Space**](Space.md) |  | [optional] 
**thread_key** | **str** | The Chat app-defined key for the thread related to the interaction event. See [&#x60;spaces.messages.thread.threadKey&#x60;](/chat/api/reference/rest/v1/spaces.messages#Thread.FIELDS.thread_key) for more information. | [optional] 
**token** | **str** | A secret value that legacy Chat apps can use to verify if a request is from Google. Google randomly generates the token, and its value remains static. You can obtain, revoke, or regenerate the token from the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat) in the Google Cloud Console. Modern Chat apps don&#39;t use this field. It is absent from API responses and the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat). | [optional] 
**type** | **str** | The type of interaction event. For details, see [Types of Google Chat app interaction events](https://developers.google.com/chat/api/guides/message-formats/events). | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.deprecated_event import DeprecatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of DeprecatedEvent from a JSON string
deprecated_event_instance = DeprecatedEvent.from_json(json)
# print the JSON string representation of the object
print(DeprecatedEvent.to_json())

# convert the object into a dict
deprecated_event_dict = deprecated_event_instance.to_dict()
# create an instance of DeprecatedEvent from a dict
deprecated_event_from_dict = DeprecatedEvent.from_dict(deprecated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



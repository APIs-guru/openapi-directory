# Message

Message to send by Firebase Cloud Messaging Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android** | [**AndroidConfig**](AndroidConfig.md) |  | [optional] 
**apns** | [**ApnsConfig**](ApnsConfig.md) |  | [optional] 
**condition** | **str** | Condition to send a message to, e.g. \&quot;&#39;foo&#39; in topics &amp;&amp; &#39;bar&#39; in topics\&quot;. | [optional] 
**data** | **Dict[str, str]** | Input only. Arbitrary key/value payload, which must be UTF-8 encoded. The key should not be a reserved word (\&quot;from\&quot;, \&quot;message_type\&quot;, or any word starting with \&quot;google\&quot; or \&quot;gcm\&quot;). When sending payloads containing only data fields to iOS devices, only normal priority (&#x60;\&quot;apns-priority\&quot;: \&quot;5\&quot;&#x60;) is allowed in [&#x60;ApnsConfig&#x60;](/docs/reference/fcm/rest/v1/projects.messages#apnsconfig). | [optional] 
**fcm_options** | [**FcmOptions**](FcmOptions.md) |  | [optional] 
**name** | **str** | Output Only. The identifier of the message sent, in the format of &#x60;projects/*/messages/{message_id}&#x60;. | [optional] 
**notification** | [**Notification**](Notification.md) |  | [optional] 
**token** | **str** | Registration token to send a message to. | [optional] 
**topic** | **str** | Topic name to send a message to, e.g. \&quot;weather\&quot;. Note: \&quot;/topics/\&quot; prefix should not be provided. | [optional] 
**webpush** | [**WebpushConfig**](WebpushConfig.md) |  | [optional] 

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



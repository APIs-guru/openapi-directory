# Message

An email message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**history_id** | **str** | The ID of the last history record that modified this message. | [optional] 
**id** | **str** | The immutable ID of the message. | [optional] 
**internal_date** | **str** | The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the &#x60;Date&#x60; header. However, for API-migrated mail, it can be configured by client to be based on the &#x60;Date&#x60; header. | [optional] 
**label_ids** | **List[str]** | List of IDs of labels applied to this message. | [optional] 
**payload** | [**MessagePart**](MessagePart.md) |  | [optional] 
**raw** | **bytearray** | The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in &#x60;messages.get&#x60; and &#x60;drafts.get&#x60; responses when the &#x60;format&#x3D;RAW&#x60; parameter is supplied. | [optional] 
**size_estimate** | **int** | Estimated size in bytes of the message. | [optional] 
**snippet** | **str** | A short part of the message text. | [optional] 
**thread_id** | **str** | The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: 1. The requested &#x60;threadId&#x60; must be specified on the &#x60;Message&#x60; or &#x60;Draft.Message&#x60; you supply with your request. 2. The &#x60;References&#x60; and &#x60;In-Reply-To&#x60; headers must be set in compliance with the [RFC 2822](https://tools.ietf.org/html/rfc2822) standard. 3. The &#x60;Subject&#x60; headers must match.  | [optional] 

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



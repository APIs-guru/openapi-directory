# SendContactPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_sending_without_reply** | **bool** | Pass *True*, if the message should be sent even if the specified replied-to message is not found | [optional] 
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 
**disable_notification** | **bool** | Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. | [optional] 
**first_name** | **str** | Contact&#39;s first name | 
**last_name** | **str** | Contact&#39;s last name | [optional] 
**phone_number** | **str** | Contact&#39;s phone number | 
**reply_markup** | [**SendContactPostRequestReplyMarkup**](SendContactPostRequestReplyMarkup.md) |  | [optional] 
**reply_to_message_id** | **int** | If the message is a reply, ID of the original message | [optional] 
**vcard** | **str** | Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes | [optional] 

## Example

```python
from openapi_client.models.send_contact_post_request import SendContactPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendContactPostRequest from a JSON string
send_contact_post_request_instance = SendContactPostRequest.from_json(json)
# print the JSON string representation of the object
print(SendContactPostRequest.to_json())

# convert the object into a dict
send_contact_post_request_dict = send_contact_post_request_instance.to_dict()
# create an instance of SendContactPostRequest from a dict
send_contact_post_request_from_dict = SendContactPostRequest.from_dict(send_contact_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# InlineQueryResultContact

Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use *input\\_message\\_content* to send a message with the specified content instead of the contact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | Contact&#39;s first name | 
**id** | **str** | Unique identifier for this result, 1-64 Bytes | 
**input_message_content** | [**InputMessageContent**](InputMessageContent.md) |  | [optional] 
**last_name** | **str** | *Optional*. Contact&#39;s last name | [optional] 
**phone_number** | **str** | Contact&#39;s phone number | 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**thumb_height** | **int** | *Optional*. Thumbnail height | [optional] 
**thumb_url** | **str** | *Optional*. Url of the thumbnail for the result | [optional] 
**thumb_width** | **int** | *Optional*. Thumbnail width | [optional] 
**type** | **str** | Type of the result, must be *contact* | 
**vcard** | **str** | *Optional*. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes | [optional] 

## Example

```python
from openapi_client.models.inline_query_result_contact import InlineQueryResultContact

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQueryResultContact from a JSON string
inline_query_result_contact_instance = InlineQueryResultContact.from_json(json)
# print the JSON string representation of the object
print(InlineQueryResultContact.to_json())

# convert the object into a dict
inline_query_result_contact_dict = inline_query_result_contact_instance.to_dict()
# create an instance of InlineQueryResultContact from a dict
inline_query_result_contact_from_dict = InlineQueryResultContact.from_dict(inline_query_result_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



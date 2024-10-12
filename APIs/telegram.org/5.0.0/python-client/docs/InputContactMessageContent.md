# InputContactMessageContent

Represents the [content](https://core.telegram.org/bots/api/#inputmessagecontent) of a contact message to be sent as the result of an inline query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | Contact&#39;s first name | 
**last_name** | **str** | *Optional*. Contact&#39;s last name | [optional] 
**phone_number** | **str** | Contact&#39;s phone number | 
**vcard** | **str** | *Optional*. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes | [optional] 

## Example

```python
from openapi_client.models.input_contact_message_content import InputContactMessageContent

# TODO update the JSON string below
json = "{}"
# create an instance of InputContactMessageContent from a JSON string
input_contact_message_content_instance = InputContactMessageContent.from_json(json)
# print the JSON string representation of the object
print(InputContactMessageContent.to_json())

# convert the object into a dict
input_contact_message_content_dict = input_contact_message_content_instance.to_dict()
# create an instance of InputContactMessageContent from a dict
input_contact_message_content_from_dict = InputContactMessageContent.from_dict(input_contact_message_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



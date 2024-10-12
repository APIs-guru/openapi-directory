# SendInvoicePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_sending_without_reply** | **bool** | Pass *True*, if the message should be sent even if the specified replied-to message is not found | [optional] 
**chat_id** | **int** | Unique identifier for the target private chat | 
**currency** | **str** | Three-letter ISO 4217 currency code, see [more on currencies](/bots/payments#supported-currencies) | 
**description** | **str** | Product description, 1-255 characters | 
**disable_notification** | **bool** | Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. | [optional] 
**is_flexible** | **bool** | Pass *True*, if the final price depends on the shipping method | [optional] 
**need_email** | **bool** | Pass *True*, if you require the user&#39;s email address to complete the order | [optional] 
**need_name** | **bool** | Pass *True*, if you require the user&#39;s full name to complete the order | [optional] 
**need_phone_number** | **bool** | Pass *True*, if you require the user&#39;s phone number to complete the order | [optional] 
**need_shipping_address** | **bool** | Pass *True*, if you require the user&#39;s shipping address to complete the order | [optional] 
**payload** | **str** | Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. | 
**photo_height** | **int** | Photo height | [optional] 
**photo_size** | **int** | Photo size | [optional] 
**photo_url** | **str** | URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. | [optional] 
**photo_width** | **int** | Photo width | [optional] 
**prices** | [**List[LabeledPrice]**](LabeledPrice.md) | Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) | 
**provider_data** | **str** | A JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. | [optional] 
**provider_token** | **str** | Payments provider token, obtained via [Botfather](https://t.me/botfather) | 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**reply_to_message_id** | **int** | If the message is a reply, ID of the original message | [optional] 
**send_email_to_provider** | **bool** | Pass *True*, if user&#39;s email address should be sent to provider | [optional] 
**send_phone_number_to_provider** | **bool** | Pass *True*, if user&#39;s phone number should be sent to provider | [optional] 
**start_parameter** | **str** | Unique deep-linking parameter that can be used to generate this invoice when used as a start parameter | 
**title** | **str** | Product name, 1-32 characters | 

## Example

```python
from openapi_client.models.send_invoice_post_request import SendInvoicePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendInvoicePostRequest from a JSON string
send_invoice_post_request_instance = SendInvoicePostRequest.from_json(json)
# print the JSON string representation of the object
print(SendInvoicePostRequest.to_json())

# convert the object into a dict
send_invoice_post_request_dict = send_invoice_post_request_instance.to_dict()
# create an instance of SendInvoicePostRequest from a dict
send_invoice_post_request_from_dict = SendInvoicePostRequest.from_dict(send_invoice_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SendMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**message_type** | **str** | The type of message to send. You must provide &#x60;file&#x60; in this field | 
**text** | **object** | The text of message to send; limited to 1000 characters, including unicode.  | 
**channel** | **str** | The channel to send to. You must provide &#x60;viber_service&#x60; in this field | 
**var_from** | **str** | The ID of the message sender  | 
**to** | **str** | The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.  | 
**image** | [**ViberOneOf1AllOfImage**](ViberOneOf1AllOfImage.md) |  | 
**vcard** | [**MMSOneOf1AllOfVcard**](MMSOneOf1AllOfVcard.md) |  | 
**audio** | [**MessengerOneOf2AllOfAudio**](MessengerOneOf2AllOfAudio.md) |  | 
**video** | [**ViberOneOf2AllOfVideo**](ViberOneOf2AllOfVideo.md) |  | 
**location** | [**Location1Location**](Location1Location.md) |  | 
**file** | [**ViberOneOf3AllOfFile**](ViberOneOf3AllOfFile.md) |  | 
**template** | [**Template1Template**](Template1Template.md) |  | 
**whatsapp** | [**WhatsAppOneOf6AllOfWhatsapp**](WhatsAppOneOf6AllOfWhatsapp.md) |  | 
**custom** | **Dict[str, object]** | A custom payload, which is passed directly to WhatsApp for certain features such as templates and interactive messages. The schema of a custom object can vary widely. [Read more about Custom Objects](https://developer.vonage.com/messages/concepts/custom-objects). | [optional] 
**messenger** | [**ChannelOptionsMessengerMessenger**](ChannelOptionsMessengerMessenger.md) |  | [optional] 
**viber_service** | [**ChannelOptionsViberViberService**](ChannelOptionsViberViberService.md) |  | [optional] 

## Example

```python
from openapi_client.models.send_message_request import SendMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessageRequest from a JSON string
send_message_request_instance = SendMessageRequest.from_json(json)
# print the JSON string representation of the object
print(SendMessageRequest.to_json())

# convert the object into a dict
send_message_request_dict = send_message_request_instance.to_dict()
# create an instance of SendMessageRequest from a dict
send_message_request_from_dict = SendMessageRequest.from_dict(send_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



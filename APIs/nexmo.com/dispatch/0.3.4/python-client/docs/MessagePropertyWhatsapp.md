# MessagePropertyWhatsapp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | We are using the industry standard, BCP 47, for locales. So in your API call to the /messages API you will need to put “en-GB” and this will refer to the “en_GB” template for WhatsApp. A full list of the possible locales is available on [developers.facebook.com](https://developers.facebook.com/docs/whatsapp/message-templates/creation#translations). | [optional] 
**policy** | **str** | Please note that WhatsApp will deprecate &#x60;fallback&#x60; policy in January 2020. There are two policies that you can specify when sending a Message Template: &#x60;deterministic&#x60; and &#x60;fallback&#x60;. &#x60;deterministic&#x60; — Deliver the Message Template in exactly the language and locale asked for. &#x60;fallback&#x60; — Deliver the Message Template in the language that matches users language/locale setting on device. If one can not be found, deliver using the specified fallback language. | [optional] 

## Example

```python
from openapi_client.models.message_property_whatsapp import MessagePropertyWhatsapp

# TODO update the JSON string below
json = "{}"
# create an instance of MessagePropertyWhatsapp from a JSON string
message_property_whatsapp_instance = MessagePropertyWhatsapp.from_json(json)
# print the JSON string representation of the object
print(MessagePropertyWhatsapp.to_json())

# convert the object into a dict
message_property_whatsapp_dict = message_property_whatsapp_instance.to_dict()
# create an instance of MessagePropertyWhatsapp from a dict
message_property_whatsapp_from_dict = MessagePropertyWhatsapp.from_dict(message_property_whatsapp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



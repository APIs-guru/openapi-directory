# WhatsAppOneOf6AllOfWhatsapp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | The [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) language of the template. See [the WhatsApp documentation](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages-) for supported languages. | 
**policy** | **str** | Policy for resolving what language template to use. As of right now the only valid choice is &#x60;deterministic&#x60;. | [optional] 

## Example

```python
from openapi_client.models.whats_app_one_of6_all_of_whatsapp import WhatsAppOneOf6AllOfWhatsapp

# TODO update the JSON string below
json = "{}"
# create an instance of WhatsAppOneOf6AllOfWhatsapp from a JSON string
whats_app_one_of6_all_of_whatsapp_instance = WhatsAppOneOf6AllOfWhatsapp.from_json(json)
# print the JSON string representation of the object
print(WhatsAppOneOf6AllOfWhatsapp.to_json())

# convert the object into a dict
whats_app_one_of6_all_of_whatsapp_dict = whats_app_one_of6_all_of_whatsapp_instance.to_dict()
# create an instance of WhatsAppOneOf6AllOfWhatsapp from a dict
whats_app_one_of6_all_of_whatsapp_from_dict = WhatsAppOneOf6AllOfWhatsapp.from_dict(whats_app_one_of6_all_of_whatsapp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



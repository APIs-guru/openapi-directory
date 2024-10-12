# WhatsApp1Whatsapp

An object contining meta-data related to the WhatsApp message that triggered this callback. Only present for callbacks with a `status` of `delivered`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation** | [**WhatsApp1WhatsappConversation**](WhatsApp1WhatsappConversation.md) |  | [optional] 

## Example

```python
from openapi_client.models.whats_app1_whatsapp import WhatsApp1Whatsapp

# TODO update the JSON string below
json = "{}"
# create an instance of WhatsApp1Whatsapp from a JSON string
whats_app1_whatsapp_instance = WhatsApp1Whatsapp.from_json(json)
# print the JSON string representation of the object
print(WhatsApp1Whatsapp.to_json())

# convert the object into a dict
whats_app1_whatsapp_dict = whats_app1_whatsapp_instance.to_dict()
# create an instance of WhatsApp1Whatsapp from a dict
whats_app1_whatsapp_from_dict = WhatsApp1Whatsapp.from_dict(whats_app1_whatsapp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



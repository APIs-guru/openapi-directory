# AS2MdnSettings

The AS2 agreement mdn settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disposition_notification_to** | **str** | The disposition notification to header value. | [optional] 
**mdn_text** | **str** | The MDN text. | [optional] 
**mic_hashing_algorithm** | [**HashingAlgorithm**](HashingAlgorithm.md) |  | 
**need_mdn** | **bool** | The value indicating whether to send or request a MDN. | 
**receipt_delivery_url** | **str** | The receipt delivery URL. | [optional] 
**send_inbound_mdnto_message_box** | **bool** | The value indicating whether to send inbound MDN to message box. | 
**send_mdn_asynchronously** | **bool** | The value indicating whether to send the asynchronous MDN. | 
**sign_mdn** | **bool** | The value indicating whether the MDN needs to be signed or not. | 
**sign_outbound_mdnif_optional** | **bool** | The value indicating whether to sign the outbound MDN if optional. | 

## Example

```python
from openapi_client.models.as2_mdn_settings import AS2MdnSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AS2MdnSettings from a JSON string
as2_mdn_settings_instance = AS2MdnSettings.from_json(json)
# print the JSON string representation of the object
print(AS2MdnSettings.to_json())

# convert the object into a dict
as2_mdn_settings_dict = as2_mdn_settings_instance.to_dict()
# create an instance of AS2MdnSettings from a dict
as2_mdn_settings_from_dict = AS2MdnSettings.from_dict(as2_mdn_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



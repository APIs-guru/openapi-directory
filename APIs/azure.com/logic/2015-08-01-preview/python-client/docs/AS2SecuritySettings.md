# AS2SecuritySettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_nrr_for_inbound_decoded_messages** | **bool** | The value indicating whether to enable NRR for inbound decoded messages. | [optional] 
**enable_nrr_for_inbound_encoded_messages** | **bool** | The value indicating whether to enable NRR for inbound encoded messages. | [optional] 
**enable_nrr_for_inbound_mdn** | **bool** | The value indicating whether to enable NRR for inbound MDN. | [optional] 
**enable_nrr_for_outbound_decoded_messages** | **bool** | The value indicating whether to enable NRR for outbound decoded messages. | [optional] 
**enable_nrr_for_outbound_encoded_messages** | **bool** | The value indicating whether to enable NRR for outbound encoded messages. | [optional] 
**enable_nrr_for_outbound_mdn** | **bool** | The value indicating whether to enable NRR for outbound MDN. | [optional] 
**encryption_certificate_name** | **str** | The name of the encryption certificate. | [optional] 
**override_group_signing_certificate** | **bool** | The value indicating whether to send or request a MDN. | [optional] 
**signing_certificate_name** | **str** | The name of the signing certificate. | [optional] 

## Example

```python
from openapi_client.models.as2_security_settings import AS2SecuritySettings

# TODO update the JSON string below
json = "{}"
# create an instance of AS2SecuritySettings from a JSON string
as2_security_settings_instance = AS2SecuritySettings.from_json(json)
# print the JSON string representation of the object
print(AS2SecuritySettings.to_json())

# convert the object into a dict
as2_security_settings_dict = as2_security_settings_instance.to_dict()
# create an instance of AS2SecuritySettings from a dict
as2_security_settings_from_dict = AS2SecuritySettings.from_dict(as2_security_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



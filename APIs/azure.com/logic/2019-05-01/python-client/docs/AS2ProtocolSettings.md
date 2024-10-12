# AS2ProtocolSettings

The AS2 agreement protocol settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgement_connection_settings** | [**AS2AcknowledgementConnectionSettings**](AS2AcknowledgementConnectionSettings.md) |  | 
**envelope_settings** | [**AS2EnvelopeSettings**](AS2EnvelopeSettings.md) |  | 
**error_settings** | [**AS2ErrorSettings**](AS2ErrorSettings.md) |  | 
**mdn_settings** | [**AS2MdnSettings**](AS2MdnSettings.md) |  | 
**message_connection_settings** | [**AS2MessageConnectionSettings**](AS2MessageConnectionSettings.md) |  | 
**security_settings** | [**AS2SecuritySettings**](AS2SecuritySettings.md) |  | 
**validation_settings** | [**AS2ValidationSettings**](AS2ValidationSettings.md) |  | 

## Example

```python
from openapi_client.models.as2_protocol_settings import AS2ProtocolSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AS2ProtocolSettings from a JSON string
as2_protocol_settings_instance = AS2ProtocolSettings.from_json(json)
# print the JSON string representation of the object
print(AS2ProtocolSettings.to_json())

# convert the object into a dict
as2_protocol_settings_dict = as2_protocol_settings_instance.to_dict()
# create an instance of AS2ProtocolSettings from a dict
as2_protocol_settings_from_dict = AS2ProtocolSettings.from_dict(as2_protocol_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



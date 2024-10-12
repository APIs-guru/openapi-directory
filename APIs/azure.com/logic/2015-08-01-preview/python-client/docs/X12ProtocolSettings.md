# X12ProtocolSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgement_settings** | [**X12AcknowledgementSettings**](X12AcknowledgementSettings.md) |  | [optional] 
**envelope_overrides** | [**List[X12EnvelopeOverride]**](X12EnvelopeOverride.md) | The X12 envelope override settings. | [optional] 
**envelope_settings** | [**X12EnvelopeSettings**](X12EnvelopeSettings.md) |  | [optional] 
**framing_settings** | [**X12FramingSettings**](X12FramingSettings.md) |  | [optional] 
**message_filter** | [**X12MessageFilter**](X12MessageFilter.md) |  | [optional] 
**message_filter_list** | [**List[X12MessageIdentifier]**](X12MessageIdentifier.md) | The X12 message filter list. | [optional] 
**processing_settings** | [**X12ProcessingSettings**](X12ProcessingSettings.md) |  | [optional] 
**schema_references** | [**List[X12SchemaReference]**](X12SchemaReference.md) | The X12 schema references. | [optional] 
**security_settings** | [**X12SecuritySettings**](X12SecuritySettings.md) |  | [optional] 
**validation_overrides** | [**List[X12ValidationOverride]**](X12ValidationOverride.md) | The X12 validation override settings. | [optional] 
**validation_settings** | [**X12ValidationSettings**](X12ValidationSettings.md) |  | [optional] 
**x12_delimiter_overrides** | [**List[X12DelimiterOverrides]**](X12DelimiterOverrides.md) | The X12 delimiter override settings. | [optional] 

## Example

```python
from openapi_client.models.x12_protocol_settings import X12ProtocolSettings

# TODO update the JSON string below
json = "{}"
# create an instance of X12ProtocolSettings from a JSON string
x12_protocol_settings_instance = X12ProtocolSettings.from_json(json)
# print the JSON string representation of the object
print(X12ProtocolSettings.to_json())

# convert the object into a dict
x12_protocol_settings_dict = x12_protocol_settings_instance.to_dict()
# create an instance of X12ProtocolSettings from a dict
x12_protocol_settings_from_dict = X12ProtocolSettings.from_dict(x12_protocol_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



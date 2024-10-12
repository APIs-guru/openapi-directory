# EdifactProtocolSettings

The Edifact agreement protocol settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgement_settings** | [**EdifactAcknowledgementSettings**](EdifactAcknowledgementSettings.md) |  | 
**edifact_delimiter_overrides** | [**List[EdifactDelimiterOverride]**](EdifactDelimiterOverride.md) | The EDIFACT delimiter override settings. | [optional] 
**envelope_overrides** | [**List[EdifactEnvelopeOverride]**](EdifactEnvelopeOverride.md) | The EDIFACT envelope override settings. | [optional] 
**envelope_settings** | [**EdifactEnvelopeSettings**](EdifactEnvelopeSettings.md) |  | 
**framing_settings** | [**EdifactFramingSettings**](EdifactFramingSettings.md) |  | 
**message_filter** | [**EdifactMessageFilter**](EdifactMessageFilter.md) |  | 
**message_filter_list** | [**List[EdifactMessageIdentifier]**](EdifactMessageIdentifier.md) | The EDIFACT message filter list. | [optional] 
**processing_settings** | [**EdifactProcessingSettings**](EdifactProcessingSettings.md) |  | 
**schema_references** | [**List[EdifactSchemaReference]**](EdifactSchemaReference.md) | The EDIFACT schema references. | 
**validation_overrides** | [**List[EdifactValidationOverride]**](EdifactValidationOverride.md) | The EDIFACT validation override settings. | [optional] 
**validation_settings** | [**EdifactValidationSettings**](EdifactValidationSettings.md) |  | 

## Example

```python
from openapi_client.models.edifact_protocol_settings import EdifactProtocolSettings

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactProtocolSettings from a JSON string
edifact_protocol_settings_instance = EdifactProtocolSettings.from_json(json)
# print the JSON string representation of the object
print(EdifactProtocolSettings.to_json())

# convert the object into a dict
edifact_protocol_settings_dict = edifact_protocol_settings_instance.to_dict()
# create an instance of EdifactProtocolSettings from a dict
edifact_protocol_settings_from_dict = EdifactProtocolSettings.from_dict(edifact_protocol_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



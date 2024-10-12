# EdifactFramingSettings

The Edifact agreement framing settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_encoding** | **str** | The character encoding. | [optional] 
**character_set** | [**EdifactCharacterSet**](EdifactCharacterSet.md) |  | 
**component_separator** | **int** | The component separator. | 
**data_element_separator** | **int** | The data element separator. | 
**decimal_point_indicator** | [**EdifactDecimalIndicator**](EdifactDecimalIndicator.md) |  | 
**protocol_version** | **int** | The protocol version. | 
**release_indicator** | **int** | The release indicator. | 
**repetition_separator** | **int** | The repetition separator. | 
**segment_terminator** | **int** | The segment terminator. | 
**segment_terminator_suffix** | [**SegmentTerminatorSuffix**](SegmentTerminatorSuffix.md) |  | 
**service_code_list_directory_version** | **str** | The service code list directory version. | [optional] 

## Example

```python
from openapi_client.models.edifact_framing_settings import EdifactFramingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactFramingSettings from a JSON string
edifact_framing_settings_instance = EdifactFramingSettings.from_json(json)
# print the JSON string representation of the object
print(EdifactFramingSettings.to_json())

# convert the object into a dict
edifact_framing_settings_dict = edifact_framing_settings_instance.to_dict()
# create an instance of EdifactFramingSettings from a dict
edifact_framing_settings_from_dict = EdifactFramingSettings.from_dict(edifact_framing_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



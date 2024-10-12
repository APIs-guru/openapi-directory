# X12FramingSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_set** | [**X12CharacterSet**](X12CharacterSet.md) |  | [optional] 
**component_separator** | **int** | The component separator. | [optional] 
**data_element_separator** | **int** | The data element separator. | [optional] 
**replace_character** | **int** | The replacement character. | [optional] 
**replace_separators_in_payload** | **bool** | The value indicating whether to replace separators in payload. | [optional] 
**segment_terminator** | **int** | The segment terminator. | [optional] 
**segment_terminator_suffix** | [**SegmentTerminatorSuffix**](SegmentTerminatorSuffix.md) |  | [optional] 

## Example

```python
from openapi_client.models.x12_framing_settings import X12FramingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of X12FramingSettings from a JSON string
x12_framing_settings_instance = X12FramingSettings.from_json(json)
# print the JSON string representation of the object
print(X12FramingSettings.to_json())

# convert the object into a dict
x12_framing_settings_dict = x12_framing_settings_instance.to_dict()
# create an instance of X12FramingSettings from a dict
x12_framing_settings_from_dict = X12FramingSettings.from_dict(x12_framing_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



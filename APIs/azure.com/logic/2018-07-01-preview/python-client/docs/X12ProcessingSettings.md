# X12ProcessingSettings

The X12 processing settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**convert_implied_decimal** | **bool** | The value indicating whether to convert numerical type to implied decimal. | 
**create_empty_xml_tags_for_trailing_separators** | **bool** | The value indicating whether to create empty xml tags for trailing separators. | 
**mask_security_info** | **bool** | The value indicating whether to mask security information. | 
**preserve_interchange** | **bool** | The value indicating whether to preserve interchange. | 
**suspend_interchange_on_error** | **bool** | The value indicating whether to suspend interchange on error. | 
**use_dot_as_decimal_separator** | **bool** | The value indicating whether to use dot as decimal separator. | 

## Example

```python
from openapi_client.models.x12_processing_settings import X12ProcessingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of X12ProcessingSettings from a JSON string
x12_processing_settings_instance = X12ProcessingSettings.from_json(json)
# print the JSON string representation of the object
print(X12ProcessingSettings.to_json())

# convert the object into a dict
x12_processing_settings_dict = x12_processing_settings_instance.to_dict()
# create an instance of X12ProcessingSettings from a dict
x12_processing_settings_from_dict = X12ProcessingSettings.from_dict(x12_processing_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



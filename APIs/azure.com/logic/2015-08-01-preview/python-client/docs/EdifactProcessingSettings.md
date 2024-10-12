# EdifactProcessingSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_empty_xml_tags_for_trailing_separators** | **bool** | The value indicating whether to create empty xml tags for trailing separators. | [optional] 
**mask_security_info** | **bool** | The value indicating whether to mask security information. | [optional] 
**preserve_interchange** | **bool** | The value indicating whether to preserve interchange. | [optional] 
**suspend_interchange_on_error** | **bool** | The value indicating whether to suspend interchange on error. | [optional] 
**use_dot_as_decimal_separator** | **bool** | The value indicating whether to use dot as decimal separator. | [optional] 

## Example

```python
from openapi_client.models.edifact_processing_settings import EdifactProcessingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactProcessingSettings from a JSON string
edifact_processing_settings_instance = EdifactProcessingSettings.from_json(json)
# print the JSON string representation of the object
print(EdifactProcessingSettings.to_json())

# convert the object into a dict
edifact_processing_settings_dict = edifact_processing_settings_instance.to_dict()
# create an instance of EdifactProcessingSettings from a dict
edifact_processing_settings_from_dict = EdifactProcessingSettings.from_dict(edifact_processing_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



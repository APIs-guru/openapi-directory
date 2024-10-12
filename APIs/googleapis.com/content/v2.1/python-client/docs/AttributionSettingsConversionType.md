# AttributionSettingsConversionType

Message representing a types of conversion events

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_in_reporting** | **bool** | Output only. Option indicating if the type should be included in Merchant Center reporting. | [optional] [readonly] 
**name** | **str** | Output only. Conversion event name, as it&#39;ll be reported by the client. | [optional] [readonly] 

## Example

```python
from openapi_client.models.attribution_settings_conversion_type import AttributionSettingsConversionType

# TODO update the JSON string below
json = "{}"
# create an instance of AttributionSettingsConversionType from a JSON string
attribution_settings_conversion_type_instance = AttributionSettingsConversionType.from_json(json)
# print the JSON string representation of the object
print(AttributionSettingsConversionType.to_json())

# convert the object into a dict
attribution_settings_conversion_type_dict = attribution_settings_conversion_type_instance.to_dict()
# create an instance of AttributionSettingsConversionType from a dict
attribution_settings_conversion_type_from_dict = AttributionSettingsConversionType.from_dict(attribution_settings_conversion_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



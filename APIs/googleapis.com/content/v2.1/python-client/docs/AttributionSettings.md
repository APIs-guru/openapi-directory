# AttributionSettings

Represents attribution settings for conversion sources receiving pre-attribution data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution_lookback_window_in_days** | **int** | Required. Lookback windows (in days) used for attribution in this source. Supported values are 7, 30, 40. | [optional] 
**attribution_model** | **str** | Required. Attribution model. | [optional] 
**conversion_type** | [**List[AttributionSettingsConversionType]**](AttributionSettingsConversionType.md) | Immutable. Unordered list. List of different conversion types a conversion event can be classified as. A standard \&quot;purchase\&quot; type will be automatically created if this list is empty at creation time. | [optional] 

## Example

```python
from openapi_client.models.attribution_settings import AttributionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AttributionSettings from a JSON string
attribution_settings_instance = AttributionSettings.from_json(json)
# print the JSON string representation of the object
print(AttributionSettings.to_json())

# convert the object into a dict
attribution_settings_dict = attribution_settings_instance.to_dict()
# create an instance of AttributionSettings from a dict
attribution_settings_from_dict = AttributionSettings.from_dict(attribution_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleAdsSearchads360V0ResourcesConversionActionValueSettings

Settings related to the value for conversion events associated with this conversion action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**always_use_default_value** | **bool** | Controls whether the default value and default currency code are used in place of the value and currency code specified in conversion events for this conversion action. | [optional] 
**default_currency_code** | **str** | The currency code to use when conversion events for this conversion action are sent with an invalid or missing currency code, or when this conversion action is configured to always use the default value. | [optional] 
**default_value** | **float** | The value to use when conversion events for this conversion action are sent with an invalid, disallowed or missing value, or when this conversion action is configured to always use the default value. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_conversion_action_value_settings import GoogleAdsSearchads360V0ResourcesConversionActionValueSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesConversionActionValueSettings from a JSON string
google_ads_searchads360_v0_resources_conversion_action_value_settings_instance = GoogleAdsSearchads360V0ResourcesConversionActionValueSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesConversionActionValueSettings.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_conversion_action_value_settings_dict = google_ads_searchads360_v0_resources_conversion_action_value_settings_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesConversionActionValueSettings from a dict
google_ads_searchads360_v0_resources_conversion_action_value_settings_from_dict = GoogleAdsSearchads360V0ResourcesConversionActionValueSettings.from_dict(google_ads_searchads360_v0_resources_conversion_action_value_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



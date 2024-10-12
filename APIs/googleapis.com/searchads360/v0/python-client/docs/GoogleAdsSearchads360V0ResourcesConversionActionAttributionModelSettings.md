# GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettings

Settings related to this conversion action's attribution model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution_model** | **str** | The attribution model type of this conversion action. | [optional] 
**data_driven_model_status** | **str** | Output only. The status of the data-driven attribution model for the conversion action. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_conversion_action_attribution_model_settings import GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettings from a JSON string
google_ads_searchads360_v0_resources_conversion_action_attribution_model_settings_instance = GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettings.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_conversion_action_attribution_model_settings_dict = google_ads_searchads360_v0_resources_conversion_action_attribution_model_settings_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettings from a dict
google_ads_searchads360_v0_resources_conversion_action_attribution_model_settings_from_dict = GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettings.from_dict(google_ads_searchads360_v0_resources_conversion_action_attribution_model_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



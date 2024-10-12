# GoogleAdsSearchads360V0ResourcesConversionActionFloodlightSettings

Settings related to a Floodlight conversion action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_group_tag** | **str** | Output only. String used to identify a Floodlight activity group when reporting conversions. | [optional] [readonly] 
**activity_id** | **str** | Output only. ID of the Floodlight activity in DoubleClick Campaign Manager (DCM). | [optional] [readonly] 
**activity_tag** | **str** | Output only. String used to identify a Floodlight activity when reporting conversions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_conversion_action_floodlight_settings import GoogleAdsSearchads360V0ResourcesConversionActionFloodlightSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesConversionActionFloodlightSettings from a JSON string
google_ads_searchads360_v0_resources_conversion_action_floodlight_settings_instance = GoogleAdsSearchads360V0ResourcesConversionActionFloodlightSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesConversionActionFloodlightSettings.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_conversion_action_floodlight_settings_dict = google_ads_searchads360_v0_resources_conversion_action_floodlight_settings_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesConversionActionFloodlightSettings from a dict
google_ads_searchads360_v0_resources_conversion_action_floodlight_settings_from_dict = GoogleAdsSearchads360V0ResourcesConversionActionFloodlightSettings.from_dict(google_ads_searchads360_v0_resources_conversion_action_floodlight_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AdUnitFeedAdsSettings

Settings specific to feed ads (AFF) - deprecated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_position** | **str** | The position of the ads relative to the feed entries. | [optional] 
**frequency** | **int** | The frequency at which ads should appear in the feed (i.e. every N entries). | [optional] 
**minimum_word_count** | **int** | The minimum length an entry should be in order to have attached ads. | [optional] 
**type** | **str** | The type of ads which should appear. | [optional] 

## Example

```python
from openapi_client.models.ad_unit_feed_ads_settings import AdUnitFeedAdsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AdUnitFeedAdsSettings from a JSON string
ad_unit_feed_ads_settings_instance = AdUnitFeedAdsSettings.from_json(json)
# print the JSON string representation of the object
print(AdUnitFeedAdsSettings.to_json())

# convert the object into a dict
ad_unit_feed_ads_settings_dict = ad_unit_feed_ads_settings_instance.to_dict()
# create an instance of AdUnitFeedAdsSettings from a dict
ad_unit_feed_ads_settings_from_dict = AdUnitFeedAdsSettings.from_dict(ad_unit_feed_ads_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



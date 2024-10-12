# YoutubeAndPartnersSettings

Settings for YouTube and Partners line items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bidding_strategy** | [**YoutubeAndPartnersBiddingStrategy**](YoutubeAndPartnersBiddingStrategy.md) |  | [optional] 
**content_category** | **str** | The kind of content on which the YouTube and Partners ads will be shown. | [optional] 
**effective_content_category** | **str** | Output only. The content category which takes effect when serving the line item. When content category is set in both line item and advertiser, the stricter one will take effect when serving the line item. | [optional] [readonly] 
**inventory_source_settings** | [**YoutubeAndPartnersInventorySourceConfig**](YoutubeAndPartnersInventorySourceConfig.md) |  | [optional] 
**lead_form_id** | **str** | Optional. The ID of the form to generate leads. | [optional] 
**linked_merchant_id** | **str** | Optional. The ID of the merchant which is linked to the line item for product feed. | [optional] 
**related_video_ids** | **List[str]** | Optional. The IDs of the videos appear below the primary video ad when the ad is playing in the YouTube app on mobile devices. | [optional] 
**target_frequency** | [**TargetFrequency**](TargetFrequency.md) |  | [optional] 
**third_party_measurement_settings** | [**YoutubeAndPartnersThirdPartyMeasurementSettings**](YoutubeAndPartnersThirdPartyMeasurementSettings.md) |  | [optional] 
**video_ad_sequence_settings** | [**VideoAdSequenceSettings**](VideoAdSequenceSettings.md) |  | [optional] 
**view_frequency_cap** | [**FrequencyCap**](FrequencyCap.md) |  | [optional] 

## Example

```python
from openapi_client.models.youtube_and_partners_settings import YoutubeAndPartnersSettings

# TODO update the JSON string below
json = "{}"
# create an instance of YoutubeAndPartnersSettings from a JSON string
youtube_and_partners_settings_instance = YoutubeAndPartnersSettings.from_json(json)
# print the JSON string representation of the object
print(YoutubeAndPartnersSettings.to_json())

# convert the object into a dict
youtube_and_partners_settings_dict = youtube_and_partners_settings_instance.to_dict()
# create an instance of YoutubeAndPartnersSettings from a dict
youtube_and_partners_settings_from_dict = YoutubeAndPartnersSettings.from_dict(youtube_and_partners_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



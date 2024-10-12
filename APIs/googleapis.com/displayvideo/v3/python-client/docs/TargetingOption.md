# TargetingOption

Represents a single targeting option, which is a targetable concept in DV360.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_range_details** | [**AgeRangeTargetingOptionDetails**](AgeRangeTargetingOptionDetails.md) |  | [optional] 
**app_category_details** | [**AppCategoryTargetingOptionDetails**](AppCategoryTargetingOptionDetails.md) |  | [optional] 
**audio_content_type_details** | [**AudioContentTypeTargetingOptionDetails**](AudioContentTypeTargetingOptionDetails.md) |  | [optional] 
**authorized_seller_status_details** | [**AuthorizedSellerStatusTargetingOptionDetails**](AuthorizedSellerStatusTargetingOptionDetails.md) |  | [optional] 
**browser_details** | [**BrowserTargetingOptionDetails**](BrowserTargetingOptionDetails.md) |  | [optional] 
**business_chain_details** | [**BusinessChainTargetingOptionDetails**](BusinessChainTargetingOptionDetails.md) |  | [optional] 
**carrier_and_isp_details** | [**CarrierAndIspTargetingOptionDetails**](CarrierAndIspTargetingOptionDetails.md) |  | [optional] 
**category_details** | [**CategoryTargetingOptionDetails**](CategoryTargetingOptionDetails.md) |  | [optional] 
**content_duration_details** | [**ContentDurationTargetingOptionDetails**](ContentDurationTargetingOptionDetails.md) |  | [optional] 
**content_genre_details** | [**ContentGenreTargetingOptionDetails**](ContentGenreTargetingOptionDetails.md) |  | [optional] 
**content_instream_position_details** | [**ContentInstreamPositionTargetingOptionDetails**](ContentInstreamPositionTargetingOptionDetails.md) |  | [optional] 
**content_outstream_position_details** | [**ContentOutstreamPositionTargetingOptionDetails**](ContentOutstreamPositionTargetingOptionDetails.md) |  | [optional] 
**content_stream_type_details** | [**ContentStreamTypeTargetingOptionDetails**](ContentStreamTypeTargetingOptionDetails.md) |  | [optional] 
**device_make_model_details** | [**DeviceMakeModelTargetingOptionDetails**](DeviceMakeModelTargetingOptionDetails.md) |  | [optional] 
**device_type_details** | [**DeviceTypeTargetingOptionDetails**](DeviceTypeTargetingOptionDetails.md) |  | [optional] 
**digital_content_label_details** | [**DigitalContentLabelTargetingOptionDetails**](DigitalContentLabelTargetingOptionDetails.md) |  | [optional] 
**environment_details** | [**EnvironmentTargetingOptionDetails**](EnvironmentTargetingOptionDetails.md) |  | [optional] 
**exchange_details** | [**ExchangeTargetingOptionDetails**](ExchangeTargetingOptionDetails.md) |  | [optional] 
**gender_details** | [**GenderTargetingOptionDetails**](GenderTargetingOptionDetails.md) |  | [optional] 
**geo_region_details** | [**GeoRegionTargetingOptionDetails**](GeoRegionTargetingOptionDetails.md) |  | [optional] 
**household_income_details** | [**HouseholdIncomeTargetingOptionDetails**](HouseholdIncomeTargetingOptionDetails.md) |  | [optional] 
**language_details** | [**LanguageTargetingOptionDetails**](LanguageTargetingOptionDetails.md) |  | [optional] 
**name** | **str** | Output only. The resource name for this targeting option. | [optional] [readonly] 
**native_content_position_details** | [**NativeContentPositionTargetingOptionDetails**](NativeContentPositionTargetingOptionDetails.md) |  | [optional] 
**omid_details** | [**OmidTargetingOptionDetails**](OmidTargetingOptionDetails.md) |  | [optional] 
**on_screen_position_details** | [**OnScreenPositionTargetingOptionDetails**](OnScreenPositionTargetingOptionDetails.md) |  | [optional] 
**operating_system_details** | [**OperatingSystemTargetingOptionDetails**](OperatingSystemTargetingOptionDetails.md) |  | [optional] 
**parental_status_details** | [**ParentalStatusTargetingOptionDetails**](ParentalStatusTargetingOptionDetails.md) |  | [optional] 
**poi_details** | [**PoiTargetingOptionDetails**](PoiTargetingOptionDetails.md) |  | [optional] 
**sensitive_category_details** | [**SensitiveCategoryTargetingOptionDetails**](SensitiveCategoryTargetingOptionDetails.md) |  | [optional] 
**sub_exchange_details** | [**SubExchangeTargetingOptionDetails**](SubExchangeTargetingOptionDetails.md) |  | [optional] 
**targeting_option_id** | **str** | Output only. A unique identifier for this targeting option. The tuple {&#x60;targeting_type&#x60;, &#x60;targeting_option_id&#x60;} will be unique. | [optional] [readonly] 
**targeting_type** | **str** | Output only. The type of this targeting option. | [optional] [readonly] 
**user_rewarded_content_details** | [**UserRewardedContentTargetingOptionDetails**](UserRewardedContentTargetingOptionDetails.md) |  | [optional] 
**video_player_size_details** | [**VideoPlayerSizeTargetingOptionDetails**](VideoPlayerSizeTargetingOptionDetails.md) |  | [optional] 
**viewability_details** | [**ViewabilityTargetingOptionDetails**](ViewabilityTargetingOptionDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.targeting_option import TargetingOption

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingOption from a JSON string
targeting_option_instance = TargetingOption.from_json(json)
# print the JSON string representation of the object
print(TargetingOption.to_json())

# convert the object into a dict
targeting_option_dict = targeting_option_instance.to_dict()
# create an instance of TargetingOption from a dict
targeting_option_from_dict = TargetingOption.from_dict(targeting_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



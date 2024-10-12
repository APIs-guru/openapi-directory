# GoogleAdsSearchads360V0ResourcesAdGroup

An ad group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_rotation_mode** | **str** | The ad rotation mode of the ad group. | [optional] 
**cpc_bid_micros** | **str** | The maximum CPC (cost-per-click) bid. | [optional] 
**creation_time** | **str** | Output only. The timestamp when this ad_group was created. The timestamp is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss\&quot; format. | [optional] [readonly] 
**end_date** | **str** | Output only. Date when the ad group ends serving ads. By default, the ad group ends on the ad group&#39;s end date. If this field is set, then the ad group ends at the end of the specified date in the customer&#39;s time zone. This field is only available for Microsoft Advertising and Facebook gateway accounts. Format: YYYY-MM-DD Example: 2019-03-14 | [optional] [readonly] 
**engine_id** | **str** | Output only. ID of the ad group in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use \&quot;ad_group.id\&quot; instead. | [optional] [readonly] 
**engine_status** | **str** | Output only. The Engine Status for ad group. | [optional] [readonly] 
**id** | **str** | Output only. The ID of the ad group. | [optional] [readonly] 
**labels** | **List[str]** | Output only. The resource names of labels attached to this ad group. | [optional] [readonly] 
**language_code** | **str** | Output only. The language of the ads and keywords in an ad group. This field is only available for Microsoft Advertising accounts. More details: https://docs.microsoft.com/en-us/advertising/guides/ad-languages?view&#x3D;bingads-13#adlanguage | [optional] [readonly] 
**last_modified_time** | **str** | Output only. The datetime when this ad group was last modified. The datetime is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss.ssssss\&quot; format. | [optional] [readonly] 
**name** | **str** | The name of the ad group. This field is required and should not be empty when creating new ad groups. It must contain fewer than 255 UTF-8 full-width characters. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the ad group. Ad group resource names have the form: &#x60;customers/{customer_id}/adGroups/{ad_group_id}&#x60; | [optional] 
**start_date** | **str** | Output only. Date when this ad group starts serving ads. By default, the ad group starts now or the ad group&#39;s start date, whichever is later. If this field is set, then the ad group starts at the beginning of the specified date in the customer&#39;s time zone. This field is only available for Microsoft Advertising and Facebook gateway accounts. Format: YYYY-MM-DD Example: 2019-03-14 | [optional] [readonly] 
**status** | **str** | The status of the ad group. | [optional] 
**targeting_setting** | [**GoogleAdsSearchads360V0CommonTargetingSetting**](GoogleAdsSearchads360V0CommonTargetingSetting.md) |  | [optional] 
**type** | **str** | Immutable. The type of the ad group. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_ad_group import GoogleAdsSearchads360V0ResourcesAdGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroup from a JSON string
google_ads_searchads360_v0_resources_ad_group_instance = GoogleAdsSearchads360V0ResourcesAdGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAdGroup.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_ad_group_dict = google_ads_searchads360_v0_resources_ad_group_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroup from a dict
google_ads_searchads360_v0_resources_ad_group_from_dict = GoogleAdsSearchads360V0ResourcesAdGroup.from_dict(google_ads_searchads360_v0_resources_ad_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleAdsSearchads360V0ResourcesAdGroupAd

An ad group ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad** | [**GoogleAdsSearchads360V0ResourcesAd**](GoogleAdsSearchads360V0ResourcesAd.md) |  | [optional] 
**creation_time** | **str** | Output only. The timestamp when this ad_group_ad was created. The datetime is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss.ssssss\&quot; format. | [optional] [readonly] 
**engine_id** | **str** | Output only. ID of the ad in the external engine account. This field is for SearchAds 360 account only, for example, Yahoo Japan, Microsoft, Baidu etc. For non-SearchAds 360 entity, use \&quot;ad_group_ad.ad.id\&quot; instead. | [optional] [readonly] 
**engine_status** | **str** | Output only. Additional status of the ad in the external engine account. Possible statuses (depending on the type of external account) include active, eligible, pending review, etc. | [optional] [readonly] 
**labels** | **List[str]** | Output only. The resource names of labels attached to this ad group ad. | [optional] [readonly] 
**last_modified_time** | **str** | Output only. The datetime when this ad group ad was last modified. The datetime is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss.ssssss\&quot; format. | [optional] [readonly] 
**resource_name** | **str** | Immutable. The resource name of the ad. Ad group ad resource names have the form: &#x60;customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}&#x60; | [optional] 
**status** | **str** | The status of the ad. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_ad_group_ad import GoogleAdsSearchads360V0ResourcesAdGroupAd

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupAd from a JSON string
google_ads_searchads360_v0_resources_ad_group_ad_instance = GoogleAdsSearchads360V0ResourcesAdGroupAd.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAdGroupAd.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_ad_group_ad_dict = google_ads_searchads360_v0_resources_ad_group_ad_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupAd from a dict
google_ads_searchads360_v0_resources_ad_group_ad_from_dict = GoogleAdsSearchads360V0ResourcesAdGroupAd.from_dict(google_ads_searchads360_v0_resources_ad_group_ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



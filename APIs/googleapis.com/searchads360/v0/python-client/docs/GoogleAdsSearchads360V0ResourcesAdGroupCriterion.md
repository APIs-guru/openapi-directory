# GoogleAdsSearchads360V0ResourcesAdGroupCriterion

An ad group criterion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group** | **str** | Immutable. The ad group to which the criterion belongs. | [optional] 
**age_range** | [**GoogleAdsSearchads360V0CommonAgeRangeInfo**](GoogleAdsSearchads360V0CommonAgeRangeInfo.md) |  | [optional] 
**bid_modifier** | **float** | The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. | [optional] 
**cpc_bid_micros** | **str** | The CPC (cost-per-click) bid. | [optional] 
**creation_time** | **str** | Output only. The timestamp when this ad group criterion was created. The timestamp is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss\&quot; format. | [optional] [readonly] 
**criterion_id** | **str** | Output only. The ID of the criterion. | [optional] [readonly] 
**effective_cpc_bid_micros** | **str** | Output only. The effective CPC (cost-per-click) bid. | [optional] [readonly] 
**engine_id** | **str** | Output only. ID of the ad group criterion in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use \&quot;ad_group_criterion.criterion_id\&quot; instead. | [optional] [readonly] 
**engine_status** | **str** | Output only. The Engine Status for ad group criterion. | [optional] [readonly] 
**final_url_suffix** | **str** | URL template for appending params to final URL. | [optional] 
**final_urls** | **List[str]** | The list of possible final URLs after all cross-domain redirects for the ad. | [optional] 
**gender** | [**GoogleAdsSearchads360V0CommonGenderInfo**](GoogleAdsSearchads360V0CommonGenderInfo.md) |  | [optional] 
**keyword** | [**GoogleAdsSearchads360V0CommonKeywordInfo**](GoogleAdsSearchads360V0CommonKeywordInfo.md) |  | [optional] 
**labels** | **List[str]** | Output only. The resource names of labels attached to this ad group criterion. | [optional] [readonly] 
**last_modified_time** | **str** | Output only. The datetime when this ad group criterion was last modified. The datetime is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss.ssssss\&quot; format. | [optional] [readonly] 
**listing_group** | [**GoogleAdsSearchads360V0CommonListingGroupInfo**](GoogleAdsSearchads360V0CommonListingGroupInfo.md) |  | [optional] 
**location** | [**GoogleAdsSearchads360V0CommonLocationInfo**](GoogleAdsSearchads360V0CommonLocationInfo.md) |  | [optional] 
**negative** | **bool** | Immutable. Whether to target (&#x60;false&#x60;) or exclude (&#x60;true&#x60;) the criterion. This field is immutable. To switch a criterion from positive to negative, remove then re-add it. | [optional] 
**position_estimates** | [**GoogleAdsSearchads360V0ResourcesAdGroupCriterionPositionEstimates**](GoogleAdsSearchads360V0ResourcesAdGroupCriterionPositionEstimates.md) |  | [optional] 
**quality_info** | [**GoogleAdsSearchads360V0ResourcesAdGroupCriterionQualityInfo**](GoogleAdsSearchads360V0ResourcesAdGroupCriterionQualityInfo.md) |  | [optional] 
**resource_name** | **str** | Immutable. The resource name of the ad group criterion. Ad group criterion resource names have the form: &#x60;customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}&#x60; | [optional] 
**status** | **str** | The status of the criterion. This is the status of the ad group criterion entity, set by the client. Note: UI reports may incorporate additional information that affects whether a criterion is eligible to run. In some cases a criterion that&#39;s REMOVED in the API can still show as enabled in the UI. For example, campaigns by default show to users of all age ranges unless excluded. The UI will show each age range as \&quot;enabled\&quot;, since they&#39;re eligible to see the ads; but AdGroupCriterion.status will show \&quot;removed\&quot;, since no positive criterion was added. | [optional] 
**tracking_url_template** | **str** | The URL template for constructing a tracking URL. | [optional] 
**type** | **str** | Output only. The type of the criterion. | [optional] [readonly] 
**user_list** | [**GoogleAdsSearchads360V0CommonUserListInfo**](GoogleAdsSearchads360V0CommonUserListInfo.md) |  | [optional] 
**webpage** | [**GoogleAdsSearchads360V0CommonWebpageInfo**](GoogleAdsSearchads360V0CommonWebpageInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_ad_group_criterion import GoogleAdsSearchads360V0ResourcesAdGroupCriterion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupCriterion from a JSON string
google_ads_searchads360_v0_resources_ad_group_criterion_instance = GoogleAdsSearchads360V0ResourcesAdGroupCriterion.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAdGroupCriterion.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_ad_group_criterion_dict = google_ads_searchads360_v0_resources_ad_group_criterion_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupCriterion from a dict
google_ads_searchads360_v0_resources_ad_group_criterion_from_dict = GoogleAdsSearchads360V0ResourcesAdGroupCriterion.from_dict(google_ads_searchads360_v0_resources_ad_group_criterion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



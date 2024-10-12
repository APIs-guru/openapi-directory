# GoogleAdsSearchads360V0ResourcesCampaignCriterion

A campaign criterion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_range** | [**GoogleAdsSearchads360V0CommonAgeRangeInfo**](GoogleAdsSearchads360V0CommonAgeRangeInfo.md) |  | [optional] 
**bid_modifier** | **float** | The modifier for the bids when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. Use 0 to opt out of a Device type. | [optional] 
**criterion_id** | **str** | Output only. The ID of the criterion. This field is ignored during mutate. | [optional] [readonly] 
**device** | [**GoogleAdsSearchads360V0CommonDeviceInfo**](GoogleAdsSearchads360V0CommonDeviceInfo.md) |  | [optional] 
**display_name** | **str** | Output only. The display name of the criterion. This field is ignored for mutates. | [optional] [readonly] 
**gender** | [**GoogleAdsSearchads360V0CommonGenderInfo**](GoogleAdsSearchads360V0CommonGenderInfo.md) |  | [optional] 
**keyword** | [**GoogleAdsSearchads360V0CommonKeywordInfo**](GoogleAdsSearchads360V0CommonKeywordInfo.md) |  | [optional] 
**language** | [**GoogleAdsSearchads360V0CommonLanguageInfo**](GoogleAdsSearchads360V0CommonLanguageInfo.md) |  | [optional] 
**last_modified_time** | **str** | Output only. The datetime when this campaign criterion was last modified. The datetime is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss.ssssss\&quot; format. | [optional] [readonly] 
**location** | [**GoogleAdsSearchads360V0CommonLocationInfo**](GoogleAdsSearchads360V0CommonLocationInfo.md) |  | [optional] 
**location_group** | [**GoogleAdsSearchads360V0CommonLocationGroupInfo**](GoogleAdsSearchads360V0CommonLocationGroupInfo.md) |  | [optional] 
**negative** | **bool** | Immutable. Whether to target (&#x60;false&#x60;) or exclude (&#x60;true&#x60;) the criterion. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the campaign criterion. Campaign criterion resource names have the form: &#x60;customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}&#x60; | [optional] 
**status** | **str** | The status of the criterion. | [optional] 
**type** | **str** | Output only. The type of the criterion. | [optional] [readonly] 
**user_list** | [**GoogleAdsSearchads360V0CommonUserListInfo**](GoogleAdsSearchads360V0CommonUserListInfo.md) |  | [optional] 
**webpage** | [**GoogleAdsSearchads360V0CommonWebpageInfo**](GoogleAdsSearchads360V0CommonWebpageInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_campaign_criterion import GoogleAdsSearchads360V0ResourcesCampaignCriterion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignCriterion from a JSON string
google_ads_searchads360_v0_resources_campaign_criterion_instance = GoogleAdsSearchads360V0ResourcesCampaignCriterion.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCampaignCriterion.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_campaign_criterion_dict = google_ads_searchads360_v0_resources_campaign_criterion_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignCriterion from a dict
google_ads_searchads360_v0_resources_campaign_criterion_from_dict = GoogleAdsSearchads360V0ResourcesCampaignCriterion.from_dict(google_ads_searchads360_v0_resources_campaign_criterion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



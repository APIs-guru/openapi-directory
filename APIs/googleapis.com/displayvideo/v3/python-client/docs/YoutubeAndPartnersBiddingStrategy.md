# YoutubeAndPartnersBiddingStrategy

Settings that control the bid strategy for YouTube and Partners resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_effective_target_cpa_source** | **str** | Output only. Source of the effective target CPA value for ad group. | [optional] [readonly] 
**ad_group_effective_target_cpa_value** | **str** | Output only. The effective target CPA for ad group, in micros of advertiser&#39;s currency. | [optional] [readonly] 
**type** | **str** | The type of the bidding strategy. | [optional] 
**value** | **str** | The value used by the bidding strategy. When the bidding strategy is assigned at the line item level, this field is only applicable for the following strategy types: * &#x60;YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA&#x60; * &#x60;YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS&#x60; When the bidding strategy is assigned at the ad group level, this field is only applicable for the following strategy types: * &#x60;YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM&#x60; * &#x60;YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV&#x60; * &#x60;YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA&#x60; * &#x60;YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM&#x60; * &#x60;YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS&#x60; If not using an applicable strategy, the value of this field will be 0. | [optional] 

## Example

```python
from openapi_client.models.youtube_and_partners_bidding_strategy import YoutubeAndPartnersBiddingStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of YoutubeAndPartnersBiddingStrategy from a JSON string
youtube_and_partners_bidding_strategy_instance = YoutubeAndPartnersBiddingStrategy.from_json(json)
# print the JSON string representation of the object
print(YoutubeAndPartnersBiddingStrategy.to_json())

# convert the object into a dict
youtube_and_partners_bidding_strategy_dict = youtube_and_partners_bidding_strategy_instance.to_dict()
# create an instance of YoutubeAndPartnersBiddingStrategy from a dict
youtube_and_partners_bidding_strategy_from_dict = YoutubeAndPartnersBiddingStrategy.from_dict(youtube_and_partners_bidding_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleAdsSearchads360V0ResourcesAdGroupCriterionQualityInfo

A container for ad group criterion quality information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quality_score** | **int** | Output only. The quality score. This field may not be populated if Google does not have enough information to determine a value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_ad_group_criterion_quality_info import GoogleAdsSearchads360V0ResourcesAdGroupCriterionQualityInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupCriterionQualityInfo from a JSON string
google_ads_searchads360_v0_resources_ad_group_criterion_quality_info_instance = GoogleAdsSearchads360V0ResourcesAdGroupCriterionQualityInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAdGroupCriterionQualityInfo.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_ad_group_criterion_quality_info_dict = google_ads_searchads360_v0_resources_ad_group_criterion_quality_info_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupCriterionQualityInfo from a dict
google_ads_searchads360_v0_resources_ad_group_criterion_quality_info_from_dict = GoogleAdsSearchads360V0ResourcesAdGroupCriterionQualityInfo.from_dict(google_ads_searchads360_v0_resources_ad_group_criterion_quality_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



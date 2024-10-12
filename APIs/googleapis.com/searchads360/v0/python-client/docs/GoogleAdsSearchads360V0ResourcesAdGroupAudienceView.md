# GoogleAdsSearchads360V0ResourcesAdGroupAudienceView

An ad group audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated at the audience level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **str** | Output only. The resource name of the ad group audience view. Ad group audience view resource names have the form: &#x60;customers/{customer_id}/adGroupAudienceViews/{ad_group_id}~{criterion_id}&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_ad_group_audience_view import GoogleAdsSearchads360V0ResourcesAdGroupAudienceView

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupAudienceView from a JSON string
google_ads_searchads360_v0_resources_ad_group_audience_view_instance = GoogleAdsSearchads360V0ResourcesAdGroupAudienceView.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAdGroupAudienceView.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_ad_group_audience_view_dict = google_ads_searchads360_v0_resources_ad_group_audience_view_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupAudienceView from a dict
google_ads_searchads360_v0_resources_ad_group_audience_view_from_dict = GoogleAdsSearchads360V0ResourcesAdGroupAudienceView.from_dict(google_ads_searchads360_v0_resources_ad_group_audience_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



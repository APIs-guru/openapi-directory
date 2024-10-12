# GoogleAdsSearchads360V0CommonTargetRestriction

The list of per-targeting-dimension targeting settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_only** | **bool** | Indicates whether to restrict your ads to show only for the criteria you have selected for this targeting_dimension, or to target all values for this targeting_dimension and show ads based on your targeting in other TargetingDimensions. A value of &#x60;true&#x60; means that these criteria will only apply bid modifiers, and not affect targeting. A value of &#x60;false&#x60; means that these criteria will restrict targeting as well as applying bid modifiers. | [optional] 
**targeting_dimension** | **str** | The targeting dimension that these settings apply to. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_target_restriction import GoogleAdsSearchads360V0CommonTargetRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonTargetRestriction from a JSON string
google_ads_searchads360_v0_common_target_restriction_instance = GoogleAdsSearchads360V0CommonTargetRestriction.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonTargetRestriction.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_target_restriction_dict = google_ads_searchads360_v0_common_target_restriction_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonTargetRestriction from a dict
google_ads_searchads360_v0_common_target_restriction_from_dict = GoogleAdsSearchads360V0CommonTargetRestriction.from_dict(google_ads_searchads360_v0_common_target_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



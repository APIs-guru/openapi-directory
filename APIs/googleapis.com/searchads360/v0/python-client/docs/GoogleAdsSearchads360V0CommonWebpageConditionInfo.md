# GoogleAdsSearchads360V0CommonWebpageConditionInfo

Logical expression for targeting webpages of an advertiser's website.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**argument** | **str** | Argument of webpage targeting condition. | [optional] 
**operand** | **str** | Operand of webpage targeting condition. | [optional] 
**operator** | **str** | Operator of webpage targeting condition. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_webpage_condition_info import GoogleAdsSearchads360V0CommonWebpageConditionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonWebpageConditionInfo from a JSON string
google_ads_searchads360_v0_common_webpage_condition_info_instance = GoogleAdsSearchads360V0CommonWebpageConditionInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonWebpageConditionInfo.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_webpage_condition_info_dict = google_ads_searchads360_v0_common_webpage_condition_info_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonWebpageConditionInfo from a dict
google_ads_searchads360_v0_common_webpage_condition_info_from_dict = GoogleAdsSearchads360V0CommonWebpageConditionInfo.from_dict(google_ads_searchads360_v0_common_webpage_condition_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



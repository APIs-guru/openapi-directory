# GoogleAdsSearchads360V0CommonWebpageInfo

Represents a criterion for targeting webpages of an advertiser's website.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[GoogleAdsSearchads360V0CommonWebpageConditionInfo]**](GoogleAdsSearchads360V0CommonWebpageConditionInfo.md) | Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting. An empty list of conditions indicates all pages of the campaign&#39;s website are targeted. This field is required for CREATE operations and is prohibited on UPDATE operations. | [optional] 
**coverage_percentage** | **float** | Website criteria coverage percentage. This is the computed percentage of website coverage based on the website target, negative website target and negative keywords in the ad group and campaign. For instance, when coverage returns as 1, it indicates it has 100% coverage. This field is read-only. | [optional] 
**criterion_name** | **str** | The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters. This field is required for CREATE operations and is prohibited on UPDATE operations. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_webpage_info import GoogleAdsSearchads360V0CommonWebpageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonWebpageInfo from a JSON string
google_ads_searchads360_v0_common_webpage_info_instance = GoogleAdsSearchads360V0CommonWebpageInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonWebpageInfo.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_webpage_info_dict = google_ads_searchads360_v0_common_webpage_info_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonWebpageInfo from a dict
google_ads_searchads360_v0_common_webpage_info_from_dict = GoogleAdsSearchads360V0CommonWebpageInfo.from_dict(google_ads_searchads360_v0_common_webpage_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



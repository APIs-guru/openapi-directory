# GoogleAdsSearchads360V0CommonKeyword

A Keyword criterion segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_criterion** | **str** | The AdGroupCriterion resource name. | [optional] 
**info** | [**GoogleAdsSearchads360V0CommonKeywordInfo**](GoogleAdsSearchads360V0CommonKeywordInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_keyword import GoogleAdsSearchads360V0CommonKeyword

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonKeyword from a JSON string
google_ads_searchads360_v0_common_keyword_instance = GoogleAdsSearchads360V0CommonKeyword.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonKeyword.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_keyword_dict = google_ads_searchads360_v0_common_keyword_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonKeyword from a dict
google_ads_searchads360_v0_common_keyword_from_dict = GoogleAdsSearchads360V0CommonKeyword.from_dict(google_ads_searchads360_v0_common_keyword_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



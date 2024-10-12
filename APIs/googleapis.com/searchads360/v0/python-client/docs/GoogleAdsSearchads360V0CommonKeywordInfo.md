# GoogleAdsSearchads360V0CommonKeywordInfo

A keyword criterion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_type** | **str** | The match type of the keyword. | [optional] 
**text** | **str** | The text of the keyword (at most 80 characters and 10 words). | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_keyword_info import GoogleAdsSearchads360V0CommonKeywordInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonKeywordInfo from a JSON string
google_ads_searchads360_v0_common_keyword_info_instance = GoogleAdsSearchads360V0CommonKeywordInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonKeywordInfo.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_keyword_info_dict = google_ads_searchads360_v0_common_keyword_info_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonKeywordInfo from a dict
google_ads_searchads360_v0_common_keyword_info_from_dict = GoogleAdsSearchads360V0CommonKeywordInfo.from_dict(google_ads_searchads360_v0_common_keyword_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



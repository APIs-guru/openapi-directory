# ListYoutubeAdGroupAdsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListYoutubeAdGroupAds&#x60; method to retrieve the next page of results. | [optional] 
**youtube_ad_group_ads** | [**List[YoutubeAdGroupAd]**](YoutubeAdGroupAd.md) | The list of ad group ads. This list will be absent if empty. | [optional] 

## Example

```python
from openapi_client.models.list_youtube_ad_group_ads_response import ListYoutubeAdGroupAdsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListYoutubeAdGroupAdsResponse from a JSON string
list_youtube_ad_group_ads_response_instance = ListYoutubeAdGroupAdsResponse.from_json(json)
# print the JSON string representation of the object
print(ListYoutubeAdGroupAdsResponse.to_json())

# convert the object into a dict
list_youtube_ad_group_ads_response_dict = list_youtube_ad_group_ads_response_instance.to_dict()
# create an instance of ListYoutubeAdGroupAdsResponse from a dict
list_youtube_ad_group_ads_response_from_dict = ListYoutubeAdGroupAdsResponse.from_dict(list_youtube_ad_group_ads_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



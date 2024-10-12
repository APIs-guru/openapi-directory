# ListAdGroupAdsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_ads** | [**List[AdGroupAd]**](AdGroupAd.md) | The list of ad group ads. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListAdGroupAds&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_ad_group_ads_response import ListAdGroupAdsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdGroupAdsResponse from a JSON string
list_ad_group_ads_response_instance = ListAdGroupAdsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdGroupAdsResponse.to_json())

# convert the object into a dict
list_ad_group_ads_response_dict = list_ad_group_ads_response_instance.to_dict()
# create an instance of ListAdGroupAdsResponse from a dict
list_ad_group_ads_response_from_dict = ListAdGroupAdsResponse.from_dict(list_ad_group_ads_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleAdsSearchads360V0ErrorsSearchAds360Failure

Describes how a Search Ads 360 API call failed. It's returned inside google.rpc.Status.details when a call fails.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[GoogleAdsSearchads360V0ErrorsSearchAds360Error]**](GoogleAdsSearchads360V0ErrorsSearchAds360Error.md) | The list of errors that occurred. | [optional] 
**request_id** | **str** | The unique ID of the request that is used for debugging purposes. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_errors_search_ads360_failure import GoogleAdsSearchads360V0ErrorsSearchAds360Failure

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ErrorsSearchAds360Failure from a JSON string
google_ads_searchads360_v0_errors_search_ads360_failure_instance = GoogleAdsSearchads360V0ErrorsSearchAds360Failure.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ErrorsSearchAds360Failure.to_json())

# convert the object into a dict
google_ads_searchads360_v0_errors_search_ads360_failure_dict = google_ads_searchads360_v0_errors_search_ads360_failure_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ErrorsSearchAds360Failure from a dict
google_ads_searchads360_v0_errors_search_ads360_failure_from_dict = GoogleAdsSearchads360V0ErrorsSearchAds360Failure.from_dict(google_ads_searchads360_v0_errors_search_ads360_failure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



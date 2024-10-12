# GoogleAdsSearchads360V0ErrorsSearchAds360Error

SearchAds360-specific error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**GoogleAdsSearchads360V0ErrorsErrorDetails**](GoogleAdsSearchads360V0ErrorsErrorDetails.md) |  | [optional] 
**error_code** | [**GoogleAdsSearchads360V0ErrorsErrorCode**](GoogleAdsSearchads360V0ErrorsErrorCode.md) |  | [optional] 
**location** | [**GoogleAdsSearchads360V0ErrorsErrorLocation**](GoogleAdsSearchads360V0ErrorsErrorLocation.md) |  | [optional] 
**message** | **str** | A human-readable description of the error. | [optional] 
**trigger** | [**GoogleAdsSearchads360V0CommonValue**](GoogleAdsSearchads360V0CommonValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_errors_search_ads360_error import GoogleAdsSearchads360V0ErrorsSearchAds360Error

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ErrorsSearchAds360Error from a JSON string
google_ads_searchads360_v0_errors_search_ads360_error_instance = GoogleAdsSearchads360V0ErrorsSearchAds360Error.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ErrorsSearchAds360Error.to_json())

# convert the object into a dict
google_ads_searchads360_v0_errors_search_ads360_error_dict = google_ads_searchads360_v0_errors_search_ads360_error_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ErrorsSearchAds360Error from a dict
google_ads_searchads360_v0_errors_search_ads360_error_from_dict = GoogleAdsSearchads360V0ErrorsSearchAds360Error.from_dict(google_ads_searchads360_v0_errors_search_ads360_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



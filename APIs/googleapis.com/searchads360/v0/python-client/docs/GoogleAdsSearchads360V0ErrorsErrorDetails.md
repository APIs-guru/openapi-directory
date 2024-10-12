# GoogleAdsSearchads360V0ErrorsErrorDetails

Additional error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quota_error_details** | [**GoogleAdsSearchads360V0ErrorsQuotaErrorDetails**](GoogleAdsSearchads360V0ErrorsQuotaErrorDetails.md) |  | [optional] 
**unpublished_error_code** | **str** | The error code that should have been returned, but wasn&#39;t. This is used when the error code is not published in the client specified version. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_errors_error_details import GoogleAdsSearchads360V0ErrorsErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ErrorsErrorDetails from a JSON string
google_ads_searchads360_v0_errors_error_details_instance = GoogleAdsSearchads360V0ErrorsErrorDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ErrorsErrorDetails.to_json())

# convert the object into a dict
google_ads_searchads360_v0_errors_error_details_dict = google_ads_searchads360_v0_errors_error_details_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ErrorsErrorDetails from a dict
google_ads_searchads360_v0_errors_error_details_from_dict = GoogleAdsSearchads360V0ErrorsErrorDetails.from_dict(google_ads_searchads360_v0_errors_error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



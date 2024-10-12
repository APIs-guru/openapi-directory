# GoogleAdsSearchads360V0ErrorsQuotaErrorDetails

Additional quota error details when there is QuotaError.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_name** | **str** | The high level description of the quota bucket. Examples are \&quot;Get requests for standard access\&quot; or \&quot;Requests per account\&quot;. | [optional] 
**rate_scope** | **str** | The rate scope of the quota limit. | [optional] 
**retry_delay** | **str** | Backoff period that customers should wait before sending next request. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_errors_quota_error_details import GoogleAdsSearchads360V0ErrorsQuotaErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ErrorsQuotaErrorDetails from a JSON string
google_ads_searchads360_v0_errors_quota_error_details_instance = GoogleAdsSearchads360V0ErrorsQuotaErrorDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ErrorsQuotaErrorDetails.to_json())

# convert the object into a dict
google_ads_searchads360_v0_errors_quota_error_details_dict = google_ads_searchads360_v0_errors_quota_error_details_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ErrorsQuotaErrorDetails from a dict
google_ads_searchads360_v0_errors_quota_error_details_from_dict = GoogleAdsSearchads360V0ErrorsQuotaErrorDetails.from_dict(google_ads_searchads360_v0_errors_quota_error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



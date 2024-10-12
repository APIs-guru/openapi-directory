# GoogleAnalyticsAdminV1betaAccessQuota

Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_requests** | [**GoogleAnalyticsAdminV1betaAccessQuotaStatus**](GoogleAnalyticsAdminV1betaAccessQuotaStatus.md) |  | [optional] 
**server_errors_per_project_per_hour** | [**GoogleAnalyticsAdminV1betaAccessQuotaStatus**](GoogleAnalyticsAdminV1betaAccessQuotaStatus.md) |  | [optional] 
**tokens_per_day** | [**GoogleAnalyticsAdminV1betaAccessQuotaStatus**](GoogleAnalyticsAdminV1betaAccessQuotaStatus.md) |  | [optional] 
**tokens_per_hour** | [**GoogleAnalyticsAdminV1betaAccessQuotaStatus**](GoogleAnalyticsAdminV1betaAccessQuotaStatus.md) |  | [optional] 
**tokens_per_project_per_hour** | [**GoogleAnalyticsAdminV1betaAccessQuotaStatus**](GoogleAnalyticsAdminV1betaAccessQuotaStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_access_quota import GoogleAnalyticsAdminV1betaAccessQuota

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaAccessQuota from a JSON string
google_analytics_admin_v1beta_access_quota_instance = GoogleAnalyticsAdminV1betaAccessQuota.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaAccessQuota.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_access_quota_dict = google_analytics_admin_v1beta_access_quota_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaAccessQuota from a dict
google_analytics_admin_v1beta_access_quota_from_dict = GoogleAnalyticsAdminV1betaAccessQuota.from_dict(google_analytics_admin_v1beta_access_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



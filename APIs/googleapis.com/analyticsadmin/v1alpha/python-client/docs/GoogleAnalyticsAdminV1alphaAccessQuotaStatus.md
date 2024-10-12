# GoogleAnalyticsAdminV1alphaAccessQuotaStatus

Current state for a particular quota group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumed** | **int** | Quota consumed by this request. | [optional] 
**remaining** | **int** | Quota remaining after this request. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_quota_status import GoogleAnalyticsAdminV1alphaAccessQuotaStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessQuotaStatus from a JSON string
google_analytics_admin_v1alpha_access_quota_status_instance = GoogleAnalyticsAdminV1alphaAccessQuotaStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessQuotaStatus.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_quota_status_dict = google_analytics_admin_v1alpha_access_quota_status_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessQuotaStatus from a dict
google_analytics_admin_v1alpha_access_quota_status_from_dict = GoogleAnalyticsAdminV1alphaAccessQuotaStatus.from_dict(google_analytics_admin_v1alpha_access_quota_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



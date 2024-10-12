# GoogleAnalyticsAdminV1betaAccessDateRange

A contiguous range of days: startDate, startDate + 1, ..., endDate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **str** | The inclusive end date for the query in the format &#x60;YYYY-MM-DD&#x60;. Cannot be before &#x60;startDate&#x60;. The format &#x60;NdaysAgo&#x60;, &#x60;yesterday&#x60;, or &#x60;today&#x60; is also accepted, and in that case, the date is inferred based on the current time in the request&#39;s time zone. | [optional] 
**start_date** | **str** | The inclusive start date for the query in the format &#x60;YYYY-MM-DD&#x60;. Cannot be after &#x60;endDate&#x60;. The format &#x60;NdaysAgo&#x60;, &#x60;yesterday&#x60;, or &#x60;today&#x60; is also accepted, and in that case, the date is inferred based on the current time in the request&#39;s time zone. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_access_date_range import GoogleAnalyticsAdminV1betaAccessDateRange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaAccessDateRange from a JSON string
google_analytics_admin_v1beta_access_date_range_instance = GoogleAnalyticsAdminV1betaAccessDateRange.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaAccessDateRange.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_access_date_range_dict = google_analytics_admin_v1beta_access_date_range_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaAccessDateRange from a dict
google_analytics_admin_v1beta_access_date_range_from_dict = GoogleAnalyticsAdminV1betaAccessDateRange.from_dict(google_analytics_admin_v1beta_access_date_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



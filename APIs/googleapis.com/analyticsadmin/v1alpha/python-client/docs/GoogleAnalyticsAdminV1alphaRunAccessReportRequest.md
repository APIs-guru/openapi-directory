# GoogleAnalyticsAdminV1alphaRunAccessReportRequest

The request for a Data Access Record Report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_ranges** | [**List[GoogleAnalyticsAdminV1alphaAccessDateRange]**](GoogleAnalyticsAdminV1alphaAccessDateRange.md) | Date ranges of access records to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the access records for the overlapping days is included in the response rows for both date ranges. Requests are allowed up to 2 date ranges. | [optional] 
**dimension_filter** | [**GoogleAnalyticsAdminV1alphaAccessFilterExpression**](GoogleAnalyticsAdminV1alphaAccessFilterExpression.md) |  | [optional] 
**dimensions** | [**List[GoogleAnalyticsAdminV1alphaAccessDimension]**](GoogleAnalyticsAdminV1alphaAccessDimension.md) | The dimensions requested and displayed in the response. Requests are allowed up to 9 dimensions. | [optional] 
**expand_groups** | **bool** | Optional. Decides whether to return the users within user groups. This field works only when include_all_users is set to true. If true, it will return all users with access to the specified property or account. If false, only the users with direct access will be returned. | [optional] 
**include_all_users** | **bool** | Optional. Determines whether to include users who have never made an API call in the response. If true, all users with access to the specified property or account are included in the response, regardless of whether they have made an API call or not. If false, only the users who have made an API call will be included. | [optional] 
**limit** | **str** | The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 100,000 rows per request, no matter how many you ask for. &#x60;limit&#x60; must be positive. The API may return fewer rows than the requested &#x60;limit&#x60;, if there aren&#39;t as many remaining rows as the &#x60;limit&#x60;. For instance, there are fewer than 300 possible values for the dimension &#x60;country&#x60;, so when reporting on only &#x60;country&#x60;, you can&#39;t get more than 300 rows, even if you set &#x60;limit&#x60; to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). | [optional] 
**metric_filter** | [**GoogleAnalyticsAdminV1alphaAccessFilterExpression**](GoogleAnalyticsAdminV1alphaAccessFilterExpression.md) |  | [optional] 
**metrics** | [**List[GoogleAnalyticsAdminV1alphaAccessMetric]**](GoogleAnalyticsAdminV1alphaAccessMetric.md) | The metrics requested and displayed in the response. Requests are allowed up to 10 metrics. | [optional] 
**offset** | **str** | The row count of the start row. The first row is counted as row 0. If offset is unspecified, it is treated as 0. If offset is zero, then this method will return the first page of results with &#x60;limit&#x60; entries. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). | [optional] 
**order_bys** | [**List[GoogleAnalyticsAdminV1alphaAccessOrderBy]**](GoogleAnalyticsAdminV1alphaAccessOrderBy.md) | Specifies how rows are ordered in the response. | [optional] 
**return_entity_quota** | **bool** | Toggles whether to return the current state of this Analytics Property&#39;s quota. Quota is returned in [AccessQuota](#AccessQuota). For account-level requests, this field must be false. | [optional] 
**time_zone** | **str** | This request&#39;s time zone if specified. If unspecified, the property&#39;s time zone is used. The request&#39;s time zone is used to interpret the start &amp; end dates of the report. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example \&quot;America/New_York\&quot; or \&quot;Asia/Tokyo\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_run_access_report_request import GoogleAnalyticsAdminV1alphaRunAccessReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaRunAccessReportRequest from a JSON string
google_analytics_admin_v1alpha_run_access_report_request_instance = GoogleAnalyticsAdminV1alphaRunAccessReportRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaRunAccessReportRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_run_access_report_request_dict = google_analytics_admin_v1alpha_run_access_report_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaRunAccessReportRequest from a dict
google_analytics_admin_v1alpha_run_access_report_request_from_dict = GoogleAnalyticsAdminV1alphaRunAccessReportRequest.from_dict(google_analytics_admin_v1alpha_run_access_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



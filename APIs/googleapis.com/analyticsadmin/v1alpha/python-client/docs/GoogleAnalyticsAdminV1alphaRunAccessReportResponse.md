# GoogleAnalyticsAdminV1alphaRunAccessReportResponse

The customized Data Access Record Report response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_headers** | [**List[GoogleAnalyticsAdminV1alphaAccessDimensionHeader]**](GoogleAnalyticsAdminV1alphaAccessDimensionHeader.md) | The header for a column in the report that corresponds to a specific dimension. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows. | [optional] 
**metric_headers** | [**List[GoogleAnalyticsAdminV1alphaAccessMetricHeader]**](GoogleAnalyticsAdminV1alphaAccessMetricHeader.md) | The header for a column in the report that corresponds to a specific metric. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows. | [optional] 
**quota** | [**GoogleAnalyticsAdminV1alphaAccessQuota**](GoogleAnalyticsAdminV1alphaAccessQuota.md) |  | [optional] 
**row_count** | **int** | The total number of rows in the query result. &#x60;rowCount&#x60; is independent of the number of rows returned in the response, the &#x60;limit&#x60; request parameter, and the &#x60;offset&#x60; request parameter. For example if a query returns 175 rows and includes &#x60;limit&#x60; of 50 in the API request, the response will contain &#x60;rowCount&#x60; of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). | [optional] 
**rows** | [**List[GoogleAnalyticsAdminV1alphaAccessRow]**](GoogleAnalyticsAdminV1alphaAccessRow.md) | Rows of dimension value combinations and metric values in the report. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_run_access_report_response import GoogleAnalyticsAdminV1alphaRunAccessReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaRunAccessReportResponse from a JSON string
google_analytics_admin_v1alpha_run_access_report_response_instance = GoogleAnalyticsAdminV1alphaRunAccessReportResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaRunAccessReportResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_run_access_report_response_dict = google_analytics_admin_v1alpha_run_access_report_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaRunAccessReportResponse from a dict
google_analytics_admin_v1alpha_run_access_report_response_from_dict = GoogleAnalyticsAdminV1alphaRunAccessReportResponse.from_dict(google_analytics_admin_v1alpha_run_access_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



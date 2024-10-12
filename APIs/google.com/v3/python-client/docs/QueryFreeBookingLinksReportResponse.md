# QueryFreeBookingLinksReportResponse

**DEPRECATED:** Use `QueryPropertyPerformanceReportResponse` with `PropertyPerformanceReportService` instead. Response message for FreeBookingLinksReportService.QueryFreeBookingLinksReport.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token used to retrieve the next page of results. If this field is omitted, there are no subsequent pages. | [optional] 
**results** | [**List[FreeBookingLinksResult]**](FreeBookingLinksResult.md) | The list of results that match the query. | [optional] 

## Example

```python
from openapi_client.models.query_free_booking_links_report_response import QueryFreeBookingLinksReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryFreeBookingLinksReportResponse from a JSON string
query_free_booking_links_report_response_instance = QueryFreeBookingLinksReportResponse.from_json(json)
# print the JSON string representation of the object
print(QueryFreeBookingLinksReportResponse.to_json())

# convert the object into a dict
query_free_booking_links_report_response_dict = query_free_booking_links_report_response_instance.to_dict()
# create an instance of QueryFreeBookingLinksReportResponse from a dict
query_free_booking_links_report_response_from_dict = QueryFreeBookingLinksReportResponse.from_dict(query_free_booking_links_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# QueryAudienceExportRequest

A request to list users in an audience export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **str** | Optional. The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. &#x60;limit&#x60; must be positive. The API can also return fewer rows than the requested &#x60;limit&#x60;, if there aren&#39;t as many dimension values as the &#x60;limit&#x60;. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). | [optional] 
**offset** | **str** | Optional. The row count of the start row. The first row is counted as row 0. When paging, the first request does not specify offset; or equivalently, sets offset to 0; the first request returns the first &#x60;limit&#x60; of rows. The second request sets offset to the &#x60;limit&#x60; of the first request; the second request returns the second &#x60;limit&#x60; of rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). | [optional] 

## Example

```python
from openapi_client.models.query_audience_export_request import QueryAudienceExportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryAudienceExportRequest from a JSON string
query_audience_export_request_instance = QueryAudienceExportRequest.from_json(json)
# print the JSON string representation of the object
print(QueryAudienceExportRequest.to_json())

# convert the object into a dict
query_audience_export_request_dict = query_audience_export_request_instance.to_dict()
# create an instance of QueryAudienceExportRequest from a dict
query_audience_export_request_from_dict = QueryAudienceExportRequest.from_dict(query_audience_export_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



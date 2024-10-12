# QueryAudienceExportResponse

A list of users in an audience export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience_export** | [**AudienceExport**](AudienceExport.md) |  | [optional] 
**audience_rows** | [**List[V1betaAudienceRow]**](V1betaAudienceRow.md) | Rows for each user in an audience export. The number of rows in this response will be less than or equal to request&#39;s page size. | [optional] 
**row_count** | **int** | The total number of rows in the AudienceExport result. &#x60;rowCount&#x60; is independent of the number of rows returned in the response, the &#x60;limit&#x60; request parameter, and the &#x60;offset&#x60; request parameter. For example if a query returns 175 rows and includes &#x60;limit&#x60; of 50 in the API request, the response will contain &#x60;rowCount&#x60; of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination). | [optional] 

## Example

```python
from openapi_client.models.query_audience_export_response import QueryAudienceExportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryAudienceExportResponse from a JSON string
query_audience_export_response_instance = QueryAudienceExportResponse.from_json(json)
# print the JSON string representation of the object
print(QueryAudienceExportResponse.to_json())

# convert the object into a dict
query_audience_export_response_dict = query_audience_export_response_instance.to_dict()
# create an instance of QueryAudienceExportResponse from a dict
query_audience_export_response_from_dict = QueryAudienceExportResponse.from_dict(query_audience_export_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



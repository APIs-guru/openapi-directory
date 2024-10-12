# QueryParticipationReportResponse

Response message for ParticipationReportService.QueryParticipationReport.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token used to retrieve the next page of results. | [optional] 
**results** | [**List[ParticipationResult]**](ParticipationResult.md) | The list of results that matches the query. | [optional] 

## Example

```python
from openapi_client.models.query_participation_report_response import QueryParticipationReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryParticipationReportResponse from a JSON string
query_participation_report_response_instance = QueryParticipationReportResponse.from_json(json)
# print the JSON string representation of the object
print(QueryParticipationReportResponse.to_json())

# convert the object into a dict
query_participation_report_response_dict = query_participation_report_response_instance.to_dict()
# create an instance of QueryParticipationReportResponse from a dict
query_participation_report_response_from_dict = QueryParticipationReportResponse.from_dict(query_participation_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



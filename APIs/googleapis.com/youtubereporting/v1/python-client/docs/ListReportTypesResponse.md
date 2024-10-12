# ListReportTypesResponse

Response message for ReportingService.ListReportTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve next page of results. Pass this value in the ListReportTypesRequest.page_token field in the subsequent call to &#x60;ListReportTypes&#x60; method to retrieve the next page of results. | [optional] 
**report_types** | [**List[ReportType]**](ReportType.md) | The list of report types. | [optional] 

## Example

```python
from openapi_client.models.list_report_types_response import ListReportTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReportTypesResponse from a JSON string
list_report_types_response_instance = ListReportTypesResponse.from_json(json)
# print the JSON string representation of the object
print(ListReportTypesResponse.to_json())

# convert the object into a dict
list_report_types_response_dict = list_report_types_response_instance.to_dict()
# create an instance of ListReportTypesResponse from a dict
list_report_types_response_from_dict = ListReportTypesResponse.from_dict(list_report_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



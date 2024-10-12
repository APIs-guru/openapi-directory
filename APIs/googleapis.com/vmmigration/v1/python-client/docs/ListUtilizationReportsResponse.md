# ListUtilizationReportsResponse

Response message for 'ListUtilizationReports' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Output only. A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] [readonly] 
**unreachable** | **List[str]** | Output only. Locations that could not be reached. | [optional] [readonly] 
**utilization_reports** | [**List[UtilizationReport]**](UtilizationReport.md) | Output only. The list of reports. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_utilization_reports_response import ListUtilizationReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUtilizationReportsResponse from a JSON string
list_utilization_reports_response_instance = ListUtilizationReportsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUtilizationReportsResponse.to_json())

# convert the object into a dict
list_utilization_reports_response_dict = list_utilization_reports_response_instance.to_dict()
# create an instance of ListUtilizationReportsResponse from a dict
list_utilization_reports_response_from_dict = ListUtilizationReportsResponse.from_dict(list_utilization_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



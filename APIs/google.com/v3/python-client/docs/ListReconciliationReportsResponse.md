# ListReconciliationReportsResponse

Response message for ReconciliationReportService.ListReconciliationReports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reconciliation_reports** | [**List[ReconciliationReport]**](ReconciliationReport.md) | The list of names of reconciliation reports. Note that the &#x60;contents&#x60; and &#x60;fileName&#x60; fields of each &#x60;ReconciliationReport&#x60; object are not returned by this call. | [optional] 

## Example

```python
from openapi_client.models.list_reconciliation_reports_response import ListReconciliationReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReconciliationReportsResponse from a JSON string
list_reconciliation_reports_response_instance = ListReconciliationReportsResponse.from_json(json)
# print the JSON string representation of the object
print(ListReconciliationReportsResponse.to_json())

# convert the object into a dict
list_reconciliation_reports_response_dict = list_reconciliation_reports_response_instance.to_dict()
# create an instance of ListReconciliationReportsResponse from a dict
list_reconciliation_reports_response_from_dict = ListReconciliationReportsResponse.from_dict(list_reconciliation_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



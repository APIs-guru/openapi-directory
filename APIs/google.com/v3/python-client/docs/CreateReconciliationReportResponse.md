# CreateReconciliationReportResponse

Response message for ReconciliationReportService.CreateReconciliationReport.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues** | [**List[ReconciliationReportValidationIssue]**](ReconciliationReportValidationIssue.md) | Issues that were encountered when validating the file. | [optional] 
**reconciliation_report** | [**ReconciliationReport**](ReconciliationReport.md) |  | [optional] 
**successful_record_count** | **int** | The number of commission records that were successfully saved. | [optional] 

## Example

```python
from openapi_client.models.create_reconciliation_report_response import CreateReconciliationReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateReconciliationReportResponse from a JSON string
create_reconciliation_report_response_instance = CreateReconciliationReportResponse.from_json(json)
# print the JSON string representation of the object
print(CreateReconciliationReportResponse.to_json())

# convert the object into a dict
create_reconciliation_report_response_dict = create_reconciliation_report_response_instance.to_dict()
# create an instance of CreateReconciliationReportResponse from a dict
create_reconciliation_report_response_from_dict = CreateReconciliationReportResponse.from_dict(create_reconciliation_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



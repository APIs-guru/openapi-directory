# ValidateReconciliationReportResponse

Response message for ReconciliationReportService.ValidateReconciliationReport.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues** | [**List[ReconciliationReportValidationIssue]**](ReconciliationReportValidationIssue.md) | Issues that were encountered when validating the file. | [optional] 
**successful_record_count** | **int** | The number of commission records that were successfully validated. | [optional] 

## Example

```python
from openapi_client.models.validate_reconciliation_report_response import ValidateReconciliationReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateReconciliationReportResponse from a JSON string
validate_reconciliation_report_response_instance = ValidateReconciliationReportResponse.from_json(json)
# print the JSON string representation of the object
print(ValidateReconciliationReportResponse.to_json())

# convert the object into a dict
validate_reconciliation_report_response_dict = validate_reconciliation_report_response_instance.to_dict()
# create an instance of ValidateReconciliationReportResponse from a dict
validate_reconciliation_report_response_from_dict = ValidateReconciliationReportResponse.from_dict(validate_reconciliation_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



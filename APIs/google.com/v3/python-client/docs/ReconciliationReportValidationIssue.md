# ReconciliationReportValidationIssue

Represents an issue encountered when validating a reconciliation report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Text description of the issue, typically including what was seen and why it was invalid. | [optional] 
**field_name** | **str** | Name of the invalid field. If no field name is given, this issue applies to the whole line (or file). | [optional] 
**line_num** | **int** | The line number on which the issue was detected. If this field is 0, the issue applies to the whole file. | [optional] 

## Example

```python
from openapi_client.models.reconciliation_report_validation_issue import ReconciliationReportValidationIssue

# TODO update the JSON string below
json = "{}"
# create an instance of ReconciliationReportValidationIssue from a JSON string
reconciliation_report_validation_issue_instance = ReconciliationReportValidationIssue.from_json(json)
# print the JSON string representation of the object
print(ReconciliationReportValidationIssue.to_json())

# convert the object into a dict
reconciliation_report_validation_issue_dict = reconciliation_report_validation_issue_instance.to_dict()
# create an instance of ReconciliationReportValidationIssue from a dict
reconciliation_report_validation_issue_from_dict = ReconciliationReportValidationIssue.from_dict(reconciliation_report_validation_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



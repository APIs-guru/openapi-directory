# AssignmentReportResourceComplianceReason

Reason and code for the compliance of the guest configuration assignment resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code for the compliance of the guest configuration assignment resource. | [optional] [readonly] 
**phrase** | **str** | Reason for the compliance of the guest configuration assignment resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assignment_report_resource_compliance_reason import AssignmentReportResourceComplianceReason

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentReportResourceComplianceReason from a JSON string
assignment_report_resource_compliance_reason_instance = AssignmentReportResourceComplianceReason.from_json(json)
# print the JSON string representation of the object
print(AssignmentReportResourceComplianceReason.to_json())

# convert the object into a dict
assignment_report_resource_compliance_reason_dict = assignment_report_resource_compliance_reason_instance.to_dict()
# create an instance of AssignmentReportResourceComplianceReason from a dict
assignment_report_resource_compliance_reason_from_dict = AssignmentReportResourceComplianceReason.from_dict(assignment_report_resource_compliance_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



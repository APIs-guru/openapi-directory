# AssignmentReportDetails

Details of the guest configuration assignment report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance_status** | **str** | A value indicating compliance status of the virtual machine for the assigned guest configuration. | [optional] [readonly] 
**end_time** | **datetime** | End date and time of the guest configuration assignment compliance status check. | [optional] [readonly] 
**job_id** | **str** | GUID of the report. | [optional] [readonly] 
**operation_type** | **str** | Type of report, Consistency or Initial | [optional] [readonly] 
**resources** | [**List[AssignmentReportResource]**](AssignmentReportResource.md) | The list of resources for which guest configuration assignment compliance is checked. | [optional] 
**start_time** | **datetime** | Start date and time of the guest configuration assignment compliance status check. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assignment_report_details import AssignmentReportDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentReportDetails from a JSON string
assignment_report_details_instance = AssignmentReportDetails.from_json(json)
# print the JSON string representation of the object
print(AssignmentReportDetails.to_json())

# convert the object into a dict
assignment_report_details_dict = assignment_report_details_instance.to_dict()
# create an instance of AssignmentReportDetails from a dict
assignment_report_details_from_dict = AssignmentReportDetails.from_dict(assignment_report_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AssignmentReportResource

The guest configuration assignment resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance_status** | **str** | A value indicating compliance status of the virtual machine for the assigned guest configuration. | [optional] [readonly] 
**properties** | **object** | Properties of a guest configuration assignment resource. | [optional] [readonly] 
**reasons** | [**List[AssignmentReportResourceComplianceReason]**](AssignmentReportResourceComplianceReason.md) | Compliance reason and reason code for a resource. | [optional] 

## Example

```python
from openapi_client.models.assignment_report_resource import AssignmentReportResource

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentReportResource from a JSON string
assignment_report_resource_instance = AssignmentReportResource.from_json(json)
# print the JSON string representation of the object
print(AssignmentReportResource.to_json())

# convert the object into a dict
assignment_report_resource_dict = assignment_report_resource_instance.to_dict()
# create an instance of AssignmentReportResource from a dict
assignment_report_resource_from_dict = AssignmentReportResource.from_dict(assignment_report_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



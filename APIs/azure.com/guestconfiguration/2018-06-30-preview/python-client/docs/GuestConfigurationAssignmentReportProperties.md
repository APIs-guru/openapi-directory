# GuestConfigurationAssignmentReportProperties

Report for the guest configuration assignment. Report contains information such as compliance status, reason, and more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment** | [**AssignmentInfo**](AssignmentInfo.md) |  | [optional] 
**compliance_status** | **str** | A value indicating compliance status of the virtual machine for the assigned guest configuration. | [optional] [readonly] 
**details** | [**AssignmentReportDetails**](AssignmentReportDetails.md) |  | [optional] 
**end_time** | **datetime** | End date and time of the guest configuration assignment compliance status check. | [optional] [readonly] 
**report_id** | **str** | GUID that identifies the guest configuration assignment report under a subscription, resource group. | [optional] [readonly] 
**start_time** | **datetime** | Start date and time of the guest configuration assignment compliance status check. | [optional] [readonly] 
**vm** | [**VMInfo**](VMInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.guest_configuration_assignment_report_properties import GuestConfigurationAssignmentReportProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GuestConfigurationAssignmentReportProperties from a JSON string
guest_configuration_assignment_report_properties_instance = GuestConfigurationAssignmentReportProperties.from_json(json)
# print the JSON string representation of the object
print(GuestConfigurationAssignmentReportProperties.to_json())

# convert the object into a dict
guest_configuration_assignment_report_properties_dict = guest_configuration_assignment_report_properties_instance.to_dict()
# create an instance of GuestConfigurationAssignmentReportProperties from a dict
guest_configuration_assignment_report_properties_from_dict = GuestConfigurationAssignmentReportProperties.from_dict(guest_configuration_assignment_report_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



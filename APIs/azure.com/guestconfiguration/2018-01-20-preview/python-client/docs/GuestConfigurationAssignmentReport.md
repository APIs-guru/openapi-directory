# GuestConfigurationAssignmentReport

Report for the guest configuration. Report contains information such as compliance status, reason and more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_version** | **str** | Configuration version of the report for the guest configuration assignment. | [optional] 
**end_time** | **datetime** | End time of the report for the guest configuration assignment. | [optional] 
**id** | **str** | ARM resource id of the report for the guest configuration assignment. | [optional] [readonly] 
**last_modified_time** | **datetime** | Last modified time report for the guest configuration assignment. | [optional] 
**reboot_requested** | **str** | The value indicating whether reboot is requested for the report. | [optional] 
**refresh_mode** | **str** | Refresh mode of the node report, push or pull. | [optional] 
**report_format_version** | **str** | Report format version of the report for the guest configuration assignment. | [optional] 
**report_id** | **str** | GUID of the report for the guest configuration assignment. | [optional] [readonly] 
**start_time** | **datetime** | Start time of the report for the guest configuration assignment. | [optional] 
**status** | **str** | A value indicating compliance status of the virtual machine for the assigned guest configuration. | [optional] [readonly] 
**type** | **str** | Type of report, Consistency or Initial | [optional] [readonly] 

## Example

```python
from openapi_client.models.guest_configuration_assignment_report import GuestConfigurationAssignmentReport

# TODO update the JSON string below
json = "{}"
# create an instance of GuestConfigurationAssignmentReport from a JSON string
guest_configuration_assignment_report_instance = GuestConfigurationAssignmentReport.from_json(json)
# print the JSON string representation of the object
print(GuestConfigurationAssignmentReport.to_json())

# convert the object into a dict
guest_configuration_assignment_report_dict = guest_configuration_assignment_report_instance.to_dict()
# create an instance of GuestConfigurationAssignmentReport from a dict
guest_configuration_assignment_report_from_dict = GuestConfigurationAssignmentReport.from_dict(guest_configuration_assignment_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



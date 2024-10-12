# GuestConfigurationAssignmentReport

Report for the guest configuration assignment. Report contains information such as compliance status, reason, and more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ARM resource id of the report for the guest configuration assignment. | [optional] [readonly] 
**name** | **str** | GUID that identifies the guest configuration assignment report under a subscription, resource group. | [optional] [readonly] 
**properties** | [**GuestConfigurationAssignmentReportProperties**](GuestConfigurationAssignmentReportProperties.md) |  | [optional] 

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



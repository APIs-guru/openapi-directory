# GuestConfigurationAssignmentReportList

List of guest configuration assignment reports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[GuestConfigurationAssignmentReport]**](GuestConfigurationAssignmentReport.md) | List of reports for the guest configuration. Report contains information such as compliance status, reason and more. | [optional] 

## Example

```python
from openapi_client.models.guest_configuration_assignment_report_list import GuestConfigurationAssignmentReportList

# TODO update the JSON string below
json = "{}"
# create an instance of GuestConfigurationAssignmentReportList from a JSON string
guest_configuration_assignment_report_list_instance = GuestConfigurationAssignmentReportList.from_json(json)
# print the JSON string representation of the object
print(GuestConfigurationAssignmentReportList.to_json())

# convert the object into a dict
guest_configuration_assignment_report_list_dict = guest_configuration_assignment_report_list_instance.to_dict()
# create an instance of GuestConfigurationAssignmentReportList from a dict
guest_configuration_assignment_report_list_from_dict = GuestConfigurationAssignmentReportList.from_dict(guest_configuration_assignment_report_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



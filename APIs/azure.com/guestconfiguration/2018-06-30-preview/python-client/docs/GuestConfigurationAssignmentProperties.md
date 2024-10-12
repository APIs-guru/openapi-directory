# GuestConfigurationAssignmentProperties

Guest configuration assignment properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment_hash** | **str** | Combined hash of the configuration package and parameters. | [optional] [readonly] 
**compliance_status** | **str** | A value indicating compliance status of the virtual machine for the assigned guest configuration. | [optional] [readonly] 
**context** | **str** | The source which initiated the guest configuration assignment. Ex: Azure Policy | [optional] 
**guest_configuration** | [**GuestConfigurationNavigation**](GuestConfigurationNavigation.md) |  | [optional] 
**last_compliance_status_checked** | **datetime** | Date and time when last compliance status was checked. | [optional] [readonly] 
**latest_report_id** | **str** | Id of the latest report for the guest configuration assignment.  | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state, which only appears in the response. | [optional] [readonly] 

## Example

```python
from openapi_client.models.guest_configuration_assignment_properties import GuestConfigurationAssignmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GuestConfigurationAssignmentProperties from a JSON string
guest_configuration_assignment_properties_instance = GuestConfigurationAssignmentProperties.from_json(json)
# print the JSON string representation of the object
print(GuestConfigurationAssignmentProperties.to_json())

# convert the object into a dict
guest_configuration_assignment_properties_dict = guest_configuration_assignment_properties_instance.to_dict()
# create an instance of GuestConfigurationAssignmentProperties from a dict
guest_configuration_assignment_properties_from_dict = GuestConfigurationAssignmentProperties.from_dict(guest_configuration_assignment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



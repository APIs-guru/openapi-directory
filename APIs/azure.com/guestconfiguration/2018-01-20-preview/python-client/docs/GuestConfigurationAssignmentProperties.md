# GuestConfigurationAssignmentProperties

Properties of guest configuration assignment object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment_hash** | **str** | Combined hash of the configuration package and parameters. | [optional] [readonly] 
**compliance_reason** | **str** | Reason for the complianceStatus for the assigned guest configuration. | [optional] [readonly] 
**compliance_status** | **str** | A value indicating compliance status of the virtual machine for the assigned guest configuration. | [optional] [readonly] 
**guest_configuration** | [**GuestConfigurationNavigation**](GuestConfigurationNavigation.md) |  | [optional] 
**latest_report_id** | **str** | Id of the latest guest configuration assignment report. | [optional] [readonly] 
**location** | **str** | Region where VM is located. | [optional] [readonly] 
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



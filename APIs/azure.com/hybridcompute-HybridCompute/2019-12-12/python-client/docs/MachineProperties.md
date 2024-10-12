# MachineProperties

Describes the properties of a hybrid machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | The hybrid machine agent full version. | [optional] [readonly] 
**client_public_key** | **str** | Public Key that the client provides to be used during initial resource onboarding | [optional] 
**display_name** | **str** | Specifies the hybrid machine display name. | [optional] [readonly] 
**error_details** | [**List[ErrorDetail]**](ErrorDetail.md) | Details about the error state. | [optional] [readonly] 
**extensions** | [**List[MachineExtensionInstanceView]**](MachineExtensionInstanceView.md) | Machine Extensions information | [optional] 
**last_status_change** | **datetime** | The time of the last status change. | [optional] [readonly] 
**location_data** | [**MachinePropertiesLocationData**](MachinePropertiesLocationData.md) |  | [optional] 
**machine_fqdn** | **str** | Specifies the hybrid machine FQDN. | [optional] [readonly] 
**os_name** | **str** | The Operating System running on the hybrid machine. | [optional] [readonly] 
**os_profile** | [**OSProfile**](OSProfile.md) | Specifies the operating system settings for the hybrid machine. | [optional] 
**os_version** | **str** | The version of Operating System running on the hybrid machine. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state, which only appears in the response. | [optional] [readonly] 
**status** | **str** | The status of the hybrid machine agent. | [optional] [readonly] 
**vm_id** | **str** | Specifies the hybrid machine unique ID. | [optional] 

## Example

```python
from openapi_client.models.machine_properties import MachineProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MachineProperties from a JSON string
machine_properties_instance = MachineProperties.from_json(json)
# print the JSON string representation of the object
print(MachineProperties.to_json())

# convert the object into a dict
machine_properties_dict = machine_properties_instance.to_dict()
# create an instance of MachineProperties from a dict
machine_properties_from_dict = MachineProperties.from_dict(machine_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



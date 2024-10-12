# VirtualMachineThreatDetectionSettings

Resource capturing the settings for the Virtual Machine Threat Detection service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modules** | [**Dict[str, Config]**](Config.md) | The configurations including the state of enablement for the service&#39;s different modules. The absence of a module in the map implies its configuration is inherited from its parent&#39;s. | [optional] 
**name** | **str** | The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings | [optional] 
**service_account** | **str** | Output only. The service account used by Virtual Machine Threat Detection detectors. | [optional] [readonly] 
**service_enablement_state** | **str** | The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. | [optional] 
**update_time** | **str** | Output only. The time the settings were last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_threat_detection_settings import VirtualMachineThreatDetectionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineThreatDetectionSettings from a JSON string
virtual_machine_threat_detection_settings_instance = VirtualMachineThreatDetectionSettings.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineThreatDetectionSettings.to_json())

# convert the object into a dict
virtual_machine_threat_detection_settings_dict = virtual_machine_threat_detection_settings_instance.to_dict()
# create an instance of VirtualMachineThreatDetectionSettings from a dict
virtual_machine_threat_detection_settings_from_dict = VirtualMachineThreatDetectionSettings.from_dict(virtual_machine_threat_detection_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



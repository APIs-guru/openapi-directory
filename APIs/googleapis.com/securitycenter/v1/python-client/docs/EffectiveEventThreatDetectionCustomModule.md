# EffectiveEventThreatDetectionCustomModule

An EffectiveEventThreatDetectionCustomModule is the representation of an Event Threat Detection custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablement_state` property in EffectiveEventThreatDetectionCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective `enablement_state` for the module in all child folders or projects is also `enabled`. EffectiveEventThreatDetectionCustomModule is read-only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **Dict[str, object]** | Output only. Config for the effective module. | [optional] [readonly] 
**description** | **str** | Output only. The description for the module. | [optional] [readonly] 
**display_name** | **str** | Output only. The human readable name to be displayed for the module. | [optional] [readonly] 
**enablement_state** | **str** | Output only. The effective state of enablement for the module at the given level of the hierarchy. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the effective ETD custom module. Its format is: * \&quot;organizations/{organization}/eventThreatDetectionSettings/effectiveCustomModules/{module}\&quot;. * \&quot;folders/{folder}/eventThreatDetectionSettings/effectiveCustomModules/{module}\&quot;. * \&quot;projects/{project}/eventThreatDetectionSettings/effectiveCustomModules/{module}\&quot;. | [optional] [readonly] 
**type** | **str** | Output only. Type for the module. e.g. CONFIGURABLE_BAD_IP. | [optional] [readonly] 

## Example

```python
from openapi_client.models.effective_event_threat_detection_custom_module import EffectiveEventThreatDetectionCustomModule

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveEventThreatDetectionCustomModule from a JSON string
effective_event_threat_detection_custom_module_instance = EffectiveEventThreatDetectionCustomModule.from_json(json)
# print the JSON string representation of the object
print(EffectiveEventThreatDetectionCustomModule.to_json())

# convert the object into a dict
effective_event_threat_detection_custom_module_dict = effective_event_threat_detection_custom_module_instance.to_dict()
# create an instance of EffectiveEventThreatDetectionCustomModule from a dict
effective_event_threat_detection_custom_module_from_dict = EffectiveEventThreatDetectionCustomModule.from_dict(effective_event_threat_detection_custom_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



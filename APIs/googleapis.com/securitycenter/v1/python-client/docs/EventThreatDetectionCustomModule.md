# EventThreatDetectionCustomModule

Represents an instance of an Event Threat Detection custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or project level. Custom modules that you create at the organization or folder level are inherited by child folders and projects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestor_module** | **str** | Output only. The closest ancestor module that this module inherits the enablement state from. The format is the same as the EventThreatDetectionCustomModule resource name. | [optional] [readonly] 
**config** | **Dict[str, object]** | Config for the module. For the resident module, its config value is defined at this level. For the inherited module, its config value is inherited from the ancestor module. | [optional] 
**description** | **str** | The description for the module. | [optional] 
**display_name** | **str** | The human readable name to be displayed for the module. | [optional] 
**enablement_state** | **str** | The state of enablement for the module at the given level of the hierarchy. | [optional] 
**last_editor** | **str** | Output only. The editor the module was last updated by. | [optional] [readonly] 
**name** | **str** | Immutable. The resource name of the Event Threat Detection custom module. Its format is: * \&quot;organizations/{organization}/eventThreatDetectionSettings/customModules/{module}\&quot;. * \&quot;folders/{folder}/eventThreatDetectionSettings/customModules/{module}\&quot;. * \&quot;projects/{project}/eventThreatDetectionSettings/customModules/{module}\&quot;. | [optional] 
**type** | **str** | Type for the module. e.g. CONFIGURABLE_BAD_IP. | [optional] 
**update_time** | **str** | Output only. The time the module was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_threat_detection_custom_module import EventThreatDetectionCustomModule

# TODO update the JSON string below
json = "{}"
# create an instance of EventThreatDetectionCustomModule from a JSON string
event_threat_detection_custom_module_instance = EventThreatDetectionCustomModule.from_json(json)
# print the JSON string representation of the object
print(EventThreatDetectionCustomModule.to_json())

# convert the object into a dict
event_threat_detection_custom_module_dict = event_threat_detection_custom_module_instance.to_dict()
# create an instance of EventThreatDetectionCustomModule from a dict
event_threat_detection_custom_module_from_dict = EventThreatDetectionCustomModule.from_dict(event_threat_detection_custom_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



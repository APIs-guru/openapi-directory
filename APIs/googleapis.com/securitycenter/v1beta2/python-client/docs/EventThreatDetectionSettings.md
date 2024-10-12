# EventThreatDetectionSettings

Resource capturing the settings for the Event Threat Detection service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modules** | [**Dict[str, Config]**](Config.md) | The configurations including the state of enablement for the service&#39;s different modules. The absence of a module in the map implies its configuration is inherited from its parent&#39;s. | [optional] 
**name** | **str** | The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings | [optional] 
**service_enablement_state** | **str** | The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. | [optional] 
**update_time** | **str** | Output only. The time the settings were last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_threat_detection_settings import EventThreatDetectionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of EventThreatDetectionSettings from a JSON string
event_threat_detection_settings_instance = EventThreatDetectionSettings.from_json(json)
# print the JSON string representation of the object
print(EventThreatDetectionSettings.to_json())

# convert the object into a dict
event_threat_detection_settings_dict = event_threat_detection_settings_instance.to_dict()
# create an instance of EventThreatDetectionSettings from a dict
event_threat_detection_settings_from_dict = EventThreatDetectionSettings.from_dict(event_threat_detection_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



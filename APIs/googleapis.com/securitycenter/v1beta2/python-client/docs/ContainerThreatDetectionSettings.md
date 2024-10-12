# ContainerThreatDetectionSettings

Resource capturing the settings for the Container Threat Detection service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modules** | [**Dict[str, Config]**](Config.md) | The configurations including the state of enablement for the service&#39;s different modules. The absence of a module in the map implies its configuration is inherited from its parent&#39;s. | [optional] 
**name** | **str** | The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings | [optional] 
**service_account** | **str** | Output only. The service account used by Container Threat Detection for scanning. Service accounts are scoped at the project level meaning this field will be empty at any level above a project. | [optional] [readonly] 
**service_enablement_state** | **str** | The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. | [optional] 
**update_time** | **str** | Output only. The time the settings were last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.container_threat_detection_settings import ContainerThreatDetectionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerThreatDetectionSettings from a JSON string
container_threat_detection_settings_instance = ContainerThreatDetectionSettings.from_json(json)
# print the JSON string representation of the object
print(ContainerThreatDetectionSettings.to_json())

# convert the object into a dict
container_threat_detection_settings_dict = container_threat_detection_settings_instance.to_dict()
# create an instance of ContainerThreatDetectionSettings from a dict
container_threat_detection_settings_from_dict = ContainerThreatDetectionSettings.from_dict(container_threat_detection_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



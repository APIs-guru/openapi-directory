# SecurityHealthAnalyticsSettings

Resource capturing the settings for the Security Health Analytics service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modules** | [**Dict[str, Config]**](Config.md) | The configurations including the state of enablement for the service&#39;s different modules. The absence of a module in the map implies its configuration is inherited from its parent&#39;s. | [optional] 
**name** | **str** | The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings | [optional] 
**service_account** | **str** | Output only. The service account used by Security Health Analytics detectors. | [optional] [readonly] 
**service_enablement_state** | **str** | The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. | [optional] 
**update_time** | **str** | Output only. The time the settings were last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_health_analytics_settings import SecurityHealthAnalyticsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityHealthAnalyticsSettings from a JSON string
security_health_analytics_settings_instance = SecurityHealthAnalyticsSettings.from_json(json)
# print the JSON string representation of the object
print(SecurityHealthAnalyticsSettings.to_json())

# convert the object into a dict
security_health_analytics_settings_dict = security_health_analytics_settings_instance.to_dict()
# create an instance of SecurityHealthAnalyticsSettings from a dict
security_health_analytics_settings_from_dict = SecurityHealthAnalyticsSettings.from_dict(security_health_analytics_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# HealthProbeSettingsModel

Load balancing settings for a backend pool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Resource name. | [optional] 
**properties** | [**HealthProbeSettingsProperties**](HealthProbeSettingsProperties.md) |  | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.health_probe_settings_model import HealthProbeSettingsModel

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProbeSettingsModel from a JSON string
health_probe_settings_model_instance = HealthProbeSettingsModel.from_json(json)
# print the JSON string representation of the object
print(HealthProbeSettingsModel.to_json())

# convert the object into a dict
health_probe_settings_model_dict = health_probe_settings_model_instance.to_dict()
# create an instance of HealthProbeSettingsModel from a dict
health_probe_settings_model_from_dict = HealthProbeSettingsModel.from_dict(health_probe_settings_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



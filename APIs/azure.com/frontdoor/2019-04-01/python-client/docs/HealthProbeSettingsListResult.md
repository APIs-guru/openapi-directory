# HealthProbeSettingsListResult

Result of the request to list HealthProbeSettings. It contains a list of HealthProbeSettings objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of HealthProbeSettings objects if there are any. | [optional] 
**value** | [**List[HealthProbeSettingsModel]**](HealthProbeSettingsModel.md) | List of HealthProbeSettings within a Front Door. | [optional] [readonly] 

## Example

```python
from openapi_client.models.health_probe_settings_list_result import HealthProbeSettingsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProbeSettingsListResult from a JSON string
health_probe_settings_list_result_instance = HealthProbeSettingsListResult.from_json(json)
# print the JSON string representation of the object
print(HealthProbeSettingsListResult.to_json())

# convert the object into a dict
health_probe_settings_list_result_dict = health_probe_settings_list_result_instance.to_dict()
# create an instance of HealthProbeSettingsListResult from a dict
health_probe_settings_list_result_from_dict = HealthProbeSettingsListResult.from_dict(health_probe_settings_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



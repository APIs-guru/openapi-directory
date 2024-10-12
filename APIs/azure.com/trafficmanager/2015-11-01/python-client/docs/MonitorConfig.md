# MonitorConfig

Class containing endpoint monitoring settings in a Traffic Manager profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Gets or sets the path relative to the endpoint domain name used to probe for endpoint health. | [optional] 
**port** | **int** | Gets or sets the TCP port used to probe for endpoint health. | [optional] 
**profile_monitor_status** | **str** | Gets or sets the profile-level monitoring status of the Traffic Manager profile. | [optional] 
**protocol** | **str** | Gets or sets the protocol (HTTP or HTTPS) used to probe for endpoint health. | [optional] 

## Example

```python
from openapi_client.models.monitor_config import MonitorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorConfig from a JSON string
monitor_config_instance = MonitorConfig.from_json(json)
# print the JSON string representation of the object
print(MonitorConfig.to_json())

# convert the object into a dict
monitor_config_dict = monitor_config_instance.to_dict()
# create an instance of MonitorConfig from a dict
monitor_config_from_dict = MonitorConfig.from_dict(monitor_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



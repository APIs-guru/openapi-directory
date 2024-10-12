# MonitorConfig

Class containing endpoint monitoring settings in a Traffic Manager profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_headers** | [**List[EndpointPropertiesCustomHeadersInner]**](EndpointPropertiesCustomHeadersInner.md) | List of custom headers. | [optional] 
**expected_status_code_ranges** | [**List[MonitorConfigExpectedStatusCodeRangesInner]**](MonitorConfigExpectedStatusCodeRangesInner.md) | List of expected status code ranges. | [optional] 
**interval_in_seconds** | **int** | The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile. | [optional] 
**path** | **str** | The path relative to the endpoint domain name used to probe for endpoint health. | [optional] 
**port** | **int** | The TCP port used to probe for endpoint health. | [optional] 
**profile_monitor_status** | **str** | The profile-level monitoring status of the Traffic Manager profile. | [optional] 
**protocol** | **str** | The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health. | [optional] 
**timeout_in_seconds** | **int** | The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check. | [optional] 
**tolerated_number_of_failures** | **int** | The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check. | [optional] 

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



# MonitoringPolicy

The policy of the monitoring

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_action** | **str** |  | [optional] 
**health_check_retry_timeout_in_milliseconds** | **str** |  | [optional] 
**health_check_stable_duration_in_milliseconds** | **str** |  | [optional] 
**health_check_wait_duration_in_milliseconds** | **str** |  | [optional] 
**upgrade_domain_timeout_in_milliseconds** | **str** |  | [optional] 
**upgrade_timeout_in_milliseconds** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.monitoring_policy import MonitoringPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringPolicy from a JSON string
monitoring_policy_instance = MonitoringPolicy.from_json(json)
# print the JSON string representation of the object
print(MonitoringPolicy.to_json())

# convert the object into a dict
monitoring_policy_dict = monitoring_policy_instance.to_dict()
# create an instance of MonitoringPolicy from a dict
monitoring_policy_from_dict = MonitoringPolicy.from_dict(monitoring_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# HealthMonitor

Health Monitor Description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Health Monitor Details | [optional] [readonly] 
**id** | **str** | Health Monitor Id | [optional] [readonly] 
**name** | **str** | Health Monitor Name | [optional] [readonly] 

## Example

```python
from openapi_client.models.health_monitor import HealthMonitor

# TODO update the JSON string below
json = "{}"
# create an instance of HealthMonitor from a JSON string
health_monitor_instance = HealthMonitor.from_json(json)
# print the JSON string representation of the object
print(HealthMonitor.to_json())

# convert the object into a dict
health_monitor_dict = health_monitor_instance.to_dict()
# create an instance of HealthMonitor from a dict
health_monitor_from_dict = HealthMonitor.from_dict(health_monitor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



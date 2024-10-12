# HealthAlert

Health Alert Description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Health Alert Id | [optional] [readonly] 
**issue** | **str** | Health Alert Issue | [optional] [readonly] 
**last_detected** | **datetime** | Health Alert Last Detected DateTime | [optional] [readonly] 
**name** | **str** | Health Alert Name | [optional] [readonly] 
**raised** | **datetime** | Health Alert Raised DateTime | [optional] [readonly] 
**resolution_uri** | **str** | Health Alert TSG Link | [optional] [readonly] 
**severity** | **str** | Health Alert Severity | [optional] [readonly] 

## Example

```python
from openapi_client.models.health_alert import HealthAlert

# TODO update the JSON string below
json = "{}"
# create an instance of HealthAlert from a JSON string
health_alert_instance = HealthAlert.from_json(json)
# print the JSON string representation of the object
print(HealthAlert.to_json())

# convert the object into a dict
health_alert_dict = health_alert_instance.to_dict()
# create an instance of HealthAlert from a dict
health_alert_from_dict = HealthAlert.from_dict(health_alert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



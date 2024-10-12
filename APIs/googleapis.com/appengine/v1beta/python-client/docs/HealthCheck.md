# HealthCheck

Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_interval** | **str** | Interval between health checks. | [optional] 
**disable_health_check** | **bool** | Whether to explicitly disable health checks for this instance. | [optional] 
**healthy_threshold** | **int** | Number of consecutive successful health checks required before receiving traffic. | [optional] 
**host** | **str** | Host header to send when performing an HTTP health check. Example: \&quot;myapp.appspot.com\&quot; | [optional] 
**restart_threshold** | **int** | Number of consecutive failed health checks required before an instance is restarted. | [optional] 
**timeout** | **str** | Time before the health check is considered failed. | [optional] 
**unhealthy_threshold** | **int** | Number of consecutive failed health checks required before removing traffic. | [optional] 

## Example

```python
from openapi_client.models.health_check import HealthCheck

# TODO update the JSON string below
json = "{}"
# create an instance of HealthCheck from a JSON string
health_check_instance = HealthCheck.from_json(json)
# print the JSON string representation of the object
print(HealthCheck.to_json())

# convert the object into a dict
health_check_dict = health_check_instance.to_dict()
# create an instance of HealthCheck from a dict
health_check_from_dict = HealthCheck.from_dict(health_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



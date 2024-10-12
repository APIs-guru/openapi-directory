# HealthCheck


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_interval_sec** | **int** | How often (in seconds) to make HTTP requests for this healthcheck. The default value is 5 seconds. | [optional] 
**description** | **str** | The description for this health check. | [optional] 
**healthy_threshold** | **int** | The number of consecutive health check requests that need to succeed before the replica is considered healthy again. The default value is 2. | [optional] 
**host** | **str** | The value of the host header in the HTTP health check request. If left empty (default value), the localhost IP 127.0.0.1 will be used. | [optional] 
**name** | **str** | The name of this health check. | [optional] 
**path** | **str** | The localhost request path to send this health check, in the format /path/to/use. For example, /healthcheck. | [optional] 
**port** | **int** | The TCP port for the health check requests. | [optional] 
**timeout_sec** | **int** | How long (in seconds) to wait before a timeout failure for this healthcheck. The default value is 5 seconds. | [optional] 
**unhealthy_threshold** | **int** | The number of consecutive health check requests that need to fail in order to consider the replica unhealthy. The default value is 2. | [optional] 

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



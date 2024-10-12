# AutomaticScaling

Automatic scaling is based on request rate, response latencies, and other application metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cool_down_period** | **str** | The time period that the Autoscaler (https://cloud.google.com/compute/docs/autoscaler/) should wait before it starts collecting information from a new instance. This prevents the autoscaler from collecting information when the instance is initializing, during which the collected usage would not be reliable. Only applicable in the App Engine flexible environment. | [optional] 
**cpu_utilization** | [**CpuUtilization**](CpuUtilization.md) |  | [optional] 
**custom_metrics** | [**List[CustomMetric]**](CustomMetric.md) | Target scaling by user-provided metrics. Only applicable in the App Engine flexible environment. | [optional] 
**disk_utilization** | [**DiskUtilization**](DiskUtilization.md) |  | [optional] 
**max_concurrent_requests** | **int** | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.Defaults to a runtime-specific value. | [optional] 
**max_idle_instances** | **int** | Maximum number of idle instances that should be maintained for this version. | [optional] 
**max_pending_latency** | **str** | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. | [optional] 
**max_total_instances** | **int** | Maximum number of instances that should be started to handle requests for this version. | [optional] 
**min_idle_instances** | **int** | Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service. | [optional] 
**min_pending_latency** | **str** | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. | [optional] 
**min_total_instances** | **int** | Minimum number of running instances that should be maintained for this version. | [optional] 
**network_utilization** | [**NetworkUtilization**](NetworkUtilization.md) |  | [optional] 
**request_utilization** | [**RequestUtilization**](RequestUtilization.md) |  | [optional] 
**standard_scheduler_settings** | [**StandardSchedulerSettings**](StandardSchedulerSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.automatic_scaling import AutomaticScaling

# TODO update the JSON string below
json = "{}"
# create an instance of AutomaticScaling from a JSON string
automatic_scaling_instance = AutomaticScaling.from_json(json)
# print the JSON string representation of the object
print(AutomaticScaling.to_json())

# convert the object into a dict
automatic_scaling_dict = automatic_scaling_instance.to_dict()
# create an instance of AutomaticScaling from a dict
automatic_scaling_from_dict = AutomaticScaling.from_dict(automatic_scaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



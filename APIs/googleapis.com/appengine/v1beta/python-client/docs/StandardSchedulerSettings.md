# StandardSchedulerSettings

Scheduler settings for standard environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_instances** | **int** | Maximum number of instances to run for this version. Set to zero to disable max_instances configuration. | [optional] 
**min_instances** | **int** | Minimum number of instances to run for this version. Set to zero to disable min_instances configuration. | [optional] 
**target_cpu_utilization** | **float** | Target CPU utilization ratio to maintain when scaling. | [optional] 
**target_throughput_utilization** | **float** | Target throughput utilization ratio to maintain when scaling | [optional] 

## Example

```python
from openapi_client.models.standard_scheduler_settings import StandardSchedulerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of StandardSchedulerSettings from a JSON string
standard_scheduler_settings_instance = StandardSchedulerSettings.from_json(json)
# print the JSON string representation of the object
print(StandardSchedulerSettings.to_json())

# convert the object into a dict
standard_scheduler_settings_dict = standard_scheduler_settings_instance.to_dict()
# create an instance of StandardSchedulerSettings from a dict
standard_scheduler_settings_from_dict = StandardSchedulerSettings.from_dict(standard_scheduler_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ContainerCpuStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_usage** | [**ContainerCpuUsage**](ContainerCpuUsage.md) |  | [optional] 
**online_cpu_count** | **int** |  | [optional] 
**system_cpu_usage** | **int** |  | [optional] 
**throttling_data** | [**ContainerThrottlingData**](ContainerThrottlingData.md) |  | [optional] 

## Example

```python
from openapi_client.models.container_cpu_statistics import ContainerCpuStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerCpuStatistics from a JSON string
container_cpu_statistics_instance = ContainerCpuStatistics.from_json(json)
# print the JSON string representation of the object
print(ContainerCpuStatistics.to_json())

# convert the object into a dict
container_cpu_statistics_dict = container_cpu_statistics_instance.to_dict()
# create an instance of ContainerCpuStatistics from a dict
container_cpu_statistics_from_dict = ContainerCpuStatistics.from_dict(container_cpu_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



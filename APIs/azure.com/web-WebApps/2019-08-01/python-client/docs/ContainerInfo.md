# ContainerInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_cpu_stats** | [**ContainerCpuStatistics**](ContainerCpuStatistics.md) |  | [optional] 
**current_time_stamp** | **datetime** |  | [optional] 
**eth0** | [**ContainerNetworkInterfaceStatistics**](ContainerNetworkInterfaceStatistics.md) |  | [optional] 
**id** | **str** |  | [optional] 
**memory_stats** | [**ContainerMemoryStatistics**](ContainerMemoryStatistics.md) |  | [optional] 
**name** | **str** |  | [optional] 
**previous_cpu_stats** | [**ContainerCpuStatistics**](ContainerCpuStatistics.md) |  | [optional] 
**previous_time_stamp** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.container_info import ContainerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerInfo from a JSON string
container_info_instance = ContainerInfo.from_json(json)
# print the JSON string representation of the object
print(ContainerInfo.to_json())

# convert the object into a dict
container_info_dict = container_info_instance.to_dict()
# create an instance of ContainerInfo from a dict
container_info_from_dict = ContainerInfo.from_dict(container_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



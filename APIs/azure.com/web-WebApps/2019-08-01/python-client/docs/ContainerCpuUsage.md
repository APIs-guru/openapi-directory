# ContainerCpuUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kernel_mode_usage** | **int** |  | [optional] 
**per_cpu_usage** | **List[int]** |  | [optional] 
**total_usage** | **int** |  | [optional] 
**user_mode_usage** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.container_cpu_usage import ContainerCpuUsage

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerCpuUsage from a JSON string
container_cpu_usage_instance = ContainerCpuUsage.from_json(json)
# print the JSON string representation of the object
print(ContainerCpuUsage.to_json())

# convert the object into a dict
container_cpu_usage_dict = container_cpu_usage_instance.to_dict()
# create an instance of ContainerCpuUsage from a dict
container_cpu_usage_from_dict = ContainerCpuUsage.from_dict(container_cpu_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



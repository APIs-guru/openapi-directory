# ContainerMemoryStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** |  | [optional] 
**max_usage** | **int** |  | [optional] 
**usage** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.container_memory_statistics import ContainerMemoryStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerMemoryStatistics from a JSON string
container_memory_statistics_instance = ContainerMemoryStatistics.from_json(json)
# print the JSON string representation of the object
print(ContainerMemoryStatistics.to_json())

# convert the object into a dict
container_memory_statistics_dict = container_memory_statistics_instance.to_dict()
# create an instance of ContainerMemoryStatistics from a dict
container_memory_statistics_from_dict = ContainerMemoryStatistics.from_dict(container_memory_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



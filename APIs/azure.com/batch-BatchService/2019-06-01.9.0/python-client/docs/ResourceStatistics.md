# ResourceStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_cpu_percentage** | **float** |  | 
**avg_disk_gi_b** | **float** |  | 
**avg_memory_gi_b** | **float** |  | 
**disk_read_gi_b** | **float** |  | 
**disk_read_i_ops** | **int** |  | 
**disk_write_gi_b** | **float** |  | 
**disk_write_i_ops** | **int** |  | 
**last_update_time** | **datetime** |  | 
**network_read_gi_b** | **float** |  | 
**network_write_gi_b** | **float** |  | 
**peak_disk_gi_b** | **float** |  | 
**peak_memory_gi_b** | **float** |  | 
**start_time** | **datetime** |  | 

## Example

```python
from openapi_client.models.resource_statistics import ResourceStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceStatistics from a JSON string
resource_statistics_instance = ResourceStatistics.from_json(json)
# print the JSON string representation of the object
print(ResourceStatistics.to_json())

# convert the object into a dict
resource_statistics_dict = resource_statistics_instance.to_dict()
# create an instance of ResourceStatistics from a dict
resource_statistics_from_dict = ResourceStatistics.from_dict(resource_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



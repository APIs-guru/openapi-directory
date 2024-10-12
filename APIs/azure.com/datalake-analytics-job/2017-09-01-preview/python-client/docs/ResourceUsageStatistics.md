# ResourceUsageStatistics

The statistics information for resource usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | The average value. | [optional] [readonly] 
**maximum** | **int** | The maximum value. | [optional] [readonly] 
**minimum** | **int** | The minimum value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_usage_statistics import ResourceUsageStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceUsageStatistics from a JSON string
resource_usage_statistics_instance = ResourceUsageStatistics.from_json(json)
# print the JSON string representation of the object
print(ResourceUsageStatistics.to_json())

# convert the object into a dict
resource_usage_statistics_dict = resource_usage_statistics_instance.to_dict()
# create an instance of ResourceUsageStatistics from a dict
resource_usage_statistics_from_dict = ResourceUsageStatistics.from_dict(resource_usage_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ElasticPoolPerDatabaseMaxPerformanceLevelCapability

The max per-database performance level capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **float** | The maximum performance level per database. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_per_database_min_performance_levels** | [**List[ElasticPoolPerDatabaseMinPerformanceLevelCapability]**](ElasticPoolPerDatabaseMinPerformanceLevelCapability.md) | The list of supported min database performance levels. | [optional] [readonly] 
**unit** | **str** | Unit type used to measure performance level. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_per_database_max_performance_level_capability import ElasticPoolPerDatabaseMaxPerformanceLevelCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolPerDatabaseMaxPerformanceLevelCapability from a JSON string
elastic_pool_per_database_max_performance_level_capability_instance = ElasticPoolPerDatabaseMaxPerformanceLevelCapability.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolPerDatabaseMaxPerformanceLevelCapability.to_json())

# convert the object into a dict
elastic_pool_per_database_max_performance_level_capability_dict = elastic_pool_per_database_max_performance_level_capability_instance.to_dict()
# create an instance of ElasticPoolPerDatabaseMaxPerformanceLevelCapability from a dict
elastic_pool_per_database_max_performance_level_capability_from_dict = ElasticPoolPerDatabaseMaxPerformanceLevelCapability.from_dict(elastic_pool_per_database_max_performance_level_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



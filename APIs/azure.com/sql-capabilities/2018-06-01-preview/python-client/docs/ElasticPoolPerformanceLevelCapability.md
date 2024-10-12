# ElasticPoolPerformanceLevelCapability

The Elastic Pool performance level capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**included_max_size** | [**MaxSizeCapability**](MaxSizeCapability.md) |  | [optional] 
**max_database_count** | **int** | The maximum number of databases supported. | [optional] [readonly] 
**performance_level** | [**PerformanceLevelCapability**](PerformanceLevelCapability.md) |  | [optional] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**sku** | [**ElasticPoolPerformanceLevelCapabilitySku**](ElasticPoolPerformanceLevelCapabilitySku.md) |  | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_license_types** | [**List[LicenseTypeCapability]**](LicenseTypeCapability.md) | List of supported license types. | [optional] [readonly] 
**supported_max_sizes** | [**List[MaxSizeRangeCapability]**](MaxSizeRangeCapability.md) | The list of supported max sizes. | [optional] [readonly] 
**supported_per_database_max_performance_levels** | [**List[ElasticPoolPerDatabaseMaxPerformanceLevelCapability]**](ElasticPoolPerDatabaseMaxPerformanceLevelCapability.md) | The list of supported per database max performance levels. | [optional] [readonly] 
**supported_per_database_max_sizes** | [**List[MaxSizeRangeCapability]**](MaxSizeRangeCapability.md) | The list of supported per database max sizes. | [optional] [readonly] 
**zone_redundant** | **bool** | Whether or not zone redundancy is supported for the performance level. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_performance_level_capability import ElasticPoolPerformanceLevelCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolPerformanceLevelCapability from a JSON string
elastic_pool_performance_level_capability_instance = ElasticPoolPerformanceLevelCapability.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolPerformanceLevelCapability.to_json())

# convert the object into a dict
elastic_pool_performance_level_capability_dict = elastic_pool_performance_level_capability_instance.to_dict()
# create an instance of ElasticPoolPerformanceLevelCapability from a dict
elastic_pool_performance_level_capability_from_dict = ElasticPoolPerformanceLevelCapability.from_dict(elastic_pool_performance_level_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



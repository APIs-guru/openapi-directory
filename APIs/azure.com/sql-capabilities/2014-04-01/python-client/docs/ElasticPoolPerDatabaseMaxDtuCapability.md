# ElasticPoolPerDatabaseMaxDtuCapability

The max per-database DTU capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | The maximum DTUs per database. | [optional] [readonly] 
**status** | [**CapabilityStatus**](CapabilityStatus.md) |  | [optional] 
**supported_per_database_min_dtus** | [**List[ElasticPoolPerDatabaseMinDtuCapability]**](ElasticPoolPerDatabaseMinDtuCapability.md) | The list of supported min database DTUs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_per_database_max_dtu_capability import ElasticPoolPerDatabaseMaxDtuCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolPerDatabaseMaxDtuCapability from a JSON string
elastic_pool_per_database_max_dtu_capability_instance = ElasticPoolPerDatabaseMaxDtuCapability.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolPerDatabaseMaxDtuCapability.to_json())

# convert the object into a dict
elastic_pool_per_database_max_dtu_capability_dict = elastic_pool_per_database_max_dtu_capability_instance.to_dict()
# create an instance of ElasticPoolPerDatabaseMaxDtuCapability from a dict
elastic_pool_per_database_max_dtu_capability_from_dict = ElasticPoolPerDatabaseMaxDtuCapability.from_dict(elastic_pool_per_database_max_dtu_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



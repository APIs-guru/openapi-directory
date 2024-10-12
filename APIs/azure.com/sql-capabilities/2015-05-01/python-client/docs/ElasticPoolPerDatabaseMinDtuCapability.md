# ElasticPoolPerDatabaseMinDtuCapability

The minimum per-database DTU capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | The minimum DTUs per database. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_per_database_min_dtu_capability import ElasticPoolPerDatabaseMinDtuCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolPerDatabaseMinDtuCapability from a JSON string
elastic_pool_per_database_min_dtu_capability_instance = ElasticPoolPerDatabaseMinDtuCapability.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolPerDatabaseMinDtuCapability.to_json())

# convert the object into a dict
elastic_pool_per_database_min_dtu_capability_dict = elastic_pool_per_database_min_dtu_capability_instance.to_dict()
# create an instance of ElasticPoolPerDatabaseMinDtuCapability from a dict
elastic_pool_per_database_min_dtu_capability_from_dict = ElasticPoolPerDatabaseMinDtuCapability.from_dict(elastic_pool_per_database_min_dtu_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



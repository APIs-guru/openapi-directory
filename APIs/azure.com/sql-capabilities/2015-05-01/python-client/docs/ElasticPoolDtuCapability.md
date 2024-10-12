# ElasticPoolDtuCapability

The Elastic Pool DTU capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**included_max_size** | [**MaxSizeCapability**](MaxSizeCapability.md) |  | [optional] 
**limit** | **int** | The DTU limit for the pool. | [optional] [readonly] 
**max_database_count** | **int** | The maximum number of databases supported. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_max_sizes** | [**List[MaxSizeCapability]**](MaxSizeCapability.md) | The list of supported max sizes. | [optional] [readonly] 
**supported_per_database_max_dtus** | [**List[ElasticPoolPerDatabaseMaxDtuCapability]**](ElasticPoolPerDatabaseMaxDtuCapability.md) | The list of supported per database max DTUs. | [optional] [readonly] 
**supported_per_database_max_sizes** | [**List[MaxSizeCapability]**](MaxSizeCapability.md) | The list of supported per database max sizes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_dtu_capability import ElasticPoolDtuCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolDtuCapability from a JSON string
elastic_pool_dtu_capability_instance = ElasticPoolDtuCapability.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolDtuCapability.to_json())

# convert the object into a dict
elastic_pool_dtu_capability_dict = elastic_pool_dtu_capability_instance.to_dict()
# create an instance of ElasticPoolDtuCapability from a dict
elastic_pool_dtu_capability_from_dict = ElasticPoolDtuCapability.from_dict(elastic_pool_dtu_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



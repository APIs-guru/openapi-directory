# RecommendedElasticPoolProperties

Represents the properties of a recommended elastic pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_dtu_max** | **float** | The maximum DTU for the database. | [optional] 
**database_dtu_min** | **float** | The minimum DTU for the database. | [optional] 
**database_edition** | **str** | The edition of the recommended elastic pool. The ElasticPoolEdition enumeration contains all the valid editions. | [optional] [readonly] 
**databases** | [**List[RecommendedElasticPoolPropertiesDatabasesInner]**](RecommendedElasticPoolPropertiesDatabasesInner.md) | The list of databases in this pool. Expanded property | [optional] [readonly] 
**dtu** | **float** | The DTU for the recommended elastic pool. | [optional] 
**max_observed_dtu** | **float** | Gets maximum observed DTU. | [optional] [readonly] 
**max_observed_storage_mb** | **float** | Gets maximum observed storage in megabytes. | [optional] [readonly] 
**metrics** | [**List[RecommendedElasticPoolMetric]**](RecommendedElasticPoolMetric.md) | The list of databases housed in the server. Expanded property | [optional] [readonly] 
**observation_period_end** | **datetime** | The observation period start (ISO8601 format). | [optional] [readonly] 
**observation_period_start** | **datetime** | The observation period start (ISO8601 format). | [optional] [readonly] 
**storage_mb** | **float** | Gets storage size in megabytes. | [optional] 

## Example

```python
from openapi_client.models.recommended_elastic_pool_properties import RecommendedElasticPoolProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedElasticPoolProperties from a JSON string
recommended_elastic_pool_properties_instance = RecommendedElasticPoolProperties.from_json(json)
# print the JSON string representation of the object
print(RecommendedElasticPoolProperties.to_json())

# convert the object into a dict
recommended_elastic_pool_properties_dict = recommended_elastic_pool_properties_instance.to_dict()
# create an instance of RecommendedElasticPoolProperties from a dict
recommended_elastic_pool_properties_from_dict = RecommendedElasticPoolProperties.from_dict(recommended_elastic_pool_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



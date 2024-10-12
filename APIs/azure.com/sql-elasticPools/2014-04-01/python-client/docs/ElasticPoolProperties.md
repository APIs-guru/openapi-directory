# ElasticPoolProperties

Represents the properties of an elastic pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | The creation date of the elastic pool (ISO8601 format). | [optional] [readonly] 
**database_dtu_max** | **int** | The maximum DTU any one database can consume. | [optional] 
**database_dtu_min** | **int** | The minimum DTU all databases are guaranteed. | [optional] 
**dtu** | **int** | The total shared DTU for the database elastic pool. | [optional] 
**edition** | **str** | The edition of the elastic pool. | [optional] 
**state** | **str** | The state of the elastic pool. | [optional] [readonly] 
**storage_mb** | **int** | Gets storage limit for the database elastic pool in MB. | [optional] 
**zone_redundant** | **bool** | Whether or not this database elastic pool is zone redundant, which means the replicas of this database will be spread across multiple availability zones. | [optional] 

## Example

```python
from openapi_client.models.elastic_pool_properties import ElasticPoolProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolProperties from a JSON string
elastic_pool_properties_instance = ElasticPoolProperties.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolProperties.to_json())

# convert the object into a dict
elastic_pool_properties_dict = elastic_pool_properties_instance.to_dict()
# create an instance of ElasticPoolProperties from a dict
elastic_pool_properties_from_dict = ElasticPoolProperties.from_dict(elastic_pool_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



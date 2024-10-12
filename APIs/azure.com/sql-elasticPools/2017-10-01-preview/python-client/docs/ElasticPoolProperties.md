# ElasticPoolProperties

Properties of an elastic pool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | The creation date of the elastic pool (ISO8601 format). | [optional] [readonly] 
**license_type** | **str** | The license type to apply for this elastic pool. | [optional] 
**max_size_bytes** | **int** | The storage limit for the database elastic pool in bytes. | [optional] 
**per_database_settings** | [**ElasticPoolPerDatabaseSettings**](ElasticPoolPerDatabaseSettings.md) |  | [optional] 
**state** | **str** | The state of the elastic pool. | [optional] [readonly] 
**zone_redundant** | **bool** | Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones. | [optional] 

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



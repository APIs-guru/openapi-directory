# ElasticPoolPerDatabaseSettings

Per database settings of an elastic pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_capacity** | **float** | The maximum capacity any one database can consume. | [optional] 
**min_capacity** | **float** | The minimum capacity all databases are guaranteed. | [optional] 

## Example

```python
from openapi_client.models.elastic_pool_per_database_settings import ElasticPoolPerDatabaseSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolPerDatabaseSettings from a JSON string
elastic_pool_per_database_settings_instance = ElasticPoolPerDatabaseSettings.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolPerDatabaseSettings.to_json())

# convert the object into a dict
elastic_pool_per_database_settings_dict = elastic_pool_per_database_settings_instance.to_dict()
# create an instance of ElasticPoolPerDatabaseSettings from a dict
elastic_pool_per_database_settings_from_dict = ElasticPoolPerDatabaseSettings.from_dict(elastic_pool_per_database_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



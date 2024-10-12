# ElasticPoolDatabaseActivity

Represents the activity on an elastic pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The geo-location where the resource lives | [optional] 
**properties** | [**ElasticPoolDatabaseActivityProperties**](ElasticPoolDatabaseActivityProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_database_activity import ElasticPoolDatabaseActivity

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolDatabaseActivity from a JSON string
elastic_pool_database_activity_instance = ElasticPoolDatabaseActivity.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolDatabaseActivity.to_json())

# convert the object into a dict
elastic_pool_database_activity_dict = elastic_pool_database_activity_instance.to_dict()
# create an instance of ElasticPoolDatabaseActivity from a dict
elastic_pool_database_activity_from_dict = ElasticPoolDatabaseActivity.from_dict(elastic_pool_database_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



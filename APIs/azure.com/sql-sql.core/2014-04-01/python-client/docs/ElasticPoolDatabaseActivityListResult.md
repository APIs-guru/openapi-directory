# ElasticPoolDatabaseActivityListResult

Represents the response to a list elastic pool database activity request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ElasticPoolDatabaseActivity]**](ElasticPoolDatabaseActivity.md) | The list of elastic pool database activities. | 

## Example

```python
from openapi_client.models.elastic_pool_database_activity_list_result import ElasticPoolDatabaseActivityListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolDatabaseActivityListResult from a JSON string
elastic_pool_database_activity_list_result_instance = ElasticPoolDatabaseActivityListResult.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolDatabaseActivityListResult.to_json())

# convert the object into a dict
elastic_pool_database_activity_list_result_dict = elastic_pool_database_activity_list_result_instance.to_dict()
# create an instance of ElasticPoolDatabaseActivityListResult from a dict
elastic_pool_database_activity_list_result_from_dict = ElasticPoolDatabaseActivityListResult.from_dict(elastic_pool_database_activity_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ElasticPoolDatabaseActivityProperties

Represents the properties of an elastic pool database activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_elastic_pool_name** | **str** | The name of the current elastic pool the database is in if available. | [optional] [readonly] 
**current_service_objective** | **str** | The name of the current service objective if available. | [optional] [readonly] 
**database_name** | **str** | The database name. | [optional] [readonly] 
**end_time** | **datetime** | The time the operation finished (ISO8601 format). | [optional] [readonly] 
**error_code** | **int** | The error code if available. | [optional] [readonly] 
**error_message** | **str** | The error message if available. | [optional] [readonly] 
**error_severity** | **int** | The error severity if available. | [optional] [readonly] 
**operation** | **str** | The operation name. | [optional] [readonly] 
**operation_id** | **str** | The unique operation ID. | [optional] [readonly] 
**percent_complete** | **int** | The percentage complete if available. | [optional] [readonly] 
**requested_elastic_pool_name** | **str** | The name for the elastic pool the database is moving into if available. | [optional] [readonly] 
**requested_service_objective** | **str** | The name of the requested service objective if available. | [optional] [readonly] 
**server_name** | **str** | The name of the server the elastic pool is in. | [optional] [readonly] 
**start_time** | **datetime** | The time the operation started (ISO8601 format). | [optional] [readonly] 
**state** | **str** | The current state of the operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_database_activity_properties import ElasticPoolDatabaseActivityProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolDatabaseActivityProperties from a JSON string
elastic_pool_database_activity_properties_instance = ElasticPoolDatabaseActivityProperties.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolDatabaseActivityProperties.to_json())

# convert the object into a dict
elastic_pool_database_activity_properties_dict = elastic_pool_database_activity_properties_instance.to_dict()
# create an instance of ElasticPoolDatabaseActivityProperties from a dict
elastic_pool_database_activity_properties_from_dict = ElasticPoolDatabaseActivityProperties.from_dict(elastic_pool_database_activity_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ElasticPoolActivityProperties

Represents the properties of an elastic pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elastic_pool_name** | **str** | The name of the elastic pool. | [optional] [readonly] 
**end_time** | **datetime** | The time the operation finished (ISO8601 format). | [optional] [readonly] 
**error_code** | **int** | The error code if available. | [optional] [readonly] 
**error_message** | **str** | The error message if available. | [optional] [readonly] 
**error_severity** | **int** | The error severity if available. | [optional] [readonly] 
**operation** | **str** | The operation name. | [optional] [readonly] 
**operation_id** | **str** | The unique operation ID. | [optional] [readonly] 
**percent_complete** | **int** | The percentage complete if available. | [optional] [readonly] 
**requested_database_dtu_cap** | **int** | The requested per database DTU cap. | [optional] [readonly] 
**requested_database_dtu_guarantee** | **int** | The requested per database DTU guarantee. | [optional] [readonly] 
**requested_database_dtu_max** | **int** | The requested max DTU per database if available. | [optional] [readonly] 
**requested_database_dtu_min** | **int** | The requested min DTU per database if available. | [optional] [readonly] 
**requested_dtu** | **int** | The requested DTU for the pool if available. | [optional] [readonly] 
**requested_dtu_guarantee** | **int** | The requested DTU guarantee. | [optional] [readonly] 
**requested_elastic_pool_name** | **str** | The requested name for the elastic pool if available. | [optional] [readonly] 
**requested_storage_limit_in_gb** | **int** | The requested storage limit for the pool in GB if available. | [optional] [readonly] 
**requested_storage_limit_in_mb** | **int** | The requested storage limit in MB. | [optional] [readonly] 
**server_name** | **str** | The name of the server the elastic pool is in. | [optional] [readonly] 
**start_time** | **datetime** | The time the operation started (ISO8601 format). | [optional] [readonly] 
**state** | **str** | The current state of the operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_activity_properties import ElasticPoolActivityProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolActivityProperties from a JSON string
elastic_pool_activity_properties_instance = ElasticPoolActivityProperties.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolActivityProperties.to_json())

# convert the object into a dict
elastic_pool_activity_properties_dict = elastic_pool_activity_properties_instance.to_dict()
# create an instance of ElasticPoolActivityProperties from a dict
elastic_pool_activity_properties_from_dict = ElasticPoolActivityProperties.from_dict(elastic_pool_activity_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



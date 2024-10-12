# PostgresqlSourceConfig

PostgreSQL data source configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_objects** | [**PostgresqlRdbms**](PostgresqlRdbms.md) |  | [optional] 
**include_objects** | [**PostgresqlRdbms**](PostgresqlRdbms.md) |  | [optional] 
**max_concurrent_backfill_tasks** | **int** | Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system&#39;s default value will be used. | [optional] 
**publication** | **str** | Required. The name of the publication that includes the set of all tables that are defined in the stream&#39;s include_objects. | [optional] 
**replication_slot** | **str** | Required. Immutable. The name of the logical replication slot that&#39;s configured with the pgoutput plugin. | [optional] 

## Example

```python
from openapi_client.models.postgresql_source_config import PostgresqlSourceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PostgresqlSourceConfig from a JSON string
postgresql_source_config_instance = PostgresqlSourceConfig.from_json(json)
# print the JSON string representation of the object
print(PostgresqlSourceConfig.to_json())

# convert the object into a dict
postgresql_source_config_dict = postgresql_source_config_instance.to_dict()
# create an instance of PostgresqlSourceConfig from a dict
postgresql_source_config_from_dict = PostgresqlSourceConfig.from_dict(postgresql_source_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



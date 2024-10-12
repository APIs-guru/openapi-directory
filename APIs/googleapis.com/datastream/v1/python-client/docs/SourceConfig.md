# SourceConfig

The configuration of the stream source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mysql_source_config** | [**MysqlSourceConfig**](MysqlSourceConfig.md) |  | [optional] 
**oracle_source_config** | [**OracleSourceConfig**](OracleSourceConfig.md) |  | [optional] 
**postgresql_source_config** | [**PostgresqlSourceConfig**](PostgresqlSourceConfig.md) |  | [optional] 
**source_connection_profile** | **str** | Required. Source connection profile resoource. Format: &#x60;projects/{project}/locations/{location}/connectionProfiles/{name}&#x60; | [optional] 
**sql_server_source_config** | [**SqlServerSourceConfig**](SqlServerSourceConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_config import SourceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SourceConfig from a JSON string
source_config_instance = SourceConfig.from_json(json)
# print the JSON string representation of the object
print(SourceConfig.to_json())

# convert the object into a dict
source_config_dict = source_config_instance.to_dict()
# create an instance of SourceConfig from a dict
source_config_from_dict = SourceConfig.from_dict(source_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



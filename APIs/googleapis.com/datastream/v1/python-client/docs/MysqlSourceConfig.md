# MysqlSourceConfig

MySQL source configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_objects** | [**MysqlRdbms**](MysqlRdbms.md) |  | [optional] 
**include_objects** | [**MysqlRdbms**](MysqlRdbms.md) |  | [optional] 
**max_concurrent_backfill_tasks** | **int** | Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system&#39;s default value will be used. | [optional] 
**max_concurrent_cdc_tasks** | **int** | Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set to 0), the system&#39;s default value will be used. | [optional] 

## Example

```python
from openapi_client.models.mysql_source_config import MysqlSourceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MysqlSourceConfig from a JSON string
mysql_source_config_instance = MysqlSourceConfig.from_json(json)
# print the JSON string representation of the object
print(MysqlSourceConfig.to_json())

# convert the object into a dict
mysql_source_config_dict = mysql_source_config_instance.to_dict()
# create an instance of MysqlSourceConfig from a dict
mysql_source_config_from_dict = MysqlSourceConfig.from_dict(mysql_source_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



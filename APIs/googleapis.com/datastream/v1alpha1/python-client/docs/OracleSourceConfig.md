# OracleSourceConfig

Oracle data source configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowlist** | [**OracleRdbms**](OracleRdbms.md) |  | [optional] 
**drop_large_objects** | **object** | Configuration to drop large object values. | [optional] 
**rejectlist** | [**OracleRdbms**](OracleRdbms.md) |  | [optional] 

## Example

```python
from openapi_client.models.oracle_source_config import OracleSourceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OracleSourceConfig from a JSON string
oracle_source_config_instance = OracleSourceConfig.from_json(json)
# print the JSON string representation of the object
print(OracleSourceConfig.to_json())

# convert the object into a dict
oracle_source_config_dict = oracle_source_config_instance.to_dict()
# create an instance of OracleSourceConfig from a dict
oracle_source_config_from_dict = OracleSourceConfig.from_dict(oracle_source_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



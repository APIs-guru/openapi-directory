# LogConfig

Specifies what kind of log the caller must write

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_audit** | [**CloudAuditOptions**](CloudAuditOptions.md) |  | [optional] 
**counter** | [**CounterOptions**](CounterOptions.md) |  | [optional] 
**data_access** | [**DataAccessOptions**](DataAccessOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.log_config import LogConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LogConfig from a JSON string
log_config_instance = LogConfig.from_json(json)
# print the JSON string representation of the object
print(LogConfig.to_json())

# convert the object into a dict
log_config_dict = log_config_instance.to_dict()
# create an instance of LogConfig from a dict
log_config_from_dict = LogConfig.from_dict(log_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



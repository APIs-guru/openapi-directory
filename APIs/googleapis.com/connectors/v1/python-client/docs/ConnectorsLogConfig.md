# ConnectorsLogConfig

Log configuration for the connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enabled represents whether logging is enabled or not for a connection. | [optional] 

## Example

```python
from openapi_client.models.connectors_log_config import ConnectorsLogConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorsLogConfig from a JSON string
connectors_log_config_instance = ConnectorsLogConfig.from_json(json)
# print the JSON string representation of the object
print(ConnectorsLogConfig.to_json())

# convert the object into a dict
connectors_log_config_dict = connectors_log_config_instance.to_dict()
# create an instance of ConnectorsLogConfig from a dict
connectors_log_config_from_dict = ConnectorsLogConfig.from_dict(connectors_log_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



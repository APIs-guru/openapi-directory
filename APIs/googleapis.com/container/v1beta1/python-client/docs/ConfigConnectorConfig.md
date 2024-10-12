# ConfigConnectorConfig

Configuration options for the Config Connector add-on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether Cloud Connector is enabled for this cluster. | [optional] 

## Example

```python
from openapi_client.models.config_connector_config import ConfigConnectorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigConnectorConfig from a JSON string
config_connector_config_instance = ConfigConnectorConfig.from_json(json)
# print the JSON string representation of the object
print(ConfigConnectorConfig.to_json())

# convert the object into a dict
config_connector_config_dict = config_connector_config_instance.to_dict()
# create an instance of ConfigConnectorConfig from a dict
config_connector_config_from_dict = ConfigConnectorConfig.from_dict(config_connector_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



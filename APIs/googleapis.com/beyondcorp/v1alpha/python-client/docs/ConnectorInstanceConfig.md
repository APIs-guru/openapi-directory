# ConnectorInstanceConfig

ConnectorInstanceConfig defines the instance config of a connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_config** | [**ImageConfig**](ImageConfig.md) |  | [optional] 
**instance_config** | **Dict[str, object]** | The SLM instance agent configuration. | [optional] 
**notification_config** | [**NotificationConfig**](NotificationConfig.md) |  | [optional] 
**sequence_number** | **str** | Required. A monotonically increasing number generated and maintained by the API provider. Every time a config changes in the backend, the sequenceNumber should be bumped up to reflect the change. | [optional] 

## Example

```python
from openapi_client.models.connector_instance_config import ConnectorInstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorInstanceConfig from a JSON string
connector_instance_config_instance = ConnectorInstanceConfig.from_json(json)
# print the JSON string representation of the object
print(ConnectorInstanceConfig.to_json())

# convert the object into a dict
connector_instance_config_dict = connector_instance_config_instance.to_dict()
# create an instance of ConnectorInstanceConfig from a dict
connector_instance_config_from_dict = ConnectorInstanceConfig.from_dict(connector_instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



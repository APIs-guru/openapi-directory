# ConnectorConfiguration

Represents concrete parameter values for Connector Configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | [**ConnectorConfigurationAuthentication**](ConnectorConfigurationAuthentication.md) |  | [optional] 
**connector_id** | **str** | Required. Immutable. The ID of the Connector these parameters are configured for. | [optional] 
**endpoint** | [**ConnectorConfigurationEndpoint**](ConnectorConfigurationEndpoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.connector_configuration import ConnectorConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorConfiguration from a JSON string
connector_configuration_instance = ConnectorConfiguration.from_json(json)
# print the JSON string representation of the object
print(ConnectorConfiguration.to_json())

# convert the object into a dict
connector_configuration_dict = connector_configuration_instance.to_dict()
# create an instance of ConnectorConfiguration from a dict
connector_configuration_from_dict = ConnectorConfiguration.from_dict(connector_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



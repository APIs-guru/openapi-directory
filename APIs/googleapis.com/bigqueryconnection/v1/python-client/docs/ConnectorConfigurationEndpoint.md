# ConnectorConfigurationEndpoint

Remote endpoint specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_port** | **str** | Host and port in a format of &#x60;hostname:port&#x60; as defined in https://www.ietf.org/rfc/rfc3986.html#section-3.2.2 and https://www.ietf.org/rfc/rfc3986.html#section-3.2.3. | [optional] 

## Example

```python
from openapi_client.models.connector_configuration_endpoint import ConnectorConfigurationEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorConfigurationEndpoint from a JSON string
connector_configuration_endpoint_instance = ConnectorConfigurationEndpoint.from_json(json)
# print the JSON string representation of the object
print(ConnectorConfigurationEndpoint.to_json())

# convert the object into a dict
connector_configuration_endpoint_dict = connector_configuration_endpoint_instance.to_dict()
# create an instance of ConnectorConfigurationEndpoint from a dict
connector_configuration_endpoint_from_dict = ConnectorConfigurationEndpoint.from_dict(connector_configuration_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



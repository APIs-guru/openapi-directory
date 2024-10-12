# ConnectorConfigurationAuthentication

Client authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username_password** | [**ConnectorConfigurationUsernamePassword**](ConnectorConfigurationUsernamePassword.md) |  | [optional] 

## Example

```python
from openapi_client.models.connector_configuration_authentication import ConnectorConfigurationAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorConfigurationAuthentication from a JSON string
connector_configuration_authentication_instance = ConnectorConfigurationAuthentication.from_json(json)
# print the JSON string representation of the object
print(ConnectorConfigurationAuthentication.to_json())

# convert the object into a dict
connector_configuration_authentication_dict = connector_configuration_authentication_instance.to_dict()
# create an instance of ConnectorConfigurationAuthentication from a dict
connector_configuration_authentication_from_dict = ConnectorConfigurationAuthentication.from_dict(connector_configuration_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



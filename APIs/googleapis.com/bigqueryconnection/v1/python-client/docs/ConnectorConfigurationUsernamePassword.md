# ConnectorConfigurationUsernamePassword

Username and Password authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | [**ConnectorConfigurationSecret**](ConnectorConfigurationSecret.md) |  | [optional] 
**username** | **str** | Required. Username. | [optional] 

## Example

```python
from openapi_client.models.connector_configuration_username_password import ConnectorConfigurationUsernamePassword

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorConfigurationUsernamePassword from a JSON string
connector_configuration_username_password_instance = ConnectorConfigurationUsernamePassword.from_json(json)
# print the JSON string representation of the object
print(ConnectorConfigurationUsernamePassword.to_json())

# convert the object into a dict
connector_configuration_username_password_dict = connector_configuration_username_password_instance.to_dict()
# create an instance of ConnectorConfigurationUsernamePassword from a dict
connector_configuration_username_password_from_dict = ConnectorConfigurationUsernamePassword.from_dict(connector_configuration_username_password_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



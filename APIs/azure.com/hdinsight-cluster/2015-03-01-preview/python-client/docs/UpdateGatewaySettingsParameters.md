# UpdateGatewaySettingsParameters

The update gateway settings request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rest_auth_credential_is_enabled** | **bool** | Indicates whether or not the gateway settings based authorization is enabled. | [optional] [default to True]
**rest_auth_credential_password** | **str** | The gateway settings user password. | [optional] 
**rest_auth_credential_username** | **str** | The gateway settings user name. | [optional] 

## Example

```python
from openapi_client.models.update_gateway_settings_parameters import UpdateGatewaySettingsParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateGatewaySettingsParameters from a JSON string
update_gateway_settings_parameters_instance = UpdateGatewaySettingsParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateGatewaySettingsParameters.to_json())

# convert the object into a dict
update_gateway_settings_parameters_dict = update_gateway_settings_parameters_instance.to_dict()
# create an instance of UpdateGatewaySettingsParameters from a dict
update_gateway_settings_parameters_from_dict = UpdateGatewaySettingsParameters.from_dict(update_gateway_settings_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



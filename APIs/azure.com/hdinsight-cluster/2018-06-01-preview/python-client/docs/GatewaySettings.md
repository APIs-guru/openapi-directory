# GatewaySettings

Gateway settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rest_auth_credential_is_enabled** | **str** | Indicates whether or not the gateway settings based authorization is enabled. | [optional] [readonly] 
**rest_auth_credential_password** | **str** | The gateway settings user password. | [optional] [readonly] 
**rest_auth_credential_username** | **str** | The gateway settings user name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gateway_settings import GatewaySettings

# TODO update the JSON string below
json = "{}"
# create an instance of GatewaySettings from a JSON string
gateway_settings_instance = GatewaySettings.from_json(json)
# print the JSON string representation of the object
print(GatewaySettings.to_json())

# convert the object into a dict
gateway_settings_dict = gateway_settings_instance.to_dict()
# create an instance of GatewaySettings from a dict
gateway_settings_from_dict = GatewaySettings.from_dict(gateway_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GatewayConfig

Gateway-related configuration and state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway_auth_method** | **str** | Indicates how to authorize and/or authenticate devices to access the gateway. | [optional] 
**gateway_type** | **str** | Indicates whether the device is a gateway. | [optional] 
**last_accessed_gateway_id** | **str** | [Output only] The ID of the gateway the device accessed most recently. | [optional] 
**last_accessed_gateway_time** | **str** | [Output only] The most recent time at which the device accessed the gateway specified in &#x60;last_accessed_gateway&#x60;. | [optional] 

## Example

```python
from openapi_client.models.gateway_config import GatewayConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayConfig from a JSON string
gateway_config_instance = GatewayConfig.from_json(json)
# print the JSON string representation of the object
print(GatewayConfig.to_json())

# convert the object into a dict
gateway_config_dict = gateway_config_instance.to_dict()
# create an instance of GatewayConfig from a dict
gateway_config_from_dict = GatewayConfig.from_dict(gateway_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



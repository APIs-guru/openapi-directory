# ApigatewayGatewayConfig

Configuration settings for Gateways.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_config** | [**ApigatewayBackendConfig**](ApigatewayBackendConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.apigateway_gateway_config import ApigatewayGatewayConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayGatewayConfig from a JSON string
apigateway_gateway_config_instance = ApigatewayGatewayConfig.from_json(json)
# print the JSON string representation of the object
print(ApigatewayGatewayConfig.to_json())

# convert the object into a dict
apigateway_gateway_config_dict = apigateway_gateway_config_instance.to_dict()
# create an instance of ApigatewayGatewayConfig from a dict
apigateway_gateway_config_from_dict = ApigatewayGatewayConfig.from_dict(apigateway_gateway_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



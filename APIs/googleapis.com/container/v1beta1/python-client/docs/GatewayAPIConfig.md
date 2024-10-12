# GatewayAPIConfig

GatewayAPIConfig contains the desired config of Gateway API on this cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | The Gateway API release channel to use for Gateway API. | [optional] 

## Example

```python
from openapi_client.models.gateway_api_config import GatewayAPIConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayAPIConfig from a JSON string
gateway_api_config_instance = GatewayAPIConfig.from_json(json)
# print the JSON string representation of the object
print(GatewayAPIConfig.to_json())

# convert the object into a dict
gateway_api_config_dict = gateway_api_config_instance.to_dict()
# create an instance of GatewayAPIConfig from a dict
gateway_api_config_from_dict = GatewayAPIConfig.from_dict(gateway_api_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



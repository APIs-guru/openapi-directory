# TcpConfig

Describes the tcp configuration for external connectivity for this network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**GatewayDestination**](GatewayDestination.md) |  | 
**name** | **str** | tcp gateway config name. | 
**port** | **int** | Specifies the port at which the service endpoint below needs to be exposed. | 

## Example

```python
from openapi_client.models.tcp_config import TcpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TcpConfig from a JSON string
tcp_config_instance = TcpConfig.from_json(json)
# print the JSON string representation of the object
print(TcpConfig.to_json())

# convert the object into a dict
tcp_config_dict = tcp_config_instance.to_dict()
# create an instance of TcpConfig from a dict
tcp_config_from_dict = TcpConfig.from_dict(tcp_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# NetworkConfig

Regional Network Config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egress_ips** | **List[str]** | Output only. Egress IPs | [optional] [readonly] 
**egress_mode** | **str** | Optional. Egress mode for the network. | [optional] 

## Example

```python
from openapi_client.models.network_config import NetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfig from a JSON string
network_config_instance = NetworkConfig.from_json(json)
# print the JSON string representation of the object
print(NetworkConfig.to_json())

# convert the object into a dict
network_config_dict = network_config_instance.to_dict()
# create an instance of NetworkConfig from a dict
network_config_from_dict = NetworkConfig.from_dict(network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



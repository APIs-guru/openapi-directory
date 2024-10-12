# AdditionalNodeNetworkConfig

AdditionalNodeNetworkConfig is the configuration for additional node networks within the NodeNetworkConfig message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Name of the VPC where the additional interface belongs | [optional] 
**subnetwork** | **str** | Name of the subnetwork where the additional interface belongs | [optional] 

## Example

```python
from openapi_client.models.additional_node_network_config import AdditionalNodeNetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalNodeNetworkConfig from a JSON string
additional_node_network_config_instance = AdditionalNodeNetworkConfig.from_json(json)
# print the JSON string representation of the object
print(AdditionalNodeNetworkConfig.to_json())

# convert the object into a dict
additional_node_network_config_dict = additional_node_network_config_instance.to_dict()
# create an instance of AdditionalNodeNetworkConfig from a dict
additional_node_network_config_from_dict = AdditionalNodeNetworkConfig.from_dict(additional_node_network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



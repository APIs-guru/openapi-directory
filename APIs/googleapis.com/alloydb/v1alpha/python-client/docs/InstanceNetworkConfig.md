# InstanceNetworkConfig

Metadata related to instance level network configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_external_networks** | [**List[AuthorizedNetwork]**](AuthorizedNetwork.md) | Optional. A list of external network authorized to access this instance. | [optional] 
**enable_public_ip** | **bool** | Optional. Enabling public ip for the instance. | [optional] 

## Example

```python
from openapi_client.models.instance_network_config import InstanceNetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceNetworkConfig from a JSON string
instance_network_config_instance = InstanceNetworkConfig.from_json(json)
# print the JSON string representation of the object
print(InstanceNetworkConfig.to_json())

# convert the object into a dict
instance_network_config_dict = instance_network_config_instance.to_dict()
# create an instance of InstanceNetworkConfig from a dict
instance_network_config_from_dict = InstanceNetworkConfig.from_dict(instance_network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# NetworkPolicyConfig

Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Whether NetworkPolicy is enabled for this cluster. | [optional] 

## Example

```python
from openapi_client.models.network_policy_config import NetworkPolicyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkPolicyConfig from a JSON string
network_policy_config_instance = NetworkPolicyConfig.from_json(json)
# print the JSON string representation of the object
print(NetworkPolicyConfig.to_json())

# convert the object into a dict
network_policy_config_dict = network_policy_config_instance.to_dict()
# create an instance of NetworkPolicyConfig from a dict
network_policy_config_from_dict = NetworkPolicyConfig.from_dict(network_policy_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



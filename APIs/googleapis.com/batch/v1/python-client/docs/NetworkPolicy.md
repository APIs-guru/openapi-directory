# NetworkPolicy

NetworkPolicy describes VM instance network configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_interfaces** | [**List[NetworkInterface]**](NetworkInterface.md) | Network configurations. | [optional] 

## Example

```python
from openapi_client.models.network_policy import NetworkPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkPolicy from a JSON string
network_policy_instance = NetworkPolicy.from_json(json)
# print the JSON string representation of the object
print(NetworkPolicy.to_json())

# convert the object into a dict
network_policy_dict = network_policy_instance.to_dict()
# create an instance of NetworkPolicy from a dict
network_policy_from_dict = NetworkPolicy.from_dict(network_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



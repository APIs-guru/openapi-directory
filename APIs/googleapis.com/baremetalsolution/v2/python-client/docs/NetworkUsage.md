# NetworkUsage

Network with all used IP addresses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | [**Network**](Network.md) |  | [optional] 
**used_ips** | **List[str]** | All used IP addresses in this network. | [optional] 

## Example

```python
from openapi_client.models.network_usage import NetworkUsage

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkUsage from a JSON string
network_usage_instance = NetworkUsage.from_json(json)
# print the JSON string representation of the object
print(NetworkUsage.to_json())

# convert the object into a dict
network_usage_dict = network_usage_instance.to_dict()
# create an instance of NetworkUsage from a dict
network_usage_from_dict = NetworkUsage.from_dict(network_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



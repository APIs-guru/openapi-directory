# NetworkProfile

Specifies the network settings for the HANA instance disks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**circuit_id** | **str** | Specifies the circuit id for connecting to express route. | [optional] [readonly] 
**network_interfaces** | [**List[IpAddress]**](IpAddress.md) | Specifies the network interfaces for the HANA instance. | [optional] 

## Example

```python
from openapi_client.models.network_profile import NetworkProfile

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkProfile from a JSON string
network_profile_instance = NetworkProfile.from_json(json)
# print the JSON string representation of the object
print(NetworkProfile.to_json())

# convert the object into a dict
network_profile_dict = network_profile_instance.to_dict()
# create an instance of NetworkProfile from a dict
network_profile_from_dict = NetworkProfile.from_dict(network_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



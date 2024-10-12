# NetworkProfile

Represents the OpenShift networking configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peer_vnet_id** | **str** | CIDR of the Vnet to peer. | [optional] 
**vnet_cidr** | **str** | CIDR for the OpenShift Vnet. | [optional] [default to '10.0.0.0/8']

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



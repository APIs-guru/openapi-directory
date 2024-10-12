# NetworkProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_interfaces** | [**List[NetworkInterface]**](NetworkInterface.md) | Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM. | [optional] 
**subnet** | [**ApiEntityReference**](ApiEntityReference.md) |  | [optional] 

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



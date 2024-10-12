# ContainerGroupNetworkProfile

Container group network profile information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier for a network profile. | 

## Example

```python
from openapi_client.models.container_group_network_profile import ContainerGroupNetworkProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerGroupNetworkProfile from a JSON string
container_group_network_profile_instance = ContainerGroupNetworkProfile.from_json(json)
# print the JSON string representation of the object
print(ContainerGroupNetworkProfile.to_json())

# convert the object into a dict
container_group_network_profile_dict = container_group_network_profile_instance.to_dict()
# create an instance of ContainerGroupNetworkProfile from a dict
container_group_network_profile_from_dict = ContainerGroupNetworkProfile.from_dict(container_group_network_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



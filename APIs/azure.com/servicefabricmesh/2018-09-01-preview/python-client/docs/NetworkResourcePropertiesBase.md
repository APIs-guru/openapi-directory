# NetworkResourcePropertiesBase

This type describes the properties of a network resource, including its kind.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**NetworkKind**](NetworkKind.md) |  | 
**provisioning_state** | **str** | State of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_resource_properties_base import NetworkResourcePropertiesBase

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkResourcePropertiesBase from a JSON string
network_resource_properties_base_instance = NetworkResourcePropertiesBase.from_json(json)
# print the JSON string representation of the object
print(NetworkResourcePropertiesBase.to_json())

# convert the object into a dict
network_resource_properties_base_dict = network_resource_properties_base_instance.to_dict()
# create an instance of NetworkResourcePropertiesBase from a dict
network_resource_properties_base_from_dict = NetworkResourcePropertiesBase.from_dict(network_resource_properties_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# NetworkResourceProperties

Describes properties of a network resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | State of the resource. | [optional] [readonly] 
**address_prefix** | **str** | the address prefix for this network. | 
**description** | **str** | User readable description of the network. | [optional] 
**ingress_config** | [**IngressConfig**](IngressConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_resource_properties import NetworkResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkResourceProperties from a JSON string
network_resource_properties_instance = NetworkResourceProperties.from_json(json)
# print the JSON string representation of the object
print(NetworkResourceProperties.to_json())

# convert the object into a dict
network_resource_properties_dict = network_resource_properties_instance.to_dict()
# create an instance of NetworkResourceProperties from a dict
network_resource_properties_from_dict = NetworkResourceProperties.from_dict(network_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



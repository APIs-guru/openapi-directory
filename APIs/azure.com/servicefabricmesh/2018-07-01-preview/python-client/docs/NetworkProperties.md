# NetworkProperties

Describes a network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | the address prefix for this network. | 
**description** | **str** | User readable description of the network. | [optional] 
**ingress_config** | [**IngressConfig**](IngressConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_properties import NetworkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkProperties from a JSON string
network_properties_instance = NetworkProperties.from_json(json)
# print the JSON string representation of the object
print(NetworkProperties.to_json())

# convert the object into a dict
network_properties_dict = network_properties_instance.to_dict()
# create an instance of NetworkProperties from a dict
network_properties_from_dict = NetworkProperties.from_dict(network_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



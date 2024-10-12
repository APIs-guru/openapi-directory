# EdgeNodeProperties

The JSON object that contains the properties required to create an edgenode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address_groups** | [**List[IpAddressGroup]**](IpAddressGroup.md) | List of ip address groups. | 

## Example

```python
from openapi_client.models.edge_node_properties import EdgeNodeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EdgeNodeProperties from a JSON string
edge_node_properties_instance = EdgeNodeProperties.from_json(json)
# print the JSON string representation of the object
print(EdgeNodeProperties.to_json())

# convert the object into a dict
edge_node_properties_dict = edge_node_properties_instance.to_dict()
# create an instance of EdgeNodeProperties from a dict
edge_node_properties_from_dict = EdgeNodeProperties.from_dict(edge_node_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



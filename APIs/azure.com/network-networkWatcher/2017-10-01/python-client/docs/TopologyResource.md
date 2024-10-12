# TopologyResource

The network resource topology information for the given resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associations** | [**List[TopologyAssociation]**](TopologyAssociation.md) | Holds the associations the resource has with other resources in the resource group. | [optional] 
**id** | **str** | ID of the resource. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Name of the resource. | [optional] 

## Example

```python
from openapi_client.models.topology_resource import TopologyResource

# TODO update the JSON string below
json = "{}"
# create an instance of TopologyResource from a JSON string
topology_resource_instance = TopologyResource.from_json(json)
# print the JSON string representation of the object
print(TopologyResource.to_json())

# convert the object into a dict
topology_resource_dict = topology_resource_instance.to_dict()
# create an instance of TopologyResource from a dict
topology_resource_from_dict = TopologyResource.from_dict(topology_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



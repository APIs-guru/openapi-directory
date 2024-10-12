# TopologyResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TopologyResourceProperties**](TopologyResourceProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 
**location** | **str** | Location where the resource is stored | [optional] [readonly] 

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



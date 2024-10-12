# TopologyAssociation

Resources that have an association with the parent resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**association_type** | **str** | The association type of the child resource to the parent resource. | [optional] 
**name** | **str** | The name of the resource that is associated with the parent resource. | [optional] 
**resource_id** | **str** | The ID of the resource that is associated with the parent resource. | [optional] 

## Example

```python
from openapi_client.models.topology_association import TopologyAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of TopologyAssociation from a JSON string
topology_association_instance = TopologyAssociation.from_json(json)
# print the JSON string representation of the object
print(TopologyAssociation.to_json())

# convert the object into a dict
topology_association_dict = topology_association_instance.to_dict()
# create an instance of TopologyAssociation from a dict
topology_association_from_dict = TopologyAssociation.from_dict(topology_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



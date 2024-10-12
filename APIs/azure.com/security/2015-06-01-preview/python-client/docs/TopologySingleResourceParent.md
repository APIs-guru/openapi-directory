# TopologySingleResourceParent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | Azure resource id which serves as parent resource in topology view | [optional] [readonly] 

## Example

```python
from openapi_client.models.topology_single_resource_parent import TopologySingleResourceParent

# TODO update the JSON string below
json = "{}"
# create an instance of TopologySingleResourceParent from a JSON string
topology_single_resource_parent_instance = TopologySingleResourceParent.from_json(json)
# print the JSON string representation of the object
print(TopologySingleResourceParent.to_json())

# convert the object into a dict
topology_single_resource_parent_dict = topology_single_resource_parent_instance.to_dict()
# create an instance of TopologySingleResourceParent from a dict
topology_single_resource_parent_from_dict = TopologySingleResourceParent.from_dict(topology_single_resource_parent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



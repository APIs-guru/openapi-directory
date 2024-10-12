# TopologySingleResourceChild


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | Azure resource id which serves as child resource in topology view | [optional] [readonly] 

## Example

```python
from openapi_client.models.topology_single_resource_child import TopologySingleResourceChild

# TODO update the JSON string below
json = "{}"
# create an instance of TopologySingleResourceChild from a JSON string
topology_single_resource_child_instance = TopologySingleResourceChild.from_json(json)
# print the JSON string representation of the object
print(TopologySingleResourceChild.to_json())

# convert the object into a dict
topology_single_resource_child_dict = topology_single_resource_child_instance.to_dict()
# create an instance of TopologySingleResourceChild from a dict
topology_single_resource_child_from_dict = TopologySingleResourceChild.from_dict(topology_single_resource_child_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DependencyEdge

Represents dependency parse tree information for a token. (For more information on dependency labels, see http://www.aclweb.org/anthology/P13-2017

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**head_token_index** | **int** | Represents the head of this token in the dependency tree. This is the index of the token which has an arc going to this token. The index is the position of the token in the array of tokens returned by the API method. If this token is a root token, then the &#x60;head_token_index&#x60; is its own index. | [optional] 
**label** | **str** | The parse label for the token. | [optional] 

## Example

```python
from openapi_client.models.dependency_edge import DependencyEdge

# TODO update the JSON string below
json = "{}"
# create an instance of DependencyEdge from a JSON string
dependency_edge_instance = DependencyEdge.from_json(json)
# print the JSON string representation of the object
print(DependencyEdge.to_json())

# convert the object into a dict
dependency_edge_dict = dependency_edge_instance.to_dict()
# create an instance of DependencyEdge from a dict
dependency_edge_from_dict = DependencyEdge.from_dict(dependency_edge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



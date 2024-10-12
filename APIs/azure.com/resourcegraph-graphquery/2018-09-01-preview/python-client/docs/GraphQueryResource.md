# GraphQueryResource

Graph Query entity definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GraphQueryProperties**](GraphQueryProperties.md) |  | [optional] 
**e_tag** | **str** | This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict. | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**name** | **str** | Azure resource name. This is GUID value. The display name should be assigned within properties field. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.graph_query_resource import GraphQueryResource

# TODO update the JSON string below
json = "{}"
# create an instance of GraphQueryResource from a JSON string
graph_query_resource_instance = GraphQueryResource.from_json(json)
# print the JSON string representation of the object
print(GraphQueryResource.to_json())

# convert the object into a dict
graph_query_resource_dict = graph_query_resource_instance.to_dict()
# create an instance of GraphQueryResource from a dict
graph_query_resource_from_dict = GraphQueryResource.from_dict(graph_query_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EnterpriseKnowledgeGraph

EnterpriseKnowledgeGraph resource definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EnterpriseKnowledgeGraphProperties**](EnterpriseKnowledgeGraphProperties.md) |  | [optional] 
**id** | **str** | Specifies the resource ID. | [optional] [readonly] 
**location** | **str** | Specifies the location of the resource. | [optional] 
**name** | **str** | Specifies the name of the resource. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Contains resource tags defined as key/value pairs. | [optional] 
**type** | **str** | Specifies the type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.enterprise_knowledge_graph import EnterpriseKnowledgeGraph

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseKnowledgeGraph from a JSON string
enterprise_knowledge_graph_instance = EnterpriseKnowledgeGraph.from_json(json)
# print the JSON string representation of the object
print(EnterpriseKnowledgeGraph.to_json())

# convert the object into a dict
enterprise_knowledge_graph_dict = enterprise_knowledge_graph_instance.to_dict()
# create an instance of EnterpriseKnowledgeGraph from a dict
enterprise_knowledge_graph_from_dict = EnterpriseKnowledgeGraph.from_dict(enterprise_knowledge_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



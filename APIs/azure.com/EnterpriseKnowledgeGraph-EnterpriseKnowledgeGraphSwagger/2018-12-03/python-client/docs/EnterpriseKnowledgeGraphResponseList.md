# EnterpriseKnowledgeGraphResponseList

The list of  EnterpriseKnowledgeGraph service operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of EnterpriseKnowledgeGraph service resources. | [optional] 
**value** | [**List[EnterpriseKnowledgeGraph]**](EnterpriseKnowledgeGraph.md) | Gets the list of EnterpriseKnowledgeGraph service results and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.enterprise_knowledge_graph_response_list import EnterpriseKnowledgeGraphResponseList

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseKnowledgeGraphResponseList from a JSON string
enterprise_knowledge_graph_response_list_instance = EnterpriseKnowledgeGraphResponseList.from_json(json)
# print the JSON string representation of the object
print(EnterpriseKnowledgeGraphResponseList.to_json())

# convert the object into a dict
enterprise_knowledge_graph_response_list_dict = enterprise_knowledge_graph_response_list_instance.to_dict()
# create an instance of EnterpriseKnowledgeGraphResponseList from a dict
enterprise_knowledge_graph_response_list_from_dict = EnterpriseKnowledgeGraphResponseList.from_dict(enterprise_knowledge_graph_response_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



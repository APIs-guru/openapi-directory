# EnterpriseKnowledgeGraphProperties

The parameters to provide for the EnterpriseKnowledgeGraph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the EnterpriseKnowledgeGraph | [optional] 
**metadata** | **object** | Specifies the metadata  of the resource. | [optional] 
**provisioning_state** | **str** | The state of EnterpriseKnowledgeGraph provisioning | [optional] 

## Example

```python
from openapi_client.models.enterprise_knowledge_graph_properties import EnterpriseKnowledgeGraphProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseKnowledgeGraphProperties from a JSON string
enterprise_knowledge_graph_properties_instance = EnterpriseKnowledgeGraphProperties.from_json(json)
# print the JSON string representation of the object
print(EnterpriseKnowledgeGraphProperties.to_json())

# convert the object into a dict
enterprise_knowledge_graph_properties_dict = enterprise_knowledge_graph_properties_instance.to_dict()
# create an instance of EnterpriseKnowledgeGraphProperties from a dict
enterprise_knowledge_graph_properties_from_dict = EnterpriseKnowledgeGraphProperties.from_dict(enterprise_knowledge_graph_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



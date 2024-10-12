# KnowledgebaseDTO

Response schema for CreateKb operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_name** | **str** | URL host name at which the knowledgebase is hosted. | [optional] 
**id** | **str** | Unique id that identifies a knowledgebase. | [optional] 
**last_accessed_timestamp** | **str** | Time stamp at which the knowledgebase was last accessed (UTC). | [optional] 
**last_changed_timestamp** | **str** | Time stamp at which the knowledgebase was last modified (UTC). | [optional] 
**last_published_timestamp** | **str** | Time stamp at which the knowledgebase was last published (UTC). | [optional] 
**name** | **str** | Friendly name of the knowledgebase. | [optional] 
**sources** | **List[str]** | Custom sources from which Q-A were extracted or explicitly added to the knowledgebase. | [optional] 
**urls** | **List[str]** | URL sources from which Q-A were extracted and added to the knowledgebase. | [optional] 
**user_id** | **str** | User who created / owns the knowledgebase. | [optional] 

## Example

```python
from openapi_client.models.knowledgebase_dto import KnowledgebaseDTO

# TODO update the JSON string below
json = "{}"
# create an instance of KnowledgebaseDTO from a JSON string
knowledgebase_dto_instance = KnowledgebaseDTO.from_json(json)
# print the JSON string representation of the object
print(KnowledgebaseDTO.to_json())

# convert the object into a dict
knowledgebase_dto_dict = knowledgebase_dto_instance.to_dict()
# create an instance of KnowledgebaseDTO from a dict
knowledgebase_dto_from_dict = KnowledgebaseDTO.from_dict(knowledgebase_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



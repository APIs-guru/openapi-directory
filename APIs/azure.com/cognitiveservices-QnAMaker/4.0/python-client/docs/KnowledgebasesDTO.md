# KnowledgebasesDTO

Collection of knowledgebases owned by a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**knowledgebases** | [**List[KnowledgebaseDTO]**](KnowledgebaseDTO.md) | Collection of knowledgebase records. | [optional] 

## Example

```python
from openapi_client.models.knowledgebases_dto import KnowledgebasesDTO

# TODO update the JSON string below
json = "{}"
# create an instance of KnowledgebasesDTO from a JSON string
knowledgebases_dto_instance = KnowledgebasesDTO.from_json(json)
# print the JSON string representation of the object
print(KnowledgebasesDTO.to_json())

# convert the object into a dict
knowledgebases_dto_dict = knowledgebases_dto_instance.to_dict()
# create an instance of KnowledgebasesDTO from a dict
knowledgebases_dto_from_dict = KnowledgebasesDTO.from_dict(knowledgebases_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



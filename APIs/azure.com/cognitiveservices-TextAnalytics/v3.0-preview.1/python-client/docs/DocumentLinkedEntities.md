# DocumentLinkedEntities


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[LinkedEntity]**](LinkedEntity.md) | Recognized well-known entities in the document. | 
**id** | **str** | Unique, non-empty document identifier. | 
**statistics** | [**DocumentStatistics**](DocumentStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_linked_entities import DocumentLinkedEntities

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentLinkedEntities from a JSON string
document_linked_entities_instance = DocumentLinkedEntities.from_json(json)
# print the JSON string representation of the object
print(DocumentLinkedEntities.to_json())

# convert the object into a dict
document_linked_entities_dict = document_linked_entities_instance.to_dict()
# create an instance of DocumentLinkedEntities from a dict
document_linked_entities_from_dict = DocumentLinkedEntities.from_dict(document_linked_entities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



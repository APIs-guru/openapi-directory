# DocumentEntities


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[Entity]**](Entity.md) | Recognized entities in the document. | 
**id** | **str** | Unique, non-empty document identifier. | 
**statistics** | [**DocumentStatistics**](DocumentStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_entities import DocumentEntities

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentEntities from a JSON string
document_entities_instance = DocumentEntities.from_json(json)
# print the JSON string representation of the object
print(DocumentEntities.to_json())

# convert the object into a dict
document_entities_dict = document_entities_instance.to_dict()
# create an instance of DocumentEntities from a dict
document_entities_from_dict = DocumentEntities.from_dict(document_entities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# IEdmVocabularyAnnotation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qualifier** | **str** |  | [optional] [readonly] 
**target** | **object** |  | [optional] 
**term** | [**IEdmTerm**](IEdmTerm.md) |  | [optional] 
**value** | [**IEdmExpression**](IEdmExpression.md) |  | [optional] 

## Example

```python
from openapi_client.models.i_edm_vocabulary_annotation import IEdmVocabularyAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of IEdmVocabularyAnnotation from a JSON string
i_edm_vocabulary_annotation_instance = IEdmVocabularyAnnotation.from_json(json)
# print the JSON string representation of the object
print(IEdmVocabularyAnnotation.to_json())

# convert the object into a dict
i_edm_vocabulary_annotation_dict = i_edm_vocabulary_annotation_instance.to_dict()
# create an instance of IEdmVocabularyAnnotation from a dict
i_edm_vocabulary_annotation_from_dict = IEdmVocabularyAnnotation.from_dict(i_edm_vocabulary_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# IEdmModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**declared_namespaces** | **List[str]** |  | [optional] [readonly] 
**direct_value_annotations_manager** | **object** |  | [optional] 
**entity_container** | [**IEdmEntityContainer**](IEdmEntityContainer.md) |  | [optional] 
**referenced_models** | [**List[IEdmModel]**](IEdmModel.md) |  | [optional] [readonly] 
**schema_elements** | [**List[IEdmSchemaElement]**](IEdmSchemaElement.md) |  | [optional] [readonly] 
**vocabulary_annotations** | [**List[IEdmVocabularyAnnotation]**](IEdmVocabularyAnnotation.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.i_edm_model import IEdmModel

# TODO update the JSON string below
json = "{}"
# create an instance of IEdmModel from a JSON string
i_edm_model_instance = IEdmModel.from_json(json)
# print the JSON string representation of the object
print(IEdmModel.to_json())

# convert the object into a dict
i_edm_model_dict = i_edm_model_instance.to_dict()
# create an instance of IEdmModel from a dict
i_edm_model_from_dict = IEdmModel.from_dict(i_edm_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DocumentTransform

A transformation of a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | **str** | The name of the document to transform. | [optional] 
**field_transforms** | [**List[FieldTransform]**](FieldTransform.md) | The list of transformations to apply to the fields of the document, in order. This must not be empty. | [optional] 

## Example

```python
from openapi_client.models.document_transform import DocumentTransform

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentTransform from a JSON string
document_transform_instance = DocumentTransform.from_json(json)
# print the JSON string representation of the object
print(DocumentTransform.to_json())

# convert the object into a dict
document_transform_dict = document_transform_instance.to_dict()
# create an instance of DocumentTransform from a dict
document_transform_from_dict = DocumentTransform.from_dict(document_transform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



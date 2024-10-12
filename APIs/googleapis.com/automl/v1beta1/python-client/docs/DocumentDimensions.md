# DocumentDimensions

Message that describes dimension of a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **float** | Height value of the document, works together with the unit. | [optional] 
**unit** | **str** | Unit of the dimension. | [optional] 
**width** | **float** | Width value of the document, works together with the unit. | [optional] 

## Example

```python
from openapi_client.models.document_dimensions import DocumentDimensions

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentDimensions from a JSON string
document_dimensions_instance = DocumentDimensions.from_json(json)
# print the JSON string representation of the object
print(DocumentDimensions.to_json())

# convert the object into a dict
document_dimensions_dict = document_dimensions_instance.to_dict()
# create an instance of DocumentDimensions from a dict
document_dimensions_from_dict = DocumentDimensions.from_dict(document_dimensions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



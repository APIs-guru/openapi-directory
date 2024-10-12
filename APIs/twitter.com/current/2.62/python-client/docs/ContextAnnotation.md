# ContextAnnotation

Annotation inferred from the Tweet text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | [**ContextAnnotationDomainFields**](ContextAnnotationDomainFields.md) |  | 
**entity** | [**ContextAnnotationEntityFields**](ContextAnnotationEntityFields.md) |  | 

## Example

```python
from openapi_client.models.context_annotation import ContextAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of ContextAnnotation from a JSON string
context_annotation_instance = ContextAnnotation.from_json(json)
# print the JSON string representation of the object
print(ContextAnnotation.to_json())

# convert the object into a dict
context_annotation_dict = context_annotation_instance.to_dict()
# create an instance of ContextAnnotation from a dict
context_annotation_from_dict = ContextAnnotation.from_dict(context_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



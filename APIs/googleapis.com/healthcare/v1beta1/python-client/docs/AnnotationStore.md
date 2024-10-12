# AnnotationStore

An Annotation store that can store annotation resources such as labels and tags for text, image and audio.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Optional. User-supplied key-value pairs used to organize Annotation stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. | [optional] 
**name** | **str** | Identifier. Resource name of the Annotation store, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.annotation_store import AnnotationStore

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationStore from a JSON string
annotation_store_instance = AnnotationStore.from_json(json)
# print the JSON string representation of the object
print(AnnotationStore.to_json())

# convert the object into a dict
annotation_store_dict = annotation_store_instance.to_dict()
# create an instance of AnnotationStore from a dict
annotation_store_from_dict = AnnotationStore.from_dict(annotation_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



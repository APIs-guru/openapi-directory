# Annotation

An annotation record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_source** | [**AnnotationSource**](AnnotationSource.md) |  | [optional] 
**custom_data** | **Dict[str, str]** | Additional information for this annotation record, such as annotator and verifier information or study campaign. | [optional] 
**image_annotation** | [**ImageAnnotation**](ImageAnnotation.md) |  | [optional] 
**name** | **str** | Identifier. Resource name of the Annotation, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}/annotations/{annotation_id}&#x60;. | [optional] 
**resource_annotation** | [**ResourceAnnotation**](ResourceAnnotation.md) |  | [optional] 
**text_annotation** | [**SensitiveTextAnnotation**](SensitiveTextAnnotation.md) |  | [optional] 

## Example

```python
from openapi_client.models.annotation import Annotation

# TODO update the JSON string below
json = "{}"
# create an instance of Annotation from a JSON string
annotation_instance = Annotation.from_json(json)
# print the JSON string representation of the object
print(Annotation.to_json())

# convert the object into a dict
annotation_dict = annotation_instance.to_dict()
# create an instance of Annotation from a dict
annotation_from_dict = Annotation.from_dict(annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



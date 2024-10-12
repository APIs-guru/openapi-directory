# AnnotationConfig

Specifies how to store annotations during de-identification operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_store_name** | **str** | The name of the annotation store, in the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}&#x60;). * The destination annotation store must be in the same project as the source data. De-identifying data across multiple projects is not supported. * The destination annotation store must exist when using DeidentifyDicomStore or DeidentifyFhirStore. DeidentifyDataset automatically creates the destination annotation store. | [optional] 
**store_quote** | **bool** | If set to true, the sensitive texts are included in SensitiveTextAnnotation of Annotation. | [optional] 

## Example

```python
from openapi_client.models.annotation_config import AnnotationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationConfig from a JSON string
annotation_config_instance = AnnotationConfig.from_json(json)
# print the JSON string representation of the object
print(AnnotationConfig.to_json())

# convert the object into a dict
annotation_config_dict = annotation_config_instance.to_dict()
# create an instance of AnnotationConfig from a dict
annotation_config_from_dict = AnnotationConfig.from_dict(annotation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



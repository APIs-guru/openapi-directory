# AnnotationSpec

A definition of an annotation spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. The name of the annotation spec to show in the interface. The name can be up to 32 characters long and must match the regexp &#x60;[a-zA-Z0-9_]+&#x60;. | [optional] 
**example_count** | **int** | Output only. The number of examples in the parent dataset labeled by the annotation spec. | [optional] 
**name** | **str** | Output only. Resource name of the annotation spec. Form: &#39;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationSpecs/{annotation_spec_id}&#39; | [optional] 

## Example

```python
from openapi_client.models.annotation_spec import AnnotationSpec

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationSpec from a JSON string
annotation_spec_instance = AnnotationSpec.from_json(json)
# print the JSON string representation of the object
print(AnnotationSpec.to_json())

# convert the object into a dict
annotation_spec_dict = annotation_spec_instance.to_dict()
# create an instance of AnnotationSpec from a dict
annotation_spec_from_dict = AnnotationSpec.from_dict(annotation_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



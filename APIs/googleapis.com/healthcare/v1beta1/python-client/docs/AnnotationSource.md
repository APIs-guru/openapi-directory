# AnnotationSource

AnnotationSource holds the source information of the annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_healthcare_source** | [**CloudHealthcareSource**](CloudHealthcareSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.annotation_source import AnnotationSource

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationSource from a JSON string
annotation_source_instance = AnnotationSource.from_json(json)
# print the JSON string representation of the object
print(AnnotationSource.to_json())

# convert the object into a dict
annotation_source_dict = annotation_source_instance.to_dict()
# create an instance of AnnotationSource from a dict
annotation_source_from_dict = AnnotationSource.from_dict(annotation_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



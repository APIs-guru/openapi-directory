# TextExtractionAnnotation

Annotation for identifying spans of text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **float** | Output only. A confidence estimate between 0.0 and 1.0. A higher value means greater confidence in correctness of the annotation. | [optional] 
**text_segment** | [**TextSegment**](TextSegment.md) |  | [optional] 

## Example

```python
from openapi_client.models.text_extraction_annotation import TextExtractionAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of TextExtractionAnnotation from a JSON string
text_extraction_annotation_instance = TextExtractionAnnotation.from_json(json)
# print the JSON string representation of the object
print(TextExtractionAnnotation.to_json())

# convert the object into a dict
text_extraction_annotation_dict = text_extraction_annotation_instance.to_dict()
# create an instance of TextExtractionAnnotation from a dict
text_extraction_annotation_from_dict = TextExtractionAnnotation.from_dict(text_extraction_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



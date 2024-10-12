# ClassificationAnnotation

Contains annotation details specific to classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **float** | Output only. A confidence estimate between 0.0 and 1.0. A higher value means greater confidence that the annotation is positive. If a user approves an annotation as negative or positive, the score value remains unchanged. If a user creates an annotation, the score is 0 for negative or 1 for positive. | [optional] 

## Example

```python
from openapi_client.models.classification_annotation import ClassificationAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of ClassificationAnnotation from a JSON string
classification_annotation_instance = ClassificationAnnotation.from_json(json)
# print the JSON string representation of the object
print(ClassificationAnnotation.to_json())

# convert the object into a dict
classification_annotation_dict = classification_annotation_instance.to_dict()
# create an instance of ClassificationAnnotation from a dict
classification_annotation_from_dict = ClassificationAnnotation.from_dict(classification_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



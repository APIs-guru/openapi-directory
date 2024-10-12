# SensitiveTextAnnotation

A TextAnnotation specifies a text range that includes sensitive information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**Dict[str, Detail]**](Detail.md) | Maps from a resource slice. For example, FHIR resource field path to a set of sensitive text findings. For example, Appointment.Narrative text1 --&gt; {findings_1, findings_2, findings_3} | [optional] 

## Example

```python
from openapi_client.models.sensitive_text_annotation import SensitiveTextAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of SensitiveTextAnnotation from a JSON string
sensitive_text_annotation_instance = SensitiveTextAnnotation.from_json(json)
# print the JSON string representation of the object
print(SensitiveTextAnnotation.to_json())

# convert the object into a dict
sensitive_text_annotation_dict = sensitive_text_annotation_instance.to_dict()
# create an instance of SensitiveTextAnnotation from a dict
sensitive_text_annotation_from_dict = SensitiveTextAnnotation.from_dict(sensitive_text_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



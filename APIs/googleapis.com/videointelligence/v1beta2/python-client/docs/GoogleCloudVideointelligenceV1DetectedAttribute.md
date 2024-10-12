# GoogleCloudVideointelligenceV1DetectedAttribute

A generic detected attribute represented by name in string format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Detected attribute confidence. Range [0, 1]. | [optional] 
**name** | **str** | The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document. | [optional] 
**value** | **str** | Text value of the detection result. For example, the value for \&quot;HairColor\&quot; can be \&quot;black\&quot;, \&quot;blonde\&quot;, etc. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1_detected_attribute import GoogleCloudVideointelligenceV1DetectedAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1DetectedAttribute from a JSON string
google_cloud_videointelligence_v1_detected_attribute_instance = GoogleCloudVideointelligenceV1DetectedAttribute.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1DetectedAttribute.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1_detected_attribute_dict = google_cloud_videointelligence_v1_detected_attribute_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1DetectedAttribute from a dict
google_cloud_videointelligence_v1_detected_attribute_from_dict = GoogleCloudVideointelligenceV1DetectedAttribute.from_dict(google_cloud_videointelligence_v1_detected_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



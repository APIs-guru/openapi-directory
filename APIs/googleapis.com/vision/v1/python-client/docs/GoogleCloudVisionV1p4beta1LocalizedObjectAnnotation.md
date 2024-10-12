# GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation

Set of detected objects with bounding boxes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_poly** | [**GoogleCloudVisionV1p4beta1BoundingPoly**](GoogleCloudVisionV1p4beta1BoundingPoly.md) |  | [optional] 
**language_code** | **str** | The BCP-47 language code, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 
**mid** | **str** | Object ID that should align with EntityAnnotation mid. | [optional] 
**name** | **str** | Object name, expressed in its &#x60;language_code&#x60; language. | [optional] 
**score** | **float** | Score of the result. Range [0, 1]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_localized_object_annotation import GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation from a JSON string
google_cloud_vision_v1p4beta1_localized_object_annotation_instance = GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_localized_object_annotation_dict = google_cloud_vision_v1p4beta1_localized_object_annotation_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation from a dict
google_cloud_vision_v1p4beta1_localized_object_annotation_from_dict = GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation.from_dict(google_cloud_vision_v1p4beta1_localized_object_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



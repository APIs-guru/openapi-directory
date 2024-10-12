# GoogleCloudVisionV1p1beta1EntityAnnotation

Set of detected entity features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_poly** | [**GoogleCloudVisionV1p1beta1BoundingPoly**](GoogleCloudVisionV1p1beta1BoundingPoly.md) |  | [optional] 
**confidence** | **float** | **Deprecated. Use &#x60;score&#x60; instead.** The accuracy of the entity detection in an image. For example, for an image in which the \&quot;Eiffel Tower\&quot; entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1]. | [optional] 
**description** | **str** | Entity textual description, expressed in its &#x60;locale&#x60; language. | [optional] 
**locale** | **str** | The language code for the locale in which the entity textual &#x60;description&#x60; is expressed. | [optional] 
**locations** | [**List[GoogleCloudVisionV1p1beta1LocationInfo]**](GoogleCloudVisionV1p1beta1LocationInfo.md) | The location information for the detected entity. Multiple &#x60;LocationInfo&#x60; elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. | [optional] 
**mid** | **str** | Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). | [optional] 
**properties** | [**List[GoogleCloudVisionV1p1beta1Property]**](GoogleCloudVisionV1p1beta1Property.md) | Some entities may have optional user-supplied &#x60;Property&#x60; (name/value) fields, such a score or string that qualifies the entity. | [optional] 
**score** | **float** | Overall score of the result. Range [0, 1]. | [optional] 
**topicality** | **float** | The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of \&quot;tower\&quot; is likely higher to an image containing the detected \&quot;Eiffel Tower\&quot; than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_entity_annotation import GoogleCloudVisionV1p1beta1EntityAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1EntityAnnotation from a JSON string
google_cloud_vision_v1p1beta1_entity_annotation_instance = GoogleCloudVisionV1p1beta1EntityAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1EntityAnnotation.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_entity_annotation_dict = google_cloud_vision_v1p1beta1_entity_annotation_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1EntityAnnotation from a dict
google_cloud_vision_v1p1beta1_entity_annotation_from_dict = GoogleCloudVisionV1p1beta1EntityAnnotation.from_dict(google_cloud_vision_v1p1beta1_entity_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



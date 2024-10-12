# GoogleCloudVisionV1p1beta1WebDetectionWebEntity

Entity deduced from similar images on the Internet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Canonical description of the entity, in English. | [optional] 
**entity_id** | **str** | Opaque entity ID. | [optional] 
**score** | **float** | Overall relevancy score for the entity. Not normalized and not comparable across different image queries. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_web_detection_web_entity import GoogleCloudVisionV1p1beta1WebDetectionWebEntity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1WebDetectionWebEntity from a JSON string
google_cloud_vision_v1p1beta1_web_detection_web_entity_instance = GoogleCloudVisionV1p1beta1WebDetectionWebEntity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1WebDetectionWebEntity.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_web_detection_web_entity_dict = google_cloud_vision_v1p1beta1_web_detection_web_entity_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1WebDetectionWebEntity from a dict
google_cloud_vision_v1p1beta1_web_detection_web_entity_from_dict = GoogleCloudVisionV1p1beta1WebDetectionWebEntity.from_dict(google_cloud_vision_v1p1beta1_web_detection_web_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



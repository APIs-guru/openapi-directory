# GoogleCloudAiplatformV1beta1SafetyRating

Safety rating corresponding to the generated content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked** | **bool** | Output only. Indicates whether the content was filtered out because of this rating. | [optional] [readonly] 
**category** | **str** | Output only. Harm category. | [optional] [readonly] 
**probability** | **str** | Output only. Harm probability levels in the content. | [optional] [readonly] 
**probability_score** | **float** | Output only. Harm probability score. | [optional] [readonly] 
**severity** | **str** | Output only. Harm severity levels in the content. | [optional] [readonly] 
**severity_score** | **float** | Output only. Harm severity score. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_safety_rating import GoogleCloudAiplatformV1beta1SafetyRating

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SafetyRating from a JSON string
google_cloud_aiplatform_v1beta1_safety_rating_instance = GoogleCloudAiplatformV1beta1SafetyRating.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SafetyRating.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_safety_rating_dict = google_cloud_aiplatform_v1beta1_safety_rating_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SafetyRating from a dict
google_cloud_aiplatform_v1beta1_safety_rating_from_dict = GoogleCloudAiplatformV1beta1SafetyRating.from_dict(google_cloud_aiplatform_v1beta1_safety_rating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



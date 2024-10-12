# GoogleCloudVisionV1p1beta1WebDetectionParams

Parameters for web detection request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_geo_results** | **bool** | This field has no effect on results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_web_detection_params import GoogleCloudVisionV1p1beta1WebDetectionParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1WebDetectionParams from a JSON string
google_cloud_vision_v1p1beta1_web_detection_params_instance = GoogleCloudVisionV1p1beta1WebDetectionParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1WebDetectionParams.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_web_detection_params_dict = google_cloud_vision_v1p1beta1_web_detection_params_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1WebDetectionParams from a dict
google_cloud_vision_v1p1beta1_web_detection_params_from_dict = GoogleCloudVisionV1p1beta1WebDetectionParams.from_dict(google_cloud_vision_v1p1beta1_web_detection_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



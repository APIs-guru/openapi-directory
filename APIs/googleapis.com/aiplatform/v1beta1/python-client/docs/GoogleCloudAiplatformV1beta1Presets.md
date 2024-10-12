# GoogleCloudAiplatformV1beta1Presets

Preset configuration for example-based explanations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modality** | **str** | The modality of the uploaded model, which automatically configures the distance measurement and feature normalization for the underlying example index and queries. If your model does not precisely fit one of these types, it is okay to choose the closest type. | [optional] 
**query** | **str** | Preset option controlling parameters for speed-precision trade-off when querying for examples. If omitted, defaults to &#x60;PRECISE&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_presets import GoogleCloudAiplatformV1beta1Presets

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Presets from a JSON string
google_cloud_aiplatform_v1beta1_presets_instance = GoogleCloudAiplatformV1beta1Presets.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Presets.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_presets_dict = google_cloud_aiplatform_v1beta1_presets_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Presets from a dict
google_cloud_aiplatform_v1beta1_presets_from_dict = GoogleCloudAiplatformV1beta1Presets.from_dict(google_cloud_aiplatform_v1beta1_presets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



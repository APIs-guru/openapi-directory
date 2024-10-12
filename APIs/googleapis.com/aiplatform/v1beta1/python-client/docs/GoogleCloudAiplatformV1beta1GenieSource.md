# GoogleCloudAiplatformV1beta1GenieSource

Contains information about the source of the models generated from Generative AI Studio.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model_uri** | **str** | Required. The public base model URI. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_genie_source import GoogleCloudAiplatformV1beta1GenieSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1GenieSource from a JSON string
google_cloud_aiplatform_v1beta1_genie_source_instance = GoogleCloudAiplatformV1beta1GenieSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1GenieSource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_genie_source_dict = google_cloud_aiplatform_v1beta1_genie_source_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1GenieSource from a dict
google_cloud_aiplatform_v1beta1_genie_source_from_dict = GoogleCloudAiplatformV1beta1GenieSource.from_dict(google_cloud_aiplatform_v1beta1_genie_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



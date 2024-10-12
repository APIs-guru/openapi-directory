# GoogleCloudAiplatformV1ModelOriginalModelInfo

Contains information about the original Model if this Model is a copy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Output only. The resource name of the Model this Model is a copy of, including the revision. Format: &#x60;projects/{project}/locations/{location}/models/{model_id}@{version_id}&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_original_model_info import GoogleCloudAiplatformV1ModelOriginalModelInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelOriginalModelInfo from a JSON string
google_cloud_aiplatform_v1_model_original_model_info_instance = GoogleCloudAiplatformV1ModelOriginalModelInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelOriginalModelInfo.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_original_model_info_dict = google_cloud_aiplatform_v1_model_original_model_info_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelOriginalModelInfo from a dict
google_cloud_aiplatform_v1_model_original_model_info_from_dict = GoogleCloudAiplatformV1ModelOriginalModelInfo.from_dict(google_cloud_aiplatform_v1_model_original_model_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



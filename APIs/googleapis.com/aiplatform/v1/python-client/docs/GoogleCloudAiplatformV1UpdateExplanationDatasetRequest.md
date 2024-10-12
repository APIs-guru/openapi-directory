# GoogleCloudAiplatformV1UpdateExplanationDatasetRequest

Request message for ModelService.UpdateExplanationDataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**examples** | [**GoogleCloudAiplatformV1Examples**](GoogleCloudAiplatformV1Examples.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_update_explanation_dataset_request import GoogleCloudAiplatformV1UpdateExplanationDatasetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1UpdateExplanationDatasetRequest from a JSON string
google_cloud_aiplatform_v1_update_explanation_dataset_request_instance = GoogleCloudAiplatformV1UpdateExplanationDatasetRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1UpdateExplanationDatasetRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_update_explanation_dataset_request_dict = google_cloud_aiplatform_v1_update_explanation_dataset_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1UpdateExplanationDatasetRequest from a dict
google_cloud_aiplatform_v1_update_explanation_dataset_request_from_dict = GoogleCloudAiplatformV1UpdateExplanationDatasetRequest.from_dict(google_cloud_aiplatform_v1_update_explanation_dataset_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



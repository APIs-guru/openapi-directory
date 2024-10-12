# GoogleCloudAiplatformV1beta1UpdateExplanationDatasetRequest

Request message for ModelService.UpdateExplanationDataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**examples** | [**GoogleCloudAiplatformV1beta1Examples**](GoogleCloudAiplatformV1beta1Examples.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_update_explanation_dataset_request import GoogleCloudAiplatformV1beta1UpdateExplanationDatasetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1UpdateExplanationDatasetRequest from a JSON string
google_cloud_aiplatform_v1beta1_update_explanation_dataset_request_instance = GoogleCloudAiplatformV1beta1UpdateExplanationDatasetRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1UpdateExplanationDatasetRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_update_explanation_dataset_request_dict = google_cloud_aiplatform_v1beta1_update_explanation_dataset_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1UpdateExplanationDatasetRequest from a dict
google_cloud_aiplatform_v1beta1_update_explanation_dataset_request_from_dict = GoogleCloudAiplatformV1beta1UpdateExplanationDatasetRequest.from_dict(google_cloud_aiplatform_v1beta1_update_explanation_dataset_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



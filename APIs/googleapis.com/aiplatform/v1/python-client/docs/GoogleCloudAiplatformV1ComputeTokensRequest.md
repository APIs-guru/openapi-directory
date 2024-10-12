# GoogleCloudAiplatformV1ComputeTokensRequest

Request message for ComputeTokens RPC call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | **List[object]** | Required. The instances that are the input to token computing API call. Schema is identical to the prediction schema of the text model, even for the non-text models, like chat models, or Codey models. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_compute_tokens_request import GoogleCloudAiplatformV1ComputeTokensRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ComputeTokensRequest from a JSON string
google_cloud_aiplatform_v1_compute_tokens_request_instance = GoogleCloudAiplatformV1ComputeTokensRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ComputeTokensRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_compute_tokens_request_dict = google_cloud_aiplatform_v1_compute_tokens_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ComputeTokensRequest from a dict
google_cloud_aiplatform_v1_compute_tokens_request_from_dict = GoogleCloudAiplatformV1ComputeTokensRequest.from_dict(google_cloud_aiplatform_v1_compute_tokens_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



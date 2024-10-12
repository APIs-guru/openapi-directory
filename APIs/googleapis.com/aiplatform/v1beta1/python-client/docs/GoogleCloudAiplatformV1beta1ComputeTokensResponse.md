# GoogleCloudAiplatformV1beta1ComputeTokensResponse

Response message for ComputeTokens RPC call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokens_info** | [**List[GoogleCloudAiplatformV1beta1TokensInfo]**](GoogleCloudAiplatformV1beta1TokensInfo.md) | Lists of tokens info from the input. A ComputeTokensRequest could have multiple instances with a prompt in each instance. We also need to return lists of tokens info for the request with multiple instances. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_compute_tokens_response import GoogleCloudAiplatformV1beta1ComputeTokensResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ComputeTokensResponse from a JSON string
google_cloud_aiplatform_v1beta1_compute_tokens_response_instance = GoogleCloudAiplatformV1beta1ComputeTokensResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ComputeTokensResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_compute_tokens_response_dict = google_cloud_aiplatform_v1beta1_compute_tokens_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ComputeTokensResponse from a dict
google_cloud_aiplatform_v1beta1_compute_tokens_response_from_dict = GoogleCloudAiplatformV1beta1ComputeTokensResponse.from_dict(google_cloud_aiplatform_v1beta1_compute_tokens_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudAiplatformV1beta1CountTokensResponse

Response message for PredictionService.CountTokens.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_billable_characters** | **int** | The total number of billable characters counted across all instances from the request. | [optional] 
**total_tokens** | **int** | The total number of tokens counted across all instances from the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_count_tokens_response import GoogleCloudAiplatformV1beta1CountTokensResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1CountTokensResponse from a JSON string
google_cloud_aiplatform_v1beta1_count_tokens_response_instance = GoogleCloudAiplatformV1beta1CountTokensResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1CountTokensResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_count_tokens_response_dict = google_cloud_aiplatform_v1beta1_count_tokens_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1CountTokensResponse from a dict
google_cloud_aiplatform_v1beta1_count_tokens_response_from_dict = GoogleCloudAiplatformV1beta1CountTokensResponse.from_dict(google_cloud_aiplatform_v1beta1_count_tokens_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



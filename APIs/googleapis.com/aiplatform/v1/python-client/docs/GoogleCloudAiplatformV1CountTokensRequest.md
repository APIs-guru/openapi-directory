# GoogleCloudAiplatformV1CountTokensRequest

Request message for PredictionService.CountTokens.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | [**List[GoogleCloudAiplatformV1Content]**](GoogleCloudAiplatformV1Content.md) | Required. Input content. | [optional] 
**instances** | **List[object]** | Required. The instances that are the input to token counting call. Schema is identical to the prediction schema of the underlying model. | [optional] 
**model** | **str** | Required. The name of the publisher model requested to serve the prediction. Format: &#x60;projects/{project}/locations/{location}/publishers/*/models/*&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_count_tokens_request import GoogleCloudAiplatformV1CountTokensRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1CountTokensRequest from a JSON string
google_cloud_aiplatform_v1_count_tokens_request_instance = GoogleCloudAiplatformV1CountTokensRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1CountTokensRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_count_tokens_request_dict = google_cloud_aiplatform_v1_count_tokens_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1CountTokensRequest from a dict
google_cloud_aiplatform_v1_count_tokens_request_from_dict = GoogleCloudAiplatformV1CountTokensRequest.from_dict(google_cloud_aiplatform_v1_count_tokens_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



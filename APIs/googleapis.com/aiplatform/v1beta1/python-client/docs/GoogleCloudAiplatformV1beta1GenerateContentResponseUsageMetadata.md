# GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata

Usage metadata about response(s).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates_token_count** | **int** | Number of tokens in the response(s). | [optional] 
**prompt_token_count** | **int** | Number of tokens in the request. | [optional] 
**total_token_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_generate_content_response_usage_metadata import GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata from a JSON string
google_cloud_aiplatform_v1beta1_generate_content_response_usage_metadata_instance = GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_generate_content_response_usage_metadata_dict = google_cloud_aiplatform_v1beta1_generate_content_response_usage_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata from a dict
google_cloud_aiplatform_v1beta1_generate_content_response_usage_metadata_from_dict = GoogleCloudAiplatformV1beta1GenerateContentResponseUsageMetadata.from_dict(google_cloud_aiplatform_v1beta1_generate_content_response_usage_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



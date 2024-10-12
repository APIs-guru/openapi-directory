# GoogleCloudAiplatformV1beta1TokensInfo

Tokens info with a list of tokens and the corresponding list of token ids.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_ids** | **List[str]** | A list of token ids from the input. | [optional] 
**tokens** | **List[bytearray]** | A list of tokens from the input. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_tokens_info import GoogleCloudAiplatformV1beta1TokensInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1TokensInfo from a JSON string
google_cloud_aiplatform_v1beta1_tokens_info_instance = GoogleCloudAiplatformV1beta1TokensInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1TokensInfo.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_tokens_info_dict = google_cloud_aiplatform_v1beta1_tokens_info_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1TokensInfo from a dict
google_cloud_aiplatform_v1beta1_tokens_info_from_dict = GoogleCloudAiplatformV1beta1TokensInfo.from_dict(google_cloud_aiplatform_v1beta1_tokens_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



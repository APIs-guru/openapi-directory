# GoogleCloudAiplatformV1beta1GenerateContentRequest

Request message for [PredictionService.GenerateContent].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | [**List[GoogleCloudAiplatformV1beta1Content]**](GoogleCloudAiplatformV1beta1Content.md) | Required. The content of the current conversation with the model. For single-turn queries, this is a single instance. For multi-turn queries, this is a repeated field that contains conversation history + latest request. | [optional] 
**generation_config** | [**GoogleCloudAiplatformV1beta1GenerationConfig**](GoogleCloudAiplatformV1beta1GenerationConfig.md) |  | [optional] 
**safety_settings** | [**List[GoogleCloudAiplatformV1beta1SafetySetting]**](GoogleCloudAiplatformV1beta1SafetySetting.md) | Optional. Per request settings for blocking unsafe content. Enforced on GenerateContentResponse.candidates. | [optional] 
**tools** | [**List[GoogleCloudAiplatformV1beta1Tool]**](GoogleCloudAiplatformV1beta1Tool.md) | Optional. A list of &#x60;Tools&#x60; the model may use to generate the next response. A &#x60;Tool&#x60; is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_generate_content_request import GoogleCloudAiplatformV1beta1GenerateContentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1GenerateContentRequest from a JSON string
google_cloud_aiplatform_v1beta1_generate_content_request_instance = GoogleCloudAiplatformV1beta1GenerateContentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1GenerateContentRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_generate_content_request_dict = google_cloud_aiplatform_v1beta1_generate_content_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1GenerateContentRequest from a dict
google_cloud_aiplatform_v1beta1_generate_content_request_from_dict = GoogleCloudAiplatformV1beta1GenerateContentRequest.from_dict(google_cloud_aiplatform_v1beta1_generate_content_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



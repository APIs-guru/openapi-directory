# GoogleCloudAiplatformV1FunctionResponse

The result output from a [FunctionCall] that contains a string representing the [FunctionDeclaration.name] and a structured JSON object containing any output from the function is used as context to the model. This should contain the result of a [FunctionCall] made based on model prediction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The name of the function to call. Matches [FunctionDeclaration.name] and [FunctionCall.name]. | [optional] 
**response** | **Dict[str, object]** | Required. The function response in JSON object format. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_function_response import GoogleCloudAiplatformV1FunctionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FunctionResponse from a JSON string
google_cloud_aiplatform_v1_function_response_instance = GoogleCloudAiplatformV1FunctionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FunctionResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_function_response_dict = google_cloud_aiplatform_v1_function_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FunctionResponse from a dict
google_cloud_aiplatform_v1_function_response_from_dict = GoogleCloudAiplatformV1FunctionResponse.from_dict(google_cloud_aiplatform_v1_function_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



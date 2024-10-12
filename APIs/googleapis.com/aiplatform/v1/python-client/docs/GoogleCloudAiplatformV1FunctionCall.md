# GoogleCloudAiplatformV1FunctionCall

A predicted [FunctionCall] returned from the model that contains a string representing the [FunctionDeclaration.name] and a structured JSON object containing the parameters and their values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **Dict[str, object]** | Optional. Required. The function parameters and values in JSON object format. See [FunctionDeclaration.parameters] for parameter details. | [optional] 
**name** | **str** | Required. The name of the function to call. Matches [FunctionDeclaration.name]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_function_call import GoogleCloudAiplatformV1FunctionCall

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FunctionCall from a JSON string
google_cloud_aiplatform_v1_function_call_instance = GoogleCloudAiplatformV1FunctionCall.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FunctionCall.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_function_call_dict = google_cloud_aiplatform_v1_function_call_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FunctionCall from a dict
google_cloud_aiplatform_v1_function_call_from_dict = GoogleCloudAiplatformV1FunctionCall.from_dict(google_cloud_aiplatform_v1_function_call_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudAiplatformV1beta1Tool

Tool details that the model may use to generate response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. A Tool object should contain exactly one type of Tool (e.g FunctionDeclaration, Retrieval or GoogleSearchRetrieval).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function_declarations** | [**List[GoogleCloudAiplatformV1beta1FunctionDeclaration]**](GoogleCloudAiplatformV1beta1FunctionDeclaration.md) | Optional. Function tool type. One or more function declarations to be passed to the model along with the current user query. Model may decide to call a subset of these functions by populating FunctionCall in the response. User should provide a FunctionResponse for each function call in the next turn. Based on the function responses, Model will generate the final response back to the user. Maximum 64 function declarations can be provided. | [optional] 
**google_search_retrieval** | [**GoogleCloudAiplatformV1beta1GoogleSearchRetrieval**](GoogleCloudAiplatformV1beta1GoogleSearchRetrieval.md) |  | [optional] 
**retrieval** | [**GoogleCloudAiplatformV1beta1Retrieval**](GoogleCloudAiplatformV1beta1Retrieval.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_tool import GoogleCloudAiplatformV1beta1Tool

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Tool from a JSON string
google_cloud_aiplatform_v1beta1_tool_instance = GoogleCloudAiplatformV1beta1Tool.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Tool.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_tool_dict = google_cloud_aiplatform_v1beta1_tool_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Tool from a dict
google_cloud_aiplatform_v1beta1_tool_from_dict = GoogleCloudAiplatformV1beta1Tool.from_dict(google_cloud_aiplatform_v1beta1_tool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



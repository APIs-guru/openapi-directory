# GoogleCloudAiplatformV1FunctionDeclaration

Structured representation of a function declaration as defined by the [OpenAPI 3.0 specification](https://spec.openapis.org/oas/v3.0.3). Included in this declaration are the function name and parameters. This FunctionDeclaration is a representation of a block of code that can be used as a `Tool` by the model and executed by the client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Description and purpose of the function. Model uses it to decide how and whether to call the function. | [optional] 
**name** | **str** | Required. The name of the function to call. Must start with a letter or an underscore. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. | [optional] 
**parameters** | [**GoogleCloudAiplatformV1Schema**](GoogleCloudAiplatformV1Schema.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_function_declaration import GoogleCloudAiplatformV1FunctionDeclaration

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FunctionDeclaration from a JSON string
google_cloud_aiplatform_v1_function_declaration_instance = GoogleCloudAiplatformV1FunctionDeclaration.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FunctionDeclaration.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_function_declaration_dict = google_cloud_aiplatform_v1_function_declaration_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FunctionDeclaration from a dict
google_cloud_aiplatform_v1_function_declaration_from_dict = GoogleCloudAiplatformV1FunctionDeclaration.from_dict(google_cloud_aiplatform_v1_function_declaration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



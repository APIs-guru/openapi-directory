# GoogleCloudAiplatformV1beta1EnvVar

Represents an environment variable present in a Container or Python Module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Name of the environment variable. Must be a valid C identifier. | [optional] 
**value** | **str** | Required. Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_env_var import GoogleCloudAiplatformV1beta1EnvVar

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1EnvVar from a JSON string
google_cloud_aiplatform_v1beta1_env_var_instance = GoogleCloudAiplatformV1beta1EnvVar.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1EnvVar.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_env_var_dict = google_cloud_aiplatform_v1beta1_env_var_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1EnvVar from a dict
google_cloud_aiplatform_v1beta1_env_var_from_dict = GoogleCloudAiplatformV1beta1EnvVar.from_dict(google_cloud_aiplatform_v1beta1_env_var_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudRunV2EnvVar

EnvVar represents an environment variable present in a Container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Name of the environment variable. Must not exceed 32768 characters. | [optional] 
**value** | **str** | Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to \&quot;\&quot;, and the maximum length is 32768 bytes. | [optional] 
**value_source** | [**GoogleCloudRunV2EnvVarSource**](GoogleCloudRunV2EnvVarSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_env_var import GoogleCloudRunV2EnvVar

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2EnvVar from a JSON string
google_cloud_run_v2_env_var_instance = GoogleCloudRunV2EnvVar.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2EnvVar.to_json())

# convert the object into a dict
google_cloud_run_v2_env_var_dict = google_cloud_run_v2_env_var_instance.to_dict()
# create an instance of GoogleCloudRunV2EnvVar from a dict
google_cloud_run_v2_env_var_from_dict = GoogleCloudRunV2EnvVar.from_dict(google_cloud_run_v2_env_var_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



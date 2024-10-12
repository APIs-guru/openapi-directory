# GoogleCloudRunV2EnvVarSource

EnvVarSource represents a source for the value of an EnvVar.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_key_ref** | [**GoogleCloudRunV2SecretKeySelector**](GoogleCloudRunV2SecretKeySelector.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_env_var_source import GoogleCloudRunV2EnvVarSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2EnvVarSource from a JSON string
google_cloud_run_v2_env_var_source_instance = GoogleCloudRunV2EnvVarSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2EnvVarSource.to_json())

# convert the object into a dict
google_cloud_run_v2_env_var_source_dict = google_cloud_run_v2_env_var_source_instance.to_dict()
# create an instance of GoogleCloudRunV2EnvVarSource from a dict
google_cloud_run_v2_env_var_source_from_dict = GoogleCloudRunV2EnvVarSource.from_dict(google_cloud_run_v2_env_var_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudRunV2SecretKeySelector

SecretEnvVarSource represents a source for the value of an EnvVar.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **str** | Required. The name of the secret in Cloud Secret Manager. Format: {secret_name} if the secret is in the same project. projects/{project}/secrets/{secret_name} if the secret is in a different project. | [optional] 
**version** | **str** | The Cloud Secret Manager secret version. Can be &#39;latest&#39; for the latest version, an integer for a specific version, or a version alias. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_secret_key_selector import GoogleCloudRunV2SecretKeySelector

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2SecretKeySelector from a JSON string
google_cloud_run_v2_secret_key_selector_instance = GoogleCloudRunV2SecretKeySelector.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2SecretKeySelector.to_json())

# convert the object into a dict
google_cloud_run_v2_secret_key_selector_dict = google_cloud_run_v2_secret_key_selector_instance.to_dict()
# create an instance of GoogleCloudRunV2SecretKeySelector from a dict
google_cloud_run_v2_secret_key_selector_from_dict = GoogleCloudRunV2SecretKeySelector.from_dict(google_cloud_run_v2_secret_key_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



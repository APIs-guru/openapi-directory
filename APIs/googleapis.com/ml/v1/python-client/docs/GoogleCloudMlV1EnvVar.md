# GoogleCloudMlV1EnvVar

Represents an environment variable to be made available in a container. This message is a subset of the [Kubernetes EnvVar v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#envvar-v1-core).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the environment variable. Must be a [valid C identifier](https://github.com/kubernetes/kubernetes/blob/v1.18.8/staging/src/k8s.io/apimachinery/pkg/util/validation/validation.go#L258) and must not begin with the prefix &#x60;AIP_&#x60;. | [optional] 
**value** | **str** | Value of the environment variable. Defaults to an empty string. In this field, you can reference [environment variables set by AI Platform Prediction](/ai-platform/prediction/docs/custom-container-requirements#aip-variables) and environment variables set earlier in the same env field as where this message occurs. You cannot reference environment variables set in the Docker image. In order for environment variables to be expanded, reference them by using the following syntax: $(VARIABLE_NAME) Note that this differs from Bash variable expansion, which does not use parentheses. If a variable cannot be resolved, the reference in the input string is used unchanged. To avoid variable expansion, you can escape this syntax with &#x60;$$&#x60;; for example: $$(VARIABLE_NAME) | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_env_var import GoogleCloudMlV1EnvVar

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1EnvVar from a JSON string
google_cloud_ml_v1_env_var_instance = GoogleCloudMlV1EnvVar.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1EnvVar.to_json())

# convert the object into a dict
google_cloud_ml_v1_env_var_dict = google_cloud_ml_v1_env_var_instance.to_dict()
# create an instance of GoogleCloudMlV1EnvVar from a dict
google_cloud_ml_v1_env_var_from_dict = GoogleCloudMlV1EnvVar.from_dict(google_cloud_ml_v1_env_var_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



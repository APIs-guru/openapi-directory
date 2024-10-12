# SecretEnvVar

Configuration for a secret environment variable. It has the information necessary to fetch the secret value from secret manager and expose it as an environment variable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Name of the environment variable. | [optional] 
**project_id** | **str** | Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. If not set, it will be populated with the function&#39;s project assuming that the secret exists in the same project as of the function. | [optional] 
**secret** | **str** | Name of the secret in secret manager (not the full resource name). | [optional] 
**version** | **str** | Version of the secret (version number or the string &#39;latest&#39;). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start. | [optional] 

## Example

```python
from openapi_client.models.secret_env_var import SecretEnvVar

# TODO update the JSON string below
json = "{}"
# create an instance of SecretEnvVar from a JSON string
secret_env_var_instance = SecretEnvVar.from_json(json)
# print the JSON string representation of the object
print(SecretEnvVar.to_json())

# convert the object into a dict
secret_env_var_dict = secret_env_var_instance.to_dict()
# create an instance of SecretEnvVar from a dict
secret_env_var_from_dict = SecretEnvVar.from_dict(secret_env_var_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



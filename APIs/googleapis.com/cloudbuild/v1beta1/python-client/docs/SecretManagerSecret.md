# SecretManagerSecret

Pairs a secret environment variable with a SecretVersion in Secret Manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**env** | **str** | Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build&#39;s secrets, and must be used by at least one build step. | [optional] 
**version_name** | **str** | Resource name of the SecretVersion. In format: projects/*/secrets/*/versions/* | [optional] 

## Example

```python
from openapi_client.models.secret_manager_secret import SecretManagerSecret

# TODO update the JSON string below
json = "{}"
# create an instance of SecretManagerSecret from a JSON string
secret_manager_secret_instance = SecretManagerSecret.from_json(json)
# print the JSON string representation of the object
print(SecretManagerSecret.to_json())

# convert the object into a dict
secret_manager_secret_dict = secret_manager_secret_instance.to_dict()
# create an instance of SecretManagerSecret from a dict
secret_manager_secret_from_dict = SecretManagerSecret.from_dict(secret_manager_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



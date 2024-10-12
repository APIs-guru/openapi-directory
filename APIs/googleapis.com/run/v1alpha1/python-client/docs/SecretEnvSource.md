# SecretEnvSource

Not supported by Cloud Run SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_object_reference** | [**LocalObjectReference**](LocalObjectReference.md) |  | [optional] 
**name** | **str** | The Secret to select from. | [optional] 
**optional** | **bool** | (Optional) Specify whether the Secret must be defined | [optional] 

## Example

```python
from openapi_client.models.secret_env_source import SecretEnvSource

# TODO update the JSON string below
json = "{}"
# create an instance of SecretEnvSource from a JSON string
secret_env_source_instance = SecretEnvSource.from_json(json)
# print the JSON string representation of the object
print(SecretEnvSource.to_json())

# convert the object into a dict
secret_env_source_dict = secret_env_source_instance.to_dict()
# create an instance of SecretEnvSource from a dict
secret_env_source_from_dict = SecretEnvSource.from_dict(secret_env_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



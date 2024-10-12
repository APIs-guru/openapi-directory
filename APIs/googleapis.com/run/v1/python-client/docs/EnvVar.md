# EnvVar

EnvVar represents an environment variable present in a Container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Name of the environment variable. | [optional] 
**value** | **str** | Value of the environment variable. Defaults to \&quot;\&quot;. Variable references are not supported in Cloud Run. | [optional] 
**value_from** | [**EnvVarSource**](EnvVarSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.env_var import EnvVar

# TODO update the JSON string below
json = "{}"
# create an instance of EnvVar from a JSON string
env_var_instance = EnvVar.from_json(json)
# print the JSON string representation of the object
print(EnvVar.to_json())

# convert the object into a dict
env_var_dict = env_var_instance.to_dict()
# create an instance of EnvVar from a dict
env_var_from_dict = EnvVar.from_dict(env_var_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



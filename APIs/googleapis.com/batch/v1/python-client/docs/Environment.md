# Environment

An Environment describes a collection of environment variables to set when executing Tasks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encrypted_variables** | [**KMSEnvMap**](KMSEnvMap.md) |  | [optional] 
**secret_variables** | **Dict[str, str]** | A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable. | [optional] 
**variables** | **Dict[str, str]** | A map of environment variable names to values. | [optional] 

## Example

```python
from openapi_client.models.environment import Environment

# TODO update the JSON string below
json = "{}"
# create an instance of Environment from a JSON string
environment_instance = Environment.from_json(json)
# print the JSON string representation of the object
print(Environment.to_json())

# convert the object into a dict
environment_dict = environment_instance.to_dict()
# create an instance of Environment from a dict
environment_from_dict = Environment.from_dict(environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



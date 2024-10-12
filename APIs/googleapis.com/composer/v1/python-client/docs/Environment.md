# Environment

An environment for running orchestration tasks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**EnvironmentConfig**](EnvironmentConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which this environment was created. | [optional] 
**labels** | **Dict[str, str]** | Optional. User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \\p{Ll}\\p{Lo}{0,62} * Values must conform to regexp: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} * Both keys and values are additionally constrained to be &lt;&#x3D; 128 bytes in size. | [optional] 
**name** | **str** | The resource name of the environment, in the form: \&quot;projects/{projectId}/locations/{locationId}/environments/{environmentId}\&quot; EnvironmentId must start with a lowercase letter followed by up to 63 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. | [optional] 
**satisfies_pzs** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**state** | **str** | The current state of the environment. | [optional] 
**storage_config** | [**StorageConfig**](StorageConfig.md) |  | [optional] 
**update_time** | **str** | Output only. The time at which this environment was last modified. | [optional] 
**uuid** | **str** | Output only. The UUID (Universally Unique IDentifier) associated with this environment. This value is generated when the environment is created. | [optional] 

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



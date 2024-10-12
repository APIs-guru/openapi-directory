# ContainerOverride

Per container override specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **List[str]** | Arguments to the entrypoint. The specified arguments replace and override any existing entrypoint arguments. Must be empty if &#x60;clear_args&#x60; is set to true. | [optional] 
**clear_args** | **bool** | Optional. Set to True to clear all existing arguments. | [optional] 
**env** | [**List[EnvVar]**](EnvVar.md) | List of environment variables to set in the container. All specified environment variables are merged with existing environment variables. When the specified environment variables exist, these values override any existing values. | [optional] 
**name** | **str** | The name of the container specified as a DNS_LABEL. | [optional] 

## Example

```python
from openapi_client.models.container_override import ContainerOverride

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerOverride from a JSON string
container_override_instance = ContainerOverride.from_json(json)
# print the JSON string representation of the object
print(ContainerOverride.to_json())

# convert the object into a dict
container_override_dict = container_override_instance.to_dict()
# create an instance of ContainerOverride from a dict
container_override_from_dict = ContainerOverride.from_dict(container_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



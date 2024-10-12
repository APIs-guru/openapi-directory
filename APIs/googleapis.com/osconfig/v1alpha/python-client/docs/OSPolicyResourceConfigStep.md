# OSPolicyResourceConfigStep

Step performed by the OS Config agent for configuring an `OSPolicyResource` to its desired state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | An error message recorded during the execution of this step. Only populated when outcome is FAILED. | [optional] 
**outcome** | **str** | Outcome of the configuration step. | [optional] 
**type** | **str** | Configuration step type. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_config_step import OSPolicyResourceConfigStep

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceConfigStep from a JSON string
os_policy_resource_config_step_instance = OSPolicyResourceConfigStep.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceConfigStep.to_json())

# convert the object into a dict
os_policy_resource_config_step_dict = os_policy_resource_config_step_instance.to_dict()
# create an instance of OSPolicyResourceConfigStep from a dict
os_policy_resource_config_step_from_dict = OSPolicyResourceConfigStep.from_dict(os_policy_resource_config_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



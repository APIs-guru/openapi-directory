# PhaseConfig

PhaseConfig represents the configuration for a phase in the custom canary deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **int** | Required. Percentage deployment for the phase. | [optional] 
**phase_id** | **str** | Required. The ID to assign to the &#x60;Rollout&#x60; phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: &#x60;^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$&#x60;. | [optional] 
**postdeploy** | [**Postdeploy**](Postdeploy.md) |  | [optional] 
**predeploy** | [**Predeploy**](Predeploy.md) |  | [optional] 
**profiles** | **List[str]** | Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the &#x60;DeliveryPipeline&#x60; stage. | [optional] 
**verify** | **bool** | Whether to run verify tests after the deployment. | [optional] 

## Example

```python
from openapi_client.models.phase_config import PhaseConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PhaseConfig from a JSON string
phase_config_instance = PhaseConfig.from_json(json)
# print the JSON string representation of the object
print(PhaseConfig.to_json())

# convert the object into a dict
phase_config_dict = phase_config_instance.to_dict()
# create an instance of PhaseConfig from a dict
phase_config_from_dict = PhaseConfig.from_dict(phase_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



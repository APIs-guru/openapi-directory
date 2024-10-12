# Autopilot

Autopilot is the configuration for Autopilot settings on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable Autopilot | [optional] 
**workload_policy_config** | [**WorkloadPolicyConfig**](WorkloadPolicyConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.autopilot import Autopilot

# TODO update the JSON string below
json = "{}"
# create an instance of Autopilot from a JSON string
autopilot_instance = Autopilot.from_json(json)
# print the JSON string representation of the object
print(Autopilot.to_json())

# convert the object into a dict
autopilot_dict = autopilot_instance.to_dict()
# create an instance of Autopilot from a dict
autopilot_from_dict = Autopilot.from_dict(autopilot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



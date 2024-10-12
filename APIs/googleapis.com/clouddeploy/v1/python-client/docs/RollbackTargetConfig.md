# RollbackTargetConfig

Configs for the Rollback rollout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rollout** | [**Rollout**](Rollout.md) |  | [optional] 
**starting_phase_id** | **str** | Optional. The starting phase ID for the &#x60;Rollout&#x60;. If unspecified, the &#x60;Rollout&#x60; will start in the stable phase. | [optional] 

## Example

```python
from openapi_client.models.rollback_target_config import RollbackTargetConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackTargetConfig from a JSON string
rollback_target_config_instance = RollbackTargetConfig.from_json(json)
# print the JSON string representation of the object
print(RollbackTargetConfig.to_json())

# convert the object into a dict
rollback_target_config_dict = rollback_target_config_instance.to_dict()
# create an instance of RollbackTargetConfig from a dict
rollback_target_config_from_dict = RollbackTargetConfig.from_dict(rollback_target_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



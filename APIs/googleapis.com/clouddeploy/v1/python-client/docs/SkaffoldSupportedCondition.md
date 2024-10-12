# SkaffoldSupportedCondition

SkaffoldSupportedCondition contains information about when support for the release's version of Skaffold ends.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maintenance_mode_time** | **str** | The time at which this release&#39;s version of Skaffold will enter maintenance mode. | [optional] 
**skaffold_support_state** | **str** | The Skaffold support state for this release&#39;s version of Skaffold. | [optional] 
**status** | **bool** | True if the version of Skaffold used by this release is supported. | [optional] 
**support_expiration_time** | **str** | The time at which this release&#39;s version of Skaffold will no longer be supported. | [optional] 

## Example

```python
from openapi_client.models.skaffold_supported_condition import SkaffoldSupportedCondition

# TODO update the JSON string below
json = "{}"
# create an instance of SkaffoldSupportedCondition from a JSON string
skaffold_supported_condition_instance = SkaffoldSupportedCondition.from_json(json)
# print the JSON string representation of the object
print(SkaffoldSupportedCondition.to_json())

# convert the object into a dict
skaffold_supported_condition_dict = skaffold_supported_condition_instance.to_dict()
# create an instance of SkaffoldSupportedCondition from a dict
skaffold_supported_condition_from_dict = SkaffoldSupportedCondition.from_dict(skaffold_supported_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



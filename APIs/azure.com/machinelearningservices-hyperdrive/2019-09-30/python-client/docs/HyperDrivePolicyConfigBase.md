# HyperDrivePolicyConfigBase

Early termination policy configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Type of early termination policy. | 

## Example

```python
from openapi_client.models.hyper_drive_policy_config_base import HyperDrivePolicyConfigBase

# TODO update the JSON string below
json = "{}"
# create an instance of HyperDrivePolicyConfigBase from a JSON string
hyper_drive_policy_config_base_instance = HyperDrivePolicyConfigBase.from_json(json)
# print the JSON string representation of the object
print(HyperDrivePolicyConfigBase.to_json())

# convert the object into a dict
hyper_drive_policy_config_base_dict = hyper_drive_policy_config_base_instance.to_dict()
# create an instance of HyperDrivePolicyConfigBase from a dict
hyper_drive_policy_config_base_from_dict = HyperDrivePolicyConfigBase.from_dict(hyper_drive_policy_config_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



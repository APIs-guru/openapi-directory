# MabProtectionPolicy

Mab container-specific backup policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_policy** | [**RetentionPolicy**](RetentionPolicy.md) |  | [optional] 
**schedule_policy** | [**SchedulePolicy**](SchedulePolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.mab_protection_policy import MabProtectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of MabProtectionPolicy from a JSON string
mab_protection_policy_instance = MabProtectionPolicy.from_json(json)
# print the JSON string representation of the object
print(MabProtectionPolicy.to_json())

# convert the object into a dict
mab_protection_policy_dict = mab_protection_policy_instance.to_dict()
# create an instance of MabProtectionPolicy from a dict
mab_protection_policy_from_dict = MabProtectionPolicy.from_dict(mab_protection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



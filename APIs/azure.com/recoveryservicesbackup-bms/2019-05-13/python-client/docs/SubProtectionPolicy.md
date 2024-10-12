# SubProtectionPolicy

Sub-protection policy which includes schedule and retention

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_type** | **str** | Type of backup policy type | [optional] 
**retention_policy** | [**RetentionPolicy**](RetentionPolicy.md) |  | [optional] 
**schedule_policy** | [**SchedulePolicy**](SchedulePolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.sub_protection_policy import SubProtectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of SubProtectionPolicy from a JSON string
sub_protection_policy_instance = SubProtectionPolicy.from_json(json)
# print the JSON string representation of the object
print(SubProtectionPolicy.to_json())

# convert the object into a dict
sub_protection_policy_dict = sub_protection_policy_instance.to_dict()
# create an instance of SubProtectionPolicy from a dict
sub_protection_policy_from_dict = SubProtectionPolicy.from_dict(sub_protection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



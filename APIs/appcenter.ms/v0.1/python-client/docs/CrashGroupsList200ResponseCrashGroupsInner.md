# CrashGroupsList200ResponseCrashGroupsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation** | **str** |  | 
**app_version** | **str** |  | 
**build** | **str** |  | 
**count** | **int** |  | 
**crash_group_id** | **str** |  | 
**crash_reason** | **str** |  | 
**display_id** | **str** |  | 
**exception** | **str** |  | [optional] 
**fatal** | **bool** | Crash or handled exception | 
**first_occurrence** | **datetime** |  | 
**impacted_users** | **int** |  | [optional] 
**last_occurrence** | **datetime** |  | 
**new_crash_group_id** | **str** |  | 
**reason_frame** | [**CrashGroupsList200ResponseCrashGroupsInnerReasonFrame**](CrashGroupsList200ResponseCrashGroupsInnerReasonFrame.md) |  | [optional] 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.crash_groups_list200_response_crash_groups_inner import CrashGroupsList200ResponseCrashGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupsList200ResponseCrashGroupsInner from a JSON string
crash_groups_list200_response_crash_groups_inner_instance = CrashGroupsList200ResponseCrashGroupsInner.from_json(json)
# print the JSON string representation of the object
print(CrashGroupsList200ResponseCrashGroupsInner.to_json())

# convert the object into a dict
crash_groups_list200_response_crash_groups_inner_dict = crash_groups_list200_response_crash_groups_inner_instance.to_dict()
# create an instance of CrashGroupsList200ResponseCrashGroupsInner from a dict
crash_groups_list200_response_crash_groups_inner_from_dict = CrashGroupsList200ResponseCrashGroupsInner.from_dict(crash_groups_list200_response_crash_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



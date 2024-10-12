# CsmUsageQuota

Usage of the quota resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | The current value of the resource counter | [optional] 
**limit** | **int** | The resource limit | [optional] 
**name** | [**LocalizableString**](LocalizableString.md) |  | [optional] 
**next_reset_time** | **datetime** | Next reset time for the resource counter | [optional] 
**unit** | **str** | Units of measurement for the quota resource | [optional] 

## Example

```python
from openapi_client.models.csm_usage_quota import CsmUsageQuota

# TODO update the JSON string below
json = "{}"
# create an instance of CsmUsageQuota from a JSON string
csm_usage_quota_instance = CsmUsageQuota.from_json(json)
# print the JSON string representation of the object
print(CsmUsageQuota.to_json())

# convert the object into a dict
csm_usage_quota_dict = csm_usage_quota_instance.to_dict()
# create an instance of CsmUsageQuota from a dict
csm_usage_quota_from_dict = CsmUsageQuota.from_dict(csm_usage_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



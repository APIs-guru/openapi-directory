# AnalyticsCrashGroupsTotals200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_version** | **str** |  | [optional] 
**crash_group_id** | **str** |  | [optional] 
**overall** | [**AnalyticsCrashGroupsTotals200ResponseInnerOverall**](AnalyticsCrashGroupsTotals200ResponseInnerOverall.md) |  | [optional] 

## Example

```python
from openapi_client.models.analytics_crash_groups_totals200_response_inner import AnalyticsCrashGroupsTotals200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsCrashGroupsTotals200ResponseInner from a JSON string
analytics_crash_groups_totals200_response_inner_instance = AnalyticsCrashGroupsTotals200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsCrashGroupsTotals200ResponseInner.to_json())

# convert the object into a dict
analytics_crash_groups_totals200_response_inner_dict = analytics_crash_groups_totals200_response_inner_instance.to_dict()
# create an instance of AnalyticsCrashGroupsTotals200ResponseInner from a dict
analytics_crash_groups_totals200_response_inner_from_dict = AnalyticsCrashGroupsTotals200ResponseInner.from_dict(analytics_crash_groups_totals200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



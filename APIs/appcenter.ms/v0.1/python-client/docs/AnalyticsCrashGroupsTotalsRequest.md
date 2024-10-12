# AnalyticsCrashGroupsTotalsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_groups** | [**List[AnalyticsCrashGroupsTotalsRequestCrashGroupsInner]**](AnalyticsCrashGroupsTotalsRequestCrashGroupsInner.md) |  | 

## Example

```python
from openapi_client.models.analytics_crash_groups_totals_request import AnalyticsCrashGroupsTotalsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsCrashGroupsTotalsRequest from a JSON string
analytics_crash_groups_totals_request_instance = AnalyticsCrashGroupsTotalsRequest.from_json(json)
# print the JSON string representation of the object
print(AnalyticsCrashGroupsTotalsRequest.to_json())

# convert the object into a dict
analytics_crash_groups_totals_request_dict = analytics_crash_groups_totals_request_instance.to_dict()
# create an instance of AnalyticsCrashGroupsTotalsRequest from a dict
analytics_crash_groups_totals_request_from_dict = AnalyticsCrashGroupsTotalsRequest.from_dict(analytics_crash_groups_totals_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AnalyticsCrashGroupOperatingSystemCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_count** | **int** |  | [optional] 
**operating_systems** | [**List[AnalyticsCrashGroupOperatingSystemCounts200ResponseOperatingSystemsInner]**](AnalyticsCrashGroupOperatingSystemCounts200ResponseOperatingSystemsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.analytics_crash_group_operating_system_counts200_response import AnalyticsCrashGroupOperatingSystemCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsCrashGroupOperatingSystemCounts200Response from a JSON string
analytics_crash_group_operating_system_counts200_response_instance = AnalyticsCrashGroupOperatingSystemCounts200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsCrashGroupOperatingSystemCounts200Response.to_json())

# convert the object into a dict
analytics_crash_group_operating_system_counts200_response_dict = analytics_crash_group_operating_system_counts200_response_instance.to_dict()
# create an instance of AnalyticsCrashGroupOperatingSystemCounts200Response from a dict
analytics_crash_group_operating_system_counts200_response_from_dict = AnalyticsCrashGroupOperatingSystemCounts200Response.from_dict(analytics_crash_group_operating_system_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



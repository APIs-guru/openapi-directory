# AnalyticsCrashCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total crash count. | [optional] 
**crashes** | [**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md) | The total crash count for day. | [optional] 

## Example

```python
from openapi_client.models.analytics_crash_counts200_response import AnalyticsCrashCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsCrashCounts200Response from a JSON string
analytics_crash_counts200_response_instance = AnalyticsCrashCounts200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsCrashCounts200Response.to_json())

# convert the object into a dict
analytics_crash_counts200_response_dict = analytics_crash_counts200_response_instance.to_dict()
# create an instance of AnalyticsCrashCounts200Response from a dict
analytics_crash_counts200_response_from_dict = AnalyticsCrashCounts200Response.from_dict(analytics_crash_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



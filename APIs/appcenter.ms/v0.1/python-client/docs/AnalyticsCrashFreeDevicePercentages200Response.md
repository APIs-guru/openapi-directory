# AnalyticsCrashFreeDevicePercentages200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_percentage** | **float** | Average percentage. | [optional] 
**daily_percentages** | [**List[AnalyticsCrashFreeDevicePercentages200ResponseDailyPercentagesInner]**](AnalyticsCrashFreeDevicePercentages200ResponseDailyPercentagesInner.md) | The crash-free percentage per day. | [optional] 

## Example

```python
from openapi_client.models.analytics_crash_free_device_percentages200_response import AnalyticsCrashFreeDevicePercentages200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsCrashFreeDevicePercentages200Response from a JSON string
analytics_crash_free_device_percentages200_response_instance = AnalyticsCrashFreeDevicePercentages200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsCrashFreeDevicePercentages200Response.to_json())

# convert the object into a dict
analytics_crash_free_device_percentages200_response_dict = analytics_crash_free_device_percentages200_response_instance.to_dict()
# create an instance of AnalyticsCrashFreeDevicePercentages200Response from a dict
analytics_crash_free_device_percentages200_response_from_dict = AnalyticsCrashFreeDevicePercentages200Response.from_dict(analytics_crash_free_device_percentages200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



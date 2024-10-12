# CrashFreeDevicePercentages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_percentage** | **float** | Average percentage. | [optional] 
**daily_percentages** | [**List[AnalyticsCrashFreeDevicePercentages200ResponseDailyPercentagesInner]**](AnalyticsCrashFreeDevicePercentages200ResponseDailyPercentagesInner.md) | The crash-free percentage per day. | [optional] 

## Example

```python
from openapi_client.models.crash_free_device_percentages import CrashFreeDevicePercentages

# TODO update the JSON string below
json = "{}"
# create an instance of CrashFreeDevicePercentages from a JSON string
crash_free_device_percentages_instance = CrashFreeDevicePercentages.from_json(json)
# print the JSON string representation of the object
print(CrashFreeDevicePercentages.to_json())

# convert the object into a dict
crash_free_device_percentages_dict = crash_free_device_percentages_instance.to_dict()
# create an instance of CrashFreeDevicePercentages from a dict
crash_free_device_percentages_from_dict = CrashFreeDevicePercentages.from_dict(crash_free_device_percentages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



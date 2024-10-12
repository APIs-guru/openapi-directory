# AnalyticsEventDeviceCount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices_count** | [**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md) |  | [optional] 
**previous_total_devices_with_event** | **int** |  | [optional] 
**total_devices** | **int** |  | [optional] 
**total_devices_with_event** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.analytics_event_device_count200_response import AnalyticsEventDeviceCount200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsEventDeviceCount200Response from a JSON string
analytics_event_device_count200_response_instance = AnalyticsEventDeviceCount200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsEventDeviceCount200Response.to_json())

# convert the object into a dict
analytics_event_device_count200_response_dict = analytics_event_device_count200_response_instance.to_dict()
# create an instance of AnalyticsEventDeviceCount200Response from a dict
analytics_event_device_count200_response_from_dict = AnalyticsEventDeviceCount200Response.from_dict(analytics_event_device_count200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



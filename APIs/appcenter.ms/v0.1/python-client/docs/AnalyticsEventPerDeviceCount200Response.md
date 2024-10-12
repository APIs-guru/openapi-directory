# AnalyticsEventPerDeviceCount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_count_per_device** | **float** |  | [optional] 
**count_per_device** | [**List[AnalyticsEventPerDeviceCount200ResponseCountPerDeviceInner]**](AnalyticsEventPerDeviceCount200ResponseCountPerDeviceInner.md) |  | [optional] 
**previous_avg_count_per_device** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.analytics_event_per_device_count200_response import AnalyticsEventPerDeviceCount200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsEventPerDeviceCount200Response from a JSON string
analytics_event_per_device_count200_response_instance = AnalyticsEventPerDeviceCount200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsEventPerDeviceCount200Response.to_json())

# convert the object into a dict
analytics_event_per_device_count200_response_dict = analytics_event_per_device_count200_response_instance.to_dict()
# create an instance of AnalyticsEventPerDeviceCount200Response from a dict
analytics_event_per_device_count200_response_from_dict = AnalyticsEventPerDeviceCount200Response.from_dict(analytics_event_per_device_count200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



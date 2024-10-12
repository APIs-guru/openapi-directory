# AnalyticsPerDeviceCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_sessions_per_user** | **float** | Average seesion per user. | [optional] 
**previous_average_sessions_per_user** | **float** | Previous average session per user. | [optional] 
**previous_total_count** | **int** | Previous total count. | [optional] 
**sessions_per_user** | [**List[AnalyticsPerDeviceCounts200ResponseSessionsPerUserInner]**](AnalyticsPerDeviceCounts200ResponseSessionsPerUserInner.md) | The session count for each interval per device. | [optional] 
**total_count** | **int** | Total session per device count. | [optional] 

## Example

```python
from openapi_client.models.analytics_per_device_counts200_response import AnalyticsPerDeviceCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsPerDeviceCounts200Response from a JSON string
analytics_per_device_counts200_response_instance = AnalyticsPerDeviceCounts200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsPerDeviceCounts200Response.to_json())

# convert the object into a dict
analytics_per_device_counts200_response_dict = analytics_per_device_counts200_response_instance.to_dict()
# create an instance of AnalyticsPerDeviceCounts200Response from a dict
analytics_per_device_counts200_response_from_dict = AnalyticsPerDeviceCounts200Response.from_dict(analytics_per_device_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



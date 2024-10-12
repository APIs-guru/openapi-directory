# AnalyticsDeviceCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily** | [**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md) | The active device count for each interval. | [optional] 
**monthly** | [**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md) | The active device count for each interval with a month&#39;s retention. | [optional] 
**weekly** | [**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md) | The active device count for each interval with a week&#39;s retention. | [optional] 

## Example

```python
from openapi_client.models.analytics_device_counts200_response import AnalyticsDeviceCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsDeviceCounts200Response from a JSON string
analytics_device_counts200_response_instance = AnalyticsDeviceCounts200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsDeviceCounts200Response.to_json())

# convert the object into a dict
analytics_device_counts200_response_dict = analytics_device_counts200_response_instance.to_dict()
# create an instance of AnalyticsDeviceCounts200Response from a dict
analytics_device_counts200_response_from_dict = AnalyticsDeviceCounts200Response.from_dict(analytics_device_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



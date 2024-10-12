# AnalyticsEventPerSessionCount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_count_per_session** | **float** |  | [optional] 
**count_per_session** | [**List[AnalyticsEventPerDeviceCount200ResponseCountPerDeviceInner]**](AnalyticsEventPerDeviceCount200ResponseCountPerDeviceInner.md) |  | [optional] 
**previous_avg_count_per_session** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.analytics_event_per_session_count200_response import AnalyticsEventPerSessionCount200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsEventPerSessionCount200Response from a JSON string
analytics_event_per_session_count200_response_instance = AnalyticsEventPerSessionCount200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsEventPerSessionCount200Response.to_json())

# convert the object into a dict
analytics_event_per_session_count200_response_dict = analytics_event_per_session_count200_response_instance.to_dict()
# create an instance of AnalyticsEventPerSessionCount200Response from a dict
analytics_event_per_session_count200_response_from_dict = AnalyticsEventPerSessionCount200Response.from_dict(analytics_event_per_session_count200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



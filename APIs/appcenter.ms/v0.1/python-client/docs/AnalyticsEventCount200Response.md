# AnalyticsEventCount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | [**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md) |  | [optional] 
**previous_total_count** | **int** |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.analytics_event_count200_response import AnalyticsEventCount200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsEventCount200Response from a JSON string
analytics_event_count200_response_instance = AnalyticsEventCount200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsEventCount200Response.to_json())

# convert the object into a dict
analytics_event_count200_response_dict = analytics_event_count200_response_instance.to_dict()
# create an instance of AnalyticsEventCount200Response from a dict
analytics_event_count200_response_from_dict = AnalyticsEventCount200Response.from_dict(analytics_event_count200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



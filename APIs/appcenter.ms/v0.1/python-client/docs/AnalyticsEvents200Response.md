# AnalyticsEvents200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[AnalyticsEvents200ResponseEventsInner]**](AnalyticsEvents200ResponseEventsInner.md) |  | [optional] 
**total** | **int** | The total count of events. | [optional] 
**total_devices** | **int** | The active device over this period. | [optional] 

## Example

```python
from openapi_client.models.analytics_events200_response import AnalyticsEvents200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsEvents200Response from a JSON string
analytics_events200_response_instance = AnalyticsEvents200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsEvents200Response.to_json())

# convert the object into a dict
analytics_events200_response_dict = analytics_events200_response_instance.to_dict()
# create an instance of AnalyticsEvents200Response from a dict
analytics_events200_response_from_dict = AnalyticsEvents200Response.from_dict(analytics_events200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



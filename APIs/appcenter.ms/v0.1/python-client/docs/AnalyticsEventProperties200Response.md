# AnalyticsEventProperties200Response

Event properties during the time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_properties** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.analytics_event_properties200_response import AnalyticsEventProperties200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsEventProperties200Response from a JSON string
analytics_event_properties200_response_instance = AnalyticsEventProperties200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsEventProperties200Response.to_json())

# convert the object into a dict
analytics_event_properties200_response_dict = analytics_event_properties200_response_instance.to_dict()
# create an instance of AnalyticsEventProperties200Response from a dict
analytics_event_properties200_response_from_dict = AnalyticsEventProperties200Response.from_dict(analytics_event_properties200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



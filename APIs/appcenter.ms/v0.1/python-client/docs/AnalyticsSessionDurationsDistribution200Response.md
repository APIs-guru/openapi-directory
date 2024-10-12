# AnalyticsSessionDurationsDistribution200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_duration** | **str** | The average session duration for current time range. | [optional] 
**distribution** | [**List[AnalyticsSessionDurationsDistribution200ResponseDistributionInner]**](AnalyticsSessionDurationsDistribution200ResponseDistributionInner.md) | The count of sessions in these buckets. | [optional] 
**previous_average_duration** | **str** | The previous average session duration for previous time range. | [optional] 

## Example

```python
from openapi_client.models.analytics_session_durations_distribution200_response import AnalyticsSessionDurationsDistribution200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsSessionDurationsDistribution200Response from a JSON string
analytics_session_durations_distribution200_response_instance = AnalyticsSessionDurationsDistribution200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsSessionDurationsDistribution200Response.to_json())

# convert the object into a dict
analytics_session_durations_distribution200_response_dict = analytics_session_durations_distribution200_response_instance.to_dict()
# create an instance of AnalyticsSessionDurationsDistribution200Response from a dict
analytics_session_durations_distribution200_response_from_dict = AnalyticsSessionDurationsDistribution200Response.from_dict(analytics_session_durations_distribution200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



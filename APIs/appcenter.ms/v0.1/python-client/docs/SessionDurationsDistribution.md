# SessionDurationsDistribution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_duration** | **str** | The average session duration for current time range. | [optional] 
**distribution** | [**List[AnalyticsSessionDurationsDistribution200ResponseDistributionInner]**](AnalyticsSessionDurationsDistribution200ResponseDistributionInner.md) | The count of sessions in these buckets. | [optional] 
**previous_average_duration** | **str** | The previous average session duration for previous time range. | [optional] 

## Example

```python
from openapi_client.models.session_durations_distribution import SessionDurationsDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of SessionDurationsDistribution from a JSON string
session_durations_distribution_instance = SessionDurationsDistribution.from_json(json)
# print the JSON string representation of the object
print(SessionDurationsDistribution.to_json())

# convert the object into a dict
session_durations_distribution_dict = session_durations_distribution_instance.to_dict()
# create an instance of SessionDurationsDistribution from a dict
session_durations_distribution_from_dict = SessionDurationsDistribution.from_dict(session_durations_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



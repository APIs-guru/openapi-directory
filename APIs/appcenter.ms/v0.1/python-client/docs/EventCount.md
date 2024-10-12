# EventCount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | [**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md) |  | [optional] 
**previous_total_count** | **int** |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.event_count import EventCount

# TODO update the JSON string below
json = "{}"
# create an instance of EventCount from a JSON string
event_count_instance = EventCount.from_json(json)
# print the JSON string representation of the object
print(EventCount.to_json())

# convert the object into a dict
event_count_dict = event_count_instance.to_dict()
# create an instance of EventCount from a dict
event_count_from_dict = EventCount.from_dict(event_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



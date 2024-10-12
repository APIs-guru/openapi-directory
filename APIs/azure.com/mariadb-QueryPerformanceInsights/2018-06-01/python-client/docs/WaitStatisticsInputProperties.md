# WaitStatisticsInputProperties

The properties for input to get wait statistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_window** | **str** | Aggregation interval type in ISO 8601 format. | 
**observation_end_time** | **datetime** | Observation end time. | 
**observation_start_time** | **datetime** | Observation start time. | 

## Example

```python
from openapi_client.models.wait_statistics_input_properties import WaitStatisticsInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WaitStatisticsInputProperties from a JSON string
wait_statistics_input_properties_instance = WaitStatisticsInputProperties.from_json(json)
# print the JSON string representation of the object
print(WaitStatisticsInputProperties.to_json())

# convert the object into a dict
wait_statistics_input_properties_dict = wait_statistics_input_properties_instance.to_dict()
# create an instance of WaitStatisticsInputProperties from a dict
wait_statistics_input_properties_from_dict = WaitStatisticsInputProperties.from_dict(wait_statistics_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



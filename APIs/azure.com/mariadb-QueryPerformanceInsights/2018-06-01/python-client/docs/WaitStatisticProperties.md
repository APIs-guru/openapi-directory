# WaitStatisticProperties

The properties of a wait statistic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Wait event count observed in this time interval. | [optional] 
**database_name** | **str** | Database Name. | [optional] 
**end_time** | **datetime** | Observation end time. | [optional] 
**event_name** | **str** | Wait event name. | [optional] 
**event_type_name** | **str** | Wait event type name. | [optional] 
**query_id** | **int** | Database query identifier. | [optional] 
**start_time** | **datetime** | Observation start time. | [optional] 
**total_time_in_ms** | **float** | Total time of wait in milliseconds in this time interval. | [optional] 
**user_id** | **int** | Database user identifier. | [optional] 

## Example

```python
from openapi_client.models.wait_statistic_properties import WaitStatisticProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WaitStatisticProperties from a JSON string
wait_statistic_properties_instance = WaitStatisticProperties.from_json(json)
# print the JSON string representation of the object
print(WaitStatisticProperties.to_json())

# convert the object into a dict
wait_statistic_properties_dict = wait_statistic_properties_instance.to_dict()
# create an instance of WaitStatisticProperties from a dict
wait_statistic_properties_from_dict = WaitStatisticProperties.from_dict(wait_statistic_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



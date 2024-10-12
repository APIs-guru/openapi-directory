# AutoscaleRecurrence

Schedule-based autoscale request parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**List[AutoscaleSchedule]**](AutoscaleSchedule.md) | Array of schedule-based autoscale rules | [optional] 
**time_zone** | **str** | The time zone for the autoscale schedule times | [optional] 

## Example

```python
from openapi_client.models.autoscale_recurrence import AutoscaleRecurrence

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscaleRecurrence from a JSON string
autoscale_recurrence_instance = AutoscaleRecurrence.from_json(json)
# print the JSON string representation of the object
print(AutoscaleRecurrence.to_json())

# convert the object into a dict
autoscale_recurrence_dict = autoscale_recurrence_instance.to_dict()
# create an instance of AutoscaleRecurrence from a dict
autoscale_recurrence_from_dict = AutoscaleRecurrence.from_dict(autoscale_recurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# LogSchedulePolicy

Log policy schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_frequency_in_mins** | **int** | Frequency of the log schedule operation of this policy in minutes. | [optional] 

## Example

```python
from openapi_client.models.log_schedule_policy import LogSchedulePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of LogSchedulePolicy from a JSON string
log_schedule_policy_instance = LogSchedulePolicy.from_json(json)
# print the JSON string representation of the object
print(LogSchedulePolicy.to_json())

# convert the object into a dict
log_schedule_policy_dict = log_schedule_policy_instance.to_dict()
# create an instance of LogSchedulePolicy from a dict
log_schedule_policy_from_dict = LogSchedulePolicy.from_dict(log_schedule_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



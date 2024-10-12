# OneTimeSchedule

Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execute_time** | **str** | Required. The desired patch job execution time. | [optional] 

## Example

```python
from openapi_client.models.one_time_schedule import OneTimeSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of OneTimeSchedule from a JSON string
one_time_schedule_instance = OneTimeSchedule.from_json(json)
# print the JSON string representation of the object
print(OneTimeSchedule.to_json())

# convert the object into a dict
one_time_schedule_dict = one_time_schedule_instance.to_dict()
# create an instance of OneTimeSchedule from a dict
one_time_schedule_from_dict = OneTimeSchedule.from_dict(one_time_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



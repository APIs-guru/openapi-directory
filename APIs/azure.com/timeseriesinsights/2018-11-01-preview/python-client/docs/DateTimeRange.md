# DateTimeRange

The range of time. Cannot be null or negative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **datetime** | Start timestamp of the time range. Start timestamp is inclusive when used in time series query requests. Events that have this timestamp are included. | 
**to** | **datetime** | End timestamp of the time range. End timestamp is exclusive when used in time series query requests. Events that match this timestamp are excluded. Note that end timestamp is inclusive when returned by Get Availability (meaning that there is an event with this exact \&quot;to\&quot; timestamp). | 

## Example

```python
from openapi_client.models.date_time_range import DateTimeRange

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimeRange from a JSON string
date_time_range_instance = DateTimeRange.from_json(json)
# print the JSON string representation of the object
print(DateTimeRange.to_json())

# convert the object into a dict
date_time_range_dict = date_time_range_instance.to_dict()
# create an instance of DateTimeRange from a dict
date_time_range_from_dict = DateTimeRange.from_dict(date_time_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



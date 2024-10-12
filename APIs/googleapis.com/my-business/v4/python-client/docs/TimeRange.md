# TimeRange

A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Epoch timestamp for the end of the range (exclusive). | [optional] 
**start_time** | **str** | Epoch timestamp for the start of the range (inclusive). | [optional] 

## Example

```python
from openapi_client.models.time_range import TimeRange

# TODO update the JSON string below
json = "{}"
# create an instance of TimeRange from a JSON string
time_range_instance = TimeRange.from_json(json)
# print the JSON string representation of the object
print(TimeRange.to_json())

# convert the object into a dict
time_range_dict = time_range_instance.to_dict()
# create an instance of TimeRange from a dict
time_range_from_dict = TimeRange.from_dict(time_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



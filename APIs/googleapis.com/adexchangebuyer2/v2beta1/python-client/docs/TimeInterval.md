# TimeInterval

An interval of time, with an absolute start and end.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The timestamp marking the end of the range (exclusive) for which data is included. | [optional] 
**start_time** | **str** | The timestamp marking the start of the range (inclusive) for which data is included. | [optional] 

## Example

```python
from openapi_client.models.time_interval import TimeInterval

# TODO update the JSON string below
json = "{}"
# create an instance of TimeInterval from a JSON string
time_interval_instance = TimeInterval.from_json(json)
# print the JSON string representation of the object
print(TimeInterval.to_json())

# convert the object into a dict
time_interval_dict = time_interval_instance.to_dict()
# create an instance of TimeInterval from a dict
time_interval_from_dict = TimeInterval.from_dict(time_interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



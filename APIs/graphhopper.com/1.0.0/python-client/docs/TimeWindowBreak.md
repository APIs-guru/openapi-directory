# TimeWindowBreak


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** | Specifies the duration of the break in seconds. | 
**earliest** | **int** | Specifies the earliest start time of the break in seconds. | 
**latest** | **int** | Specifies the latest start time of break in seconds. | 

## Example

```python
from openapi_client.models.time_window_break import TimeWindowBreak

# TODO update the JSON string below
json = "{}"
# create an instance of TimeWindowBreak from a JSON string
time_window_break_instance = TimeWindowBreak.from_json(json)
# print the JSON string representation of the object
print(TimeWindowBreak.to_json())

# convert the object into a dict
time_window_break_dict = time_window_break_instance.to_dict()
# create an instance of TimeWindowBreak from a dict
time_window_break_from_dict = TimeWindowBreak.from_dict(time_window_break_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



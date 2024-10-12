# Timeframe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closes** | **datetime** | Close time for all days mentioned in the dayOfWeek. If close time is less than open, then it is following day. | [optional] 
**day_of_week** | **List[int]** | ISO day of the week. 1- Monday, 7- Sunday | [optional] 
**open247** | **bool** | Open around the clock | [optional] 
**opens** | **datetime** | Open time for all days mentioned in the dayOfWeek | [optional] 

## Example

```python
from openapi_client.models.timeframe import Timeframe

# TODO update the JSON string below
json = "{}"
# create an instance of Timeframe from a JSON string
timeframe_instance = Timeframe.from_json(json)
# print the JSON string representation of the object
print(Timeframe.to_json())

# convert the object into a dict
timeframe_dict = timeframe_instance.to_dict()
# create an instance of Timeframe from a dict
timeframe_from_dict = Timeframe.from_dict(timeframe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



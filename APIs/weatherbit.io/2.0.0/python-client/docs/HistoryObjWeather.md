# HistoryObjWeather


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Weather Condition code | [optional] 
**description** | **str** | Weather Condition description | [optional] 
**icon** | **str** | Icon code for forecast image display | [optional] 

## Example

```python
from openapi_client.models.history_obj_weather import HistoryObjWeather

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryObjWeather from a JSON string
history_obj_weather_instance = HistoryObjWeather.from_json(json)
# print the JSON string representation of the object
print(HistoryObjWeather.to_json())

# convert the object into a dict
history_obj_weather_dict = history_obj_weather_instance.to_dict()
# create an instance of HistoryObjWeather from a dict
history_obj_weather_from_dict = HistoryObjWeather.from_dict(history_obj_weather_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



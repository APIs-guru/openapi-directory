# HistoryDay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city_name** | **str** | City name (Closest) | [optional] 
**country_code** | **str** | Country abbreviation | [optional] 
**data** | [**List[HistoryDayObj]**](HistoryDayObj.md) |  | [optional] 
**lat** | **str** | Latitude | [optional] 
**lon** | **str** | Longitude | [optional] 
**sources** | **List[str]** | List of data sources used in response | [optional] 
**state_code** | **str** | State abbreviation | [optional] 
**timezone** | **str** | Local IANA time zone | [optional] 

## Example

```python
from openapi_client.models.history_day import HistoryDay

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryDay from a JSON string
history_day_instance = HistoryDay.from_json(json)
# print the JSON string representation of the object
print(HistoryDay.to_json())

# convert the object into a dict
history_day_dict = history_day_instance.to_dict()
# create an instance of HistoryDay from a dict
history_day_from_dict = HistoryDay.from_dict(history_day_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



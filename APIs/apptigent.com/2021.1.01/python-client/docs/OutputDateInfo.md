# OutputDateInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **float** | DayOfWeek | [optional] 
**day_of_year** | **float** | DayOfYear | [optional] 
**minutes_in_day** | **float** | MinutesInDay | [optional] 
**seconds_in_day** | **float** | SecondsInDay | [optional] 
**ticks** | **float** | Ticks | [optional] 
**week_of_year** | **float** | WeekOfYear | [optional] 

## Example

```python
from openapi_client.models.output_date_info import OutputDateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OutputDateInfo from a JSON string
output_date_info_instance = OutputDateInfo.from_json(json)
# print the JSON string representation of the object
print(OutputDateInfo.to_json())

# convert the object into a dict
output_date_info_dict = output_date_info_instance.to_dict()
# create an instance of OutputDateInfo from a dict
output_date_info_from_dict = OutputDateInfo.from_dict(output_date_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TimeMachineTimeMachine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[TimeMachineTimeMachineHourlyData]**](TimeMachineTimeMachineHourlyData.md) |  | 
**elevation** | **int** | Elevation above sea level in metres (for units &#39;metric&#39;, &#39;uk&#39;, &#39;ca&#39;) or feet (for units &#39;us&#39;) | 
**lat** | **str** | Latitude of the point, always in the format &lt;float&gt;&lt;N/S&gt;, for example &#x60;&#x60;23.5S&#x60;&#x60; | 
**lon** | **str** | Longitude of the point, always in the format &lt;float&gt;&lt;E/W&gt;, for example &#x60;&#x60;23.5W&#x60;&#x60; | 
**statistics** | [**TimeMachinePointDailyStatsData**](TimeMachinePointDailyStatsData.md) |  | 
**timezone** | **str** | Name of the timezone in format like &#39;Europe/London&#39;. Available only when the place is specified through place ID. | [optional] 
**units** | **str** | Unit system (metric, uk, ca or us) | 

## Example

```python
from openapi_client.models.time_machine_time_machine import TimeMachineTimeMachine

# TODO update the JSON string below
json = "{}"
# create an instance of TimeMachineTimeMachine from a JSON string
time_machine_time_machine_instance = TimeMachineTimeMachine.from_json(json)
# print the JSON string representation of the object
print(TimeMachineTimeMachine.to_json())

# convert the object into a dict
time_machine_time_machine_dict = time_machine_time_machine_instance.to_dict()
# create an instance of TimeMachineTimeMachine from a dict
time_machine_time_machine_from_dict = TimeMachineTimeMachine.from_dict(time_machine_time_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



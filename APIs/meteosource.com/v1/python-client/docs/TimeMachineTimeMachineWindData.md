# TimeMachineTimeMachineWindData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**angle** | **int** | Wind direction in &#x60;N&#x60;, &#x60;NNE&#x60;, &#x60;NE&#x60;, ..., &#x60;NNW&#x60; format. Unit: deg | [optional] 
**dir** | **bytearray** | Wind direction in &#x60;N&#x60;, &#x60;NNE&#x60;, &#x60;NE&#x60;, ..., &#x60;NNW&#x60; format. Unit: 16dir | [optional] 
**gusts** | **int** | Wind gust speed. Units: metric &#x3D; m/s, us &#x3D; mph, uk &#x3D; mph, ca &#x3D; km/h | [optional] 
**speed** | **int** | Wind speed 10 metres above the ground. Units: metric &#x3D; m/s, us &#x3D; mph, uk &#x3D; mph, ca &#x3D; km/h | [optional] 

## Example

```python
from openapi_client.models.time_machine_time_machine_wind_data import TimeMachineTimeMachineWindData

# TODO update the JSON string below
json = "{}"
# create an instance of TimeMachineTimeMachineWindData from a JSON string
time_machine_time_machine_wind_data_instance = TimeMachineTimeMachineWindData.from_json(json)
# print the JSON string representation of the object
print(TimeMachineTimeMachineWindData.to_json())

# convert the object into a dict
time_machine_time_machine_wind_data_dict = time_machine_time_machine_wind_data_instance.to_dict()
# create an instance of TimeMachineTimeMachineWindData from a dict
time_machine_time_machine_wind_data_from_dict = TimeMachineTimeMachineWindData.from_dict(time_machine_time_machine_wind_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



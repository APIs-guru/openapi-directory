# PicoChargingData

Container class for the pico charging station API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_charging_energy** | **float** | The energy used by this active charging (in kWh) | [optional] 
**active_charging_power** | **float** | The power of the active charging (in kW) | [optional] 
**connection_mode** | **str** | The mode how this station is connected to the cloud | [optional] 
**duration** | **int** | The duration of this charging in seconds | [optional] 
**last_warning_or_error** | **str** | The last warning or error of the station. This message is only shown if the warning or error happend in the last 5 minutes. | [optional] 
**last_warning_or_error_message** | **str** | The message of the last warning or error of the station. | [optional] 
**last_warning_or_error_time** | **datetime** | The time when the LastWarningOrError happend | [optional] 
**load_shedding_state** | **str** | Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A | [optional] 
**loadmanagement_group_name** | **str** | The name of the loadmanagement group. Or string.empty if the station is not in a group | [optional] 
**max_allowed_charging_current** | **int** | Max allowed charging current in A | [optional] 
**max_dynamic_current** | **int** | Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A | [optional] 
**max_loadmanagement_group_current** | **int** | Max. current of the loadmanagement group of this station (if there is any) in A | [optional] 
**max_station_current** | **int** | Max. current of the station in A | [optional] 
**min_station_current** | **int** | Min. current of the station in A | [optional] 
**rssi** | **int** | Received Signal Strength Indicator for the connection mode (wifi or mobile).               -127 (min) to 0 (Max) | [optional] 
**state** | **str** | The state of the charging station | [optional] [readonly] 
**value_date** | **datetime** | The date of this values | [optional] 

## Example

```python
from openapi_client.models.pico_charging_data import PicoChargingData

# TODO update the JSON string below
json = "{}"
# create an instance of PicoChargingData from a JSON string
pico_charging_data_instance = PicoChargingData.from_json(json)
# print the JSON string representation of the object
print(PicoChargingData.to_json())

# convert the object into a dict
pico_charging_data_dict = pico_charging_data_instance.to_dict()
# create an instance of PicoChargingData from a dict
pico_charging_data_from_dict = PicoChargingData.from_dict(pico_charging_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



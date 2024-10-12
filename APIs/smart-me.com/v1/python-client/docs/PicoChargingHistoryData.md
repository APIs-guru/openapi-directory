# PicoChargingHistoryData

Api container for the charging station history

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** | The duration in seconds | [optional] [readonly] 
**energy_used** | **float** | The energy used (in kWh) | [optional] [readonly] 
**start_time** | **datetime** | The starttime of the charging (in UTC) | [optional] [readonly] 
**transaction_stop_reason** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.pico_charging_history_data import PicoChargingHistoryData

# TODO update the JSON string below
json = "{}"
# create an instance of PicoChargingHistoryData from a JSON string
pico_charging_history_data_instance = PicoChargingHistoryData.from_json(json)
# print the JSON string representation of the object
print(PicoChargingHistoryData.to_json())

# convert the object into a dict
pico_charging_history_data_dict = pico_charging_history_data_instance.to_dict()
# create an instance of PicoChargingHistoryData from a dict
pico_charging_history_data_from_dict = PicoChargingHistoryData.from_dict(pico_charging_history_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



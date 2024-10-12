# Device

Container Class for the Web API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_power** | **float** | The Actvie Power or current flow rate | [optional] 
**active_power_l1** | **float** | The Actvie Power Phase L1 | [optional] 
**active_power_l2** | **float** | The Actvie Power Phase L2 | [optional] 
**active_power_l3** | **float** | The Actvie Power Phase L3 | [optional] 
**active_power_unit** | **str** | The Unit of the Active Power Value | [optional] 
**active_tariff** | **int** | The Number of the Active Tariff | [optional] 
**additional_meter_serial_number** | **str** | An additional Meter serial number. e.g. the number of a meter a smart-me device is connected to. | [optional] 
**analog_output1** | **int** | The analog output number 1 (PWM signal) (0 - 32183) | [optional] 
**analog_output2** | **int** | The analog output number 2 (PWM signal) (0 - 32183) | [optional] 
**charging_station_state** | **str** | The state of a pico charging station. (Only available for pico charging stations) | [optional] 
**counter_reading** | **float** | The Meter Counter Reading (Total Energy used) | [optional] 
**counter_reading_export** | **float** | The Meter Counter Reading only export | [optional] 
**counter_reading_import** | **float** | The Meter Counter Reading only import | [optional] 
**counter_reading_t1** | **float** | The Meter Counter Reading Tariff 1 | [optional] 
**counter_reading_t2** | **float** | The Meter Counter Reading Tariff 2 | [optional] 
**counter_reading_t3** | **float** | The Meter Counter Reading Tariff 3 | [optional] 
**counter_reading_t4** | **float** | The Meter Counter Reading Tariff 4 | [optional] 
**counter_reading_unit** | **str** | The Unit of the Counter Reading | [optional] 
**current** | **float** | The Current (in A) | [optional] 
**current_l1** | **float** | The Current Phase L1 (in A) | [optional] 
**current_l2** | **float** | The Current Phase L2 (in A) | [optional] 
**current_l3** | **float** | The Current Phase L3 (in A) | [optional] 
**device_energy_type** | **str** | The Energy Type of this device | [optional] 
**digital_input1** | **bool** | The digital input number 1 | [optional] 
**digital_input2** | **bool** | The digital input number 2 | [optional] 
**digital_output1** | **bool** | The digital output number 1 | [optional] 
**digital_output2** | **bool** | The digital output number 2 | [optional] 
**family_type** | **str** | The Family Type of the device. | [optional] 
**flow_rate** | **float** | The current flow rate (e.g. m3/h) | [optional] 
**id** | **str** | The ID of the device | [optional] 
**meter_sub_type** | **str** | The sub meter type (e.g. warmwater or coldwater) | [optional] 
**name** | **str** | The Name of the Device | [optional] 
**power_factor** | **float** | The Power Factor (cos phi). Range: 0 - 1 | [optional] 
**power_factor_l1** | **float** | The Power Factor (cos phi) Phase L1. Range: 0 - 1 | [optional] 
**power_factor_l2** | **float** | The Power Factor (cos phi) Phase L2. Range: 0 - 1 | [optional] 
**power_factor_l3** | **float** | The Power Factor (cos phi) Phase L3. Range: 0 - 1 | [optional] 
**serial** | **int** | The Serial number | [optional] 
**switch_on** | **bool** | Flag if the Switch is on on this device. | [optional] 
**switch_phase_l1_on** | **bool** | Flag if the Phase L1 is on on this device. | [optional] 
**switch_phase_l2_on** | **bool** | Flag if the Phase L2 is on on this device. | [optional] 
**switch_phase_l3_on** | **bool** | Flag if the Phase L3 is on on this device. | [optional] 
**temperature** | **float** | The Temperature (in degree celsius) | [optional] 
**value_date** | **datetime** | Time of last successful connection the the smart-me Cloud. | [optional] 
**voltage** | **float** | The Voltage (in V) | [optional] 
**voltage_l1** | **float** | The Voltage Phase L1 (in V) | [optional] 
**voltage_l2** | **float** | The Voltage Phase L2 (in V) | [optional] 
**voltage_l3** | **float** | The Voltage Phase L3 (in V) | [optional] 

## Example

```python
from openapi_client.models.device import Device

# TODO update the JSON string below
json = "{}"
# create an instance of Device from a JSON string
device_instance = Device.from_json(json)
# print the JSON string representation of the object
print(Device.to_json())

# convert the object into a dict
device_dict = device_instance.to_dict()
# create an instance of Device from a dict
device_from_dict = Device.from_dict(device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



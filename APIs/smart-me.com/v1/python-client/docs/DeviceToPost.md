# DeviceToPost

Container Class for the Web API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_power** | **float** | The Active Power or current flow rate. In kW or m3/h | [optional] 
**counter_reading** | **float** | The Meter Counter Reading (Total Energy used) in kWh or m3. | [optional] 
**counter_reading_export** | **float** | The Meter Counter Reading only export | [optional] 
**counter_reading_export_t1** | **float** | The Meter Counter Reading only export (Tariff 1) | [optional] 
**counter_reading_export_t2** | **float** | The Meter Counter Reading only export (Tariff 2) | [optional] 
**counter_reading_t1** | **float** | The Meter Counter Reading Tariff 1 in kWh or m3. | [optional] 
**counter_reading_t2** | **float** | The Meter Counter Reading Tariff 2 in kWh or m3. | [optional] 
**current** | **float** | The Current (in A) | [optional] 
**current_l1** | **float** | The Current Phase L1 (in A) | [optional] 
**current_l2** | **float** | The Current Phase L2 (in A) | [optional] 
**current_l3** | **float** | The Current Phase L3 (in A) | [optional] 
**device_energy_type** | **str** | The Energy Type of this device | [optional] 
**digital_input1** | **bool** | The digital input number 1 | [optional] 
**id** | **str** | The ID of the device | [optional] 
**meter_sub_type** | **str** | The Sub Type of this Meter. | [optional] 
**name** | **str** | The Name of the Device | [optional] 
**power_factor** | **float** | The Power Factor (cos phi). Range: 0 - 1 | [optional] 
**power_factor_l1** | **float** | The Power Factor (cos phi) Phase L1. Range: 0 - 1 | [optional] 
**power_factor_l2** | **float** | The Power Factor (cos phi) Phase L2. Range: 0 - 1 | [optional] 
**power_factor_l3** | **float** | The Power Factor (cos phi) Phase L3. Range: 0 - 1 | [optional] 
**serial** | **int** | The Serial number | [optional] 
**temperature** | **float** | The Temperature (in degree celsius) | [optional] 
**value_date** | **datetime** | The Date of the Value (in UTC). If this is null the Server Time is used. | [optional] 
**voltage** | **float** | The Voltage (in V) | [optional] 
**voltage_l1** | **float** | The Voltage Phase L1 (in V) | [optional] 
**voltage_l2** | **float** | The Voltage Phase L2 (in V) | [optional] 
**voltage_l3** | **float** | The Voltage Phase L3 (in V) | [optional] 

## Example

```python
from openapi_client.models.device_to_post import DeviceToPost

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceToPost from a JSON string
device_to_post_instance = DeviceToPost.from_json(json)
# print the JSON string representation of the object
print(DeviceToPost.to_json())

# convert the object into a dict
device_to_post_dict = device_to_post_instance.to_dict()
# create an instance of DeviceToPost from a dict
device_to_post_from_dict = DeviceToPost.from_dict(device_to_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DeviceInPast

Container Class for the Web API. Conatinas the MeterValues in the Past

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counter_reading** | **float** | The Meter Counter Reading (Total Energy used) | [optional] 
**counter_reading_export** | **float** | The Meter Counter Reading Export | [optional] 
**counter_reading_export_t1** | **float** | The Meter Counter Reading Export Tariff 1 | [optional] 
**counter_reading_export_t2** | **float** | The Meter Counter Reading Export Tariff 2 | [optional] 
**counter_reading_export_t3** | **float** | The Meter Counter Reading Export Tariff 3 | [optional] 
**counter_reading_export_t4** | **float** | The Meter Counter Reading Export Tariff 4 | [optional] 
**counter_reading_import** | **float** | The Meter Counter Reading Import | [optional] 
**counter_reading_import_t1** | **float** | The Meter Counter Reading Import Tariff 1 | [optional] 
**counter_reading_import_t2** | **float** | The Meter Counter Reading Import Tariff 2 | [optional] 
**counter_reading_import_t3** | **float** | The Meter Counter Reading Import Tariff 3 | [optional] 
**counter_reading_import_t4** | **float** | The Meter Counter Reading Import Tariff 4 | [optional] 
**counter_reading_t1** | **float** | The Meter Counter Reading Tariff 1 | [optional] 
**counter_reading_t2** | **float** | The Meter Counter Reading Tariff 2 | [optional] 
**counter_reading_t3** | **float** | The Meter Counter Reading Tariff 3 | [optional] 
**counter_reading_t4** | **float** | The Meter Counter Reading Tariff 4 | [optional] 
**counter_reading_unit** | **str** | The Unit of the Counter Reading | [optional] 
**var_date** | **datetime** | The Date of the Values | [optional] 
**id** | **str** | The ID of the device | [optional] 
**serial** | **int** | The Serial number | [optional] 

## Example

```python
from openapi_client.models.device_in_past import DeviceInPast

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceInPast from a JSON string
device_in_past_instance = DeviceInPast.from_json(json)
# print the JSON string representation of the object
print(DeviceInPast.to_json())

# convert the object into a dict
device_in_past_dict = device_in_past_instance.to_dict()
# create an instance of DeviceInPast from a dict
device_in_past_from_dict = DeviceInPast.from_dict(device_in_past_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



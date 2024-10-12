# FolderData

Container class for the folder API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**electricity_counter_value** | **float** | The Counter values for electricity (kWh) | [optional] 
**electricity_power** | **float** | The Power for electricity (kW) | [optional] 
**gas_counter_value** | **float** | The Counter values for Gas (m3) | [optional] 
**gas_flow_rate** | **float** | The Flow Rate for Gas (m3/h) | [optional] 
**heat_counter_value** | **float** | The Counter values for Heat (kWh) | [optional] 
**heat_power** | **float** | The Power for Heat (kW) | [optional] 
**water_counter_value** | **float** | The Counter values for Water (m3) | [optional] 
**water_flow_rate** | **float** | The Flow Rate for Water (m3/h) | [optional] 

## Example

```python
from openapi_client.models.folder_data import FolderData

# TODO update the JSON string below
json = "{}"
# create an instance of FolderData from a JSON string
folder_data_instance = FolderData.from_json(json)
# print the JSON string representation of the object
print(FolderData.to_json())

# convert the object into a dict
folder_data_dict = folder_data_instance.to_dict()
# create an instance of FolderData from a dict
folder_data_from_dict = FolderData.from_dict(folder_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# VirtualTariffConsumptionData

Container class for the virtual tariff consumption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumption** | **float** | The consumption (e.g. kWh) of this tariff | [optional] 
**currency** | **str** | The currency of the price | [optional] 
**name** | **str** | The Name of this virtual tariff | [optional] 
**price** | **float** | The price of the energy in this timerange | [optional] 
**tariff_type** | **str** | The type of the virtual tariff (e.g. solar) | [optional] 

## Example

```python
from openapi_client.models.virtual_tariff_consumption_data import VirtualTariffConsumptionData

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTariffConsumptionData from a JSON string
virtual_tariff_consumption_data_instance = VirtualTariffConsumptionData.from_json(json)
# print the JSON string representation of the object
print(VirtualTariffConsumptionData.to_json())

# convert the object into a dict
virtual_tariff_consumption_data_dict = virtual_tariff_consumption_data_instance.to_dict()
# create an instance of VirtualTariffConsumptionData from a dict
virtual_tariff_consumption_data_from_dict = VirtualTariffConsumptionData.from_dict(virtual_tariff_consumption_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



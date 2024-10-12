# FuelEfficiency


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annual_miles** | **float** | Annual Miles of Car | [optional] 
**city_mileage** | **str** | City Mileage in MPG | [optional] 
**combined_mileage** | **str** | Combined Mileage | [optional] 
**highway_mileage** | **str** | Highway Mileage in MPG | [optional] 
**monthly_fuel_expense** | **float** | Monthly fuel expense | [optional] 

## Example

```python
from openapi_client.models.fuel_efficiency import FuelEfficiency

# TODO update the JSON string below
json = "{}"
# create an instance of FuelEfficiency from a JSON string
fuel_efficiency_instance = FuelEfficiency.from_json(json)
# print the JSON string representation of the object
print(FuelEfficiency.to_json())

# convert the object into a dict
fuel_efficiency_dict = fuel_efficiency_instance.to_dict()
# create an instance of FuelEfficiency from a dict
fuel_efficiency_from_dict = FuelEfficiency.from_dict(fuel_efficiency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



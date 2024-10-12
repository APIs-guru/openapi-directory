# HeavyEquipmentsBuild

Describes the Heavy Equipments specification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body_type** | **str** | Body type of the heavy equipment | [optional] 
**category** | **str** | Heavy equipment category | [optional] 
**condition** | **str** | Heavy equipment condition | [optional] 
**drivetrain** | **str** | Drivetrain of the heavy equipment | [optional] 
**engine** | **str** | Engine of the heavy equipment | [optional] 
**fuel_type** | **str** | Fuel type of the heavy equipment | [optional] 
**make** | **str** | Heavy equipment Make | [optional] 
**model** | **str** | Heavy equipment model | [optional] 
**sub_category** | **str** | Heavy equipment sub_category | [optional] 
**transmission** | **str** | Transmission of the heavy equipment | [optional] 
**trim** | **str** | Trim of the heavy equipment | [optional] 
**year** | **int** | Year of the heavy equipment | [optional] 

## Example

```python
from openapi_client.models.heavy_equipments_build import HeavyEquipmentsBuild

# TODO update the JSON string below
json = "{}"
# create an instance of HeavyEquipmentsBuild from a JSON string
heavy_equipments_build_instance = HeavyEquipmentsBuild.from_json(json)
# print the JSON string representation of the object
print(HeavyEquipmentsBuild.to_json())

# convert the object into a dict
heavy_equipments_build_dict = heavy_equipments_build_instance.to_dict()
# create an instance of HeavyEquipmentsBuild from a dict
heavy_equipments_build_from_dict = HeavyEquipmentsBuild.from_dict(heavy_equipments_build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



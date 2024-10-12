# MotorcycleBuild

Describes the Motorcycle specification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body_type** | **str** | Body type of the motorcycle | [optional] 
**cylinders** | **int** | No of cylinders of the motorcycle | [optional] 
**drivetrain** | **str** | Drivetrain of the motorcycle | [optional] 
**dry_weight** | **str** | Dry weight of motorcycle | [optional] 
**engine** | **str** | Engine of the motorcycle | [optional] 
**fuel_type** | **str** | Fuel type of the motorcycle | [optional] 
**made_in** | **str** | Made in of the motorcycle | [optional] 
**make** | **str** | Motorcycle Make | [optional] 
**model** | **str** | Motorcycle model | [optional] 
**transmission** | **str** | Transmission of the motorcycle | [optional] 
**trim** | **str** | Trim of the motorcycle | [optional] 
**vehicle_type** | **str** | Vehicle type of the motorcycle | [optional] 
**year** | **int** | Year of the motorcycle | [optional] 

## Example

```python
from openapi_client.models.motorcycle_build import MotorcycleBuild

# TODO update the JSON string below
json = "{}"
# create an instance of MotorcycleBuild from a JSON string
motorcycle_build_instance = MotorcycleBuild.from_json(json)
# print the JSON string representation of the object
print(MotorcycleBuild.to_json())

# convert the object into a dict
motorcycle_build_dict = motorcycle_build_instance.to_dict()
# create an instance of MotorcycleBuild from a dict
motorcycle_build_from_dict = MotorcycleBuild.from_dict(motorcycle_build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


